import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="app-shell">
      <header className="topbar nav-container">
        <div className="brand-lockup">
          <Link to="/" className="brand-link">
            <div className="brand-mark brand-mark-pulse" aria-hidden="true">
              <Activity className="brand-icon" size={24} color="var(--color-primary)" />
            </div>
            <div>
              <p className="eyebrow">Award-winning workspace</p>
              <h1>UML Value Estimator</h1>
            </div>
          </Link>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/estimator" className={`nav-link ${location.pathname === '/estimator' ? 'active' : ''}`}>
            Estimator
          </Link>
          <Link to="/methodology" className={`nav-link ${location.pathname === '/methodology' ? 'active' : ''}`}>
            Methodology
          </Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer-container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} UML Value Estimator. Award Winning Cost Prediction Engine.</p>
          <div className="footer-links">
            <Link to="/methodology">Read our methodology</Link>
            <span className="separator">•</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">Source code</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
