import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Cpu, LineChart } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="abstract-shape shape-1"></div>
      <div className="abstract-shape shape-2"></div>

      <section className="hero-section">
        <div className="hero-content">
          <div className="badge pulse">Intelligent Estimation</div>
          <h1 className="hero-title">
            Predict Software Costs <br/>
            <span className="gradient-text">with Architectural Precision</span>
          </h1>
          <p className="hero-subtitle">
            The award-winning platform that turns your UML diagrams into defensible, transparent, and accurate project estimates instantly.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="cta-button primary-cta">
              Start Estimating <ArrowRight size={20} />
            </Link>
            <Link to="/methodology" className="cta-button secondary-cta">
              How it works
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon">
              <Cpu size={32} />
            </div>
            <h3>Use Case Points (UCP)</h3>
            <p>Automatically calculate effort using standardized Use Case and Actor weights derived from your XML diagrams.</p>
          </div>

          <div className="feature-card glass-panel">
            <div className="feature-icon">
              <Box size={32} />
            </div>
            <h3>Class Graph Weight</h3>
            <p>Deeply analyze object-oriented models to factor in class complexity, attributes, and relationships for precise estimates.</p>
          </div>

          <div className="feature-card glass-panel">
            <div className="feature-icon">
              <LineChart size={32} />
            </div>
            <h3>Defensible Costing</h3>
            <p>Transform raw model data into clear hourly metrics and cost projections that stakeholders can trust.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
