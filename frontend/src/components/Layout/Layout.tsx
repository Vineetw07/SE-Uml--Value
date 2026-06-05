import { Outlet, NavLink } from 'react-router-dom';
import { Layers } from 'lucide-react';
import './Layout.css';

export const Layout = () => {
  return (
    <div className="layout-shell">
      <header className="global-nav">
        <div className="nav-container">
          <NavLink to="/" className="nav-brand">
            <Layers className="brand-icon" size={28} />
            <span className="brand-text">UML Value Estimator</span>
          </NavLink>
          <nav className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Methodology
            </NavLink>
            <NavLink
              to="/estimator"
              className={({ isActive }) => isActive ? "nav-link active btn-estimator" : "nav-link btn-estimator"}
            >
              Launch Estimator
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="global-footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} UML Value Estimator. Powered by UCP & Graph Weight models.</p>
        </div>
      </footer>
    </div>
  );
};
