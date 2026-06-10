import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Calculator, Home, Info, Hexagon } from 'lucide-react';
import './NavBar.css';

export const NavBar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Hexagon className="navbar-logo-icon" size={28} />
          <span className="navbar-logo-text">UML Estimator</span>
        </Link>
        <nav className="navbar-nav">
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                <Home size={18} className="nav-icon" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-it-works"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                <Info size={18} className="nav-icon" />
                <span>How It Works</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/estimator"
                className={({ isActive }) => isActive ? "nav-link active nav-link-cta" : "nav-link nav-link-cta"}
              >
                <Calculator size={18} className="nav-icon" />
                <span>Estimate Now</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
