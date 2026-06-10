import { Routes, Route } from 'react-router-dom';
import './index.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { EstimatorPage } from './pages/EstimatorPage';
import { HowItWorks } from './pages/HowItWorks';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimator" element={<EstimatorPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
