import React from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Clock, Database, Layers, Zap } from 'lucide-react';

const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page home-page"
    >
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hero-badge"
          >
            <span className="pulse-dot"></span>
            Next-Gen Software Estimation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hero-title"
          >
            Predict Project Costs <br />
            <span className="text-gradient">From Architecture Diagrams.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hero-subtitle"
          >
            Automate software project hours and cost predictions directly from Use Case and Class Diagrams using advanced UML analysis. Stop guessing, start estimating with precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hero-actions"
          >
            <Link to="/estimator" className="btn btn-primary btn-large">
              Start Estimating Now <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-secondary btn-large">
              Learn How It Works
            </Link>
          </motion.div>
        </div>

        <div className="hero-visual">
           <div className="glow-orb orb-1"></div>
           <div className="glow-orb orb-2"></div>
           <div className="glass-panel main-dashboard-mockup">
             <div className="mockup-header">
               <div className="mockup-dots"><span></span><span></span><span></span></div>
               <div className="mockup-title">Estimator Engine</div>
             </div>
             <div className="mockup-body">
               <div className="mockup-chart">
                 <BarChart3 className="mockup-icon text-accent" size={48} />
                 <div className="mockup-stats">
                   <div className="stat-line" style={{ width: '80%' }}></div>
                   <div className="stat-line" style={{ width: '60%' }}></div>
                   <div className="stat-line" style={{ width: '90%' }}></div>
                 </div>
               </div>
               <div className="mockup-metrics">
                 <div className="metric-box">
                    <span className="metric-value">482</span>
                    <span className="metric-label">Est. Hours</span>
                 </div>
                 <div className="metric-box">
                    <span className="metric-value">$42k</span>
                    <span className="metric-label">Proj. Cost</span>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose UML Value Estimator?</h2>
          <p>Award-winning technology that bridges the gap between software design and project management.</p>
        </div>

        <div className="features-grid">
          <FeatureCard
            icon={<Zap size={28} />}
            title="Instant Analysis"
            description="Upload your JSON Use Cases or XML Class diagrams and get comprehensive estimates in milliseconds."
            delay={0.1}
          />
          <FeatureCard
            icon={<Layers size={28} />}
            title="Multi-Model Support"
            description="Utilizes both Use Case Points (UCP) and Class Graph Weight methodologies for robust predictions."
            delay={0.2}
          />
          <FeatureCard
            icon={<Database size={28} />}
            title="Data-Driven Accuracy"
            description="Calibrate complexity weights and environmental factors based on historical project performance."
            delay={0.3}
          />
          <FeatureCard
            icon={<Clock size={28} />}
            title="Save Hundreds of Hours"
            description="Eliminate manual spreadsheet calculations and subjective guesswork from your quoting process."
            delay={0.4}
          />
        </div>
      </section>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      className="feature-card glass-panel"
    >
      <div className="feature-icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};
