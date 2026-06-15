import React from 'react';
import { Calculator, Target, Zap } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page fade-in">
      <div className="about-header">
        <h1>The Science of Estimation</h1>
        <p className="subtitle">
          How our models translate abstract architectural diagrams into concrete hours and budgets.
        </p>
      </div>

      <div className="content-grid">
        <section className="info-card glass-card">
          <div className="card-icon blue">
            <Target size={28} />
          </div>
          <h2>Use Case Points (UCP)</h2>
          <p>
            The Use Case Points model was developed by Gustav Karner in 1993. It evaluates the complexity of a system based on its use cases and the actors that interact with them.
          </p>
          <div className="formula-box">
            <code>UCP = (UUCW + UAW) × TCF × ECF</code>
          </div>
          <ul className="feature-list">
            <li><strong>UUCW:</strong> Unadjusted Use Case Weight</li>
            <li><strong>UAW:</strong> Unadjusted Actor Weight</li>
            <li><strong>TCF:</strong> Technical Complexity Factor</li>
            <li><strong>ECF:</strong> Environmental Complexity Factor</li>
          </ul>
          <p className="note">
            The final effort in hours is typically calculated by multiplying the UCP by a productivity factor (usually 20 hours per point).
          </p>
        </section>

        <section className="info-card glass-card">
          <div className="card-icon green">
            <Zap size={28} />
          </div>
          <h2>Graph Weight Model</h2>
          <p>
            For Class Diagrams, we use a specialized Graph Weight model. It decomposes the class structure into granular elements and assigns specific hour weights to each component.
          </p>
          <div className="formula-box">
            <code>Effort = Σ(Elements × Weight)</code>
          </div>
          <ul className="feature-list">
            <li><strong>Classes:</strong> Weighted based on structural complexity.</li>
            <li><strong>Attributes:</strong> Data points that need to be modeled.</li>
            <li><strong>Methods:</strong> Functions representing business logic.</li>
            <li><strong>Relationships:</strong> Associations, generalizations, etc.</li>
          </ul>
          <p className="note">
            This method provides a highly detailed bottom-up estimate suitable for object-oriented systems.
          </p>
        </section>
      </div>

      <section className="calibration-section glass-card">
        <div className="flex-header">
          <div className="card-icon purple">
            <Calculator size={28} />
          </div>
          <h2>Continuous Calibration</h2>
        </div>
        <p>
          Estimation is an inexact science. That's why our system features a feedback loop. When you complete a project, you can input the <strong>Actual Time</strong> spent.
          This data is logged and used to fine-tune the productivity multipliers, ensuring that your future estimates become increasingly accurate for your specific team's velocity.
        </p>
      </section>
    </div>
  );
};
