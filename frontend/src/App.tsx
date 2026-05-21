import './index.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import EstimatorPage from './pages/EstimatorPage';
import About from './pages/About';

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimate" element={<EstimatorPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;