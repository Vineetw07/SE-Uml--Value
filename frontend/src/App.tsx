import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from './components/Layout/Layout';
import { Home } from './features/Home/Home';
import { About } from './features/About/About';
import { EstimatorFeature } from './features/Estimator/EstimatorFeature';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="estimator" element={<EstimatorFeature />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
