import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, Calculator, Info } from 'lucide-react';
import '../styles/layout.css';

export const AppLayout: React.FC = () => {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="eyebrow">Software estimation workspace</p>
            <h1>UML Value Estimator</h1>
          </div>
        </div>

        <nav className="main-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-item--active" : "nav-item"}>
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/estimator" className={({ isActive }) => isActive ? "nav-item nav-item--active" : "nav-item"}>
            <Calculator size={18} />
            <span>Estimator</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item nav-item--active" : "nav-item"}>
            <Info size={18} />
            <span>About</span>
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Software Cost Estimator.</p>
          <div className="footer-links">
            <span>Powered by UCP & Graph Weight Models</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
