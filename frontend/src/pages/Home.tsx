import { Link } from 'react-router-dom';
import { ArrowRight, Activity, FileJson, Clock, DollarSign } from 'lucide-react';

export const Home = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Next-Gen Software Estimation
          </div>
          <h1 className="hero-title">
            From <span>Architecture</span> to <span>Budget</span> in Seconds.
          </h1>
          <p className="hero-subtitle">
            Upload your standard UML models and leverage intelligent parsing and industry-standard algorithms to instantly predict project hours and costs. Stop guessing, start estimating.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn--primary btn--large">
              Start Estimating
              <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn--secondary btn--large">
              Explore the Models
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-card visual-card main-card">
            <div className="card-header">
              <FileJson size={24} className="icon-blue" />
              <span>Use Case Analysis</span>
            </div>
            <div className="card-body">
              <div className="mock-line" style={{ width: '80%' }}></div>
              <div className="mock-line" style={{ width: '60%' }}></div>
              <div className="mock-result">
                <span>Estimated</span>
                <strong>420 hrs</strong>
              </div>
            </div>
          </div>

          <div className="glass-card visual-card float-card-1">
            <Activity size={20} className="icon-green" />
            <div className="float-text">
              <span>Algorithmic</span>
              <strong>Precision</strong>
            </div>
          </div>

          <div className="glass-card visual-card float-card-2">
            <DollarSign size={20} className="icon-cyan" />
            <div className="float-text">
              <span>Total Budget</span>
              <strong>INR 4.5M</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FileJson size={24} />
            </div>
            <h3>Intelligent Diagram Parsing</h3>
            <p>Automatically detects and reads Use Case Diagrams and Class Diagrams from JSON/XML exports.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Activity size={24} />
            </div>
            <h3>Dual Estimation Engines</h3>
            <p>Employs Use Case Points (UCP) for Use Case diagrams and Graph Weight models for Class diagrams.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Clock size={24} />
            </div>
            <h3>Customizable Complexity</h3>
            <p>Fine-tune estimates by adjusting Technical and Environmental Complexity Factors.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
