import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <p className="eyebrow animated-eyebrow">Automate your estimates</p>
          <h1 className="hero-title">From UML to Accurate Estimates in Seconds</h1>
          <p className="hero-subtitle">
            Upload your use case or class diagrams, and let our intelligent engine calculate hours, costs, and resources instantly.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn-primary btn-large">Start Estimating Now</Link>
            <Link to="/about" className="btn btn-secondary btn-large">Learn How It Works</Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="diagram-canvas">
            {/* Connecting lines */}
            <svg className="diagram-connections" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
              <path d="M 110 140 L 250 220" fill="none" stroke="rgba(14, 115, 246, 0.3)" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 250 280 L 390 360" fill="none" stroke="rgba(10, 187, 135, 0.3)" strokeWidth="2" strokeDasharray="6 6" />

              <circle cx="110" cy="140" r="4" fill="var(--color-primary)" />
              <circle cx="250" cy="220" r="4" fill="var(--color-primary)" />
              <circle cx="250" cy="280" r="4" fill="var(--color-green)" />
              <circle cx="390" cy="360" r="4" fill="var(--color-green)" />
            </svg>

            {/* UML Node 1: Input Diagram */}
            <div className="uml-node node-diagram floating-slow">
              <div className="uml-header">
                <span className="uml-class-name">«entity»<br/>SystemDiagram</span>
              </div>
              <div className="uml-body">
                <div className="uml-line">+ type: String</div>
                <div className="uml-line">+ entities: Int</div>
                <div className="uml-line">+ edges: Int</div>
              </div>
            </div>

            {/* UML Node 2: Estimator Engine */}
            <div className="uml-node node-engine floating-medium">
              <div className="uml-header">
                <span className="uml-class-name">«service»<br/>EstimatorEngine</span>
              </div>
              <div className="uml-body">
                <div className="uml-line">- tcf: Float</div>
                <div className="uml-line">- ecf: Float</div>
                <div className="uml-line">- rate: Float</div>
              </div>
              <div className="uml-methods">
                <div className="uml-line">+ calculate()</div>
                <div className="uml-line">+ applyFactors()</div>
              </div>
            </div>

            {/* UML Node 3: Result Output */}
            <div className="uml-node node-result floating-fast">
              <div className="result-amount">
                <span className="result-currency">$</span>12,450
              </div>
              <div className="result-meta">
                <span className="result-hours">150 hrs</span>
                <span className="result-badge">Estimate</span>
              </div>
            </div>
          </div>
          <div className="hero-orb"></div>
        </div>
      </header>

      <section className="features-section">
        <div className="section-header">
          <h2>Two Powerful Models</h2>
          <p>We support industry-standard estimation models based on your diagram type.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon ucp-icon"></div>
            <h3>Use Case Points (UCP)</h3>
            <p>Perfect for early-stage project estimation. Weighs actors and use cases against technical and environmental complexities.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon graph-icon"></div>
            <h3>Graph Weight</h3>
            <p>Ideal for detailed architectural diagrams. Counts classes, attributes, methods, and relationships for fine-grained accuracy.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to streamline your workflow?</h2>
          <p>Stop manual counting and guessing. Get data-driven estimates today.</p>
          <Link to="/estimator" className="btn btn-primary btn-large">Try the Estimator</Link>
        </div>
      </section>
    </div>
  );
};
