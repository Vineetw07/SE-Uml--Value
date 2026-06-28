import React from 'react';
import { motion } from 'framer-motion';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

export const EstimatorPage: React.FC = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <p className="eyebrow">Workspace</p>
        <h1>UML Value Estimator</h1>
        <p className="page-description">Upload your diagram and configure factors to generate an estimate.</p>
      </div>

      <EstimatorFeature />
    </motion.div>
  );
};
