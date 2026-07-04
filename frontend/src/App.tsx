import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { EstimatorPage } from './pages/EstimatorPage';
import { About } from './pages/About';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<EstimatorPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
