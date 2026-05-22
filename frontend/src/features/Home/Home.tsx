import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Software Cost Estimation, Automated.</h1>
        <p className="hero-subtitle">
          Turn your UML diagrams into defensible effort and cost estimates instantly.
          Powered by intelligent parsing and proven models like UCP and Graph Weight.
        </p>
        <Link to="/estimator" className="cta-button">Start Estimating Now</Link>
      </section>

      <section className="features-section">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Intelligent Parsing</h3>
            <p>Automatically detect and read Use Case and Class Diagrams in XML or JSON format.</p>
          </div>
          <div className="feature-card">
            <h3>Two Estimation Engines</h3>
            <p>Utilizing Use Case Points (UCP) and Graph Weight models tailored for your architecture.</p>
          </div>
          <div className="feature-card">
            <h3>Custom Complexity</h3>
            <p>Fine-tune Technical (TCF) and Environmental (ECF) factors to match your team's capability.</p>
          </div>
          <div className="feature-card">
            <h3>Automated Budgeting</h3>
            <p>Instantly convert estimated effort hours into concrete financial budgets with customizable rates.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
