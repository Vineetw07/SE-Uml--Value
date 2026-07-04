import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon, Calculator, Info, Code2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Hexagon },
    { path: '/tool', label: 'Estimator', icon: Calculator },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <Code2 size={24} color="#00d8ff" />
          </div>
          <div>
            <p className="eyebrow">Software estimation workspace</p>
            <h1>UML Value Estimator</h1>
          </div>
        </Link>

        <nav className="topbar-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} UML Value Estimator. All rights reserved.</p>
      </footer>
    </div>
  );
};
