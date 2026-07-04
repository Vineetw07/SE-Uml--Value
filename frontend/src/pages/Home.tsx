import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCode2, Zap, BarChart3, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { ease: 'easeInOut' }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="hero-section">
        <motion.div className="hero-content" variants={itemVariants}>
          <span className="hero-badge">AI-Powered Estimation</span>
          <h1 className="hero-title">Predict project costs directly from your architecture diagrams.</h1>
          <p className="hero-subtitle">
            Say goodbye to tedious manual counting. Upload your Use Case or Class Diagrams to instantly generate defensible effort and cost estimates.
          </p>
          <div className="hero-actions">
            <Link to="/tool" className="btn-primary">
              Launch Estimator <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-secondary">
              How it works
            </Link>
          </div>
        </motion.div>

        <motion.div className="hero-visual" variants={itemVariants}>
          <div className="abstract-graphic">
             <div className="node n1"></div>
             <div className="node n2"></div>
             <div className="node n3"></div>
             <div className="edge e1"></div>
             <div className="edge e2"></div>
          </div>
        </motion.div>
      </section>

      <motion.section className="features-section" variants={itemVariants}>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><FileCode2 size={28} /></div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically detects and parses Use Case and Class diagrams in standard JSON or XML formats.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Zap size={28} /></div>
            <h3>Instant Analysis</h3>
            <p>Apply industry-standard models like Use Case Points (UCP) or Graph Weights instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><BarChart3 size={28} /></div>
            <h3>Detailed Breakdowns</h3>
            <p>Get a comprehensive view of actors, use cases, classes, attributes, and estimated hours.</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};
