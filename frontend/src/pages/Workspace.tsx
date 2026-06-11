import React from 'react';
import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';

export const Workspace: React.FC = () => {
  return (
    <div className="page-container workspace-page">
      <div className="workspace-header">
        <div className="workspace-title-area">
          <h1 className="workspace-title">Estimation Workspace</h1>
          <p className="workspace-subtitle">Upload your diagram to generate an estimate.</p>
        </div>
        <div className="topbar-meta" aria-label="Application capabilities">
          <span className="model-badge">Use Case UCP</span>
          <span className="model-badge">Class Graph Weight</span>
        </div>
      </div>
      <main className="workspace-main">
        <EstimatorFeature />
      </main>
    </div>
  );
};
