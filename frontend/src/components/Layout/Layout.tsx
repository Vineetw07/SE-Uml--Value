import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

export const Layout = () => {
  return (
    <div className="app-layout">
      <nav className="main-nav">
        <div className="nav-brand">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="brand-text">UML Estimator</span>
        </div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/estimator" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Estimator
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Software Cost Estimator. Built for Software Engineering & Architecture.</p>
      </footer>
    </div>
  );
};
