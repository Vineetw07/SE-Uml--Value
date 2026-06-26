import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCode, Calculator, Zap, ShieldCheck } from 'lucide-react';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="page-container"
    >
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Data-Driven Estimations</p>
          <h1>Software Cost Estimator</h1>
          <p className="hero-subtitle">
            Turn your UML diagrams into actionable, defensible effort and cost estimates in seconds.
            Automate tedious counting with our intelligent models.
          </p>
          <div className="hero-actions">
            <Link to="/estimator" className="btn-primary">
              Start Estimation <Zap size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-header">
          <h2>Why Use UML Estimator?</h2>
          <p>Built for software architects and engineering teams to forecast budgets accurately.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><FileCode size={24} /></div>
            <h3>Intelligent Parsing</h3>
            <p>Automatically detects and parses standard Use Case and Class Diagrams in XML/JSON formats.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Calculator size={24} /></div>
            <h3>Dual Engine Models</h3>
            <p>Employs Use Case Points (UCP) and Graph Weight models to derive precise man-hours.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ShieldCheck size={24} /></div>
            <h3>Customizable Complexity</h3>
            <p>Tune Technical (TCF) and Environmental (ECF) factors specifically to your project's context.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
