import { Link, useLocation } from 'react-router-dom';
import { Calculator, Home, Info } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/estimator', label: 'Estimator', icon: <Calculator size={18} /> },
    { path: '/about', label: 'Models', icon: <Info size={18} /> },
  ];

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <div className="nav-logo" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="nav-brand-text">UML Estimator</span>
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
