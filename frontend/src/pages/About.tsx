import './About.css';

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Estimation Methodology</h1>
        <p className="subtitle">Understanding the science behind the numbers</p>
      </div>

      <div className="about-content">
        <section className="methodology-section">
          <h2>Use Case Points (UCP)</h2>
          <p>
            The Use Case Points method is a software estimation technique used to forecast the software size and effort of projects that use UML Use Case models. It breaks down the system into actors and use cases, assigning weights based on complexity.
          </p>
          <div className="methodology-grid">
            <div className="method-card">
              <h3>1. Actors Weight</h3>
              <p>Actors are classified as Simple (API), Average (TCP/IP), or Complex (GUI). The sum yields the Unadjusted Actor Weight (UAW).</p>
            </div>
            <div className="method-card">
              <h3>2. Use Case Weight</h3>
              <p>Use cases are classified based on the number of transactions: Simple (1-3), Average (4-7), or Complex (8+). The sum yields the Unadjusted Use Case Weight (UUCW).</p>
            </div>
            <div className="method-card">
              <h3>3. Factors</h3>
              <p>Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) adjust the raw sizing based on project realities.</p>
            </div>
            <div className="method-card">
              <h3>4. Final Calculation</h3>
              <p>UCP = (UAW + UUCW) × TCF × ECF. Hours are derived by multiplying UCP by a productivity factor (e.g., 20 hours/UCP).</p>
            </div>
          </div>
        </section>

        <section className="methodology-section">
          <h2>Class Graph Weight</h2>
          <p>
            For structural estimation, we analyze Class Diagrams using graph theory to determine the complexity of the internal architecture.
          </p>
          <ul className="method-list">
            <li><strong>Class Complexity:</strong> Measured by the number of attributes and methods.</li>
            <li><strong>Coupling:</strong> Measured by the relationships between classes (associations, aggregations, inheritances).</li>
            <li><strong>Weight Calculation:</strong> High-coupling and high-complexity classes contribute more heavily to the overall effort estimate.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
