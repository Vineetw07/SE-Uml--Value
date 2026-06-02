import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>UML Estimator</h3>
            <p>Automate predicting software project hours and costs directly from system architecture diagrams.</p>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <a href="/about">Methodology</a>
            <a href="/estimator">Estimator</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} UML Estimator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
