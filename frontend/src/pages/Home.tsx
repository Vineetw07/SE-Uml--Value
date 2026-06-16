import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Calculator, Database, Shield, FileText, BarChart3 } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="home-page fade-in">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow fade-up">Intelligent Estimation</p>
          <h1 className="hero-title fade-up" style={{ animationDelay: '100ms' }}>
            Transform System Architecture into <span className="text-gradient">Defensible Estimates</span>
          </h1>
          <p className="hero-subtitle fade-up" style={{ animationDelay: '200ms' }}>
            Upload your UML diagrams and let our advanced parser instantly calculate effort, hours, and cost metrics with precision.
          </p>
          <div className="hero-actions fade-up" style={{ animationDelay: '300ms' }}>
            <Link to="/estimator" className="btn btn--primary btn--large">
              Start Estimating <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn--secondary btn--large">
              Learn How It Works
            </Link>
          </div>
        </div>
        <div className="hero-graphic fade-in" style={{ animationDelay: '400ms' }}>
          <div className="floating-card card-1">
            <FileText className="card-icon" />
            <div>
              <strong>UML Diagram</strong>
              <span>Use Case & Class</span>
            </div>
          </div>
          <div className="floating-card card-2">
            <Calculator className="card-icon" />
            <div>
              <strong>Calculation</strong>
              <span>UCP & Graph Weight</span>
            </div>
          </div>
          <div className="floating-card card-3">
            <BarChart3 className="card-icon" />
            <div>
              <strong>Results</strong>
              <span>Hours & Cost INR</span>
            </div>
          </div>
          <div className="hero-glow"></div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Award-Winning Capabilities</h2>
          <p>Everything you need for precise software project estimation directly from your architecture.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Zap className="feature-icon" />
            </div>
            <h3>Instant Processing</h3>
            <p>Our C++ backend uses Winsock to parse your diagrams in milliseconds, delivering immediate results.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Database className="feature-icon" />
            </div>
            <h3>Multi-Model Support</h3>
            <p>Analyzes Use Case diagrams (UCP) and Class diagrams (Graph Weight) for comprehensive estimation.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Shield className="feature-icon" />
            </div>
            <h3>Defensible Metrics</h3>
            <p>Tune Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) for accurate context.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to streamline your estimation workflow?</h2>
          <p>Stop guessing. Start measuring with our UML Value Estimator.</p>
          <Link to="/estimator" className="btn btn--primary btn--large mt-4">
            Try the Estimator Now
          </Link>
        </div>
      </section>
    </div>
  );
};
