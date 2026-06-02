import { Link } from 'react-router-dom';
import { FileUp, Calculator, BrainCircuit, ArrowRight } from 'lucide-react';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Next Generation Software Estimation</div>
          <h1 className="hero-title">
            Transform Architecture into <br />
            <span className="text-gradient">Accurate Estimates</span>
          </h1>
          <p className="hero-description">
            Upload your system architecture diagrams. Our intelligent engine parses Use Case and Class Diagrams to generate defensible project hours and cost predictions instantly.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn-primary btn-lg">
              Start Estimating <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              Learn Methodology
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-card visual-card">
             <div className="visual-pulse-container">
                <FileUp className="visual-icon source" size={48} />
                <div className="visual-line"></div>
                <BrainCircuit className="visual-icon engine" size={48} />
                <div className="visual-line"></div>
                <Calculator className="visual-icon output" size={48} />
             </div>
             <p className="visual-caption">Automated UML Analysis Workflow</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-header">
          <p className="eyebrow">Why UML Estimator?</p>
          <h2>Award-Winning Precision Built on Standards</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FileUp className="feature-icon" />
            </div>
            <h3>Seamless Uploads</h3>
            <p>Simply drop your exported XML/XMI or native modeling files directly into the workspace.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <BrainCircuit className="feature-icon" />
            </div>
            <h3>Intelligent Parsing</h3>
            <p>Our backend reads your Class and Use Case structures, extracting actor complexities and class weights.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Calculator className="feature-icon" />
            </div>
            <h3>Defensible Data</h3>
            <p>Generates detailed breakdowns using industry-standard Use Case Points (UCP) and Class Graph Weighting.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content glass-card">
          <h2>Ready to revolutionize your project planning?</h2>
          <p>Stop guessing. Start estimating with architectural precision.</p>
          <Link to="/estimator" className="btn btn-primary btn-lg">
            Launch Estimator Workspace
          </Link>
        </div>
      </section>
    </div>
  );
};
