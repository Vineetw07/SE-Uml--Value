import React from 'react';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

export const EstimatorPage: React.FC = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <EstimatorFeature />
    </div>
  );
};
