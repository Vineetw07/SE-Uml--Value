import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Code2, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="hero-badge">
            <span className="sparkle">✨</span> Software Estimation Reimagined
          </motion.div>

          <motion.h1 variants={item} className="hero-title">
            Predict Software Costs <br/>
            <span className="text-gradient">With Scientific Precision</span>
          </motion.h1>

          <motion.p variants={item} className="hero-subtitle">
            An automated estimation tool that predicts software project hours and costs directly from system architecture diagrams. Stop guessing, start measuring.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <Link to="/estimate" className="btn btn--primary btn--large">
              Start Estimating <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn--secondary btn--large">
              Learn How It Works
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="abstract-graphic">
             <div className="glass-panel">
               <div className="fake-code-line" style={{ width: '60%' }}></div>
               <div className="fake-code-line" style={{ width: '85%' }}></div>
               <div className="fake-code-line" style={{ width: '40%' }}></div>
               <div className="metrics-row">
                 <div className="metric-box"><div className="value">UCP</div></div>
                 <div className="metric-box"><div className="value">42.5h</div></div>
               </div>
             </div>
             <div className="floating-element el-1"></div>
             <div className="floating-element el-2"></div>
          </div>
        </motion.div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Why Use Our Estimator?</h2>
          <p>Replacing manual component counting with an automated algorithmic approach.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon bg-blue"><Zap size={24} /></div>
            <h3>Intelligent Diagram Parsing</h3>
            <p>Automatically detects and reads Use Case Diagrams and Class Diagrams from JSON or XML exports.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon bg-green"><BarChart3 size={24} /></div>
            <h3>Two Estimation Engines</h3>
            <p>Uses the Use Case Points (UCP) model for Use Case Diagrams and a Graph Weight model for Class Diagrams.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon bg-cyan"><Code2 size={24} /></div>
            <h3>Customizable Complexity</h3>
            <p>Fine-tune your estimates by adjusting Technical and Environmental Complexity Factors based on your team context.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
