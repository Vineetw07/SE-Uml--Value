import './index.css';
import { EstimatorFeature } from './features/Estimator/EstimatorFeature';

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
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
      </header>

      <main>
        <EstimatorFeature />
      </main>
    </div>
  );
}

export default App;
