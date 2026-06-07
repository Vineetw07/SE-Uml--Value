import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileCode2, LineChart, ShieldCheck, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
        </div>

        <div className="hero-content">
          <div className="badge-pill">
            <Zap size={14} className="badge-icon" />
            <span>Intelligent Architecture Analysis</span>
          </div>

          <h1 className="hero-title">
            Predict Software Costs with <span>Mathematical Precision</span>
          </h1>

          <p className="hero-subtitle">
            Transform your UML architecture diagrams into defensible effort and budget estimates instantly. Stop guessing. Start analyzing.
          </p>

          <div className="hero-actions">
            <button className="btn-primary-large" onClick={() => navigate('/estimator')}>
              Start Estimating
              <FileCode2 size={20} />
            </button>
            <button className="btn-secondary-large" onClick={() => navigate('/about')}>
              How it works
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Why trust our estimator?</h2>
          <p>Built on industry-standard methodologies to deliver accurate projections.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FileCode2 className="feature-icon" />
            </div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically detect and extract components from complex JSON/XML diagrams exported from standard modeling tools.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <LineChart className="feature-icon" />
            </div>
            <h3>Dual Model Estimation</h3>
            <p>Employs Use Case Points (UCP) for functional diagrams and advanced Graph Weight modeling for structural object-oriented designs.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <ShieldCheck className="feature-icon" />
            </div>
            <h3>Defensible Budgets</h3>
            <p>Incorporate granular Technical Complexity and Environmental factors for projections you can confidently present to stakeholders.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
