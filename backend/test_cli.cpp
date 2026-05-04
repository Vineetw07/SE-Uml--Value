#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>
#include <nlohmann/json.hpp>
#include "engine.cpp"

using namespace std;
using json = nlohmann::json;

string read_file(const string& path) {
    ifstream f(path);
    if (!f.is_open()) return "";
    stringstream buf;
    buf << f.rdbuf();
    return buf.str();
}

int main(int argc, char** argv) {
    if (argc < 2) {
        cerr << "Usage: test_cli <json_file>\n";
        return 1;
    }

    string file_path = argv[1];
    string content = read_file(file_path);

    if (content.empty()) {
        cerr << "Could not read file or file is empty: " << file_path << "\n";
        return 1;
    }

    cout << "==========================================\n";
    cout << "🚀 RUNNING C++ ENGINE TEST\n";
    cout << "==========================================\n";
    
    // Parse the diagram
    json classification = parse_use_case_diagram(content, file_path);
    
    // Empty factors to use defaults
    vector<double> tcf;
    vector<double> ecf;
    double hourly_rate = 50.0;

    // Calculate UCP
    json result = calculate_ucp(classification, tcf, ecf, hourly_rate);

    cout << "--- [ ESTIMATION RESULTS ] ---\n";
    cout << result.dump(4) << "\n";
    cout << "==========================================\n";

    return 0;
}
