import React from 'react';

export const Docs: React.FC = () => {
  return (
    <div className="page-transition fade-in doc-container">
      <div className="doc-sidebar">
        <nav className="doc-nav">
          <p className="eyebrow">Contents</p>
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#ucp">Use Case Points (UCP)</a></li>
            <li><a href="#graph">Graph Weight Model</a></li>
            <li><a href="#factors">Complexity Factors</a></li>
          </ul>
        </nav>
      </div>

      <div className="doc-content">
        <h1 className="doc-title">Documentation</h1>
        <p className="doc-intro">Learn how the Software Cost Estimator analyzes your UML diagrams to produce accurate effort and budget projections.</p>

        <section id="overview" className="doc-section">
          <h2>Overview</h2>
          <p>
            The Software Cost Estimator replaces manual, tedious component counting with an automated algorithmic approach.
            By uploading a standard system design diagram exported from your modeling tool, the system automatically analyzes
            its complexity, applies industry-standard estimation formulas, and provides a concrete estimate in both hours and dollars.
          </p>
        </section>

        <section id="ucp" className="doc-section">
          <h2>Use Case Points (UCP) Model</h2>
          <p>
            The Use Case Points estimation model is primarily used for Use Case Diagrams. It evaluates the size and complexity
            of a software project based on actors and use cases.
          </p>
          <div className="doc-card">
            <h3>How it works:</h3>
            <ul>
              <li><strong>Unadjusted Actor Weight (UAW):</strong> Classifies actors as simple, average, or complex based on their interaction type (API, protocol, or GUI).</li>
              <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Classifies use cases as simple, average, or complex based on the number of transactions or entities involved.</li>
              <li><strong>Unadjusted Use Case Points (UUCP):</strong> The sum of UAW and UUCW (UUCP = UAW + UUCW).</li>
              <li><strong>Final UCP:</strong> The UUCP is then multiplied by the Technical Complexity Factor (TCF) and Environmental Complexity Factor (ECF).</li>
            </ul>
          </div>
        </section>

        <section id="graph" className="doc-section">
          <h2>Graph Weight Model</h2>
          <p>
            The Graph Weight model is used for evaluating Class Diagrams, analyzing the structural complexity of your system's objects and their relationships.
          </p>
          <div className="doc-card">
            <h3>How it works:</h3>
            <ul>
              <li><strong>Class Weight:</strong> Assesses each class by counting its attributes and methods.</li>
              <li><strong>Relationship Weight:</strong> Evaluates the connections between classes (associations, inheritances, dependencies).</li>
              <li><strong>Total Weight:</strong> The combined score provides a structural effort multiplier.</li>
            </ul>
          </div>
        </section>

        <section id="factors" className="doc-section">
          <h2>Complexity Factors (TCF & ECF)</h2>
          <p>
            Both estimation models utilize Technical and Environmental factors to adjust the raw score to your specific team and project reality.
          </p>
          <div className="doc-grid">
            <div className="doc-grid-item">
              <h4>Technical Complexity Factor (TCF)</h4>
              <p>Scales project complexity (0 to 5) across 13 factors like distributed systems, response time, reusability, and concurrency. It calculates how technically demanding the system is to build.</p>
            </div>
            <div className="doc-grid-item">
              <h4>Environmental Complexity Factor (ECF)</h4>
              <p>Tunes 8 team and project context factors (0 to 5), including UML familiarity, OO experience, analyst capability, and stable requirements. It calculates how well-equipped the team is to deliver.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
