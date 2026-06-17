import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Layers, Play, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <div className="home-page">
      <motion.section
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.div variants={itemVariants} className="hero-badge">
            <Zap size={14} className="hero-badge-icon" />
            <span>AI-Powered Software Estimation</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Predict software cost with <span>precision.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Turn your UML architecture diagrams into defensible effort and cost estimates. Automatically parse Use Case and Class diagrams for rapid, accurate software quoting.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => navigate('/estimator')}
            >
              Start Estimating
              <ArrowRight size={18} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate('/about')}
            >
              How it works
              <Play size={18} />
            </button>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="hero-visual">
          <div className="visual-card">
            <div className="visual-card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="visual-card-body">
               <div className="code-line shimmer-line w-3/4"></div>
               <div className="code-line shimmer-line w-full"></div>
               <div className="code-line shimmer-line w-5/6"></div>
               <div className="code-line shimmer-line w-1/2"></div>
               <div className="estimate-result">
                  <div className="result-label">Estimated Cost</div>
                  <div className="result-value">$42,500</div>
               </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="features-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-header">
          <h2>Why use our estimator?</h2>
          <p>Stop guessing and start predicting with industry-standard estimation models.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Layers size={24} color="#0891b2" />
            </div>
            <h3>Use Case Points</h3>
            <p>Calculate effort based on actors and use cases extracted directly from your diagrams.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Box size={24} color="#059669" />
            </div>
            <h3>Class Graph Weights</h3>
            <p>Analyze structural complexity by parsing class relationships and attributes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Zap size={24} color="#2563eb" />
            </div>
            <h3>Instant Results</h3>
            <p>Get real-time feedback with dynamic adjustments for technical and environmental factors.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
