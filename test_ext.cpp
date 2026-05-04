#include <iostream>
#include <string>
using namespace std;

string extract_boundary_part(const string& request, const string& boundary, const string& name) {
    string search = "name=\"" + name + "\"";
    size_t pos = request.find(search);
    if (pos == string::npos) return "NOT_FOUND_" + name;

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

int main() {
    string req = "--B\r\nContent-Disposition: form-data; name=\"tcf\"\r\n\r\n[1,2,3]\r\n--B\r\nContent-Disposition: form-data; name=\"ecf\"\r\n\r\n[4,5,6]\r\n--B--\r\n";
    cout << "tcf: [" << extract_boundary_part(req, "--B", "tcf") << "]\n";
    cout << "ecf: [" << extract_boundary_part(req, "--B", "ecf") << "]\n";
}
