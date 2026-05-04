cmake_minimum_required(VERSION 3.14)
project(UmlEstimatorBackend)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include(FetchContent)

# cpp-httplib for API
FetchContent_Declare(
  httplib
  GIT_REPOSITORY https://github.com/yhirose/cpp-httplib.git
  GIT_TAG v0.14.3
)
FetchContent_MakeAvailable(httplib)

# JSON for modern C++
FetchContent_Declare(
  json
  GIT_REPOSITORY https://github.com/nlohmann/json.git
  GIT_TAG v3.11.3
)
FetchContent_MakeAvailable(json)

# TinyXML2 for parsing XML
FetchContent_Declare(
  tinyxml2
  GIT_REPOSITORY https://github.com/leethomason/tinyxml2.git
  GIT_TAG 9.0.0
)
set(tinyxml2_BUILD_TESTING OFF CACHE BOOL "Build tests for tinyxml2" FORCE)
FetchContent_MakeAvailable(tinyxml2)

# SQLite3 Amalgamation
FetchContent_Declare(
  sqlite3
  GIT_REPOSITORY https://github.com/azadkuh/sqlite-amalgamation.git
  GIT_TAG master
)
FetchContent_MakeAvailable(sqlite3)

add_executable(test_cli test_cli.cpp)
target_link_libraries(test_cli PUBLIC nlohmann_json::nlohmann_json tinyxml2)

add_executable(backend_server main.cpp ${sqlite3_SOURCE_DIR}/sqlite3.c)
target_include_directories(backend_server PRIVATE ${sqlite3_SOURCE_DIR})
target_link_libraries(backend_server PUBLIC nlohmann_json::nlohmann_json tinyxml2)

if(WIN32)
    target_link_libraries(backend_server PUBLIC ws2_32)
endif()
