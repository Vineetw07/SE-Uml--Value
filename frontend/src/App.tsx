import { Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EstimatorPage from './pages/EstimatorPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="estimator" element={<EstimatorPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
