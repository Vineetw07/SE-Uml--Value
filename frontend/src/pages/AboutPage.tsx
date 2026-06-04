import React from 'react';
import { BookOpen, Code, Settings } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="page-container about-page">
      <div className="content-wrapper">
        <header className="page-header">
          <p className="eyebrow">Methodology</p>
          <h2>How We Estimate</h2>
          <p className="lead-text">
            Our estimation engine uses proven mathematical models to turn abstract system designs into concrete effort predictions.
          </p>
        </header>

        <div className="article-content">
          <section className="info-block">
            <div className="info-header">
              <div className="icon-wrapper"><BookOpen size={24} /></div>
              <h3>Use Case Points (UCP)</h3>
            </div>
            <p>
              When you upload a Use Case Diagram, we utilize the Use Case Points methodology. The system counts the number of actors and use cases, classifying them as Simple, Average, or Complex based on their internal structure.
            </p>
            <ul>
              <li><strong>Actors:</strong> Simple (System), Average (Interactive System), Complex (Human).</li>
              <li><strong>Use Cases:</strong> Simple (1-3 transactions), Average (4-7 transactions), Complex (8+ transactions).</li>
            </ul>
            <p>
              These counts yield the Unadjusted Use Case Weight (UUCW) and Unadjusted Actor Weight (UAW), forming the foundation of the estimate.
            </p>
          </section>

          <section className="info-block">
            <div className="info-header">
              <div className="icon-wrapper"><Code size={24} /></div>
              <h3>Class Graph Weight</h3>
            </div>
            <p>
              For Class Diagrams, we parse the structure into a graph model. We evaluate the complexity by counting classes, attributes, methods, and their inter-relationships.
            </p>
            <ul>
              <li><strong>Classes:</strong> Form the base units of work (typically ~10 hours per class baseline).</li>
              <li><strong>Properties:</strong> Attributes add ~2 hours, Methods add ~4 hours.</li>
              <li><strong>Relationships:</strong> Coupling (inheritance, composition) adds integration complexity (~3 hours).</li>
            </ul>
          </section>

          <section className="info-block">
            <div className="info-header">
              <div className="icon-wrapper"><Settings size={24} /></div>
              <h3>Complexity Factors</h3>
            </div>
            <p>
              Raw models assume an "average" environment. To ground the estimate in reality, we apply two sets of multipliers:
            </p>
            <div className="factor-grid-simple">
              <div className="factor-col">
                <h4>Technical Complexity (TCF)</h4>
                <p>13 factors covering system requirements like concurrency, security, and distribution.</p>
              </div>
              <div className="factor-col">
                <h4>Environmental (ECF)</h4>
                <p>8 factors assessing team capability, experience, and motivation.</p>
              </div>
            </div>
            <p className="summary-note">
              Final Effort = Base Estimate × TCF Multiplier × ECF Multiplier
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
