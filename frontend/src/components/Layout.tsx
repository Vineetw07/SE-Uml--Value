import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, Calculator, Info } from 'lucide-react';

export const Layout: React.FC = () => {
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

        <nav className="topbar-nav" aria-label="Main Navigation">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Home className="nav-icon" size={18} />
            Home
          </NavLink>
          <NavLink
            to="/estimator"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Calculator className="nav-icon" size={18} />
            Estimator
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Info className="nav-icon" size={18} />
            About
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} UML Value Estimator. Award-winning project estimation tool.</p>
          <div className="footer-links">
            <NavLink to="/about">Methodology</NavLink>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
