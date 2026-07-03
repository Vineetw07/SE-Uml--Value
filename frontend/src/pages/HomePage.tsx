import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, Zap, FileJson, TrendingUp } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.5
};

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-container"
    >
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hero-badge"
          >
            Award-Winning Estimation Engine
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hero-title"
          >
            Predict Software Costs <br />
            <span className="text-gradient">Directly from Diagrams.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hero-subtitle"
          >
            Upload your standard Use Case or Class Diagrams and instantly generate
            highly accurate, defensible project estimates. Stop guessing, start measuring.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hero-actions"
          >
            <Link to="/estimator" className="btn btn-primary btn-large">
              Start Estimating Now
              <Zap className="btn-icon" size={20} />
            </Link>
            <Link to="/about" className="btn btn-secondary btn-large">
              Learn How It Works
            </Link>
          </motion.div>
        </div>
        <div className="hero-visual">
          <div className="abstract-ui" aria-hidden="true">
            <div className="ui-card card-1"><FileJson size={32} /><span>Parse UML</span></div>
            <div className="ui-card card-2"><Calculator size={32} /><span>Apply Model</span></div>
            <div className="ui-card card-3"><TrendingUp size={32} /><span>Get Estimate</span></div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon-wrap"><FileJson /></div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically processes standard JSON/XML diagram exports from tools like draw.io or Enterprise Architect.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap"><Calculator /></div>
            <h3>Dual Estimation Engines</h3>
            <p>Employs Use Case Points (UCP) for functional diagrams and Graph Weighting for structural class diagrams.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap"><TrendingUp /></div>
            <h3>Defensible Metrics</h3>
            <p>Tune environmental and technical complexity factors to match your team's unique velocity and constraints.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
