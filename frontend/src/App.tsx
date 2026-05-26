import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Estimator } from './pages/Estimator';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estimator" element={<Estimator />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
