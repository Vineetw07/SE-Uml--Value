import { Activity, Cpu, CheckCircle } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <div className="how-it-works-page">
      <div className="page-header">
        <h1>How It Works</h1>
        <p>Understanding the models behind our estimation engine</p>
      </div>

      <div className="content-container">
        <section className="model-section">
          <div className="model-header">
            <div className="model-icon">
              <Activity size={32} />
            </div>
            <h2>Use Case Points (UCP)</h2>
          </div>
          <div className="model-content">
            <p className="model-intro">
              The Use Case Points method estimates software size and effort based on Use Case Diagrams. It evaluates the complexity of the system's actors and use cases, adjusting the final estimate based on technical and environmental factors.
            </p>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h4>Calculate UAW</h4>
                <p>Unadjusted Actor Weight (UAW) scores actors as Simple (1), Average (2), or Complex (3) based on their interaction type (API, protocol, or GUI).</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h4>Calculate UUCW</h4>
                <p>Unadjusted Use Case Weight (UUCW) scores use cases as Simple (5), Average (10), or Complex (15) based on the number of transactions.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h4>Apply Factors</h4>
                <p>Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) multiply the base score to account for project constraints.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="model-section">
          <div className="model-header">
            <div className="model-icon">
              <Cpu size={32} />
            </div>
            <h2>Class Graph Weight</h2>
          </div>
          <div className="model-content">
            <p className="model-intro">
              The Class Graph Weight method analyzes structural complexity by examining Class Diagrams. It assigns specific hourly weights to different elements of a class diagram to generate an aggregate effort estimate.
            </p>

            <ul className="weight-list">
              <li className="weight-item">
                <CheckCircle className="weight-icon" size={24} />
                <div className="weight-details">
                  <strong>Classes</strong>
                  <span>Base implementation overhead: 10 hours per class</span>
                </div>
              </li>
              <li className="weight-item">
                <CheckCircle className="weight-icon" size={24} />
                <div className="weight-details">
                  <strong>Attributes</strong>
                  <span>Data structure implementation: 2 hours per attribute</span>
                </div>
              </li>
              <li className="weight-item">
                <CheckCircle className="weight-icon" size={24} />
                <div className="weight-details">
                  <strong>Methods</strong>
                  <span>Business logic implementation: 4 hours per method</span>
                </div>
              </li>
              <li className="weight-item">
                <CheckCircle className="weight-icon" size={24} />
                <div className="weight-details">
                  <strong>Relationships</strong>
                  <span>Integration and coupling: 3 hours per relationship</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
