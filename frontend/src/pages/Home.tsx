import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, ShieldCheck } from 'lucide-react';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="hero-content">
          <div className="badge">Award-Winning Estimation Tool</div>
          <h1 className="hero-title">
            Transform UML Diagrams <br />
            into <span className="text-gradient">Precise Estimates</span>
          </h1>
          <p className="hero-subtitle">
            Instantly calculate project hours, resource costs, and architectural
            complexity directly from your Use Case and Class Diagrams.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn-primary">
              Start Estimating <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn-secondary">
              Read the Methodology
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2>Why teams trust our estimator</h2>
            <p>Built on standard software engineering models to deliver defensible numbers.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <BarChart3 className="feature-icon" />
              </div>
              <h3>Use Case Points (UCP)</h3>
              <p>Automatically extract actors and use cases to evaluate system complexity and calculate base hours.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Database className="feature-icon" />
              </div>
              <h3>Graph Weight Model</h3>
              <p>Parse class diagrams to analyze structural density, factoring in attributes, methods, and relationships.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck className="feature-icon" />
              </div>
              <h3>Defensible Costs</h3>
              <p>Factor in technical (TCF) and environmental (ECF) variables to adjust raw effort into accurate cost projections.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to map your architecture to reality?</h2>
          <p>Drop in your first XML diagram and see the magic happen.</p>
          <Link to="/estimator" className="btn-primary btn-large">
            Launch the Tool Now
          </Link>
        </div>
      </section>
    </div>
  );
};
