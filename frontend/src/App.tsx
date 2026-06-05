import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { EstimatorFeature } from './features/Estimator/EstimatorFeature';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="estimator" element={<EstimatorFeature />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
