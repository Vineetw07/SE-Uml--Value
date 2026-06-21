import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Calculator, Info } from 'lucide-react';
import '../App.css';

export const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <nav className="side-nav">
        <div className="brand">
          <div className="brand-icon">
            <LayoutDashboard size={24} />
          </div>
          <span className="brand-name">UML Estimator</span>
        </div>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </NavLink>
          <NavLink to="/estimator" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Calculator size={20} />
            <span>Estimator</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Info size={20} />
            <span>Methodology</span>
          </NavLink>
        </div>

        <div className="nav-footer">
          <p>Powered by UCP & Graph Weight</p>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
