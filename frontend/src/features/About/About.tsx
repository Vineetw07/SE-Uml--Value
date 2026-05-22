import './About.css';

export const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About the Estimator</h1>
        <p className="subtitle">Understanding the architecture and methodology behind automated software estimation.</p>
      </header>

      <div className="about-content">
        <section className="about-section">
          <h2>The Goal</h2>
          <p>
            The Software Cost Estimator was built to replace manual, tedious component counting with an automated algorithmic approach.
            By uploading standard system design diagrams, the system analyzes complexity and applies industry-standard estimation formulas.
          </p>
        </section>

        <section className="about-section">
          <h2>Architecture</h2>
          <div className="arch-blocks">
            <div className="arch-block">
              <h3>Frontend (React + TypeScript)</h3>
              <p>
                A modern, blazing-fast user interface built with Vite and React. It handles file uploads, parameter tuning,
                and visualizing the complex breakdown returned by the backend estimation engine.
              </p>
            </div>
            <div className="arch-block">
              <h3>Backend (C++ Winsock Server)</h3>
              <p>
                A custom-built, zero-dependency ultra-fast web server using Windows Sockets. It features an intelligent engine
                that extracts elements from XML/JSON diagrams using tinyxml2 and nlohmann/json, applying sophisticated mathematical models.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Estimation Models</h2>
          <ul>
            <li>
              <strong>Use Case Points (UCP):</strong> Evaluates Use Case Diagrams by analyzing the complexity of actors and use cases,
              adjusted by Technical and Environmental factors.
            </li>
            <li>
              <strong>Graph Weight Model:</strong> Analyzes Class Diagrams by interpreting the structural complexity of classes,
              attributes, methods, and their relationships.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
