# UML to Value Estimator - Implementation Plan

This document outlines the detailed plan to build the "UML to Value" application, dividing the work into actionable sub-plans for building the core full-stack infrastructure (Plan 1) and expanding to handle Class Diagrams (Plan 2).

All frontend code will strictly adhere to the global user rules (Vanilla CSS with semantic theming, encapsulated compound components, separated data/logic, accessibility, and feature-based co-location).

## User Review Required

> [!IMPORTANT]
> Please review the separation of plans below. Once this plan is approved, we can proceed to Execution mode and begin scaffold creation.

## Proposed Sub-Plans

### Plan 1: Core Full-Stack & Use Case Points (UCP) Model

**Objective:** Build the foundational React frontend and FastAPI backend capable of parsing Use Case UML diagrams (XML/JSON) to calculate estimates based on the UCP formula.

#### 1. Backend Core & API Setup (FastAPI)
- Initialize FastAPI project with Uvicorn.
- Configure CORS middleware to accept frontend requests.
- Set up SQLite connection for calibration logging.
- Define Request/Response Pydantic models for estimation and calibration.

#### 2. Backend UCP Logic
- Implement `parse_use_case_diagram` to extract counts of `<Actor>` and `<UseCase>`.
- Implement `calculate_ucp` function encompassing:
  - Unadjusted Actor Weight (UAW) & Unadjusted Use Case Weight (UUCW) calculation.
  - Application of user-provided TCF (Technical Complexity) and ECF (Environmental Complexity) factors.
  - Calculation of Estimated Hours (UCP * 20 hours).
  - Calculation of Total Cost (Estimated Hours * Hourly Rate).
- Wire logic to POST `/api/v1/estimate`.
- Create POST `/api/v1/calibrate` to save actual time logs in SQLite.

#### 3. Frontend Architecture & Theming (React + TS)
- Scaffold a React application (e.g., Vite + React-TS).
- Define `index.css` featuring Semantic Theming and Fluid Spatial Rhythm rules using standard custom properties (`var(--color-primary)`, `var(--spacing-sm)`).
- Set up application structure aligned with Feature-Based Co-location (e.g., `/features/Estimator/`).

#### 4. Frontend UI & State Management
- Develop robust, accessible, compound components (FileUploader, NumberInput, Button, SummaryCard).
- Create custom hooks (`useEstimator`) to cleanly separate fetching logic from UI representation.
- Ensure exhaustive handling of Loading, Empty, Error, and Success UI states for the API interactions.
- Build the Input State UI (Drag & Drop, Hourly Rate, TCF, ECF inputs).
- Build the Results State UI (Summary Card for total cost/time, Breakdown Table for actors/use-cases weights).

---

### Plan 2: Class Diagram (Graph Weight) Model Integration

**Objective:** Expand the backend to auto-detect Class Diagrams and apply the Graph Weight mathematical model, updating frontend elements to correctly reflect the new diagram type metrics.

#### 1. Backend Auto-Routing & Graph Parser
- Develop `parse_class_diagram` to extract node/edge metrics (Classes, Attributes, Methods, Relationships).
- Develop `calculate_graph_weight` to apply the predefined hour factors per method/attribute/class.
- Update POST `/api/v1/estimate` with an auto-routing dispatcher:
  - If `<UseCase>` tag detected -> Route to UCP.
  - If `<Class>` tag detected -> Route to Graph Weight.
- Ensure the API responds with a dynamic `element_breakdown` field specifying the diagram format and specific items factored in.

#### 2. Frontend Dynamic Results & Calibration
- Upgrade the Results State UI ("Breakdown Table") to dynamically adapt to the `diagram_type` returned in the response payload.
- Render tailored rows/columns for Class Diagrams showing classes, attributes, methods, and relationships.
- Integrate the Feedback UI ("Log Actual Time" button) at the bottom of the results page, allowing the user to submit real metrics to POST `/api/v1/calibrate`.

## Verification Plan

### Automated Tests
- Unit tests for Backend UCP and Graph Weight math logic (using `pytest` for FastAPI).
- Mocking tests for XML/JSON parser inputs using sample UMl diagrams.

### Manual Verification
- Start API via `uvicorn main:app --reload` and Frontend via `npm run dev`.
- Upload a Mock Use Case XML to verify UCP math formulas.
- Upload a Mock Class Diagram XML to verify Graph Weight math and dynamic table rendering.
- Submit actual hours via the Results UI to ensure the SQLite database captures the calibration row.
