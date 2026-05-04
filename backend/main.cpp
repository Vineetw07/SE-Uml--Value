#include <iostream>
#include <string>
#include <vector>
#include <ctime>
#include <nlohmann/json.hpp>
#include <winsock2.h>
#include <ws2tcpip.h>
#include "engine.cpp"
#include "database.cpp"

#pragma comment(lib, "ws2_32.lib")

using namespace std;
using json = nlohmann::json;

string json_error(const string& message) {
    json body;
    body["error"] = message;
    return body.dump();
}

vector<double> parse_double_array(const string& str) {
    vector<double> result;
    try {
        json j = json::parse(str, nullptr, false);
        if (j.is_array()) {
            for (auto& item : j) {
                if (item.is_number()) result.push_back(item.get<double>());
                else if (item.is_string()) result.push_back(stod(item.get<string>()));
            }
        }
    } catch (...) {}
    return result;
}

string extract_boundary_part(const string& request, const string& boundary, const string& name) {
    string search = "name=\"" + name + "\"";
    size_t pos = request.find(search);
    if (pos == string::npos) return "";

    size_t header_end = request.find("\r\n\r\n", pos);
    if (header_end == string::npos) return "";
    header_end += 4;

    size_t content_end = request.find(boundary, header_end);
    if (content_end == string::npos) return "";

    if (content_end > 2 && request[content_end - 2] == '\r' && request[content_end - 1] == '\n') {
        content_end -= 2;
    }

    return request.substr(header_end, content_end - header_end);
}

string extract_filename(const string& request, const string& name) {
    string search = "name=\"" + name + "\"";
    size_t pos = request.find(search);
    if (pos == string::npos) return "";

    size_t fn_start = request.find("filename=\"", pos);
    size_t header_end = request.find("\r\n\r\n", pos);
    if (fn_start == string::npos || fn_start > header_end) return "upload.json";
    
    fn_start += 10;
    return request.substr(fn_start, request.find("\"", fn_start) - fn_start);
}

