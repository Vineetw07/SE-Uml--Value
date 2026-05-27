import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { EstimatorPage } from './pages/EstimatorPage';
import { Docs } from './pages/Docs';

function App() {
  return (
    <div className="app-shell">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimator" element={<EstimatorPage />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
