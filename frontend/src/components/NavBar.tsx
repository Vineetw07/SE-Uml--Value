import { Link, useLocation } from 'react-router-dom';
import '../index.css'; // Make sure this path is correct or omit if global styles are applied via main.tsx

export default function NavBar() {
  const location = useLocation();

  return (
    <header className="navbar topbar">
      <div className="brand-lockup">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <h1 style={{ color: 'var(--color-ink)', fontSize: '18px', fontWeight: 600, margin: 0 }}>UML Value Estimator</h1>
          </div>
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/estimate" className={`nav-link ${location.pathname === '/estimate' ? 'active' : ''}`}>Estimator</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
      </nav>
    </header>
  );
}