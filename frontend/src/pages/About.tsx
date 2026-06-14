import { Network, Users } from 'lucide-react';
import './Pages.css';

export const About = () => {
  return (
    <div className="page-container about-page">
      <div className="content-wrapper">
        <header className="page-header">
          <p className="eyebrow">The Science Behind the Numbers</p>
          <h1>Estimation Models</h1>
          <p className="lead-text">
            Our tool doesn't just guess. It applies industry-standard algorithmic
            models to turn your visual architecture into concrete numbers.
          </p>
        </header>

        <div className="model-cards">
          <article className="model-card">
            <div className="model-icon-header">
              <div className="model-icon use-case-bg">
                <Users size={32} color="white" />
              </div>
              <h2>Use Case Points (UCP)</h2>
            </div>
            <div className="model-content">
              <p>
                The Use Case Points model evaluates <strong>Use Case Diagrams</strong> to estimate the size
                and complexity of a software project. It considers:
              </p>
              <ul>
                <li><strong>Actors:</strong> Classified as Simple, Average, or Complex based on their interaction type (API, CLI, GUI).</li>
                <li><strong>Use Cases:</strong> Classified based on the number of transactions required to complete them.</li>
                <li><strong>Technical Complexity Factor (TCF):</strong> Accounts for non-functional requirements like distributed processing and performance.</li>
                <li><strong>Environmental Complexity Factor (ECF):</strong> Evaluates team experience, motivation, and stability.</li>
              </ul>
              <div className="formula-box">
                <code>UCP = (UUAW + UUCW) × TCF × ECF</code>
              </div>
            </div>
          </article>

          <article className="model-card">
            <div className="model-icon-header">
              <div className="model-icon class-bg">
                <Network size={32} color="white" />
              </div>
              <h2>Graph Weight Model</h2>
            </div>
            <div className="model-content">
              <p>
                For <strong>Class Diagrams</strong>, we use a Graph Weight approach that analyzes the
                internal structure of your object-oriented design:
              </p>
              <ul>
                <li><strong>Classes:</strong> The foundation of the system, acting as primary nodes.</li>
                <li><strong>Attributes:</strong> The state space each class must manage.</li>
                <li><strong>Methods:</strong> The behavioral complexity and operations each class performs.</li>
                <li><strong>Relationships:</strong> Associations, aggregations, and inheritances between classes add integration overhead.</li>
              </ul>
              <div className="formula-box">
                <code>Total Effort = Σ(Classes) + Σ(Attrs) + Σ(Methods) + Σ(Relations)</code>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
