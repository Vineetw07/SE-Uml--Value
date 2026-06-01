import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Code, DollarSign } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Award-Winning Accuracy</div>
            <h1 className="hero-title">
              Predict Software Costs with <span>Precision</span>
            </h1>
            <p className="hero-subtitle">
              Transform your UML diagrams into defensible effort and cost estimates in seconds. Powered by advanced UCP and Class Graph Weight modeling.
            </p>
            <div className="hero-actions">
              <Link to="/estimator" className="hero-btn primary-btn">
                Start Estimating <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/about" className="hero-btn secondary-btn">
                Learn the Science
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-panel">
              <div className="panel-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="panel-body">
                <div className="stat-row">
                  <Activity className="stat-icon blue" />
                  <div className="stat-text">
                    <div className="stat-label">Model Parsing</div>
                    <div className="stat-val">Complete</div>
                  </div>
                </div>
                <div className="stat-row">
                  <Code className="stat-icon purple" />
                  <div className="stat-text">
                    <div className="stat-label">Complexity Scored</div>
                    <div className="stat-val">High</div>
                  </div>
                </div>
                <div className="stat-row">
                  <DollarSign className="stat-icon green" />
                  <div className="stat-text">
                    <div className="stat-label">Cost Projected</div>
                    <div className="stat-val">Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2>Why Choose UML Value Estimator?</h2>
            <p>Built for architects, project managers, and development teams to bridge the gap between design and budget.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <Activity className="feature-icon" />
              </div>
              <h3>Automated Analysis</h3>
              <p>Upload standard XML or JSON UML files and let our engine parse relationships, methods, and actors automatically.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <Code className="feature-icon" />
              </div>
              <h3>Scientific Models</h3>
              <p>Utilizes industry-standard Use Case Points (UCP) and innovative Class Graph Weight methodologies for robust estimates.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <DollarSign className="feature-icon" />
              </div>
              <h3>Actionable Insights</h3>
              <p>Get a comprehensive breakdown of hours and costs, complete with visual summaries and actionable data tables.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
