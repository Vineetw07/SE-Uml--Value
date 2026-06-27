import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calculator, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="logo-text">UML Estimator</span>
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          end
        >
          <Home size={18} />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/estimator"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          <Calculator size={18} />
          <span>Estimator</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          <Info size={18} />
          <span>About</span>
        </NavLink>
      </div>
    </nav>
  );
};
