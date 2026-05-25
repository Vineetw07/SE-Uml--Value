import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="page-wrapper about-page fade-in">
      <div className="about-header">
         <h1 className="hero-title">Architecture & Models</h1>
         <p className="hero-subtitle">Understanding the engine beneath the UML Value Estimator.</p>
      </div>

      <div className="about-content">
        <section className="about-section glass-effect">
          <h2>The Estimation Models</h2>
          <div className="models-grid">
             <div className="model-info">
               <h3>Use Case Points (UCP)</h3>
               <p>
                 Used for <strong>Use Case Diagrams</strong>, the UCP method calculates software size based on the number and complexity of actors and use cases. It adjusts the raw size using Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) to account for project and team variables.
               </p>
             </div>
             <div className="model-info">
               <h3>Graph Weight</h3>
               <p>
                 Used for <strong>Class Diagrams</strong>, this structural approach evaluates the complexity of classes based on attributes, methods, and relationships (like inheritance and associations). It treats the diagram as a graph to compute an overall weight, translating structural complexity into effort hours.
               </p>
             </div>
          </div>
        </section>

        <section className="about-section glass-effect">
          <h2>The Tech Stack</h2>
          <div className="stack-grid">
             <div className="stack-item">
                <h3>Frontend</h3>
                <p>Built with modern React and TypeScript, leveraging Vite for a blazing fast development experience. The UI strictly adheres to a Vanilla CSS approach, employing custom animations, glassmorphism, and responsive grid layouts to deliver an award-winning user interface without utility frameworks.</p>
             </div>
             <div className="stack-item">
                <h3>Backend</h3>
                <p>Powered by a custom C++ server utilizing Winsock2. It achieves zero-dependency network routing and handles heavy algorithmic parsing of XML/JSON using <code>tinyxml2</code> and <code>nlohmann/json</code>. The backend calculates estimates rapidly and logs telemetry to a local SQLite database.</p>
             </div>
          </div>
        </section>

        <div className="about-cta text-center mt-4">
           <Link to="/estimator" className="btn btn-primary">Try the Estimator</Link>
        </div>
      </div>
    </div>
  );
};
