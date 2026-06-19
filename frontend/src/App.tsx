import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { EstimatorPage } from './pages/EstimatorPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="estimator" element={<EstimatorPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
