import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Database, BarChart3, Clock, ShieldCheck } from 'lucide-react';

export const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const features = [
    {
      icon: Cpu,
      title: 'Intelligent Parsing',
      description: 'Automatically detects and reads Use Case Diagrams and Class Diagrams in XML/JSON formats.',
    },
    {
      icon: Zap,
      title: 'Two Estimation Engines',
      description: 'Leverages Use Case Points (UCP) and Graph Weight models tailored for your architecture.',
    },
    {
      icon: Clock,
      title: 'Instant Costing',
      description: 'Convert complex technical diagrams into clear, actionable hourly effort and budget estimates.',
    },
    {
      icon: Database,
      title: 'Self-Calibrating',
      description: 'Features a feedback loop connecting actual project hours to refine future calculations.',
    },
    {
      icon: ShieldCheck,
      title: 'Customizable Factors',
      description: 'Fine-tune technical and environmental complexities based on team constraints.',
    },
    {
      icon: BarChart3,
      title: 'Detailed Breakdown',
      description: 'View transparent analytics mapping individual components to their exact estimated cost.',
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-blob gradient-blob-1" />
          <div className="gradient-blob gradient-blob-2" />
        </div>

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span>v1.0 is live</span>
            <div className="badge-pulse" />
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Predict Project Costs <br/>
            <span className="text-gradient">From Architecture Diagrams.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Upload your UML Use Case or Class diagrams. Our automated estimation engine analyzes complexity to provide defensible hours and budgets in seconds.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <Link to="/estimator" className="btn-primary-large">
              Start Estimating
              <ArrowRight size={20} className="icon-right" />
            </Link>
            <Link to="/about" className="btn-secondary-large">
              How it works
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Estimation made simple.</h2>
          <p>Replace manual component counting with our algorithmic approach.</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="feature-card" variants={itemVariants}>
              <div className="feature-icon-wrapper">
                <feature.icon className="feature-icon" size={28} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to estimate your next project?</h2>
          <p>Join engineering teams saving hours on manual planning and budgeting.</p>
          <Link to="/estimator" className="btn-primary-large cta-btn">
            Try the Estimator Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
