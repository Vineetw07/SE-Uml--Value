import React from 'react';
import { Calculator, Users, Layers } from 'lucide-react';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="eyebrow">The Science Behind the Estimate</div>
        <h1>Estimation Models</h1>
        <p>Understanding how your UML diagrams translate to effort and cost.</p>
      </div>

      <div className="models-grid">
        {/* Use Case Points Card */}
        <section className="model-card main-model">
          <div className="model-icon">
            <Users size={32} />
          </div>
          <h2>Use Case Points (UCP)</h2>
          <p className="model-desc">
            The primary model for estimating software size based on system requirements and use cases.
          </p>

          <div className="formula-box">
            <div className="formula-label">Core Formula</div>
            <code>UCP = (UUCP) × TCF × ECF</code>
          </div>

          <div className="components-list">
            <div className="component-item">
              <h4>UUCP (Unadjusted Use Case Points)</h4>
              <p>Calculated directly from your uploaded Use Case Diagram by analyzing the number and complexity of Actors and Use Cases.</p>
            </div>
            <div className="component-item">
              <h4>TCF (Technical Complexity Factor)</h4>
              <p>Adjusts the estimate based on technical requirements like distributed systems, performance constraints, and security.</p>
            </div>
            <div className="component-item">
              <h4>ECF (Environmental Complexity Factor)</h4>
              <p>Accounts for team capability, experience, and project stability.</p>
            </div>
          </div>
        </section>

        <div className="side-models">
          {/* Class Graph Weight Card */}
          <section className="model-card">
            <div className="model-icon alt">
              <Layers size={24} />
            </div>
            <h3>Class Graph Weights</h3>
            <p>
              When a Class Diagram is uploaded, we analyze the structural complexity of the system.
              Nodes (classes) and Edges (relationships) are evaluated to determine structural effort.
            </p>
          </section>

          {/* Effort Calculation Card */}
          <section className="model-card">
            <div className="model-icon calc">
              <Calculator size={24} />
            </div>
            <h3>Final Effort & Cost</h3>
            <div className="formula-box small">
              <code>Effort = Total Points × 20 hours</code>
              <code>Cost = Effort × Hourly Rate</code>
            </div>
            <p className="mt-4">
              We use the industry standard baseline of 20 staff hours per adjusted point to calculate total effort, multiplied by your specified rate.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
