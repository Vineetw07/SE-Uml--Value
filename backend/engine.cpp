#include <string>
#include <vector>
#include <nlohmann/json.hpp>
#include <iostream>
#include <algorithm>
#include <cctype>
#include <map>
#include <cmath>
#include <functional>
#include <tinyxml2.h>

using namespace std;
using namespace tinyxml2;
using json = nlohmann::json;

const vector<double> TCF_WEIGHTS = {2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0};
const vector<double> ECF_WEIGHTS = {1.5, 0.5, 1.0, 0.5, 1.0, 2.0, -1.0, -1.0};

string toLower(string s) {
    transform(s.begin(), s.end(), s.begin(), [](unsigned char c){ return tolower(c); });
    return s;
}

int classify_actor(string name) {
    string n = toLower(name);
    if (n.find("api") != string::npos) return 1;
    if (n.find("system") != string::npos || n.find("server") != string::npos || n.find("database") != string::npos) return 2;
    return 3;
}

int classify_use_case(int transactions) {
    if (transactions <= 3) return 5;
    if (transactions <= 7) return 10;
    return 15;
}

string get_element_name_json(const json& obj) {
    if (obj.contains("name") && obj["name"].is_string()) return obj["name"].get<string>();
    if (obj.contains("value") && obj["value"].is_string()) return obj["value"].get<string>();
    return "Unnamed Element";
}

void findItems(const json& obj, map<string, json>& nodes_by_id, map<string, vector<json>>& edges_by_source, map<string, vector<json>>& edges_by_target) {
    if (obj.is_object()) {
        if (obj.contains("type") || obj.contains("id")) {
            string node_id = "";
            if (obj.contains("id") && (obj["id"].is_string() || obj["id"].is_number())) {
                node_id = obj["id"].is_string() ? obj["id"].get<string>() : to_string(obj["id"].get<int>());
            }
            if (!node_id.empty()) {
                nodes_by_id[node_id] = obj;
            }
            string source = "", target = "";
            if (obj.contains("source") && obj["source"].is_string()) source = obj["source"].get<string>();
            if (obj.contains("target") && obj["target"].is_string()) target = obj["target"].get<string>();
            
            if (!source.empty() && !target.empty()) {
                edges_by_source[source].push_back(obj);
                edges_by_target[target].push_back(obj);
            }
        }
        for (auto& el : obj.items()) {
            findItems(el.value(), nodes_by_id, edges_by_source, edges_by_target);
        }
    } else if (obj.is_array()) {
        for (auto& el : obj) {
            findItems(el, nodes_by_id, edges_by_source, edges_by_target);
        }
    }
}

void xmlIterate(XMLElement* elem, map<string, vector<XMLElement*>>& edges_by_source, map<string, vector<XMLElement*>>& edges_by_target, vector<XMLElement*>& all_elements) {
    if (!elem) return;
    
    all_elements.push_back(elem);
    
    const char* source = elem->Attribute("source");
    const char* target = elem->Attribute("target");
    if (source && target) {
        edges_by_source[source].push_back(elem);
        edges_by_target[target].push_back(elem);
    }
    
    for (XMLElement* child = elem->FirstChildElement(); child != NULL; child = child->NextSiblingElement()) {
        xmlIterate(child, edges_by_source, edges_by_target, all_elements);
    }
}

