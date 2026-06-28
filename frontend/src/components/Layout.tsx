import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Calculator, Home, Info, Box } from 'lucide-react';

export const Layout: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/estimator', label: 'Estimator', icon: Calculator },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <div className="layout-container">
      <nav className="glass-navbar">
        <div className="nav-content">
          <Link to="/" className="nav-brand">
            <Box className="brand-icon" size={28} />
            <span className="brand-text">UML Value Estimator</span>
          </Link>
          <div className="nav-links">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Box size={24} className="footer-icon" />
            <span>UML Value Estimator</span>
          </div>
          <p className="footer-tagline">
            Automating software project estimation from architecture to budget.
          </p>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Software Cost Estimator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
