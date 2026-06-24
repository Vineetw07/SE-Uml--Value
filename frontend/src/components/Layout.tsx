import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Activity, Calculator, Info } from 'lucide-react';
import '../index.css';

const Layout: React.FC = () => {
  return (
    <div className="app-shell layout-shell">
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <Activity className="nav-icon" />
            <span>Estimator Pro</span>
          </div>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
            <NavLink to="/estimator" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              <Calculator className="nav-link-icon" size={18} />
              Estimator
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              <Info className="nav-link-icon" size={18} />
              About
            </NavLink>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Software Estimator Pro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
