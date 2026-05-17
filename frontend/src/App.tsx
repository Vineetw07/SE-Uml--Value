import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { EstimatorFeature } from './features/Estimator/EstimatorFeature';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/estimator" element={<EstimatorFeature />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
