import React from 'react';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';
import './EstimatorPage.css';

export const EstimatorPage: React.FC = () => {
  return (
    <div className="estimator-page">
      <div className="estimator-page-header">
        <div className="container">
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
        </div>
      </div>

      <div className="container">
        <EstimatorFeature />
      </div>
    </div>
  );
};
