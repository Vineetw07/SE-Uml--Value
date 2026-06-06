import React from 'react';
import { GitBranch, Calculator } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Understanding the Models</h1>
        <p className="subtitle">The science behind our precise software cost estimations.</p>
      </div>

      <div className="about-content">
        <section className="model-section glass-card">
          <div className="model-header">
            <div className="icon-box">
              <Calculator size={24} className="text-primary" />
            </div>
            <h2>Use Case Points (UCP)</h2>
          </div>
          <p>
            The Use Case Points method is a software estimation technique used to forecast the software size for software development projects. UCP is used when the Unified Modeling Language (UML) and Rational Unified Process (RUP) methodologies are being used for the software design and development.
          </p>
          <div className="model-details">
            <h3>How it works:</h3>
            <ul>
              <li><strong>Unadjusted Actor Weight (UAW):</strong> Actors are categorized as simple, average, or complex based on their interaction with the system.</li>
              <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Use cases are also categorized by complexity based on the number of transactions.</li>
              <li><strong>Technical Complexity Factor (TCF):</strong> Adjusts the estimate based on 13 technical factors (e.g., distributed system, performance objectives).</li>
              <li><strong>Environmental Complexity Factor (ECF):</strong> Adjusts based on 8 environmental factors (e.g., team experience, motivation).</li>
            </ul>
            <div className="formula-box">
              <code>UCP = (UAW + UUCW) × TCF × ECF</code>
            </div>
          </div>
        </section>

        <section className="model-section glass-card">
          <div className="model-header">
            <div className="icon-box">
              <GitBranch size={24} className="text-green" />
            </div>
            <h2>Graph Weight Model</h2>
          </div>
          <p>
            The Graph Weight Model is specifically designed for analyzing Class Diagrams to predict development effort based on the structural complexity of object-oriented designs.
          </p>
          <div className="model-details">
            <h3>How it works:</h3>
            <ul>
              <li><strong>Entity Analysis:</strong> We extract all classes, attributes, methods, and relationships from the diagram representation.</li>
              <li><strong>Base Effort Allocation:</strong> Standard industry hours are assigned to each structural element:
                <ul className="sub-list">
                  <li>Classes: 10 hours</li>
                  <li>Methods: 4 hours</li>
                  <li>Relationships: 3 hours</li>
                  <li>Attributes: 2 hours</li>
                </ul>
              </li>
              <li><strong>Multiplier Adjustment:</strong> Similar to UCP, the base effort is multiplied by the combined TCF and ECF to account for project-specific complexities.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