json parse_use_case_diagram(const string& content, const string& filename) {
    bool is_json = (filename.length() >= 5 && toLower(filename.substr(filename.length() - 5)) == ".json");
    
    json class_names = {
        {"simple_actors_names", json::array()},
        {"average_actors_names", json::array()},
        {"complex_actors_names", json::array()},
        {"simple_use_cases_names", json::array()},
        {"average_use_cases_names", json::array()},
        {"complex_use_cases_names", json::array()}
    };

    if (is_json) {
        try {
            json data = json::parse(content);
            json system_data = data.contains("system") ? data["system"] : json::object();
            
            if (system_data.contains("actors") || system_data.contains("useCases")) {
                if (system_data.contains("actors") && system_data["actors"].is_array()) {
                    for (auto& actor : system_data["actors"]) {
                        string name = actor.contains("name") ? actor["name"].get<string>() : "Unnamed Actor";
                        int weight = classify_actor(name);
                        if (weight == 1) class_names["simple_actors_names"].push_back(name);
                        else if (weight == 2) class_names["average_actors_names"].push_back(name);
                        else class_names["complex_actors_names"].push_back(name);
                    }
                }
                
                map<string, int> actor_uc_links;
                if (system_data.contains("relationships") && system_data["relationships"].is_array()) {
                    for (auto& rel : system_data["relationships"]) {
                        if (rel.contains("connections") && rel["connections"].is_array()) {
                            for (auto& conn : rel["connections"]) {
                                vector<string> keys = {"actor", "useCase", "base", "included", "extending"};
                                for (auto& k : keys) {
                                    if (conn.contains(k) && conn[k].is_string()) {
                                        actor_uc_links[conn[k].get<string>()]++;
                                    }
                                }
                            }
                        }
                    }
                }
                
                if (system_data.contains("useCases") && system_data["useCases"].is_array()) {
                    for (auto& uc : system_data["useCases"]) {
                        string uc_id = uc.contains("id") ? uc["id"].get<string>() : "";
                        string name = uc.contains("name") ? uc["name"].get<string>() : "Unnamed Use Case";
                        int transactions = actor_uc_links[uc_id];
                        transactions = max(2, transactions);
                        int weight = classify_use_case(transactions);
                        
                        if (weight == 5) class_names["simple_use_cases_names"].push_back(name);
                        else if (weight == 10) class_names["average_use_cases_names"].push_back(name);
                        else class_names["complex_use_cases_names"].push_back(name);
                    }
                }
            } else {
                map<string, json> nodes_by_id;
                map<string, vector<json>> edges_by_source;
                map<string, vector<json>> edges_by_target;
                
                findItems(data, nodes_by_id, edges_by_source, edges_by_target);
                
                for (auto& pair : nodes_by_id) {
                    string node_id = pair.first;
                    json node = pair.second;
                    string obj_type = node.contains("type") && node["type"].is_string() ? toLower(node["type"].get<string>()) : "";
                    string name = get_element_name_json(node);
                    string style = node.contains("style") && node["style"].is_string() ? toLower(node["style"].get<string>()) : "";
                    
                    bool is_actor = obj_type.find("actor") != string::npos || style.find("actor") != string::npos;
                    bool is_uc = obj_type.find("usecase") != string::npos || style.find("ellipse") != string::npos || toLower(name).find("usecase") != string::npos;
                    
                    if (is_actor) {
                        int weight = classify_actor(name);
                        if (weight == 1) class_names["simple_actors_names"].push_back(name);
                        else if (weight == 2) class_names["average_actors_names"].push_back(name);
                        else class_names["complex_actors_names"].push_back(name);
                    } else if (is_uc) {
                        int out_edges = edges_by_source[node_id].size();
                        int in_edges = edges_by_target[node_id].size();
                        int transactions = max(2, out_edges + in_edges);
                        int weight = classify_use_case(transactions);
                        if (weight == 5) class_names["simple_use_cases_names"].push_back(name);
                        else if (weight == 10) class_names["average_use_cases_names"].push_back(name);
                        else class_names["complex_use_cases_names"].push_back(name);
                    }
                }
            }
        } catch (...) {
        }
    } else {
        XMLDocument doc;
        if (doc.Parse(content.c_str()) == XML_SUCCESS) {
            map<string, vector<XMLElement*>> edges_by_source;
            map<string, vector<XMLElement*>> edges_by_target;
            vector<XMLElement*> all_elements;
            
            xmlIterate(doc.RootElement(), edges_by_source, edges_by_target, all_elements);
            
            for (XMLElement* elem : all_elements) {
                string tag_name = toLower(elem->Name());
                string element_type = "";
                
                string name = "Unnamed Element";
                if (elem->Attribute("name")) name = elem->Attribute("name");
                else if (elem->Attribute("value")) name = elem->Attribute("value");
                
                for (const XMLAttribute* a = elem->FirstAttribute(); a != nullptr; a = a->Next()) {
                    string attr_key = toLower(a->Name());
                    if (attr_key.find("type") != string::npos || attr_key.find("style") != string::npos) {
                        element_type += toLower(a->Value());
                    }
                }
                
                string node_id = elem->Attribute("id") ? elem->Attribute("id") : "";
                
                bool is_actor = tag_name.find("actor") != string::npos || element_type.find("actor") != string::npos;
                bool is_uc = tag_name.find("usecase") != string::npos || element_type.find("usecase") != string::npos || element_type.find("ellipse") != string::npos;
                
                if (is_actor) {
                    int weight = classify_actor(name);
                    if (weight == 1) class_names["simple_actors_names"].push_back(name);
                    else if (weight == 2) class_names["average_actors_names"].push_back(name);
                    else class_names["complex_actors_names"].push_back(name);
                } else if (is_uc) {
                    int out_edges = edges_by_source[node_id].size();
                    int in_edges = edges_by_target[node_id].size();
                    int transactions = max(2, out_edges + in_edges);
                    
                    int weight = classify_use_case(transactions);
                    if (weight == 5) class_names["simple_use_cases_names"].push_back(name);
                    else if (weight == 10) class_names["average_use_cases_names"].push_back(name);
                    else class_names["complex_use_cases_names"].push_back(name);
                }
            }
        }
    }

    int total = class_names["simple_actors_names"].size() + class_names["average_actors_names"].size() +
                class_names["complex_actors_names"].size() + class_names["simple_use_cases_names"].size() +
                class_names["average_use_cases_names"].size() + class_names["complex_use_cases_names"].size();
                
    if (total == 0) {
        class_names["complex_actors_names"].push_back("System Fallback Actor");
        class_names["average_use_cases_names"].push_back("System Fallback Use Case");
    }

    json result = class_names;
    result["simple_actors"] = class_names["simple_actors_names"].size();
    result["average_actors"] = class_names["average_actors_names"].size();
    result["complex_actors"] = class_names["complex_actors_names"].size();
    result["simple_use_cases"] = class_names["simple_use_cases_names"].size();
    result["average_use_cases"] = class_names["average_use_cases_names"].size();
    result["complex_use_cases"] = class_names["complex_use_cases_names"].size();
    
    return result;
}

