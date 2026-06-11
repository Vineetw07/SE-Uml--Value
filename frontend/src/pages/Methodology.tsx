import React from 'react';
import { BookOpen, Cpu, Globe } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <div className="page-container">
      <div className="methodology-header">
        <p className="eyebrow">How it works</p>
        <h1>Estimation Methodology</h1>
        <p className="subtitle">Understanding the algorithms behind our defensible estimates.</p>
      </div>

      <div className="methodology-content">
        <section className="method-section">
          <div className="method-icon-box bg-primary-soft">
            <Cpu className="text-primary" size={28} />
          </div>
          <div className="method-text">
            <h2>Use Case Points (UCP)</h2>
            <p>
              Use Case Points (UCP) is a software estimation technique used to measure the software size of an application based on its use cases. It considers the complexity of actors and the use cases themselves.
            </p>
            <ul>
              <li><strong>Unadjusted Actor Weight (UAW):</strong> Classifies actors as Simple, Average, or Complex.</li>
              <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Classifies use cases based on the number of transactions.</li>
              <li><strong>Unadjusted Use Case Points (UUCP):</strong> The sum of UAW and UUCW.</li>
            </ul>
          </div>
        </section>

        <section className="method-section">
          <div className="method-icon-box bg-cyan-soft">
            <Globe className="text-cyan" size={28} />
          </div>
          <div className="method-text">
            <h2>Technical Complexity Factors (TCF)</h2>
            <p>
              TCF accounts for the technical considerations of the system, such as distributed systems, performance objectives, and security features. Each of the 13 factors is rated from 0 to 5.
            </p>
            <p className="formula-box">
              TCF = 0.6 + (0.01 × Total Technical Factor)
            </p>
          </div>
        </section>

        <section className="method-section">
          <div className="method-icon-box bg-green-soft">
            <BookOpen className="text-green" size={28} />
          </div>
          <div className="method-text">
            <h2>Environmental Complexity Factors (ECF)</h2>
            <p>
              ECF evaluates the team's experience and the development environment, including familiarity with UML, object-oriented programming experience, and analyst capability. Each of the 8 factors is rated from 0 to 5.
            </p>
            <p className="formula-box">
              ECF = 1.4 - (0.03 × Total Environmental Factor)
            </p>
          </div>
        </section>

        <section className="method-summary">
          <h2>Final Calculation</h2>
          <div className="calculation-flow">
            <div className="calc-step">
              <span className="step-label">Adjusted UCP</span>
              <span className="step-formula">UUCP × TCF × ECF</span>
            </div>
            <div className="calc-operator">×</div>
            <div className="calc-step">
              <span className="step-label">Productivity Factor</span>
              <span className="step-formula">20 hours/UCP</span>
            </div>
            <div className="calc-operator">=</div>
            <div className="calc-step result">
              <span className="step-label">Total Effort</span>
              <span className="step-formula">Estimated Hours</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
