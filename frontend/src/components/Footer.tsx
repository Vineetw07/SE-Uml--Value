import React from 'react';
import { Code, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="brand-mark brand-mark--small" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>© {new Date().getFullYear()} Software Cost Estimator</p>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">
            <FileText size={16} />
            <span>Documentation</span>
          </a>
          <a href="#" className="footer-link">
            <Code size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
