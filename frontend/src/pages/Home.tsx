import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, Zap, Settings2, BarChart3, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="page-container home-page">
      <motion.div
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <div className="badge">
            <span className="badge-dot"></span>
            Intelligence for Software Design
          </div>
          <h1 className="hero-title">
            Transform Architecture into Actionable <span className="text-gradient">Estimates</span>
          </h1>
          <p className="hero-subtitle">
            Upload your UML diagrams and instantly generate highly accurate, model-backed predictions for project hours and costs. Stop guessing, start calculating.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/estimator')}>
              Start Estimating
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={() => navigate('/about')}>
              How it works
            </button>
          </div>
        </motion.div>

        <motion.div className="hero-visual" variants={itemVariants}>
          <div className="glass-card visual-card">
             <div className="visual-header">
                <div className="mac-dots">
                   <span className="dot close"></span>
                   <span className="dot minimize"></span>
                   <span className="dot maximize"></span>
                </div>
             </div>
             <div className="visual-body">
                <div className="data-row"><span className="label">Complexity</span> <span className="value">High</span></div>
                <div className="data-row"><span className="label">Total UCP</span> <span className="value">145.2</span></div>
                <div className="data-row highlight"><span className="label">Est. Effort</span> <span className="value">3,450 hrs</span></div>
                <div className="data-row"><span className="label">Budget</span> <span className="value">$172,500</span></div>
             </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon"><FileCode2 size={28} /></div>
          <h3>Automated Parsing</h3>
          <p>Instantly reads JSON and XML exports from standard modeling tools for both Use Case and Class Diagrams.</p>
        </motion.div>

        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon"><Zap size={28} /></div>
          <h3>Dual Engine</h3>
          <p>Applies Use Case Points (UCP) for functional views and Graph Weight models for structural views.</p>
        </motion.div>

        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon"><Settings2 size={28} /></div>
          <h3>Customizable Factors</h3>
          <p>Tune 13 Technical (TCF) and 8 Environmental (ECF) complexity factors to match your specific context.</p>
        </motion.div>

        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon"><BarChart3 size={28} /></div>
          <h3>Actionable Insights</h3>
          <p>Get immediate breakdowns of component counts, effort hours, and financial costs based on your hourly rate.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
