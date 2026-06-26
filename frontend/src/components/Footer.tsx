export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Software Cost Estimator. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
            GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
};
