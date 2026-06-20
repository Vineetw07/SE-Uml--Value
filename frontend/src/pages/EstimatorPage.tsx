import { motion } from 'framer-motion';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

export const EstimatorPage = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
    >
      <div className="estimator-wrapper">
        <EstimatorFeature />
      </div>
    </motion.div>
  );
};
