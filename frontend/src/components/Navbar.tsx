import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calculator, Info, Home } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="site-navbar">
      <div className="navbar-container">
        <NavLink to="/" className="brand-link">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="brand-text">UML Value Estimator</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/estimator" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <Calculator size={18} />
            <span>Estimator</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <Info size={18} />
            <span>Methodology</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
