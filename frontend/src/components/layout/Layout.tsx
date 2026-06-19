import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="nav-header">
        <div className="nav-brand">
          <Link to="/" className="nav-logo">
            <div className="brand-mark" aria-hidden="true" style={{ display: 'inline-flex', marginRight: '10px', verticalAlign: 'middle' }}>
              <span />
              <span />
              <span />
            </div>
            UML Value Estimator
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/estimator" className={location.pathname === '/estimator' ? 'active' : ''}>Estimator</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} UML Value Estimator. All rights reserved.</p>
      </footer>
    </div>
  );
};
