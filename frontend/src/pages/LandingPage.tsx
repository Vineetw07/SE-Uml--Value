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
          <div className="floating-element element-1">Class</div>
          <div className="floating-element element-2">Use Case</div>
          <div className="floating-element element-3">INR</div>
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
