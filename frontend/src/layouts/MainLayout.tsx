import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="site-wrapper">
      <header className="site-nav">
        <div className="nav-container">
          <Link to="/" className="brand-lockup nav-brand">
            <div className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <p className="eyebrow">Workspace</p>
              <h1 className="brand-title">UML Value Estimator</h1>
            </div>
          </Link>

          <nav className="nav-links">
            <Link
              to="/"
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
            <Link
              to="/estimator"
              className={location.pathname === '/estimator' ? 'nav-link active' : 'nav-link'}
            >
              App
            </Link>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="brand-lockup footer-brand">
            <div className="brand-mark brand-mark-small" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="footer-title">UML Value Estimator</p>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Software Estimator Tool. Powered by UCP & Graph Weight models.
          </p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/estimator">App</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