json calculate_ucp(const json& classification, const vector<double>& tcf_factors, const vector<double>& ecf_factors, double hourly_rate) {
    double uaw = classification["simple_actors"].get<int>() * 1 +
                 classification["average_actors"].get<int>() * 2 +
                 classification["complex_actors"].get<int>() * 3;
                 
    double uucw = classification["simple_use_cases"].get<int>() * 5 +
                  classification["average_use_cases"].get<int>() * 10 +
                  classification["complex_use_cases"].get<int>() * 15;
                  
    double uucp = uaw + uucw;
    
    double t_factor_sum = 0;
    for (size_t i = 0; i < min(tcf_factors.size(), TCF_WEIGHTS.size()); i++) {
        t_factor_sum += tcf_factors[i] * TCF_WEIGHTS[i];
    }
    double tcf = 0.6 + (0.01 * t_factor_sum);
    
    double e_factor_sum = 0;
    for (size_t i = 0; i < min(ecf_factors.size(), ECF_WEIGHTS.size()); i++) {
        e_factor_sum += ecf_factors[i] * ECF_WEIGHTS[i];
    }
    double ecf = 1.4 + (-0.03 * e_factor_sum);
    
    double ucp = uucp * tcf * ecf;
    double estimated_hours = ucp * 20.0;
    double total_cost = estimated_hours * hourly_rate;
    
    json result;
    result["uaw"] = uaw;
    result["uucw"] = uucw;
    result["tcf"] = round(tcf * 1000.0) / 1000.0;
    result["ecf"] = round(ecf * 1000.0) / 1000.0;
    result["uucp"] = uucp;
    result["ucp"] = round(ucp * 100.0) / 100.0;
    result["estimated_hours"] = round(estimated_hours * 100.0) / 100.0;
    result["total_cost"] = round(total_cost * 100.0) / 100.0;
    
    json breakdown = classification;
    breakdown["type"] = "use_case_diagram";
    result["element_breakdown"] = breakdown;
    
    return result;
}

/**
 * Detects whether the uploaded file is a Use Case diagram or Class diagram.
 * Returns "use_case" or "class_diagram".
 */
