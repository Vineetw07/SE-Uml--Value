import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <div className="hero-badge">Award-Winning Estimation</div>
          <h1 className="hero-title">Elevate Your Estimation</h1>
          <p className="hero-subtitle">
            Data-driven software effort prediction from your UML architecture diagrams. Turn Class and Use Case diagrams into defensible cost estimates instantly.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn-primary btn-lg">
              Start Estimating <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              Learn How It Works
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
           <div className="glass-panel">
               <div className="workflow-pulse" aria-hidden="true" style={{minWidth: '300px'}}>
                  <span>UML Model</span>
                  <i />
                  <span style={{background: 'var(--color-primary)'}}>AI Engine</span>
                  <i />
                  <span style={{background: 'var(--color-green)'}}>Defensible Cost</span>
               </div>
               <div className="preview-stats">
                   <div className="preview-stat"><strong>95%</strong><span>Accuracy</span></div>
                   <div className="preview-stat"><strong>&lt; 2s</strong><span>Turnaround</span></div>
               </div>
           </div>
        </motion.div>
      </section>

      <section className="features-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2>Why Choose Our Estimator?</h2>
          <p>Built for modern software engineering teams who demand precision.</p>
        </motion.div>

        <div className="features-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="feature-card"
          >
            <div className="feature-icon"><Target size={32} /></div>
            <h3>Pinpoint Accuracy</h3>
            <p>Utilizes established UCP and Graph Weight methodologies tailored with environmental and technical complexity factors.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="feature-card"
          >
            <div className="feature-icon"><Zap size={32} /></div>
            <h3>Lightning Fast</h3>
            <p>Drag, drop, and get comprehensive hour and cost breakdowns in milliseconds, saving days of manual estimation.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="feature-card"
          >
            <div className="feature-icon"><Cpu size={32} /></div>
            <h3>Automated Parsing</h3>
            <p>Intelligently parses standard XML and JSON UML exports, automatically identifying actors, use cases, classes, and relationships.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
