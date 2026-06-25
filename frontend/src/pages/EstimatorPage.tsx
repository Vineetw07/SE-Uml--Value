import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';
import { motion } from 'framer-motion';

export function EstimatorPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="estimator-page-container"
    >
      <EstimatorFeature />
    </motion.div>
  );
}