string detect_diagram_type(const string& content, const string& filename) {
    string lower_content = toLower(content);

    // Check for class diagram indicators first (more specific)
    bool has_class_tag = lower_content.find("<class") != string::npos
                      || lower_content.find("\"class\"") != string::npos
                      || lower_content.find("classdiagram") != string::npos;

    bool has_uc_tag = lower_content.find("<usecase") != string::npos
                   || lower_content.find("<actor") != string::npos
                   || lower_content.find("\"usecase\"") != string::npos
                   || lower_content.find("\"actors\"") != string::npos
                   || lower_content.find("usecasediagram") != string::npos;

    if (has_class_tag && !has_uc_tag) return "class_diagram";
    if (has_uc_tag) return "use_case";

    // Fallback: if JSON has "classes" key
    if (lower_content.find("\"classes\"") != string::npos) return "class_diagram";

    return "use_case";
}

/**
 * Parses a Class Diagram from XML or JSON, extracting classes, attributes,
 * methods, and relationship counts.
 */
json parse_class_diagram(const string& content, const string& filename) {
    bool is_json = (filename.length() >= 5 && toLower(filename.substr(filename.length() - 5)) == ".json");

    json result;
    result["classes"] = json::array();
    int total_classes = 0;
    int total_attributes = 0;
    int total_methods = 0;
    int total_relationships = 0;

    if (is_json) {
        try {
            json data = json::parse(content);

            // Look for a "classes" array at root or under "system"
            json classes_arr = json::array();
            if (data.contains("classes") && data["classes"].is_array()) {
                classes_arr = data["classes"];
            } else if (data.contains("system") && data["system"].contains("classes") && data["system"]["classes"].is_array()) {
                classes_arr = data["system"]["classes"];
            }

            for (auto& cls : classes_arr) {
                json class_obj;
                class_obj["name"] = cls.contains("name") ? cls["name"].get<string>() : "Unnamed Class";

                int attr_count = 0;
                int method_count = 0;
                json attr_names = json::array();
                json method_names = json::array();

                if (cls.contains("attributes") && cls["attributes"].is_array()) {
                    attr_count = cls["attributes"].size();
                    for (auto& a : cls["attributes"]) {
                        if (a.is_string()) attr_names.push_back(a.get<string>());
                        else if (a.is_object() && a.contains("name")) attr_names.push_back(a["name"].get<string>());
                    }
                }
                if (cls.contains("methods") && cls["methods"].is_array()) {
                    method_count = cls["methods"].size();
                    for (auto& m : cls["methods"]) {
                        if (m.is_string()) method_names.push_back(m.get<string>());
                        else if (m.is_object() && m.contains("name")) method_names.push_back(m["name"].get<string>());
                    }
                }

                class_obj["attribute_count"] = attr_count;
                class_obj["method_count"] = method_count;
                class_obj["attribute_names"] = attr_names;
                class_obj["method_names"] = method_names;

                result["classes"].push_back(class_obj);
                total_classes++;
                total_attributes += attr_count;
                total_methods += method_count;
            }

            // Parse relationships
            json rels_arr = json::array();
            if (data.contains("relationships") && data["relationships"].is_array()) {
                rels_arr = data["relationships"];
            } else if (data.contains("system") && data["system"].contains("relationships") && data["system"]["relationships"].is_array()) {
                rels_arr = data["system"]["relationships"];
            }
            for (auto& rel : rels_arr) {
                total_relationships++;
            }

        } catch (...) {}
    } else {
        // XML parsing
        XMLDocument doc;
        if (doc.Parse(content.c_str()) == XML_SUCCESS) {
            // Recursively find all Class elements
            function<void(XMLElement*)> findClasses = [&](XMLElement* elem) {
                if (!elem) return;

                string tag = toLower(elem->Name());
                // Check for class elements
                if (tag == "class") {
                    json class_obj;
                    class_obj["name"] = elem->Attribute("name") ? elem->Attribute("name") : "Unnamed Class";

                    int attr_count = 0;
                    int method_count = 0;
                    json attr_names = json::array();
                    json method_names = json::array();

                    for (XMLElement* child = elem->FirstChildElement(); child != NULL; child = child->NextSiblingElement()) {
                        string child_tag = toLower(child->Name());
                        if (child_tag == "attribute") {
                            attr_count++;
                            if (child->Attribute("name")) attr_names.push_back(child->Attribute("name"));
                            else if (child->GetText()) attr_names.push_back(child->GetText());
                        } else if (child_tag == "method" || child_tag == "operation") {
                            method_count++;
                            if (child->Attribute("name")) method_names.push_back(child->Attribute("name"));
                            else if (child->GetText()) method_names.push_back(child->GetText());
                        }
                    }

                    class_obj["attribute_count"] = attr_count;
                    class_obj["method_count"] = method_count;
                    class_obj["attribute_names"] = attr_names;
                    class_obj["method_names"] = method_names;

                    result["classes"].push_back(class_obj);
                    total_classes++;
                    total_attributes += attr_count;
                    total_methods += method_count;
                }

                // Check for relationship elements
                if (tag == "association" || tag == "dependency" || tag == "generalization"
                    || tag == "realization" || tag == "aggregation" || tag == "composition"
                    || tag == "relationship") {
                    total_relationships++;
                }

                for (XMLElement* child = elem->FirstChildElement(); child != NULL; child = child->NextSiblingElement()) {
                    findClasses(child);
                }
            };

            findClasses(doc.RootElement());
        }
    }

    // Fallback if nothing was found
    if (total_classes == 0) {
        json fallback;
        fallback["name"] = "Fallback Class";
        fallback["attribute_count"] = 1;
        fallback["method_count"] = 1;
        fallback["attribute_names"] = json::array({"fallback_attr"});
        fallback["method_names"] = json::array({"fallback_method"});
        result["classes"].push_back(fallback);
        total_classes = 1;
        total_attributes = 1;
        total_methods = 1;
    }

    result["total_classes"] = total_classes;
    result["total_attributes"] = total_attributes;
    result["total_methods"] = total_methods;
    result["total_relationships"] = total_relationships;

    return result;
}