void handle_client(SOCKET client_socket, Database& db) {
    char buffer[4096];
    string request;
    int bytesReceived;
    
    // Read headers
    while ((bytesReceived = recv(client_socket, buffer, sizeof(buffer), 0)) > 0) {
        request.append(buffer, bytesReceived);
        if (request.find("\r\n\r\n") != string::npos) {
            break;
        }
    }
    
    // Parse content length
    size_t cl_pos = request.find("Content-Length: ");
    if (cl_pos == string::npos) cl_pos = request.find("content-length: ");
    int content_length = 0;
    if (cl_pos != string::npos) {
        content_length = stoi(request.substr(cl_pos + 16, request.find("\r\n", cl_pos) - cl_pos - 16));
    }
    
    // Get headers length
    size_t header_end = request.find("\r\n\r\n");
    if (header_end != string::npos) header_end += 4;
    else header_end = request.length();

    int body_received = request.length() - header_end;
    
    // Read rest of body
    while (body_received < content_length) {
        bytesReceived = recv(client_socket, buffer, sizeof(buffer), 0);
        if (bytesReceived > 0) {
            request.append(buffer, bytesReceived);
            body_received += bytesReceived;
        } else {
            break;
        }
    }

    int status_code = 200;
    string status_text = "OK";
    string response_body;
    string headers = "Access-Control-Allow-Origin: *\r\n"
                     "Access-Control-Allow-Methods: POST, GET, OPTIONS\r\n"
                     "Access-Control-Allow-Headers: Content-Type\r\n"
                     "Content-Type: application/json\r\n";

    if (request.find("OPTIONS") == 0) {
        string preflight = "HTTP/1.1 204 No Content\r\n" + headers + "Content-Length: 0\r\n\r\n";
        send(client_socket, preflight.c_str(), preflight.length(), 0);
        closesocket(client_socket);
        return;
    }
    
    if (request.find("POST /api/v1/estimate") == 0) {
        string tcf_str = "[]", ecf_str = "[]", hourly_rate = "50.0", file_content = "", filename = "upload.json";
        
        size_t b_start = request.find("boundary=");
        if (b_start != string::npos) {
            string boundary_val = request.substr(b_start + 9, request.find("\r\n", b_start) - b_start - 9);
            // Remove quotes if present
            if (boundary_val.length() >= 2 && boundary_val.front() == '"' && boundary_val.back() == '"') {
                boundary_val = boundary_val.substr(1, boundary_val.length() - 2);
            }
            string boundary = "--" + boundary_val;
            
            file_content = extract_boundary_part(request, boundary, "file");
            if (!file_content.empty()) {
                filename = extract_filename(request, "file");
            }
            
            string tcf_part = extract_boundary_part(request, boundary, "tcf");
            if (!tcf_part.empty()) tcf_str = tcf_part;
            
            string ecf_part = extract_boundary_part(request, boundary, "ecf");
            if (!ecf_part.empty()) ecf_str = ecf_part;

            string rate_part = extract_boundary_part(request, boundary, "hourly_rate");
            if (!rate_part.empty()) hourly_rate = rate_part;
        }
        
        try {
            // Auto-detect diagram type and route to the correct engine
            string diagram_type = detect_diagram_type(file_content, filename);

            if (diagram_type == "class_diagram") {
                json parsed = parse_class_diagram(file_content, filename);
                json result = calculate_graph_weight(parsed, parse_double_array(tcf_str), parse_double_array(ecf_str), stod(hourly_rate));
                result["estimate_id"] = "est_" + to_string(time(nullptr));
                result["filename"] = filename;
                response_body = result.dump();
                cout << "[API] Class Diagram detected -> Graph Weight engine applied for: " << filename << endl;
            } else {
                json classification = parse_use_case_diagram(file_content, filename);
                json result = calculate_ucp(classification, parse_double_array(tcf_str), parse_double_array(ecf_str), stod(hourly_rate));
                result["estimate_id"] = "est_" + to_string(time(nullptr));
                result["filename"] = filename;
                response_body = result.dump();
                cout << "[API] Use Case Diagram detected -> UCP engine applied for: " << filename << endl;
            }
        } catch (...) {
            status_code = 400;
            status_text = "Bad Request";
            response_body = json_error("C++ parse error");
        }
    }
    else if (request.find("POST /api/v1/calibrate") == 0) {
        // Parse JSON body for calibration
        try {
            size_t body_start = request.find("\r\n\r\n");
            if (body_start != string::npos) {
                string body = request.substr(body_start + 4);
                json cal_data = json::parse(body);

                CalibrationRequest cal_req;
                cal_req.estimate_id = cal_data.value("estimate_id", "unknown");
                cal_req.actual_hours_taken = cal_data.value("actual_hours_taken", 0.0);

                int row_id = db.insert_calibration_log(cal_req);
                if (row_id < 0) {
                    status_code = 500;
                    status_text = "Internal Server Error";
                    response_body = json_error("Failed to store calibration log");
                    cout << "[API] Calibration failed: estimate=" << cal_req.estimate_id << endl;
                } else {

                    json cal_response;
                    cal_response["status"] = "ok";
                    cal_response["id"] = row_id;
                    cal_response["message"] = "Calibration logged successfully.";
                    response_body = cal_response.dump();
                    cout << "[API] Calibration logged: estimate=" << cal_req.estimate_id << " actual_hours=" << cal_req.actual_hours_taken << endl;
                }
            } else {
                status_code = 400;
                status_text = "Bad Request";
                response_body = json_error("Missing request body");
            }
        } catch (...) {
            status_code = 400;
            status_text = "Bad Request";
            response_body = json_error("Failed to parse calibration request");
        }
    }
    else {
        status_code = 404;
        status_text = "Not Found";
        response_body = json_error("Endpoint not found");
    }
    
    headers = "HTTP/1.1 " + to_string(status_code) + " " + status_text + "\r\n" + headers;
    headers += "Content-Length: " + to_string(response_body.length()) + "\r\n\r\n";
    string full_response = headers + response_body;
    send(client_socket, full_response.c_str(), full_response.length(), 0);
    closesocket(client_socket);
}

int main() {
    Database db("estimations.db");
    if (!db.create_tables()) {
        cerr << "Failed to initialize SQLite database tables." << endl;
    } else {
        cout << "[DB] SQLite estimations.db loaded beautifully." << endl;
    }

    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        cerr << "WSAStartup failed.\n";
        return 1;
    }

    SOCKET server_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (server_socket == INVALID_SOCKET) {
        cerr << "Socket creation failed.\n";
        WSACleanup();
        return 1;
    }

    sockaddr_in server_addr;
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(8000);

    if (bind(server_socket, (struct sockaddr*)&server_addr, sizeof(server_addr)) == SOCKET_ERROR) {
        cerr << "Bind failed. Is port 8000 already in use?\n";
        closesocket(server_socket);
        WSACleanup();
        return 1;
    }

    if (listen(server_socket, SOMAXCONN) == SOCKET_ERROR) {
        cerr << "Listen failed.\n";
        closesocket(server_socket);
        WSACleanup();
        return 1;
    }

    cout << "==========================================\n";
    cout << "🚀 ZERO-DEPENDENCY RAW WINSOCK C++ SERVER \n";
    cout << "==========================================\n";
    cout << "Listening for frontend REST requests natively on http://localhost:8000\n";

    while (true) {
        SOCKET client_socket = accept(server_socket, NULL, NULL);
        if (client_socket != INVALID_SOCKET) {
            handle_client(client_socket, db);
        }
    }

    closesocket(server_socket);
    WSACleanup();
    return 0;
}
