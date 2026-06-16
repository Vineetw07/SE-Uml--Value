import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Activity, LayoutDashboard, Info } from 'lucide-react';
import '../index.css';

export const Layout: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `nav-link ${location.pathname === path ? 'active' : ''}`;
  };

  return (
    <div className="app-shell layout-wrapper">
      <header className="topbar">
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

        <nav className="main-nav">
          <Link to="/" className={getLinkClass('/')}>
            <Activity size={18} />
            <span>Home</span>
          </Link>
          <Link to="/estimator" className={getLinkClass('/estimator')}>
            <LayoutDashboard size={18} />
            <span>Estimator</span>
          </Link>
          <Link to="/about" className={getLinkClass('/about')}>
            <Info size={18} />
            <span>About</span>
          </Link>
        </nav>

        <div className="topbar-meta" aria-label="Application capabilities">
          <span>Use Case UCP</span>
          <span>Class Graph Weight</span>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Software Cost Estimator. All rights reserved.</p>
      </footer>
    </div>
  );
};
