import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, Home, Info, Activity } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <div className="navbar-logo">
            <Zap size={24} color="#0891b2" />
          </div>
          <span className="navbar-title">UML Value Estimator</span>
        </NavLink>
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
            end
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/estimator"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
          >
            <Activity size={18} />
            <span>Estimator</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
          >
            <Info size={18} />
            <span>About</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
