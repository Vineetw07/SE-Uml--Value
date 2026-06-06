import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Calculator, Info } from 'lucide-react';

export const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="app-layout">
      <nav className="main-nav">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            <div className="brand-mark-small" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="brand-text">UML Value Estimator</span>
          </Link>
          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/workspace" className={`nav-link ${isActive('/workspace') ? 'active' : ''}`}>
              <Calculator size={18} />
              <span>Workspace</span>
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              <Info size={18} />
              <span>About</span>
            </Link>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="main-footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} UML Value Estimator. Award-winning Software Cost Estimation.</p>
        </div>
      </footer>
    </div>
  );
};
