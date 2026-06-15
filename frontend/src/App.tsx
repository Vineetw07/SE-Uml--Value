import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import { EstimatorFeature } from './features/Estimator/EstimatorFeature';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="navbar">
          <div className="brand-lockup">
            <div className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="brand-text">
              <h1>UML Estimator</h1>
            </div>
          </div>

          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              How it works
            </NavLink>
            <NavLink to="/workspace" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Workspace
            </NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/workspace" element={<EstimatorFeature />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
