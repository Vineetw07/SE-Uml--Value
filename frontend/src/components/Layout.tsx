import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand-lockup" style={{ textDecoration: 'none' }}>
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="eyebrow">Software estimation workspace</p>
            <h1>UML Value Estimator</h1>
          </div>
        </Link>

        <div className="topbar-meta" aria-label="Application navigation">
          {isHome ? (
            <Link to="/estimator" style={{ textDecoration: 'none' }}>
              <span className="btn btn--primary" style={{ minHeight: '36px', padding: '6px 14px', borderRadius: '999px', fontSize: '0.85rem' }}>
                Launch Estimator
              </span>
            </Link>
          ) : (
            <>
              <span>Use Case UCP</span>
              <span>Class Graph Weight</span>
            </>
          )}
        </div>
      </header>

      <main style={{ position: 'relative' }}>
        {children}
      </main>
    </div>
  );
};
