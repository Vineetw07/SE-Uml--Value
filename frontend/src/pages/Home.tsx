import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Predict Software Costs <br />
            <span className="text-gradient">With Precision</span>
          </h1>
          <p className="hero-description">
            Upload your system architecture diagrams and let our automated estimation tool
            calculate project hours and costs using industry-standard models.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn-primary btn-large">
              Start Estimating
            </Link>
            <Link to="/about" className="btn btn-secondary btn-large">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-card visual-card">
            <div className="code-mockup">
              <div className="code-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <pre>
                <code>
                  {`{
  "project": "E-Commerce System",
  "model": "Use Case Points",
  "estimatedHours": 342,
  "cost": "$25,650"
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Use UML Estimator?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Analysis</h3>
            <p>Automatically detects and reads your exported JSON/XML diagrams in seconds.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Smart Models</h3>
            <p>Applies Use Case Points (UCP) or Graph Weight models for accurate predictions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Customizable</h3>
            <p>Fine-tune estimates by adjusting Technical and Environmental Complexity Factors.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
