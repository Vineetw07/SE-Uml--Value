import React from 'react';
import { Network, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Estimation Methodology</h1>
        <p>A transparent look into how we calculate project costs from your UML diagrams.</p>
      </div>

      <div className="methodology-container">
        <section className="methodology-card">
          <div className="card-header">
            <div className="icon-box ucp-icon">
              <Users size={28} />
            </div>
            <h2>Use Case Points (UCP)</h2>
          </div>
          <div className="card-body">
            <p className="lead-text">
              Used for <strong>Use Case Diagrams</strong>, the UCP method estimates the size and effort required for software development based on system functionality.
            </p>

            <div className="method-steps">
              <div className="step">
                <span className="step-num">1</span>
                <div>
                  <h4>Unadjusted Actor Weight (UAW)</h4>
                  <p>Actors are classified as simple (API), average (text-based UI), or complex (GUI) and weighted accordingly.</p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <div>
                  <h4>Unadjusted Use Case Weight (UUCW)</h4>
                  <p>Use cases are classified based on the number of transactions and weighted to determine base complexity.</p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <div>
                  <h4>Complexity Factors (TCF & ECF)</h4>
                  <p>Technical (distributed systems, performance) and Environmental (team experience, motivation) factors multiply the base points.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="methodology-card">
          <div className="card-header">
            <div className="icon-box graph-icon">
              <Network size={28} />
            </div>
            <h2>Graph Weight Model</h2>
          </div>
          <div className="card-body">
            <p className="lead-text">
              Applied to <strong>Class Diagrams</strong>, this structural analysis estimates the implementation effort of object-oriented systems.
            </p>

            <div className="method-steps">
              <div className="step">
                <span className="step-num">1</span>
                <div>
                  <h4>Node Analysis</h4>
                  <p>Classes, attributes, and methods are extracted as distinct nodes, each carrying a baseline implementation hour cost.</p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <div>
                  <h4>Edge Complexity</h4>
                  <p>Relationships (inheritance, composition, aggregation) are modeled as edges and add integration overhead.</p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <div>
                  <h4>Contextual Scaling</h4>
                  <p>Like UCP, the raw node/edge hourly sum is scaled by the combined Technical and Environmental complexity multiplier.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
