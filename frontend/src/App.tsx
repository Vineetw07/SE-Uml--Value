import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { EstimatorPage } from './pages/EstimatorPage';
import { About } from './pages/About';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="estimator" element={<EstimatorPage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
