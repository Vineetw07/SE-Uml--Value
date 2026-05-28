import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { EstimatorPage } from './pages/EstimatorPage';
import { Methodology } from './pages/Methodology';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="estimator" element={<EstimatorPage />} />
          <Route path="methodology" element={<Methodology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
