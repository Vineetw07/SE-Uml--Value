import React from 'react';
import { BookOpen, Calculator, LineChart } from 'lucide-react';
import './HowItWorks.css';

export const HowItWorks: React.FC = () => {
  return (
    <div className="how-it-works-page">
      <div className="page-header">
        <div className="container">
          <h1>How the Estimation Engine Works</h1>
          <p className="page-subtitle">
            A deep dive into the mathematical models powering our automated estimations.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="content-grid">
          <div className="main-content">
            <section className="info-section">
              <div className="section-title-wrapper">
                <BookOpen className="section-icon" />
                <h2>Use Case Points (UCP) Model</h2>
              </div>
              <p>
                The Use Case Points (UCP) method is a software estimation technique used to measure the software size of a project.
                It is based on the system's use case diagram. The engine automatically parses the diagram to calculate the following metrics:
              </p>

              <div className="math-card">
                <h3>The Formula</h3>
                <div className="formula-block">
                  <p><code>UCP = UUCP × TCF × ECF</code></p>
                  <ul className="formula-breakdown">
                    <li><strong>UUCP (Unadjusted Use Case Points):</strong> The sum of unadjusted actor weights (UAW) and unadjusted use case weights (UUCW).</li>
                    <li><strong>TCF (Technical Complexity Factor):</strong> A multiplier based on 13 technical factors (e.g., distributed system, performance objectives).</li>
                    <li><strong>ECF (Environmental Complexity Factor):</strong> A multiplier based on 8 environmental factors (e.g., team experience, motivation).</li>
                  </ul>
                </div>
              </div>

              <p>
                Once the UCP is calculated, it is multiplied by a conversion factor (typically 20-28 hours per UCP) to estimate the total project effort in hours.
              </p>
            </section>

            <section className="info-section">
              <div className="section-title-wrapper">
                <LineChart className="section-icon" />
                <h2>Class Graph Weight Model</h2>
              </div>
              <p>
                For Class Diagrams, we utilize a Graph Weight model that analyzes the structural complexity of the system.
                This model treats the class diagram as a directed graph where classes are nodes and relationships (associations, inheritances) are edges.
              </p>

              <div className="math-card">
                <h3>Component Analysis</h3>
                <div className="formula-block">
                  <ul className="formula-breakdown">
                    <li><strong>Class Complexity:</strong> Determined by the number of attributes and methods within each class.</li>
                    <li><strong>Relationship Weight:</strong> Different types of relationships carry different weights (e.g., Inheritance &gt; Composition &gt; Association).</li>
                    <li><strong>System Coupling:</strong> The density of connections between classes indicates integration effort.</li>
                  </ul>
                </div>
              </div>

              <p>
                The base structural weight is then adjusted using the same Technical (TCF) and Environmental (ECF) factors to produce the final hour estimate.
              </p>
            </section>

            <section className="info-section cta-inline">
              <div className="cta-inline-content">
                <Calculator size={32} className="cta-icon" />
                <div>
                  <h3>Ready to see the math in action?</h3>
                  <p>Upload a diagram and let the engine do the heavy lifting.</p>
                </div>
              </div>
              <a href="/estimator" className="btn btn-primary">Start Estimating</a>
            </section>
          </div>

          <aside className="sidebar">
            <div className="sidebar-widget">
              <h3>Supported Formats</h3>
              <ul className="widget-list">
                <li>
                  <strong>Use Case Diagrams</strong>
                  <span>.xml, .json</span>
                </li>
                <li>
                  <strong>Class Diagrams</strong>
                  <span>.xml, .json</span>
                </li>
              </ul>
              <p className="widget-note">
                Export your diagrams from tools like draw.io, Lucidchart, or StarUML.
              </p>
            </div>

            <div className="sidebar-widget">
              <h3>Calibration Loop</h3>
              <p>
                The system uses an SQLite database to log estimations. By providing feedback on actual project hours,
                the engine can calibrate its conversion multipliers for your specific team over time.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
