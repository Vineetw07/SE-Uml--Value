import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Transition } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

export const Home: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-content"
    >
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Predict Software Costs with Precision</h1>
          <p className="hero-subtitle">
            Automate software project hours and costs directly from system architecture diagrams.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn btn--primary btn--large">
              Start Estimating <ArrowRight className="btn-icon" size={20} />
            </Link>
            <Link to="/about" className="btn btn--secondary btn--large">
              Learn How it Works
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Calculator size={32} />
            </div>
            <h3>Intelligent Diagram Parsing</h3>
            <p>Automatically detects and reads Use Case Diagrams and Class Diagrams.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <CheckCircle2 size={32} />
            </div>
            <h3>Two Estimation Engines</h3>
            <p>Uses Use Case Points (UCP) for Use Cases and Graph Weight for Classes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <CheckCircle2 size={32} />
            </div>
            <h3>Customizable Complexity</h3>
            <p>Fine-tune estimates with Technical (TCF) and Environmental (ECF) factors.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
