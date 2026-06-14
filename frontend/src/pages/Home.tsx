import { Link } from 'react-router-dom';
import { FileCode2, Zap, BarChart3, ArrowRight } from 'lucide-react';
import './Pages.css';

export const Home = () => {
  return (
    <div className="page-container home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            Now supporting Class & Use Case Diagrams
          </div>
          <h1 className="hero-title">
            Stop Guessing.<br />
            <span className="text-gradient">Start Estimating with Precision.</span>
          </h1>
          <p className="hero-subtitle">
            Instantly turn your system architecture diagrams into defensible, data-backed
            project estimates. Upload your XML or JSON UML files and let our algorithm
            do the heavy lifting.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn-primary btn-large">
              Calculate Estimate
              <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-secondary btn-large">
              Learn How It Works
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-card mockup-card">
            <div className="mockup-header">
              <div className="window-controls">
                <span></span><span></span><span></span>
              </div>
              <div className="mockup-title">Estimate Summary</div>
            </div>
            <div className="mockup-body">
              <div className="skeleton-row"></div>
              <div className="skeleton-row short"></div>
              <div className="mockup-stats">
                <div className="stat-box">
                  <div className="stat-value">1,240</div>
                  <div className="stat-label">Est. Hours</div>
                </div>
                <div className="stat-box accent">
                  <div className="stat-value">₹62,000</div>
                  <div className="stat-label">Total Cost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Intelligent Diagram Parsing</h2>
          <p>Built for modern software engineering teams.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper blue">
              <FileCode2 size={28} />
            </div>
            <h3>Multi-Format Support</h3>
            <p>Upload Use Case Diagrams or Class Diagrams exported from your favorite modeling tools in standard XML or JSON formats.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper green">
              <Zap size={28} />
            </div>
            <h3>Blazing Fast Backend</h3>
            <p>Powered by a custom C++ Winsock server for zero-dependency, ultra-fast diagram parsing and algorithmic calculation.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper cyan">
              <BarChart3 size={28} />
            </div>
            <h3>Adjustable Factors</h3>
            <p>Fine-tune Technical (TCF) and Environmental (ECF) complexity factors to precisely match your team's capabilities and project constraints.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
