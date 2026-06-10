import React from 'react';
import { Share2, Mail, Globe } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-mark" aria-hidden="true" />
              <h2>UML Estimator</h2>
            </div>
            <p className="footer-description">
              An automated estimation tool that predicts software project hours and costs directly from system architecture diagrams.
            </p>
          </div>

          <div className="footer-links-group">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="https://github.com/your-repo/software-cost-estimator" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="#">Estimation Models</a></li>
              <li><a href="#">API Reference</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Software Cost Estimator. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Web"><Globe size={20} /></a>
            <a href="#" aria-label="Contact"><Mail size={20} /></a>
            <a href="#" aria-label="Share"><Share2 size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
