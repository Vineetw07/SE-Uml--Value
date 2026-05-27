import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
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

      <nav className="nav-container" aria-label="Main Navigation">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/estimator" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Estimator
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Documentation
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="topbar-meta" aria-label="Application capabilities">
        <span>Use Case UCP</span>
        <span>Class Graph Weight</span>
      </div>
    </header>
  );
};
