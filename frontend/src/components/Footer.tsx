export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-mark" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
              <span />
              <span />
              <span />
            </div>
            <span className="footer-text">UML Value Estimator</span>
          </div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Software Cost Estimator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
