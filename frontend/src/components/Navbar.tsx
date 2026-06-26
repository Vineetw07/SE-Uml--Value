import { NavLink } from 'react-router-dom';
import { Home, Calculator, Info } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span>UML Estimator</span>
        </div>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Home className="nav-icon" size={18} />
            Home
          </NavLink>
          <NavLink to="/estimator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Calculator className="nav-icon" size={18} />
            Estimator
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Info className="nav-icon" size={18} />
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
