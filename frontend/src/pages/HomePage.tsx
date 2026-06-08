import React from 'react';
import { Link } from 'react-router-dom';
import { FileUp, Calculator, BarChart3, Settings } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">The Award-Winning Standard</p>
          <h1 className="hero-title">Predict Software Costs with Confidence</h1>
          <p className="hero-subtitle">
            Instantly turn your UML Class and Use Case diagrams into accurate, defensible project estimates.
            Stop guessing, start measuring.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn--primary hero-btn">
              Start Estimating Now
              <Calculator className="btn-icon" size={18} />
            </Link>
            <Link to="/about" className="btn btn--secondary hero-btn">
              Learn How It Works
            </Link>
          </div>
        </div>
        <div className="hero-visual">
           <div className="workflow-pulse" aria-hidden="true" style={{width: '100%', minHeight: '80px', justifyContent: 'center'}}>
            <span>UML Diagram</span>
            <i />
            <span>AI Model</span>
            <i />
            <span>Detailed Estimate</span>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose UML Value Estimator?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
               <FileUp size={24} className="feature-icon" />
            </div>
            <h3>Seamless Upload</h3>
            <p>Directly parse standard UML diagram files (XML/JSON). No manual data entry required.</p>
          </div>
          <div className="feature-card">
             <div className="feature-icon-wrapper">
               <Settings size={24} className="feature-icon" />
            </div>
            <h3>Customizable Factors</h3>
            <p>Fine-tune Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) to match your team's reality.</p>
          </div>
          <div className="feature-card">
             <div className="feature-icon-wrapper">
               <BarChart3 size={24} className="feature-icon" />
            </div>
            <h3>Detailed Breakdown</h3>
            <p>Get a comprehensive view of Use Case Points (UCP), expected hours, and total cost in an easy-to-read format.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
         <div className="cta-content">
            <h2>Ready to transform your estimation process?</h2>
            <p>Join the future of software project planning today.</p>
            <Link to="/estimator" className="btn btn--primary cta-btn">
              Go to Workspace
            </Link>
         </div>
      </section>
    </div>
  );
};
