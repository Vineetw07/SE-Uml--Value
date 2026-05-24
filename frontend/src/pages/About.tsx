import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="page-shell panel-reveal" aria-labelledby="about-heading">
      <div className="workspace-intro">
        <div>
          <p className="eyebrow">About the Project</p>
          <h2 id="about-heading">Automated Software Cost Estimator</h2>
          <p>
            Welcome to the future of software estimation. This tool bridges the gap between system architecture and project management, transforming UML diagrams into accurate, defensible cost and effort predictions.
          </p>
        </div>
      </div>

      <div className="workspace-grid about-content">
        <div className="setup-panel">
          <div className="panel-heading">
            <div>
              <h3>Our Mission</h3>
            </div>
          </div>
          <p>
            We aim to simplify and accelerate the software estimation process. By parsing standard UML Use Case and Class Diagrams, our platform calculates the Use Case Points (UCP) and architectural complexity to give you an immediate, data-backed estimate of required person-hours and costs.
          </p>
          <br/>
          <div className="panel-heading">
            <div>
              <h3>How It Works</h3>
            </div>
          </div>
          <ul className="about-list">
            <li><strong>Upload:</strong> Provide an XML or JSON file containing your UML Use Case or Class Diagram.</li>
            <li><strong>Analyze:</strong> Our backend engine parses the structural components and relationships.</li>
            <li><strong>Calculate:</strong> We apply established estimation algorithms considering technical (TCF) and environmental (ECF) complexity factors.</li>
            <li><strong>Estimate:</strong> Instantly view total hours, cost, and a detailed breakdown of factors contributing to the final estimate.</li>
          </ul>
        </div>

        <div className="result-panel">
           <div className="panel-heading">
            <div>
              <h3>Why Choose Us?</h3>
            </div>
          </div>
          <div className="classification-grid">
            <div className="metric-card metric-card--primary">
              <span>Speed</span>
              <strong>Instant</strong>
              <p style={{ marginTop: '8px', fontSize: '0.85rem' }}>Eliminate days of manual calculation.</p>
            </div>
            <div className="metric-card metric-card--primary">
              <span>Accuracy</span>
              <strong>Data-Driven</strong>
              <p style={{ marginTop: '8px', fontSize: '0.85rem' }}>Based on proven UCP and complexity models.</p>
            </div>
             <div className="metric-card metric-card--primary">
              <span>Integration</span>
              <strong>Seamless</strong>
              <p style={{ marginTop: '8px', fontSize: '0.85rem' }}>Works with standard XML/JSON exports.</p>
            </div>
            <div className="metric-card metric-card--primary">
              <span>Transparency</span>
              <strong>Clear</strong>
              <p style={{ marginTop: '8px', fontSize: '0.85rem' }}>Full visibility into effort multipliers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
