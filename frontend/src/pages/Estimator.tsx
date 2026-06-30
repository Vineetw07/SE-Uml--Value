import React from 'react';
import { motion } from 'framer-motion';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

export const Estimator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="page-container estimator-page"
    >
      <div className="page-header">
        <h2>Estimation Workspace</h2>
        <p>Upload your architecture diagram to generate a detailed cost analysis.</p>
      </div>
      <EstimatorFeature />
    </motion.div>
  );
};
