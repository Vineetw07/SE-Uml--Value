import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Zap, FileSpreadsheet, ShieldCheck, Activity } from 'lucide-react';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            Award Winning Software Estimation
          </div>
          <h1 className="hero-title">
            Stop Guessing.<br/>
            <span className="text-gradient">Start Calculating.</span>
          </h1>
          <p className="hero-subtitle">
            Transform your UML diagrams into precise, defensible cost and effort estimates in seconds.
            Powered by industry-standard models like Use Case Points and Class Graph Weights.
          </p>
          <div className="hero-actions">
            <button className="btn-primary-large" onClick={() => navigate('/estimator')}>
              Start Estimating Now
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary-large" onClick={() => navigate('/about')}>
              How it works
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-card visual-card main-card">
            <div className="card-header">
              <Code className="icon-blue" />
              <span>ProjectAnalysis.xml</span>
            </div>
            <div className="code-lines">
              <div className="line l1"></div>
              <div className="line l2"></div>
              <div className="line l3"></div>
              <div className="line l4"></div>
            </div>
          </div>
          <div className="glass-card visual-card stat-card stat-1">
            <div className="stat-value">₹450k</div>
            <div className="stat-label">Estimated Cost</div>
          </div>
          <div className="glass-card visual-card stat-card stat-2">
            <div className="stat-value">320h</div>
            <div className="stat-label">Total Effort</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose Our Estimator?</h2>
          <p>Built for architects, project managers, and development teams who need accurate projections.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper bg-blue">
              <Activity className="feature-icon text-blue" />
            </div>
            <h3>Instant Analysis</h3>
            <p>Upload standard XML/JSON UML diagrams and get results immediately. No manual data entry required.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper bg-green">
              <ShieldCheck className="feature-icon text-green" />
            </div>
            <h3>Defensible Reports</h3>
            <p>Our estimates are backed by proven mathematical models, providing clear justification for your stakeholders.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper bg-purple">
              <Zap className="feature-icon text-purple" />
            </div>
            <h3>Context Aware</h3>
            <p>Tune 21 different environmental and technical factors to match your specific team's capabilities and project complexity.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper bg-orange">
              <FileSpreadsheet className="feature-icon text-orange" />
            </div>
            <h3>Detailed Breakdown</h3>
            <p>See exactly where the effort goes. Uncover hidden complexities in your use cases and class architectures.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
