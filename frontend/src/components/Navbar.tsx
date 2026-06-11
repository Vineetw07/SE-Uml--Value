import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <div className="brand-mark-small">
            <Hexagon size={24} className="text-primary" />
          </div>
          <span>UML Value Estimator</span>
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
            Home
          </NavLink>
          <NavLink to="/workspace" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Workspace
          </NavLink>
          <NavLink to="/methodology" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Methodology
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
