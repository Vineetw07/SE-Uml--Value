import { BookOpen, Scale, Network } from 'lucide-react';
import './About.css';

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="about-container text-center">
          <BookOpen className="header-icon" size={48} />
          <h1>Estimation Methodology</h1>
          <p className="lead">
            Understanding the models behind our defensible time and cost projections.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-container">
          <section className="methodology-section">
            <div className="section-icon">
              <Scale size={32} />
            </div>
            <div className="section-body">
              <h2>Use Case Points (UCP) Model</h2>
              <p>
                The Use Case Points estimation technique computes the size and effort of a software project
                based on its use cases. Originally developed by Gustav Karner, this model evaluates system
                complexity by analyzing two primary elements:
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <h3>Unadjusted Actor Weight (UAW)</h3>
                  <p>Actors are categorized by complexity (Simple, Average, Complex) based on how they interact with the system (e.g., API vs. GUI). Each category assigns a specific weight to the actor.</p>
                </div>
                <div className="info-card">
                  <h3>Unadjusted Use Case Weight (UUCW)</h3>
                  <p>Use Cases are weighed based on the number of transactions or steps required to complete the action. Combined with UAW, this forms the raw size of the system.</p>
                </div>
              </div>

              <h3>Complexity Factors</h3>
              <p>
                Raw points are refined using <strong>Technical Complexity Factors (TCF)</strong> (like distributed systems, security, and portability)
                and <strong>Environmental Complexity Factors (ECF)</strong> (like team experience and motivation).
                The adjusted UCP is then multiplied by an industry-standard hours-per-point ratio to generate total effort.
              </p>
            </div>
          </section>

          <section className="methodology-section">
            <div className="section-icon">
              <Network size={32} />
            </div>
            <div className="section-body">
              <h2>Class Diagram Graph Weight Model</h2>
              <p>
                When a structural model (Class Diagram) is provided, the estimator pivots to a Graph Weight algorithmic approach.
                Instead of behavioral transactions, this model measures the density and interconnectedness of the system architecture.
              </p>

              <div className="list-breakdown">
                <div className="list-item">
                  <div className="list-bullet"></div>
                  <div>
                    <h4>Classes & Interfaces</h4>
                    <p>Acts as the foundational nodes in the graph. The sheer volume establishes a base architectural footprint.</p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="list-bullet"></div>
                  <div>
                    <h4>Properties & Methods</h4>
                    <p>Internal complexity of nodes. A class with 20 methods and complex data attributes naturally requires more implementation effort than a simple data container.</p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="list-bullet"></div>
                  <div>
                    <h4>Relationships & Dependencies</h4>
                    <p>Inheritance, composition, and aggregation form the edges of the graph. High coupling and deep inheritance trees exponentially increase testing and integration hours.</p>
                  </div>
                </div>
              </div>

              <p className="summary-text">
                By parsing the XML definition of the class diagram, the backend counts these nodes and edges, applying
                weighted multipliers calibrated from historical project data to project exact implementation hours.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
