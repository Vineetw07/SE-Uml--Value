# Project Report: UML to Value Estimator

## 1. Project Overview
The **UML to Value Estimator** is a full-stack web application designed to automatically estimate the development cost and effort of a software project by analyzing its UML diagrams. By processing provided XML diagrams (e.g., Use Case diagrams, Class diagrams), the system extracts key structural elements and applies established industry formulas (such as the Use Case Points model) to generate reliable time and cost estimations. 

It heavily emphasizes a seamless developer/designer experience through drag-and-drop mechanics and an interactive feedback loop to calibrate estimates against actual hours.

## 2. Technology Stack
The application is structured to ensure high performance and strict separation of presentation and business logic:

*   **Frontend UI:**
    *   **Framework:** React (TypeScript) via Vite.
    *   **Styling:** Strict adherence to semantic theming and fluid spatial rhythm using Vanilla CSS variables (e.g., forbidding raw styling values and Tailwind utilities inline).
    *   **Architecture:** Feature-based co-location (e.g., structuring by `/features/Estimator/`) with strong encapsulation of complex UI states and custom hooks to decouple API calls.
*   **Backend API:**
    *   **Framework:** Python with FastAPI (using Uvicorn).
    *   **Data Models:** Pydantic models for strict data validation (Estimation requests/responses).
    *   **Database:** Lightweight SQLite database used primarily for capturing calibration logs and user feedback on actual time spent vs. estimated time.

## 3. Core Features & Workflows
### Phase 1: Use Case Points (UCP) Engine
*   **XML Parsing:** The backend natively processes `<UseCaseDiagram>`, extracting `<Actor>` types and `<UseCase>` counts.
*   **Algorithmic Estimation:** Applies the standard UCP formula involving Unadjusted Actor/UseCase Weights, factoring in Technical (TCF) and Environmental (ECF) Complexity Factors input by the user on the frontend.
*   **Result Generation:** Generates estimated work hours and total project cost dynamically based on a user-provided hourly rate.
*   **UI Components:** Drag-and-drop file upload zone, complexity factor sliders/inputs, and dynamic breakdown tables.

### Phase 2: Class Diagram & Graph Weight Integration
*   **Auto-Routing Parsing:** The backend intelligently detects whether an input XML file contains Use Cases or Class diagrams and routes the estimation logic accordingly.
*   **Graph Weight Calculation:** If it detects `<Class>` tags, the backend extracts detailed metrics about classes, attributes, methods, and relationships, applying a specific Graph Weight hour factor for computations.
*   **Dynamic Results Rendering:** The frontend dynamically adapts its Breakdown Table structure to render elements unique to a Class Diagram format.
*   **Feedback & Calibration Module:** Allows users to submit the "Actual Time" it took to build the parsed components, pushing calibration data into the backend's SQLite store to refine future estimations.

## 4. Operational Guidelines & Testing
*   **Frontend Guidelines:** 
    *   Enforces 4 strict UI states (Loading, Empty, Error, Success).
    *   Composition over prop drilling.
    *   Accessibility-first base components (`role`, `aria-` tags).
*   **Component Verification:** Automated testing strategies using `pytest` for the mathematical integrity of the REST equations and mock test inputs verifying both UCP and Graph Weight logic independently.
