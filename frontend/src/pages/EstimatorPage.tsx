import React from 'react';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';
import { motion } from 'framer-motion';

export const EstimatorPage: React.FC = () => {
  return (
    <motion.div
      className="page-container estimator-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <EstimatorFeature />
    </motion.div>
  );
};
