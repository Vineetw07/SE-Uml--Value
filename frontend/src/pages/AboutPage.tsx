import { BookOpen, Binary } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="about-container">
          <h1>The Science Behind the Estimation</h1>
          <p className="lead">
            Understanding the models that power UML Value Estimator. We use industry-standard heuristics and graph-based models to project effort reliably.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="methodology-grid">
          <div className="method-card">
            <div className="method-icon-wrap">
              <BookOpen className="method-icon" />
            </div>
            <h2>Use Case Points (UCP)</h2>
            <div className="method-content">
              <p>
                The Use Case Points method, originally developed by Gustav Karner, estimates software size based on use cases. It categorizes both actors and use cases by their complexity.
              </p>
              <ul>
                <li><strong>Simple Actors/Cases:</strong> Interacting through basic APIs or single UI interfaces.</li>
                <li><strong>Average Actors/Cases:</strong> Complex protocols or text-based UIs with multiple validation steps.</li>
                <li><strong>Complex Actors/Cases:</strong> Graphical interfaces with intricate logic and state management.</li>
              </ul>
              <p>
                These unadjusted weights are multiplied by Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) to yield the final UCP, which is then mapped to hours.
              </p>
            </div>
          </div>

          <div className="method-card">
            <div className="method-icon-wrap">
              <Binary className="method-icon" />
            </div>
            <h2>Class Graph Weight Model</h2>
            <div className="method-content">
              <p>
                For Class Diagrams, we utilize a Graph Weight Model. This treats your system's architecture as a directed graph where classes are nodes and associations are edges.
              </p>
              <ul>
                <li><strong>Classes (10 hrs):</strong> The foundational effort to structure and instantiate the domain object.</li>
                <li><strong>Attributes (2 hrs):</strong> Data properties requiring validation, serialization, and storage.</li>
                <li><strong>Methods (4 hrs):</strong> Business logic implementation and unit testing.</li>
                <li><strong>Relationships (3 hrs):</strong> Integration effort for inheritance, composition, and aggregation.</li>
              </ul>
              <p>
                Similar to UCP, the base sum is adjusted by the project's specific technical and environmental realities (TCF/ECF).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
