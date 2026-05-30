import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart2, FileCode2, Clock, CheckCircle } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section fade-in-up">
        <div className="hero-content">
          <div className="award-badge">
            <span className="badge-pulse"></span>
            Award-Winning Estimation Tool
          </div>
          <h1 className="hero-title">
            Predict Software Costs with <span className="text-gradient">Architectural Precision</span>
          </h1>
          <p className="hero-subtitle">
            Transform your system architecture diagrams into highly accurate, defensible project hours and cost estimates in seconds.
          </p>
          <div className="hero-actions">
            <button className="btn-primary large-btn" onClick={() => navigate('/estimator')}>
              Start Estimating
              <ArrowRight className="btn-icon-right" size={20} />
            </button>
            <button className="btn-secondary large-btn" onClick={() => navigate('/about')}>
              How it works
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-panel main-panel">
             <div className="mock-code-header">
               <span className="dot red"></span>
               <span className="dot yellow"></span>
               <span className="dot green"></span>
             </div>
             <div className="mock-chart">
               <div className="chart-bar" style={{ height: '40%' }}></div>
               <div className="chart-bar" style={{ height: '70%' }}></div>
               <div className="chart-bar highlight" style={{ height: '100%' }}></div>
               <div className="chart-bar" style={{ height: '60%' }}></div>
             </div>
             <div className="mock-stats">
               <div className="stat-line">Estimated Hours: <strong>1,240 hrs</strong></div>
               <div className="stat-line">Project Cost: <strong className="text-success">$62,000</strong></div>
             </div>
          </div>
          <div className="glass-panel float-panel-1">
             <FileCode2 className="panel-icon" size={24} />
             <span>UML Parser</span>
          </div>
          <div className="glass-panel float-panel-2">
             <BarChart2 className="panel-icon" size={24} />
             <span>UCP Model</span>
          </div>
        </div>
      </section>

      <section className="features-section fade-in-up delay-1">
        <div className="section-header">
          <h2 className="section-title">Why industry leaders choose our estimator</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FileCode2 className="feature-icon" />
            </div>
            <h3>Direct from Architecture</h3>
            <p>Upload standard XML or JSON Class and Use Case diagrams. We analyze nodes, attributes, and relationships directly from your architecture.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <BarChart2 className="feature-icon" />
            </div>
            <h3>Industry-Standard Models</h3>
            <p>Powered by Use Case Points (UCP) and Class Graph Weight algorithms, ensuring your estimates are backed by proven methodologies.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Clock className="feature-icon" />
            </div>
            <h3>Save Days of Work</h3>
            <p>What used to take senior architects days of manual counting and spreadsheet wrangling now takes seconds with precise automated parsing.</p>
          </div>
        </div>
      </section>

      <section className="trust-section fade-in-up delay-2">
        <div className="trust-content">
          <h2>Ready to revolutionize your project planning?</h2>
          <ul className="trust-list">
            <li><CheckCircle size={20} className="text-success" /> No more guesswork</li>
            <li><CheckCircle size={20} className="text-success" /> Defensible budgets</li>
            <li><CheckCircle size={20} className="text-success" /> Instant generation</li>
          </ul>
          <button className="btn-primary large-btn mt-6" onClick={() => navigate('/estimator')}>
            Try the Estimator Now
          </button>
        </div>
      </section>
    </div>
  );
};
