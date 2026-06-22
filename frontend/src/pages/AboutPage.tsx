import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="about-container">
        <header className="about-header">
          <p className="eyebrow">Methodology</p>
          <h1>How the Estimator Works</h1>
          <p className="about-subtitle">
            Understanding the models behind the math: Use Case Points and Class Diagram weighting.
          </p>
        </header>

        <div className="about-content">
          <section className="about-section">
            <h2>Use Case Points (UCP)</h2>
            <p>
              The Use Case Points (UCP) method is an industry-standard software estimation technique used to forecast the software size and effort for projects oriented around Use Cases.
            </p>
            <ul>
              <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Analyzes the number of steps or transactions in a use case to determine its complexity.</li>
              <li><strong>Unadjusted Actor Weight (UAW):</strong> Classifies the system actors as Simple, Average, or Complex based on how they interact with the system (e.g., API vs. UI).</li>
              <li><strong>Technical Complexity Factor (TCF):</strong> Adjusts the estimate based on technical requirements like distributed architecture, security, and concurrency.</li>
              <li><strong>Environmental Complexity Factor (ECF):</strong> Factors in the team's experience, motivation, and the stability of requirements.</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Class Diagram Weighting</h2>
            <p>
              When a class diagram is analyzed, the system extracts the structural complexity of the architecture.
            </p>
            <ul>
              <li><strong>Attributes & Methods:</strong> Counts the number of attributes and methods to determine the inherent weight of a given class.</li>
              <li><strong>Relationships:</strong> Evaluates inheritances, dependencies, and associations to understand the coupling and cohesion of the system components.</li>
            </ul>
            <p>
              By combining these elements, the tool generates a robust proxy for developmental effort, turning static architecture into actionable predictive metrics.
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};
