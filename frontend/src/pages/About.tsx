import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="about-page app-shell">
      <div className="about-header">
        <p className="eyebrow">Methodology</p>
        <h1>How it works</h1>
        <p className="subtitle">
          Our estimator uses industry-standard algorithms to parse and analyze your architectural models.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Use Case Points (UCP)</h2>
          <p>
            Use Case Points (UCP) is a software estimation technique used to forecast the software size for software development projects. UCP is used when the Unified Modeling Language (UML) and Rational Unified Process (RUP) methodologies are being used for the software design and development.
          </p>
          <div className="formula-box">
            <code>UCP = (UUCW + UAW) × TCF × ECF</code>
            <ul className="formula-legend">
              <li><strong>UUCW:</strong> Unadjusted Use Case Weight</li>
              <li><strong>UAW:</strong> Unadjusted Actor Weight</li>
              <li><strong>TCF:</strong> Technical Complexity Factor</li>
              <li><strong>ECF:</strong> Environmental Complexity Factor</li>
            </ul>
          </div>
        </section>

        <section className="about-section">
          <h2>Class Graph Weight</h2>
          <p>
            For class diagrams, we use a custom Graph Weight methodology. We analyze the nodes (classes) and edges (relationships) to determine the structural complexity of the system.
          </p>
          <ul className="feature-list">
            <li><strong>Classes:</strong> Base weight representing the core entity.</li>
            <li><strong>Attributes:</strong> Data points associated with the class.</li>
            <li><strong>Methods:</strong> Behavioral operations the class performs.</li>
            <li><strong>Relationships:</strong> Coupling and dependencies between entities.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Security & Privacy</h2>
          <p>
            Your diagrams are processed entirely in memory. We do not store or persist your UML diagrams or the resulting estimation data on our servers. The analysis is done on-the-fly and discarded immediately after the response is sent.
          </p>
        </section>
      </div>
    </div>
  );
};
