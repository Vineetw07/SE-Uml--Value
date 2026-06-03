import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Cpu, Zap } from 'lucide-react';

export const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-glow"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">Next-Gen Software Estimation</div>
          <h1 className="hero-title">
            Predict Software Costs with <span className="text-gradient">AI Precision</span>
          </h1>
          <p className="hero-subtitle">
            Transform your UML diagrams into highly accurate effort and cost estimates. Experience a defensible estimation workflow trusted by modern engineering teams.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn-primary btn-lg">
              Start Estimating <ArrowRight size={20} />
            </Link>
            <Link to="/how-it-works" className="btn btn-secondary btn-lg">
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Award-Winning Capabilities</h2>
          <p>Built with enterprise-grade models for unmatched accuracy.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Activity className="feature-icon" />
            </div>
            <h3>Use Case Points (UCP)</h3>
            <p>Calculate effort precisely by analyzing actors, use cases, and complex technical and environmental factors.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Cpu className="feature-icon" />
            </div>
            <h3>Class Graph Weight</h3>
            <p>Evaluate deep structural complexity by assessing classes, attributes, methods, and their relationships.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Zap className="feature-icon" />
            </div>
            <h3>Instant Analysis</h3>
            <p>Upload your JSON or XML diagrams and receive a detailed, itemized breakdown of costs in milliseconds.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
