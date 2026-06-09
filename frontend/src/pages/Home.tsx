import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, ShieldCheck, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Award-Winning Estimation Intelligence
          </div>
          <h1 className="hero-title">
            Predict software costs with
            <span className="text-gradient"> mathematical precision</span>
          </h1>
          <p className="hero-subtitle">
            Transform your system architecture diagrams into defensible effort and cost estimates.
            Stop guessing and start analyzing with our advanced UML evaluation engine.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn--primary btn--large">
              Open Estimator <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn--secondary btn--large">
              How it works
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-panel main-visual">
            <div className="visual-header">
              <div className="mac-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="visual-title">UCP Calculation Model</div>
            </div>
            <div className="visual-body">
               <div className="diagram-mock">
                  <div className="node actor">Actor</div>
                  <div className="line line-1"></div>
                  <div className="node usecase uc-1">Authenticate</div>
                  <div className="line line-2"></div>
                  <div className="node usecase uc-2">Process Payment</div>
               </div>
               <div className="calc-overlay">
                 <div className="calc-row"><span>Unadjusted UCP</span> <strong>85.4</strong></div>
                 <div className="calc-row"><span>Technical Factor</span> <strong>1.05</strong></div>
                 <div className="calc-row total"><span>Est. Hours</span> <strong>1,240</strong></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Engineering Intelligence</h2>
          <p>Powered by industry-standard metrics like Use Case Points and Class Graph Weight methodologies.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Zap className="text-primary" size={28} /></div>
            <h3>Instant Analysis</h3>
            <p>Upload your UML diagrams and get detailed cost and hour breakdowns in milliseconds.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><BarChart3 className="text-cyan" size={28} /></div>
            <h3>Granular Metrics</h3>
            <p>Every class, attribute, and method is weighted to provide a highly accurate calculation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Database className="text-green" size={28} /></div>
            <h3>Data-Driven Defense</h3>
            <p>Back up your project proposals with solid math and transparent architectural analysis.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ShieldCheck className="text-ink" size={28} /></div>
            <h3>Standard Compliant</h3>
            <p>Built on established software engineering estimation standards and best practices.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to revolutionize your project planning?</h2>
          <p>Join thousands of software architects who trust our tool for their estimation needs.</p>
          <Link to="/estimator" className="btn btn--primary btn--large cta-btn">
            Start Estimating Now
          </Link>
        </div>
      </section>
    </div>
  );
};
