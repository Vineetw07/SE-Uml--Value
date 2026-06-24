import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Database, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-pulse"></span>
            Award Winning Software Estimation
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Predict the Future of Your <span className="gradient-text">Software Projects</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Transform your system architecture diagrams directly into accurate, defensible hour and cost estimates using intelligent parsing and industry-standard mathematical models.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <button className="primary-btn pulse-hover" onClick={() => navigate('/estimator')}>
              Start Estimating <ArrowRight size={20} />
            </button>
            <button className="secondary-btn hover-lift" onClick={() => navigate('/about')}>
              Learn How It Works
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="glass-card visual-card">
            <div className="visual-card-header">
              <div className="dots"><span></span><span></span><span></span></div>
            </div>
            <div className="visual-card-body">
              <div className="mock-code"></div>
              <div className="mock-chart">
                <div className="bar b1"></div>
                <div className="bar b2"></div>
                <div className="bar b3"></div>
                <div className="bar b4"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="features-section">
        <motion.div
          className="features-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>Why choose our platform?</motion.h2>
          <motion.p variants={itemVariants}>Engineered for precision and built for scale.</motion.p>
        </motion.div>

        <motion.div
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper"><BarChart3 size={32} /></div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically detect and analyze XML or JSON diagrams. No manual counting required.</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper"><ShieldCheck size={32} /></div>
            <h3>Defensible Estimates</h3>
            <p>Backed by the Use Case Points (UCP) and Graph Weight mathematical models.</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper"><Database size={32} /></div>
            <h3>Self-Calibrating</h3>
            <p>Logs historical actuals against estimates to constantly improve future accuracy.</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
