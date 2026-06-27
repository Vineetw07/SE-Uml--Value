import React from 'react';
import { motion } from 'framer-motion';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

export const EstimatorPage: React.FC = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <EstimatorFeature />
    </motion.div>
  );
};
