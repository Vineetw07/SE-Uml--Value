import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart2, ShieldCheck, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span> Next-Gen Estimation
          </div>
          <h1 className="hero-title">
            Predict software costs directly from <span className="text-gradient">UML diagrams</span>
          </h1>
          <p className="hero-subtitle">
            Upload your system architecture diagrams. Our automated engine parses Use Case and Class graphs to generate precise, defensible effort and cost estimates in seconds.
          </p>
          <div className="hero-actions">
            <button className="btn btn--primary btn--large" onClick={() => navigate('/workspace')}>
              Open Workspace <ArrowRight size={18} />
            </button>
            <button className="btn btn--secondary btn--large" onClick={() => navigate('/methodology')}>
              View Methodology
            </button>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="glass-panel main-panel">
            <div className="mock-header">
              <div className="mock-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="mock-body">
              <div className="mock-block title"></div>
              <div className="mock-block text"></div>
              <div className="mock-block text short"></div>
              <div className="mock-chart">
                <div className="bar b1"></div>
                <div className="bar b2"></div>
                <div className="bar b3"></div>
                <div className="bar b4"></div>
              </div>
            </div>
          </div>
          <div className="glass-panel float-panel panel-1">
            <BarChart2 className="panel-icon text-cyan" />
            <div className="panel-content">
              <div className="mock-line"></div>
              <div className="mock-line short"></div>
            </div>
          </div>
          <div className="glass-panel float-panel panel-2">
            <ShieldCheck className="panel-icon text-green" />
            <div className="panel-content">
              <div className="mock-line"></div>
              <div className="mock-line short"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <p className="eyebrow">Capabilities</p>
          <h2>Award-winning estimation engine</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper bg-primary-soft">
              <Zap className="text-primary" size={24} />
            </div>
            <h3>Instant Parsing</h3>
            <p>Our intelligent engine analyzes your UML diagrams and instantly calculates structural complexity without manual counting.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper bg-cyan-soft">
              <BarChart2 className="text-cyan" size={24} />
            </div>
            <h3>Defensible Models</h3>
            <p>Backed by industry-standard Use Case Points (UCP) and Class Graph Weighting algorithms for reliable predictions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper bg-green-soft">
              <ShieldCheck className="text-green" size={24} />
            </div>
            <h3>Accurate Projections</h3>
            <p>Factor in technical and environmental complexities to convert raw complexity into precise hourly and cost estimates.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to streamline your estimates?</h2>
          <p>Stop guessing. Start predicting with data-backed confidence.</p>
          <button className="btn btn--primary btn--large mt-4" onClick={() => navigate('/workspace')}>
            Start Estimating Now
          </button>
        </div>
      </section>
    </div>
  );
};
