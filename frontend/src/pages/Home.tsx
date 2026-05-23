import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content fade-in-up">
          <div className="hero-badge">AI-Powered Estimation</div>
          <h1 className="hero-title">
            Predict Software Costs <br />
            <span className="text-gradient">With Mathematical Precision</span>
          </h1>
          <p className="hero-subtitle">
            Transform standard system architecture diagrams into defensible, hour-by-hour cost estimates. Eliminate guesswork from your engineering budgets.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn-primary btn-lg shine-effect">
              Start Estimating Now
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              Learn How It Works
            </Link>
          </div>
        </div>

        <div className="hero-visual fade-in-up delay-2">
          <div className="floating-cards">
            <div className="float-card card-1">
              <div className="card-icon">🧮</div>
              <div>
                <h4>Use Case Points</h4>
                <p>UML Analysis</p>
              </div>
            </div>
            <div className="float-card card-2">
              <div className="card-icon">📊</div>
              <div>
                <h4>Graph Weight</h4>
                <p>Class Models</p>
              </div>
            </div>
            <div className="float-card card-3">
              <div className="card-icon">💵</div>
              <div>
                <h4>Cost Projection</h4>
                <p>Real-time updates</p>
              </div>
            </div>
          </div>
          <div className="hero-glow"></div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title text-center">Engineered for Accuracy</h2>
        <div className="features-grid">
          <div className="feature-card glass-card hover-lift">
            <div className="feature-icon bg-blue">🧠</div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically detects and reads structural components from exported JSON/XML use case and class diagrams.</p>
          </div>
          <div className="feature-card glass-card hover-lift">
            <div className="feature-icon bg-green">⚙️</div>
            <h3>Dual Engines</h3>
            <p>Leverages industry-standard Use Case Points (UCP) or Graph Weight models tailored to your architecture.</p>
          </div>
          <div className="feature-card glass-card hover-lift">
            <div className="feature-icon bg-purple">🎛️</div>
            <h3>Custom Constraints</h3>
            <p>Fine-tune Technical (TCF) and Environmental (ECF) complexities for bespoke accuracy on every project.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
