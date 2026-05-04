<div align="center">

# 🧮 Software Cost Estimator

**An automated estimation tool that predicts software project hours and costs directly from system architecture diagrams.**

[![React](https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![C++](https://img.shields.io/badge/Backend-C%2B%2B%20Winsock-00599C?style=for-the-badge&logo=c%2B%2B)](https://isocpp.org/)
[![SQLite](https://img.shields.io/badge/Database-SQLite-003B57?style=for-the-badge&logo=sqlite)](https://sqlite.org/)

</div>

---

## 📖 Overview

The **Software Cost Estimator** replaces manual, tedious component counting with an automated algorithmic approach. By uploading a standard system design diagram (like a Use Case Diagram or a Class Diagram) exported from your modeling tool, the system automatically analyzes its complexity, applies industry-standard estimation formulas, and provides a concrete estimate in both hours and dollars.

### ✨ Key Features
- **Intelligent Diagram Parsing:** Automatically detects and reads Use Case Diagrams (JSON/XML) and Class Diagrams (JSON/XML).
- **Two Estimation Engines:** 
  - Uses the **Use Case Points (UCP)** model for Use Case Diagrams.
  - Uses a **Graph Weight** model for Class Diagrams.
- **Customizable Complexity:** Fine-tune your estimates by adjusting Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF).
- **Automated Pricing:** Enter your team's hourly rate to instantly convert estimated hours into a final budget.
- **Self-Calibrating Database:** Features a feedback loop to log *actual* project hours versus *estimated* hours into an SQLite database to help calibrate future estimates.

---

## 🏗️ Architecture

This project is split into a blazing-fast C++ backend and a modern React frontend.

### 🖥️ The Frontend (React + TypeScript + Vite)
The user-facing web application that handles file uploads and complexity factor inputs. 
- Parses the complex JSON responses from the backend and beautifully renders the breakdown of diagram elements (like simple/complex actors or attributes/methods counts).
- Built using functional React components and styled for a seamless user experience.

### ⚙️ The Backend (C++ Raw Winsock Server)
A zero-dependency, ultra-fast custom web server built from scratch using Windows Sockets (`winsock2.h`).
- **`main.cpp`:** The traffic cop. Listens on port `8000`, receives multipart form data, and routes it to the estimation engine.
- **`engine.cpp`:** The brains. Extracts components from XML/JSON diagrams using `tinyxml2` and `nlohmann/json`, then applies the mathematical models (UCP or Graph Weight) to calculate hours.
- **`database.cpp`:** The memory. Manages a local `estimations.db` SQLite database to store calibration logs.

---

## 🚀 Getting Started

### Prerequisites
- **Frontend:** Node.js (v16+) and npm/yarn
- **Backend:** A C++ compiler supporting C++17 (e.g., MSVC, MinGW) and CMake.

### 1. Running the Backend
1. Navigate to the `backend/` directory.
2. Build the project using CMake:
   ```bash
   mkdir build && cd build
   cmake ..
   cmake --build .
   ```
3. Run the compiled executable to start the server natively on `http://localhost:8000`.

### 2. Running the Frontend
1. Navigate to the `frontend/` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

## 💡 How to Use
1. Open the frontend in your browser.
2. Upload an exported `.xml` or `.json` diagram.
3. Use the sliders to adjust the **Technical Complexity (TCF)** and **Environmental Complexity (ECF)** based on your team and project constraints.
4. Input your team's **Hourly Rate**.
5. Click **Estimate** and instantly view the detailed breakdown and final cost!

---

<div align="center">
  <i>Built for Software Engineering & Architecture Estimations</i>
</div>