import React from 'react';
import { BookOpen, Target, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="about-container fade-in-up">
      <div className="about-header">
        <h1>Methodology & Science</h1>
        <p className="subtitle">Understanding the algorithms behind the UML Value Estimator.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-icon">
            <Target size={32} />
          </div>
          <div className="section-text">
            <h2>Use Case Points (UCP)</h2>
            <p>
              Developed by Gustav Karner in 1993, Use Case Points is a software estimation technique used to measure the software size of a system based on its use cases. It evaluates the complexity of actors and use cases to calculate Unadjusted Use Case Points (UUCP).
            </p>
            <p>
              The system then adjusts this base score using Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) to account for non-functional requirements and team dynamics, resulting in a highly accurate estimation of required effort.
            </p>
          </div>
        </section>

        <section className="about-section reverse">
          <div className="section-icon">
            <Layers size={32} />
          </div>
          <div className="section-text">
            <h2>Class Graph Weight</h2>
            <p>
              For Class Diagrams, our tool employs a proprietary Graph Weight algorithm. We construct a directed graph where nodes represent classes and edges represent relationships (inheritance, composition, aggregation).
            </p>
            <p>
              The algorithm calculates structural complexity by analyzing the number of attributes, methods per class, and the depth of inheritance trees. These metrics are weighted and translated into development hours based on industry benchmarks for object-oriented development.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-icon">
            <BookOpen size={32} />
          </div>
          <div className="section-text">
            <h2>The Process</h2>
            <ul className="process-list">
              <li>
                <strong>1. Parsing:</strong> The C++ backend strictly parses standard XML/JSON UML representations.
              </li>
              <li>
                <strong>2. Classification:</strong> Elements are categorized by complexity (Simple, Average, Complex).
              </li>
              <li>
                <strong>3. Calculation:</strong> Mathematical models apply base hours and modifiers (TCF/ECF).
              </li>
              <li>
                <strong>4. Output:</strong> Cost is derived from the calculated effort multiplied by the hourly rate.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
