import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

export const EstimatorPage: React.FC = () => {
  return (
    <PageTransition>
      <header className="topbar">
        <div className="brand-lockup">
          <div>
            <p className="eyebrow">Software estimation workspace</p>
            <h1>UML Value Estimator</h1>
          </div>
        </div>

        <div className="topbar-meta" aria-label="Application capabilities">
          <span>Use Case UCP</span>
          <span>Class Graph Weight</span>
        </div>
      </header>

      <EstimatorFeature />
    </PageTransition>
  );
};
