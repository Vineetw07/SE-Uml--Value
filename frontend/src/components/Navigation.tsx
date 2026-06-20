import { NavLink } from 'react-router-dom';
import { Calculator } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="site-nav">
      <div className="nav-container">
        <NavLink to="/" className="nav-brand">
          <div className="brand-icon">
            <Calculator size={24} />
          </div>
          <span className="brand-text">UML Estimator</span>
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/estimate"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Estimator
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
