import React from 'react';
import { Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-text">UML Value Estimator</span>
            <p className="footer-tagline">Automating software cost estimation from architecture diagrams.</p>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">
              <Code size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Software Cost Estimator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
