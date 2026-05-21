import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow fade-in" style={{ animationDelay: '0.1s' }}>Welcome to</p>
          <h1 className="hero-title fade-in" style={{ animationDelay: '0.2s' }}>
            The Future of <span className="text-gradient">Software Estimation</span>
          </h1>
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.3s' }}>
            Upload your UML diagrams and instantly get intelligent, defensible cost and effort estimates backed by industry-standard models.
          </p>
          <div className="hero-actions fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/estimate" className="btn btn-primary btn-large">
              Start Estimating
            </Link>
            <Link to="/about" className="btn btn-secondary btn-large">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-header">
          <p className="eyebrow">Powerful Models</p>
          <h2>Intelligence Engine</h2>
        </div>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Use Case Points (UCP)</h3>
            <p>
              Automatically analyze your Use Case Diagrams to calculate unadjusted weights, apply technical and environmental factors, and compute a highly accurate hourly estimate.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🕸️</div>
            <h3>Graph Weight Model</h3>
            <p>
              Deep dive into Class Diagrams. Our engine maps classes, attributes, methods, and relationships to assign precise hourly weights to your structural architecture.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Calibration</h3>
            <p>
              Say goodbye to manual counting. Instantly calculate technical complexities and environmental risks with simple sliders to adjust your total budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}