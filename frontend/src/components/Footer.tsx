import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>UML Value Estimator</h4>
            <p>Turn architecture diagrams into defensible estimates.</p>
          </div>
          <div className="footer-links">
            <div className="footer-link-group">
              <h5>Product</h5>
              <a href="/workspace">Workspace</a>
              <a href="/methodology">Methodology</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} UML Value Estimator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
