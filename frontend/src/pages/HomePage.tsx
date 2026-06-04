import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, Zap } from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Predict Software Effort <br />
            <span className="text-gradient">With Precision</span>
          </h1>
          <p className="hero-subtitle">
            An automated estimation tool that predicts software project hours and costs directly from system architecture diagrams, eliminating manual component counting.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/estimator')}>
              Start Estimating <ArrowRight size={18} />
            </button>
            <button className="btn-secondary" onClick={() => navigate('/about')}>
              Learn How It Works
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="floating-card floating-card-1">
            <div className="mock-code">
              <span className="line">{"{"}</span>
              <span className="line indent">"type": "class_diagram",</span>
              <span className="line indent">"total_classes": 12,</span>
              <span className="line indent">"estimated_hours": 340</span>
              <span className="line">{"}"}</span>
            </div>
          </div>
          <div className="floating-card floating-card-2">
            <div className="stat-highlight">
              <span className="stat-val">$17,000</span>
              <span className="stat-label">Project Estimate</span>
            </div>
          </div>
          <div className="abstract-shape"></div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Why Use Our Estimator?</h2>
          <p>Built for software engineers, by software engineers. We replace gut feelings with math.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Zap size={24} /></div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically detects and reads Use Case Diagrams and Class Diagrams in JSON or XML format.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><BarChart3 size={24} /></div>
            <h3>Industry Models</h3>
            <p>Leverages proven Use Case Points (UCP) and Graph Weight models to calculate rigorous estimates.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Database size={24} /></div>
            <h3>Customizable Context</h3>
            <p>Fine-tune estimates by adjusting Technical and Environmental Complexity Factors (TCF/ECF).</p>
          </div>
        </div>
      </section>
    </div>
  );
};
