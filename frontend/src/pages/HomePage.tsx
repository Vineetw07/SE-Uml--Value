import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Layers, Zap, ShieldCheck } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Award-Winning Platform 2024</div>
          <h1 className="hero-title">
            Transform UML Diagrams into <span className="text-gradient">Precise Estimates</span>
          </h1>
          <p className="hero-subtitle">
            Leverage advanced Graph Weight and UCP models to automate software cost prediction with unprecedented accuracy.
          </p>
          <div className="hero-actions">
            <Link to="/workspace" className="btn btn--primary hero-btn">
              Start Estimating Now
            </Link>
            <Link to="/about" className="btn btn--secondary hero-btn">
              Learn How It Works
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
          <div className="glass-card mockup-card">
            <div className="mockup-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="mockup-body">
              <div className="mockup-line w-3/4"></div>
              <div className="mockup-line w-1/2"></div>
              <div className="mockup-chart">
                <div className="chart-bar h-1"></div>
                <div className="chart-bar h-3"></div>
                <div className="chart-bar h-2"></div>
                <div className="chart-bar h-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Enterprise-Grade Estimation</h2>
          <p>Built for architects, designed for precision.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper bg-blue">
              <Layers className="feature-icon" />
            </div>
            <h3>Seamless Parsing</h3>
            <p>Upload XML or JSON representations of your Use Case or Class diagrams. We handle the complex structural analysis instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper bg-green">
              <Activity className="feature-icon" />
            </div>
            <h3>Intelligent Modeling</h3>
            <p>Automatically applies Use Case Points (UCP) for functional views and Graph Weight algorithms for structural views.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper bg-purple">
              <Zap className="feature-icon" />
            </div>
            <h3>Actionable Insights</h3>
            <p>Get a detailed breakdown of elements, predicted hours, and comprehensive cost structures in seconds, not days.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper bg-orange">
              <ShieldCheck className="feature-icon" />
            </div>
            <h3>Defensible Results</h3>
            <p>Every estimate is backed by established software engineering methodologies, giving you confidence in client meetings.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content glass-card">
          <h2>Ready to streamline your workflow?</h2>
          <p>Join top-tier software teams who have eliminated estimation guesswork.</p>
          <Link to="/workspace" className="btn btn--primary btn--large">
            Launch Workspace
          </Link>
        </div>
      </section>
    </div>
  );
};
