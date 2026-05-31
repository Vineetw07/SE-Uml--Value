import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout: React.FC = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
