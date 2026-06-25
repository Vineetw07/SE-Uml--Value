import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Calculator, Info } from 'lucide-react';
import '../index.css';

export function Layout() {
  const location = useLocation();

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

        <nav className="top-nav" aria-label="Main Navigation">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
            end
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/estimator"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
          >
            <Calculator size={18} />
            <span>Estimator</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
          >
            <Info size={18} />
            <span>About</span>
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
