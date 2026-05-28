import React from 'react';
import { BookOpen, Calculator, FileCode } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <div className="page-container glass-panel methodology-page">
      <div className="methodology-header">
        <h2 className="page-title">Our Methodology</h2>
        <p className="page-subtitle">Understanding the mathematics behind accurate software cost estimation.</p>
      </div>

      <div className="methodology-content">
        <section className="method-section">
          <div className="section-icon">
            <Calculator size={28} />
          </div>
          <h3>Use Case Points (UCP)</h3>
          <p>
            The Use Case Points estimation method sizes the system based on the number and complexity of use cases and actors involved.
          </p>
          <ul className="method-list">
            <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Calculates the base complexity of all system interactions.</li>
            <li><strong>Unadjusted Actor Weight (UAW):</strong> Adds weight based on the systems or users interacting with the application.</li>
            <li><strong>Technical Complexity Factor (TCF):</strong> Adjusts the estimate based on technical requirements like distributed systems, performance, and security.</li>
            <li><strong>Environmental Complexity Factor (ECF):</strong> Accounts for the team's experience, motivation, and project stability.</li>
          </ul>
        </section>

        <section className="method-section">
          <div className="section-icon">
            <FileCode size={28} />
          </div>
          <h3>Class Graph Weight</h3>
          <p>
            For structural models like Class Diagrams, we use a graph-based weighting system to evaluate the deep structural complexity of the codebase.
          </p>
          <ul className="method-list">
            <li><strong>Class Complexity:</strong> Evaluates the standalone size of each class.</li>
            <li><strong>Attribute & Method Weight:</strong> Factors in the specific properties and behaviors defined in the model.</li>
            <li><strong>Relationship Multipliers:</strong> Accounts for inheritances, dependencies, and associations that increase coupling and integration effort.</li>
          </ul>
        </section>

        <section className="method-section highlight-section">
          <div className="section-icon">
            <BookOpen size={28} />
          </div>
          <h3>Defensible Calibration</h3>
          <p>
            Our engine is continuously calibrated against real-world project logs. When you generate an estimate, it isn't just theoretical math—it's backed by historical data trends ensuring your timelines are realistic and trustworthy.
          </p>
        </section>
      </div>
    </div>
  );
};
