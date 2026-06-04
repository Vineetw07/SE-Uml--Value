import { Routes, Route } from 'react-router-dom';
import './index.css';

import { AppLayout } from './components/AppLayout';
import { HomePage } from './pages/HomePage';
import { EstimatorPage } from './pages/EstimatorPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="estimator" element={<EstimatorPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
