import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="page-transition fade-in">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Automated estimation tool</p>
          <h1 className="hero-title">Predict software hours directly from UML diagrams.</h1>
          <p className="hero-description">
            Replace manual counting with algorithmic precision. Upload standard Use Case or Class diagrams
            and instantly get defensible estimates in both time and cost.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn--primary btn--large">
              Start Estimating
            </Link>
            <Link to="/docs" className="btn btn--secondary btn--large">
              How it works
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="abstract-diagram">
            <div className="node" />
            <div className="line" />
            <div className="node node--complex" />
            <div className="line" />
            <div className="node node--result" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-header">
          <p className="eyebrow">Powered by standard models</p>
          <h2>Two Estimation Engines</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon--ucp">UCP</div>
            <h3>Use Case Points</h3>
            <p>
              Automatically calculates Use Case Points from your Use Case Diagrams (JSON/XML).
              Evaluates the complexity of actors and transactions to project development effort accurately.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon--graph">GW</div>
            <h3>Graph Weight</h3>
            <p>
              Employs a Graph Weight model for Class Diagrams. Evaluates attributes, methods, and
              class relationships to formulate complex structural estimation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon--tune">⚙️</div>
            <h3>Customizable Complexity</h3>
            <p>
              Fine-tune your estimates by adjusting Technical Complexity Factors (TCF) and
              Environmental Complexity Factors (ECF) tailored to your specific team context.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
