import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileSearch, TrendingUp, ShieldCheck } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FileSearch size={28} className="feature-icon" />,
      title: 'Diagram Analysis',
      description: 'Upload your UML diagrams and we automatically extract actors, use cases, and classes.'
    },
    {
      icon: <TrendingUp size={28} className="feature-icon" />,
      title: 'Accurate Estimation',
      description: 'Leverage industry-standard Use Case Points (UCP) models to calculate reliable effort.'
    },
    {
      icon: <ShieldCheck size={28} className="feature-icon" />,
      title: 'Defensible Metrics',
      description: 'Back up your project proposals with solid math, reducing risk and improving trust.'
    }
  ];

  return (
    <PageTransition>
      <div className="home-container">
        <section className="hero-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className="eyebrow">Award Winning Software Estimation</p>
            <h1 className="hero-title">Predict project costs directly from your architecture.</h1>
            <p className="hero-subtitle">
              Turn UML use case and class diagrams into actionable, defensible effort and cost estimates in seconds.
            </p>

            <button className="btn btn--primary hero-btn" onClick={() => navigate('/estimator')}>
              Start Estimating
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </section>

        <section className="features-section">
          <div className="features-grid">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
