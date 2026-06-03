import { Link, useLocation } from 'react-router-dom';
import { Calculator, Info, Home } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="brand-text">UML Value Estimator</span>
        </Link>
        <nav className="navbar-nav">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            <Home className="nav-icon" size={18} />
            <span>Home</span>
          </Link>
          <Link to="/estimator" className={`nav-link ${isActive('/estimator')}`}>
            <Calculator className="nav-icon" size={18} />
            <span>Estimator</span>
          </Link>
          <Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works')}`}>
            <Info className="nav-icon" size={18} />
            <span>How it Works</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
