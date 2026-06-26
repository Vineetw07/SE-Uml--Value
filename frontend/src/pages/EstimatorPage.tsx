import { motion } from 'framer-motion';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

export const EstimatorPage = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <EstimatorFeature />
    </motion.div>
  );
};
