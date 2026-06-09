import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Calculator, Info, Home as HomeIcon } from 'lucide-react';

export const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <div className="layout">
      <header className="global-header">
        <div className="header-container">
          <Link to="/" className="brand-lockup-sm">
            <div className="brand-mark-sm" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="brand-name">UML Value Estimator</span>
          </Link>

          <nav className="global-nav">
            <Link to="/" className={isActive('/')}>
              <HomeIcon size={18} />
              <span>Home</span>
            </Link>
            <Link to="/estimator" className={isActive('/estimator')}>
              <Calculator size={18} />
              <span>Estimator</span>
            </Link>
            <Link to="/about" className={isActive('/about')}>
              <Info size={18} />
              <span>About</span>
            </Link>
          </nav>
        </div>
      </header>

      <div className="page-content">
        <Outlet />
      </div>

      <footer className="global-footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} UML Value Estimator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
