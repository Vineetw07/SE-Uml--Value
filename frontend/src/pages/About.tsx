import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="about-container fade-in">
      <div className="about-header text-center">
        <p className="eyebrow">Methodology</p>
        <h1 className="about-title">The Science of Estimation</h1>
        <p className="about-subtitle">Understanding the algorithms powering our automated predictions.</p>
      </div>

      <div className="about-content">
        <section className="about-section glass-panel">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>Use Case Points (UCP)</h2>
          </div>
          <p className="lead-text">
            For Use Case Diagrams, we employ the Use Case Points methodology, an industry-recognized algorithm designed to estimate software development effort from system requirements.
          </p>
          <div className="method-breakdown">
            <div className="method-step">
              <h4>1. Unadjusted Actor Weight (UAW)</h4>
              <p>Actors are categorized as Simple (API), Average (TCP/IP), or Complex (GUI) and weighted accordingly.</p>
            </div>
            <div className="method-step">
              <h4>2. Unadjusted Use Case Weight (UUCW)</h4>
              <p>Use cases are evaluated based on the number of transactions and assigned weights.</p>
            </div>
            <div className="method-step">
              <h4>3. Complexity Factors</h4>
              <p>Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) adjust the baseline score to reality.</p>
            </div>
          </div>
          <div className="formula-box">
            <code>Effort (Hours) = (UAW + UUCW) × TCF × ECF × Productivity Factor</code>
          </div>
        </section>

        <section className="about-section glass-panel mt-6">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Graph Weight Model</h2>
          </div>
          <p className="lead-text">
            For Class Diagrams, the system analyzes the structural complexity of your object-oriented design using a Graph Weight approach.
          </p>
          <ul className="feature-list">
            <li><strong>Class Complexity:</strong> Evaluates the number of methods, attributes, and visibility modifiers per class.</li>
            <li><strong>Relationship Density:</strong> Analyzes associations, generalizations, and dependencies between objects.</li>
            <li><strong>Depth of Inheritance:</strong> Models the hierarchical complexity of the class structure.</li>
          </ul>
        </section>

        <div className="cta-section text-center mt-8">
          <h3>Ready to put the models to work?</h3>
          <Link to="/estimator" className="btn btn-primary btn-lg mt-4">
            Try the Estimator
          </Link>
        </div>
      </div>
    </div>
  );
};
