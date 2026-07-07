import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calculator } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <Calculator color="#081b33" size={28} style={{ zIndex: 10 }} />
            <span style={{ position: 'absolute' }} />
            <span style={{ position: 'absolute' }} />
            <span style={{ position: 'absolute' }} />
          </div>
          <div>
            <p className="eyebrow">Software estimation workspace</p>
            <h1>UML Value Estimator</h1>
          </div>
        </div>

        <nav className="topbar-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/estimator" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Estimator
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
};
