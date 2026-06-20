import { BookMarked, Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">UML Estimator</span>
            <p className="footer-tagline">Automated software cost estimation directly from your architecture diagrams.</p>
          </div>

          <div className="footer-links">
            <div className="footer-group">
              <h4>Technologies</h4>
              <div className="tech-stack">
                <span className="tech-badge">
                  <Code2 size={14} /> React
                </span>
                <span className="tech-badge">
                  <Code2 size={14} /> C++ Winsock
                </span>
                <span className="tech-badge">
                  <Code2 size={14} /> SQLite
                </span>
              </div>
            </div>

            <div className="footer-group">
              <h4>Links</h4>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <BookMarked size={20} />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Software Cost Estimator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
