import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calculator, Home, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true" style={{ width: '32px', height: '32px', padding: '6px' }}>
            <span />
            <span />
            <span />
          </div>
          <span className="navbar-title">UML Estimator</span>
        </div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`} end>
            <Home size={18} />
            Home
          </NavLink>
          <NavLink to="/estimator" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
            <Calculator size={18} />
            Estimator
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
            <Info size={18} />
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
