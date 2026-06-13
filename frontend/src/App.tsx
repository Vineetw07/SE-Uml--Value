import './index.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Activity, Info, Mail, Calculator } from 'lucide-react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <Link to="/" className="nav-brand">
          <div className="brand-mark" aria-hidden="true" style={{ width: '36px', height: '36px', padding: '6px' }}>
            <span />
            <span />
            <span />
          </div>
          <span className="nav-brand-text">UML Estimator</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            <Calculator size={18} />
            <span>Estimator</span>
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <Info size={18} />
            <span>About</span>
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Mail size={18} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navigation />

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
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={14} /> Use Case UCP</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={14} /> Class Graph Weight</span>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
