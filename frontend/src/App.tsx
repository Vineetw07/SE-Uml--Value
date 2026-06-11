import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Workspace } from './pages/Workspace';
import { Methodology } from './pages/Methodology';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/methodology" element={<Methodology />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
