import { NavLink, Link } from 'react-router-dom';
import { Calculator, Info, Home, Settings2 } from 'lucide-react';
import './Navigation.css';

export const Navigation = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="brand-text">
            <span className="brand-name">UML Value Estimator</span>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Main Navigation">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            end
          >
            <Home className="nav-icon" size={18} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/estimator"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <Calculator className="nav-icon" size={18} />
            <span>Estimator</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <Info className="nav-icon" size={18} />
            <span>About Models</span>
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/estimator" className="action-button">
            <Settings2 size={16} />
            <span>Start Estimating</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
