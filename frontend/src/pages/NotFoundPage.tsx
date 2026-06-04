import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The system architecture you are looking for does not exist in our model.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>
          <Home size={18} /> Return to Home
        </button>
      </div>
    </div>
  );
};
