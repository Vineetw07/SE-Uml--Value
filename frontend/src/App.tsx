import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { AnimatedRoutes } from './AnimatedRoutes';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