/**
 * Applies the Graph Weight estimation model to a parsed class diagram.
 *
 * Hour factors per element:
 *   - Class (node):      10 hours
 *   - Attribute:          2 hours
 *   - Method:             4 hours
 *   - Relationship (edge): 3 hours
 */
json calculate_graph_weight(const json& parsed, const vector<double>& tcf_factors, const vector<double>& ecf_factors, double hourly_rate) {
    const double HOURS_PER_CLASS        = 10.0;
    const double HOURS_PER_ATTRIBUTE    =  2.0;
    const double HOURS_PER_METHOD       =  4.0;
    const double HOURS_PER_RELATIONSHIP =  3.0;

    int total_classes       = parsed["total_classes"].get<int>();
    int total_attributes    = parsed["total_attributes"].get<int>();
    int total_methods       = parsed["total_methods"].get<int>();
    int total_relationships = parsed["total_relationships"].get<int>();

    double class_hours = total_classes * HOURS_PER_CLASS;
    double attr_hours  = total_attributes * HOURS_PER_ATTRIBUTE;
    double method_hours = total_methods * HOURS_PER_METHOD;
    double rel_hours   = total_relationships * HOURS_PER_RELATIONSHIP;

    double base_estimated_hours = class_hours + attr_hours + method_hours + rel_hours;

    double t_factor_sum = 0;
    for (size_t i = 0; i < min(tcf_factors.size(), TCF_WEIGHTS.size()); i++) {
        t_factor_sum += tcf_factors[i] * TCF_WEIGHTS[i];
    }
    double tcf = 0.6 + (0.01 * t_factor_sum);
    
    double e_factor_sum = 0;
    for (size_t i = 0; i < min(ecf_factors.size(), ECF_WEIGHTS.size()); i++) {
        e_factor_sum += ecf_factors[i] * ECF_WEIGHTS[i];
    }
    double ecf = 1.4 + (-0.03 * e_factor_sum);

    double estimated_hours = base_estimated_hours * tcf * ecf;
    double total_cost = estimated_hours * hourly_rate;

    json result;
    result["tcf"]             = round(tcf * 1000.0) / 1000.0;
    result["ecf"]             = round(ecf * 1000.0) / 1000.0;
    result["estimated_hours"] = round(estimated_hours * 100.0) / 100.0;
    result["total_cost"]      = round(total_cost * 100.0) / 100.0;

    // Detailed breakdown
    result["class_hours"]        = class_hours;
    result["attribute_hours"]    = attr_hours;
    result["method_hours"]       = method_hours;
    result["relationship_hours"] = rel_hours;

    json breakdown = parsed;
    breakdown["type"] = "class_diagram";
    result["element_breakdown"] = breakdown;

    return result;
}
