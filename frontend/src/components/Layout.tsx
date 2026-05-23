import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="app-shell">
      <header className="topbar glass-nav">
        <Link to="/" className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="eyebrow">Software estimation workspace</p>
            <h1>UML Value Estimator</h1>
          </div>
        </Link>

        <nav className="topbar-nav" aria-label="Main Navigation">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/estimator" className={`nav-link ${location.pathname === '/estimator' ? 'active' : ''}`}>Estimator</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </nav>
      </header>

      <main className="page-transition">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Software Cost Estimator. Built for Software Engineering & Architecture.</p>
        </div>
      </footer>
    </div>
  );
};
