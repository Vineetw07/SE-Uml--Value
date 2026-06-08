import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EstimatorPage } from './pages/EstimatorPage';

function App() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <header className="topbar nav-header">
        <div className="brand-lockup">
          <Link to="/" className="brand-link">
            <div className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <p className="eyebrow">Software estimation workspace</p>
              <h1>UML Value Estimator</h1>
            </div>
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/estimator" className={`nav-link ${location.pathname === '/estimator' ? 'active' : ''}`}>Estimator</Link>
        </nav>
      </header>

      <main className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/estimator" element={<EstimatorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
