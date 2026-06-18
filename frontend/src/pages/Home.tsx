import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileJson, GitGraph, Zap, FileCode, CheckCircle2 } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="page-container home-page">
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
        >
          <div className="hero-badge">
            <Zap size={16} className="text-cyan" />
            <span>Automated Software Estimation</span>
          </div>
          <h1 className="hero-title">
            Stop Guessing.<br />
            <span className="text-gradient">Start Calculating.</span>
          </h1>
          <p className="hero-subtitle">
            Instantly turn your UML Class and Use Case diagrams into precise effort and cost estimations backed by industry-standard mathematical models.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn--primary btn--large">
              Calculate Estimate Now
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn--secondary btn--large">
              Read the Methodology
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-visual"
        >
          <div className="diagram-card shadow-md">
            <div className="diagram-header">
              <FileCode size={20} className="text-primary" />
              <span>Ecommerce_System.xml</span>
            </div>
            <div className="diagram-body">
              <div className="diagram-mock-node node-1">User</div>
              <div className="diagram-mock-line line-1" />
              <div className="diagram-mock-node node-2">Checkout</div>
              <div className="diagram-mock-line line-2" />
              <div className="diagram-mock-node node-3">Payment Gateway</div>
            </div>
          </div>

          <div className="calculation-card shadow-md">
             <div className="calc-row">
               <span>Unadjusted UCP</span>
               <strong>145.2</strong>
             </div>
             <div className="calc-row">
               <span>Effort Estimate</span>
               <strong className="text-primary">1,240 hrs</strong>
             </div>
             <div className="calc-total">
               <span>Total Budget</span>
               <strong className="text-green">$62,000</strong>
             </div>
          </div>
        </motion.div>
      </section>

      <section className="features-section">
        <div className="features-header text-center">
          <h2 className="section-title">Why Use Our Estimator?</h2>
          <p className="section-subtitle">A defensible, transparent process directly linked to your system architecture.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon bg-blue-50 text-primary">
              <FileJson size={28} />
            </div>
            <h3 className="feature-title">Native Diagram Support</h3>
            <p className="feature-desc">Upload exported XML or JSON files from popular UML modeling tools directly into the engine. No manual counting required.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon bg-green-50 text-green">
              <GitGraph size={28} />
            </div>
            <h3 className="feature-title">Dual Model Engine</h3>
            <p className="feature-desc">Intelligently detects your diagram type and applies Use Case Points (UCP) or Graph Weight models for highly accurate predictions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon bg-cyan-50 text-cyan">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="feature-title">Contextual Tuning</h3>
            <p className="feature-desc">Adjust Technical (TCF) and Environmental (ECF) factors via sliders to account for your team's unique capabilities and project scope.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
