import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="site-navbar">
      <div className="navbar-container">
        <Link to="/" className="brand-logo">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="brand-text">UML Value Estimator</span>
        </Link>
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/estimator"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Estimator
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About Methodology
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
