import React, { type ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Calculator, Home, Info, Hexagon } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <Hexagon size={24} />
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
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/estimator"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Calculator size={18} />
            <span>Estimator</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Info size={18} />
            <span>About</span>
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <div key={location.pathname} className="page-wrapper">
            {children}
          </div>
        </AnimatePresence>
      </main>
    </div>
  );
};
