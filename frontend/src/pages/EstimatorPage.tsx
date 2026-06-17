import React from 'react';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';
import { motion } from 'framer-motion';

export const EstimatorPage: React.FC = () => {
  return (
    <motion.div
      className="estimator-page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="estimator-page-header">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="eyebrow">Software estimation workspace</p>
            <h1>UML Value Estimator</h1>
          </div>
        </div>

        <div className="topbar-meta" aria-label="Application capabilities">
          <span>Use Case UCP</span>
          <span>Class Graph Weight</span>
        </div>
      </div>

      <EstimatorFeature />
    </motion.div>
  );
};
