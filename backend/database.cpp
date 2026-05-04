#include <sqlite3.h>
#include <iostream>
#include <string>

using namespace std;

struct CalibrationRequest {
    std::string estimate_id;
    double actual_hours_taken;
};

class Database {
public:
    Database(const std::string& db_path);
    ~Database();

    bool create_tables();
    int insert_calibration_log(const CalibrationRequest& req);

private:
    sqlite3* db;
};

Database::Database(const string& db_path) {
    if (sqlite3_open(db_path.c_str(), &db) != SQLITE_OK) {
        cerr << "Can't open database: " << sqlite3_errmsg(db) << "\n";
        db = nullptr;
    }
}

Database::~Database() {
    if (db) {
        sqlite3_close(db);
    }
}

bool Database::create_tables() {
    if (!db) return false;

    const char* sql = "CREATE TABLE IF NOT EXISTS calibration_logs ("
                      "id INTEGER PRIMARY KEY AUTOINCREMENT, "
                      "estimate_id TEXT NOT NULL, "
                      "actual_hours_taken REAL NOT NULL);";

    char* err_msg = 0;
    int rc = sqlite3_exec(db, sql, 0, 0, &err_msg);
    
    if (rc != SQLITE_OK) {
        cerr << "SQL error: " << err_msg << "\n";
        sqlite3_free(err_msg);
        return false;
    }
    return true;
}

int Database::insert_calibration_log(const CalibrationRequest& req) {
    if (!db) return -1;

    const char* sql = "INSERT INTO calibration_logs (estimate_id, actual_hours_taken) VALUES (?, ?);";
    sqlite3_stmt* stmt;
    
    if (sqlite3_prepare_v2(db, sql, -1, &stmt, 0) != SQLITE_OK) {
        cerr << "Failed to prepare statement: " << sqlite3_errmsg(db) << "\n";
        return -1;
    }

    sqlite3_bind_text(stmt, 1, req.estimate_id.c_str(), -1, SQLITE_STATIC);
    sqlite3_bind_double(stmt, 2, req.actual_hours_taken);

    int rc = sqlite3_step(stmt);
    if (rc != SQLITE_DONE) {
        cerr << "Execution failed: " << sqlite3_errmsg(db) << "\n";
        sqlite3_finalize(stmt);
        return -1;
    }

    int id = sqlite3_last_insert_rowid(db);
    sqlite3_finalize(stmt);
    return id;
}
