import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer glass-effect">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-mark brand-mark-small" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span>UML Value Estimator</span>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/estimator">Workspace</Link>
          <Link to="/about">Architecture</Link>
        </div>
        <div className="footer-meta">
          <p>© {new Date().getFullYear()} Software Cost Estimator.</p>
        </div>
      </div>
    </footer>
  );
};
