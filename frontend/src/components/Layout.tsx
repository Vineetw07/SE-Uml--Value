import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Calculator, Home, Info, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Layout: React.FC = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/estimator', label: 'Estimator', icon: Calculator },
    { path: '/about', label: 'Methodology', icon: Info },
  ];

  return (
    <div className="layout-wrapper">
      <header className="global-nav">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            <Hexagon className="brand-logo" />
            <span className="brand-text">UML Value Estimator</span>
          </Link>

          <nav className="nav-links">
            {links.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="global-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <Hexagon size={24} className="text-cyan" />
            <span className="font-bold">UML Value Estimator</span>
          </div>
          <p className="footer-text">
            Automated software estimation intelligence powered by proven models.
          </p>
          <div className="footer-links">
            <Link to="/about">Methodology</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
