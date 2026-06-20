import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileCode2, Cpu, LineChart, ArrowRight } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    },
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
        <div className="hero-background">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>

        <div className="hero-content">
          <motion.div variants={itemVariants} className="badge">
            Powered by Use Case Points & Graph Weight Models
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Stop Guessing.<br />
            <span className="text-gradient">Start Estimating.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Transform your UML diagrams into defensible effort and cost estimates in seconds.
            Our intelligent engine analyzes complexity directly from your architecture.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/estimate')}
            >
              Start Estimating
              <ArrowRight size={20} className="ml-2" />
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => navigate('/about')}
            >
              Learn the Models
            </button>
          </motion.div>
        </div>
      </section>

      <section className="features-section">
        <motion.div variants={itemVariants} className="features-header">
          <h2>How it works</h2>
          <p>An automated algorithmic approach replacing manual component counting.</p>
        </motion.div>

        <div className="features-grid">
          <motion.div variants={itemVariants} className="feature-card">
            <div className="feature-icon bg-blue">
              <FileCode2 size={28} />
            </div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically detects and reads Use Case Diagrams and Class Diagrams in JSON or XML format.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="feature-card">
            <div className="feature-icon bg-purple">
              <Cpu size={28} />
            </div>
            <h3>Dual Engines</h3>
            <p>Applies Use Case Points (UCP) for functional models and Graph Weight for structural models.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="feature-card">
            <div className="feature-icon bg-green">
              <LineChart size={28} />
            </div>
            <h3>Automated Pricing</h3>
            <p>Adjust technical and environmental factors, set your rate, and get an instant cost breakdown.</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
