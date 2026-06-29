import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="page-container about-page">
      <div className="about-header">
        <h1>How It Works</h1>
        <p className="subtitle">The science behind our estimation engine</p>
      </div>

      <div className="about-content">
        <section className="methodology-card">
          <h2>Use Case Points (UCP) Engine</h2>
          <p>
            The Use Case Points method is a software estimation technique used to forecast the software size for software development projects.
          </p>

          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-details">
                <h3>XML Parsing</h3>
                <p>The backend natively processes your diagram files, extracting actor types and use case counts.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-details">
                <h3>Algorithmic Estimation</h3>
                <p>Applies the standard UCP formula involving Unadjusted Actor and UseCase Weights, factoring in Technical (TCF) and Environmental (ECF) Complexity Factors.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-details">
                <h3>Result Generation</h3>
                <p>Generates estimated work hours and total project cost dynamically based on your provided hourly rate.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="methodology-card mt-8">
          <h2>Class Diagram & Graph Weight Integration</h2>
          <p>
            For object-oriented designs, we analyze the structural complexity of your class diagrams.
          </p>

          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-details">
                <h3>Auto-Routing</h3>
                <p>The backend intelligently detects whether an input file contains Use Cases or Class diagrams and routes the logic accordingly.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-details">
                <h3>Graph Weight Calculation</h3>
                <p>Extracts detailed metrics about classes, attributes, methods, and relationships, applying a specific Graph Weight hour factor.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-details">
                <h3>Dynamic Results</h3>
                <p>The frontend dynamically adapts its breakdown structure to render elements unique to a Class Diagram format.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
