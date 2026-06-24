import React from 'react';
import { motion } from 'framer-motion';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

const EstimatorPage: React.FC = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <EstimatorFeature />
    </motion.div>
  );
};

export default EstimatorPage;
