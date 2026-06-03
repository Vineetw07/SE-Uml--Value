import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { EstimatorPage } from './pages/EstimatorPage';
import { HowItWorks } from './pages/HowItWorks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="estimator" element={<EstimatorPage />} />
        <Route path="how-it-works" element={<HowItWorks />} />
      </Route>
    </Routes>
  );
}

export default App;
