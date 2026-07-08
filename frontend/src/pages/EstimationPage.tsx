import React from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -20 },
};

export const EstimationPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page estimation-page"
    >
      <div className="page-header">
        <h1 className="text-gradient">Estimator Console</h1>
        <p className="page-subtitle">Upload your UML diagrams to generate instant cost and time predictions.</p>
      </div>

      <div className="estimator-container glass-panel">
        <EstimatorFeature />
      </div>
    </motion.div>
  );
};
