import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Workspace } from './pages/Workspace';
import { About } from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="estimator" element={<Workspace />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
