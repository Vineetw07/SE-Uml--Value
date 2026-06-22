import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="app-shell">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
    </>
  );
};
