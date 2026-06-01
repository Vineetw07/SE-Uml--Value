import { NavLink, Outlet } from 'react-router-dom';
import { Layers } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="brand-logo">
            <Layers className="logo-icon" />
            <span>UML Value Estimator</span>
          </NavLink>

          <nav className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/estimator"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Estimator
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <Layers className="footer-icon" />
              <span>UML Value Estimator</span>
            </div>
            <p className="footer-desc">Automated software cost estimation using Use Case UCP and Class Graph Weight methodologies.</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} UML Value Estimator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
