import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileBarChart, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="topbar">
      <div className="brand-lockup">
        <NavLink to="/" className="brand-lockup" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="eyebrow">Software estimation workspace</p>
            <h1>UML Value Estimator</h1>
          </div>
        </NavLink>
      </div>

      <nav className="topbar-nav" aria-label="Main Navigation">
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                padding: '8px 12px',
                borderRadius: '8px',
                background: isActive ? 'var(--color-surface-elevated)' : 'transparent',
                transition: 'all 0.2s ease',
              })}
            >
              <LayoutDashboard size={18} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/estimator"
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                padding: '8px 12px',
                borderRadius: '8px',
                background: isActive ? 'var(--color-surface-elevated)' : 'transparent',
                transition: 'all 0.2s ease',
              })}
            >
              <FileBarChart size={18} />
              Workspace
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                padding: '8px 12px',
                borderRadius: '8px',
                background: isActive ? 'var(--color-surface-elevated)' : 'transparent',
                transition: 'all 0.2s ease',
              })}
            >
              <Info size={18} />
              About Models
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="topbar-meta" aria-label="Application capabilities" style={{ display: 'none' }}>
        <span>Use Case UCP</span>
        <span>Class Graph Weight</span>
      </div>
    </header>
  );
};
