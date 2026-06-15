import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, FileCode2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page fade-in">
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            Estimation Engine v2.0
          </div>
          <h1 className="hero-title">
            Predict Cost & Effort from <span className="text-gradient">UML Diagrams</span>
          </h1>
          <p className="hero-subtitle">
            Upload your system architecture diagrams and let our algorithmic engine generate defensible, accurate software cost estimates in seconds.
          </p>
          <div className="hero-actions">
            <Link to="/workspace" className="btn btn-primary btn-lg">
              Go to Workspace
              <ArrowRight className="icon-right" size={20} />
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              How it works
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glass-panel main-panel">
            <div className="panel-header">
              <div className="window-controls">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="panel-body">
              <div className="mock-chart">
                <div className="bar" style={{ height: '40%' }}></div>
                <div className="bar" style={{ height: '70%' }}></div>
                <div className="bar" style={{ height: '55%' }}></div>
                <div className="bar" style={{ height: '90%' }}></div>
                <div className="bar" style={{ height: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Intelligent Diagram Parsing</h2>
          <p>Two robust mathematical models to handle your architectural blueprints.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon-wrapper blue">
              <FileCode2 size={24} />
            </div>
            <h3>Use Case Points (UCP)</h3>
            <p>
              Upload Use Case diagrams to automatically extract Actors and Use Cases. The engine applies the industry-standard UCP formula to calculate development effort.
            </p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon-wrapper green">
              <Database size={24} />
            </div>
            <h3>Graph Weight Model</h3>
            <p>
              Drop in Class diagrams. We parse classes, attributes, methods, and relationships to assign specific hour factors based on architectural complexity.
            </p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon-wrapper purple">
              <BarChart3 size={24} />
            </div>
            <h3>Self-Calibrating</h3>
            <p>
              Log actual time spent versus our estimates. Our SQLite database captures feedback to calibrate and refine future algorithmic predictions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
