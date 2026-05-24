import { Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import { EstimatorFeature } from './features/Estimator/EstimatorFeature';
import { About } from './pages/About';
import { Docs } from './pages/Docs';

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

        <nav className="topbar-nav" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Estimator</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/docs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Docs</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<EstimatorFeature />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
