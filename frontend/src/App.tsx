import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { EstimatorPage } from './pages/EstimatorPage';
import { AboutPage } from './pages/AboutPage';

import './index.css';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/estimator"
          element={
            <MainLayout>
              <EstimatorPage />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return <AnimatedRoutes />;
}

export default App;
