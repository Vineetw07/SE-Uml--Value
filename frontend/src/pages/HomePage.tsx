import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="home-page">
      <motion.section
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-badge">
          <span className="pulse-dot"></span> Next-Gen Estimation
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          Predict software costs with <span>unprecedented accuracy</span>.
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Automate project hour predictions directly from system architecture diagrams.
          Upload your Use Case and Class Diagrams for instant, data-driven estimates.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-actions">
          <Link to="/estimator" className="btn btn--primary btn--large">
            Get Started <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="btn btn--secondary btn--large">
            How it works
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="features-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="feature-grid-home">
          <div className="feature-card-home">
            <div className="feature-icon-wrapper cyan-gradient">
              <Layers size={24} color="white" />
            </div>
            <h3>Architecture-Driven</h3>
            <p>Directly parses XML and JSON representations of your UML diagrams for an objective baseline.</p>
          </div>

          <div className="feature-card-home">
            <div className="feature-icon-wrapper primary-gradient">
              <Zap size={24} color="white" />
            </div>
            <h3>Instant Analysis</h3>
            <p>Our robust C++ backend computes Use Case Points (UCP) and Class Graph Weights in milliseconds.</p>
          </div>

          <div className="feature-card-home">
            <div className="feature-icon-wrapper green-gradient">
              <BarChart2 size={24} color="white" />
            </div>
            <h3>Actionable Insights</h3>
            <p>Get a detailed breakdown of complexity, technical factors, and environmental influences.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
