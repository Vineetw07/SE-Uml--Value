import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Cpu, Code2 } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="page-container home-page"
    >
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hero-badge"
          >
            Award Winning AI Estimation
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Predict Software Cost<br/>
            <span className="text-gradient">From Architecture</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Upload your UML diagrams and let our advanced algorithmic engine instantly calculate defensible effort and budget estimates using industry-standard models.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link to="/estimator" className="btn-primary btn-large">
              Start Estimating <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn-secondary btn-large">
              Learn How It Works
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="abstract-graphic">
            <div className="floating-card card-1"><Activity /> Analysis</div>
            <div className="floating-card card-2"><Code2 /> Models</div>
            <div className="floating-card card-3"><Cpu /> Engine</div>
            <div className="central-core">UML</div>
          </div>
        </motion.div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why choose our estimator?</h2>
        <div className="features-grid">
          <motion.div
            className="feature-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon"><Activity size={32} /></div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically detect and analyze Use Case and Class diagrams with high precision.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon"><Code2 size={32} /></div>
            <h3>Dual Engines</h3>
            <p>Employs Use Case Points (UCP) and Graph Weight models tailored for specific diagram types.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon"><Cpu size={32} /></div>
            <h3>Custom Complexity</h3>
            <p>Fine-tune Technical (TCF) and Environmental (ECF) factors to match your unique team.</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
