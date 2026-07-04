import React from 'react';
import { motion } from 'framer-motion';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

export const EstimatorPage: React.FC = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <EstimatorFeature />
    </motion.div>
  );
};
