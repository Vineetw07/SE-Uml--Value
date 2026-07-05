import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, BarChart3, Clock, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="home-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        paddingTop: '20px',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <div className="workspace-intro" style={{ width: '100%', maxWidth: '1000px', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '60px 20px' }}>
        <p className="eyebrow" style={{ fontSize: '1rem', marginBottom: '12px' }}>Next-Generation Estimation</p>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', maxWidth: '800px', lineHeight: 1.1 }}>
          Transform your UML diagrams into accurate cost estimates.
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '32px' }}>
          Stop guessing. Start calculating. Upload your use case or class diagrams and get instant, defensible software estimation models based on standard UCP and Graph Weight methodologies.
        </p>

        <Link to="/estimator" style={{ textDecoration: 'none' }}>
          <button className="btn btn--primary" style={{ fontSize: '1.1rem', padding: '16px 32px', borderRadius: '999px' }}>
            <Calculator style={{ marginRight: '8px' }} size={20} />
            Start Estimating Now
          </button>
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', maxWidth: '1000px', paddingBottom: '60px' }}>
        <FeatureCard
          icon={<Zap size={24} color="var(--color-primary)" />}
          title="Instant Analysis"
          description="Upload your standard UML diagrams and receive instant metrics. No manual counting required."
        />
        <FeatureCard
          icon={<BarChart3 size={24} color="var(--color-green)" />}
          title="Defensible Models"
          description="Powered by industry standard methods like Use Case Points (UCP) and Class Diagram Graph Weight."
        />
        <FeatureCard
          icon={<Clock size={24} color="var(--color-cyan)" />}
          title="Accurate Timelines"
          description="Adjust developer rates, technical complexity, and environmental factors to get accurate hours and costs."
        />
      </div>
    </motion.div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div style={{
    padding: '32px 24px',
    borderRadius: 'var(--radius-xl)',
    background: 'rgb(255 255 255 / 0.8)',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '16px',
    transition: 'transform 200ms ease, box-shadow 200ms ease'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
  }}
  >
    <div style={{
      width: '56px',
      height: '56px',
      borderRadius: '16px',
      background: 'var(--color-surface-elevated)',
      display: 'grid',
      placeItems: 'center'
    }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-ink)' }}>{title}</h3>
    <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>{description}</p>
  </div>
);
