import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar glass-effect">
      <div className="navbar-container">
        <Link to="/" className="brand-lockup navbar-brand">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="brand-text">UML Value Estimator</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/estimator" className={`nav-link ${isActive('/estimator') ? 'active' : ''}`}>
            Workspace
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            Architecture
          </Link>
        </div>
      </div>
    </nav>
  );
};
