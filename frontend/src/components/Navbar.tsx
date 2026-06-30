import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="global-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <div className="brand-icon">
            <Calculator size={24} />
          </div>
          <span className="brand-text">UML Estimator</span>
        </Link>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/estimator"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            Workspace
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            Methodology
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
