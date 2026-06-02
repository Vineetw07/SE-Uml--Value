import { Link, useLocation } from 'react-router-dom';
import { Layers } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Layers className="brand-icon" size={28} />
          <span className="brand-text">UML Estimator</span>
        </Link>
        <nav className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/estimator"
            className={`nav-link ${location.pathname === '/estimator' ? 'active' : ''}`}
          >
            Estimator
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};
