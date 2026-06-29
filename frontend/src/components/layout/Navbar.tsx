import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Home, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand-lockup navbar-brand">
          <div className="brand-mark" aria-hidden="true" style={{ width: 36, height: 36, padding: 6 }}>
            <span />
            <span />
            <span />
          </div>
          <div>
            <span className="navbar-title">UML Value Estimator</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/estimate" className={`nav-link ${location.pathname === '/estimate' ? 'active' : ''}`}>
            <Calculator size={18} />
            <span>Estimate</span>
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <Info size={18} />
            <span>About</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
