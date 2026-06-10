import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, FileJson, Layers, Zap } from 'lucide-react';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-glow"></div>
          <div className="hero-grid"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot"></span>
              v2.0 Estimation Engine Live
            </div>
            <h1 className="hero-title">
              Stop guessing. <br />
              <span className="text-gradient">Start estimating with data.</span>
            </h1>
            <p className="hero-subtitle">
              Transform your UML architecture diagrams into defensible cost and effort estimates in seconds. Built for software engineering teams who demand precision.
            </p>
            <div className="hero-actions">
              <Link to="/estimator" className="btn btn-primary btn-lg">
                Calculate Estimate Now
                <ArrowRight size={18} />
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-lg">
                View the Math
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-card visual-card">
              <div className="visual-header">
                <div className="window-controls">
                  <span></span><span></span><span></span>
                </div>
                <div className="window-title">estimation-engine.exe</div>
              </div>
              <div className="visual-body">
                <div className="code-block">
                  <div className="line"><span className="keyword">import</span> {'{ UMLParser }'} <span className="keyword">from</span> <span className="string">'@core/engine'</span>;</div>
                  <div className="line"><span className="keyword">const</span> diagram = <span className="keyword">await</span> UMLParser.read(<span className="string">'architecture.xml'</span>);</div>
                  <div className="line"><br/></div>
                  <div className="line"><span className="comment">// Calculating Use Case Points (UCP)...</span></div>
                  <div className="line"><span className="keyword">const</span> result = diagram.calculateCost({'{'}</div>
                  <div className="line">  rate: <span className="number">125</span>,</div>
                  <div className="line">  currency: <span className="string">'USD'</span></div>
                  <div className="line">{'}'});</div>
                  <div className="line"><br/></div>
                  <div className="line terminal-output">&gt; Total Effort: 420 hours</div>
                  <div className="line terminal-output">&gt; Project Cost: $52,500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Algorithmic Precision</h2>
            <p className="section-subtitle">
              Replace manual counting with an automated pipeline that parses your diagrams directly.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FileJson className="feature-icon" size={24} />
              </div>
              <h3>Intelligent Parsing</h3>
              <p>Automatically detects and reads Use Case Diagrams and Class Diagrams exported as XML or JSON.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Layers className="feature-icon" size={24} />
              </div>
              <h3>Dual Estimation Engines</h3>
              <p>Utilizes Use Case Points (UCP) for functional diagrams and Graph Weight models for structural diagrams.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <BarChart3 className="feature-icon" size={24} />
              </div>
              <h3>Complexity Tuning</h3>
              <p>Fine-tune estimates with 20+ Technical (TCF) and Environmental (ECF) complexity factors.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Zap className="feature-icon" size={24} />
              </div>
              <h3>C++ Backend</h3>
              <p>Powered by a blazing-fast, zero-dependency C++ Winsock server for instant diagram analysis.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Database className="feature-icon" size={24} />
              </div>
              <h3>Self-Calibrating</h3>
              <p>Built-in SQLite database logs actual vs. estimated hours to continuously improve team accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card glass-card">
            <div className="cta-content">
              <h2>Ready to standardize your estimation process?</h2>
              <p>Upload your first diagram and get a detailed breakdown in seconds.</p>
              <Link to="/estimator" className="btn btn-primary btn-lg">
                Launch Workspace
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
