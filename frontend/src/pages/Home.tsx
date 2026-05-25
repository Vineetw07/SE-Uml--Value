import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="page-wrapper home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge fade-in-up">
            <span>Now with Use Case Points (UCP) & Graph Weight Models</span>
          </div>
          <h1 className="hero-title fade-in-up delay-1">
            Predict Software Projects <br/>
            <span className="gradient-text">Before You Code.</span>
          </h1>
          <p className="hero-subtitle fade-in-up delay-2">
            Turn your system architecture diagrams into defensible effort and cost estimates.
            Upload your UML files and let the algorithms do the math.
          </p>
          <div className="hero-actions fade-in-up delay-3">
            <Link to="/estimator" className="btn btn-primary btn-large">
              Start Estimating Workspace
            </Link>
            <Link to="/about" className="btn btn-secondary btn-large">
              How it works
            </Link>
          </div>
        </div>

        <div className="hero-visual fade-in delay-4">
           <div className="abstract-ui">
              <div className="abstract-card glass-effect">
                 <div className="signal-bars">
                    <span />
                    <span />
                    <span />
                 </div>
                 <div className="abstract-stat">
                    <span>Estimated Cost</span>
                    <strong>$14,250</strong>
                 </div>
              </div>
              <div className="abstract-line" />
              <div className="abstract-card glass-effect card-offset">
                 <div className="processing-orbit">
                    <span />
                    <span />
                    <span />
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Why use the UML Estimator?</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card glass-effect fade-in-up delay-1">
            <div className="feature-icon">🔍</div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically detects and reads Use Case Diagrams and Class Diagrams from XML and JSON formats.</p>
          </div>
          <div className="feature-card glass-effect fade-in-up delay-2">
            <div className="feature-icon">⚡</div>
            <h3>Dual Engines</h3>
            <p>Employs Use Case Points (UCP) for functional views and Graph Weight models for structural views.</p>
          </div>
          <div className="feature-card glass-effect fade-in-up delay-3">
            <div className="feature-icon">⚙️</div>
            <h3>Customizable Factors</h3>
            <p>Fine-tune estimates by adjusting Technical and Environmental Complexity Factors (TCF & ECF).</p>
          </div>
        </div>
      </section>
    </div>
  );
};
