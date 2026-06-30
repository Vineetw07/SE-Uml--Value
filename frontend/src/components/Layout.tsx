import React from 'react';
import { Navbar } from './Navbar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>

      <footer className="global-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Software Cost Estimator.</p>
          <div className="footer-links">
            <span>Powered by C++ Winsock & React</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
