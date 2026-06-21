import React from 'react';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';
import { motion } from 'framer-motion';

export const Estimator: React.FC = () => {
  return (
    <motion.div
      className="page-container estimator-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <h1 className="page-title">Estimation Workspace</h1>
        <p className="page-description">Configure your project factors and upload your diagram to generate an estimate.</p>
      </div>
      <EstimatorFeature />
    </motion.div>
  );
};
