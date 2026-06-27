import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, BarChart2, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <motion.div
      className="page-container home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="eyebrow-badge">
            <Activity size={16} />
            <span>Next-Gen Estimation</span>
          </div>
          <h1 className="hero-title">
            Turn UML Diagrams into<br/>
            <span className="text-gradient">Defensible Estimates</span>
          </h1>
          <p className="hero-subtitle">
            Upload your system architecture diagrams. We automatically extract complexity metrics and apply industry-standard algorithms to calculate hours and budget.
          </p>

          <div className="hero-actions">
            <Link to="/estimator" className="btn btn-primary btn-lg">
              Start Estimating
              <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              How it Works
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="abstract-dashboard">
            <div className="dashboard-header">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="dashboard-body">
               <div className="mock-card mock-card-1">
                 <div className="mock-icon"><BarChart2 size={24} /></div>
                 <div className="mock-lines">
                   <div className="mock-line-short" />
                   <div className="mock-line-long" />
                 </div>
               </div>
               <div className="mock-card mock-card-2">
                 <div className="mock-icon"><Zap size={24} /></div>
                 <div className="mock-lines">
                   <div className="mock-line-short" />
                   <div className="mock-line-long" />
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="features-section">
        <motion.div
          className="feature-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div
            className="feature-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="feature-icon bg-blue">
              <BarChart2 size={24} />
            </div>
            <h3>Use Case Points</h3>
            <p>Accurately estimate hours from Use Case diagrams using the UCP methodology, factoring in actor and use case complexities.</p>
          </motion.div>

          <motion.div
            className="feature-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="feature-icon bg-green">
              <Activity size={24} />
            </div>
            <h3>Graph Weight Model</h3>
            <p>Analyze Class Diagrams by examining classes, attributes, methods, and relationships to construct a defensible effort multiplier.</p>
          </motion.div>

          <motion.div
            className="feature-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="feature-icon bg-purple">
              <Zap size={24} />
            </div>
            <h3>Instant Costing</h3>
            <p>Tune Technical and Environmental factors (TCF/ECF) and apply your hourly rate to instantly generate a projected budget.</p>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};
