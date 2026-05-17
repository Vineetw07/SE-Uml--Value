import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <header className="page-header">
        <h1>The Methodology</h1>
        <p className="subtitle">Understanding the algorithms behind the Software Cost Estimator</p>
      </header>

      <div className="content-container">
        <section className="methodology-section">
          <h2>Overview</h2>
          <p>
            The Software Cost Estimator replaces manual component counting with automated
            algorithmic approaches. By parsing exported UML diagrams, we calculate precise
            estimates leveraging established mathematical frameworks.
          </p>
        </section>

        <section className="methodology-section">
          <div className="model-box">
            <h3>Use Case Points (UCP) Model</h3>
            <p>
              When uploading a Use Case Diagram, the system applies the UCP model. This framework calculates effort based on:
            </p>
            <ul>
              <li><strong>Unadjusted Actor Weight (UAW):</strong> Classifies actors as simple, average, or complex based on their interaction type.</li>
              <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Evaluates the complexity of each use case (number of steps, transactions).</li>
              <li><strong>Technical Complexity Factor (TCF):</strong> Accounts for technical challenges like distributed systems, performance, and security.</li>
              <li><strong>Environmental Complexity Factor (ECF):</strong> Factors in the team's experience, motivation, and tools.</li>
            </ul>
            <div className="formula-card">
              <code>Estimated Hours = (UAW + UUCW) × TCF × ECF × Conversion Factor</code>
            </div>
          </div>
        </section>

        <section className="methodology-section">
          <div className="model-box">
            <h3>Graph Weight Model</h3>
            <p>
              When a Class Diagram is uploaded, the system switches to the Graph Weight model. This approach is highly granular, examining the system's structural components:
            </p>
            <ul>
              <li><strong>Classes:</strong> The core entities of the system architecture.</li>
              <li><strong>Attributes:</strong> The data properties assigned to classes.</li>
              <li><strong>Methods:</strong> The functions and behaviors attached to classes.</li>
              <li><strong>Relationships:</strong> The associations and dependencies between classes.</li>
            </ul>
            <p>
              Each component is multiplied by specific hour values (e.g., Classes × 10hrs, Methods × 4hrs) and then scaled by the overall TCF and ECF modifiers.
            </p>
          </div>
        </section>

        <div className="about-cta">
          <p>Ready to put the methodology to the test?</p>
          <Link to="/estimator" className="btn btn-primary">Open the Estimator Workspace</Link>
        </div>
      </div>
    </div>
  );
};
