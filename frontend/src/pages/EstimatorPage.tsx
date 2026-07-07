import React from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.02 },
};

const pageTransition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
};

export const EstimatorPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-content"
    >
      <EstimatorFeature />
    </motion.div>
  );
};
