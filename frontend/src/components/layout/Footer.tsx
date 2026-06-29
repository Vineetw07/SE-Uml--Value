import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Software Cost Estimator. All rights reserved.</p>
        <p className="footer-subtext">Built for Software Engineering & Architecture Estimations</p>
      </div>
    </footer>
  );
};
