import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { EstimatorPage } from './pages/EstimatorPage';
import { AboutPage } from './pages/AboutPage';
import './index.css';

function App() {
  const location = useLocation();
  const isEstimator = location.pathname === '/estimator';

  return (
    <>
      <Navbar />
      {isEstimator ? (
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/estimator" element={<EstimatorPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimator" element={<EstimatorPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
