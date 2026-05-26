import { EstimatorFeature } from '../features/Estimator/EstimatorFeature';
import './Estimator.css';

export function Estimator() {
  return (
    <div className="estimator-page-container">
      <div className="estimator-header">
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
      </div>

      <EstimatorFeature />
    </div>
  );
}
