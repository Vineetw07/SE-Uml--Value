import './About.css';

export function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>How It Works</h1>
        <p className="subtitle">The science behind our automated estimations</p>
      </div>

      <div className="about-content">
        <section className="about-section glass-panel">
          <h2>Overview</h2>
          <p>
            The Software Cost Estimator replaces manual, tedious component counting with an automated algorithmic approach.
            By uploading a standard system design diagram, the system analyzes its complexity, applies industry-standard formulas,
            and provides a concrete estimate in both hours and dollars.
          </p>
        </section>

        <section className="about-section glass-panel">
          <h2>Use Case Points (UCP) Model</h2>
          <p>
            Used for Use Case Diagrams. UCP calculates software size based on:
          </p>
          <ul>
            <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Number and complexity of use cases.</li>
            <li><strong>Unadjusted Actor Weight (UAW):</strong> Number and complexity of actors.</li>
            <li><strong>Technical Complexity Factor (TCF):</strong> Technical constraints like performance and security.</li>
            <li><strong>Environmental Complexity Factor (ECF):</strong> Team experience and motivation.</li>
          </ul>
        </section>

        <section className="about-section glass-panel">
          <h2>Graph Weight Model</h2>
          <p>
            Used for Class Diagrams. This model estimates effort based on the structural complexity of classes:
          </p>
          <ul>
            <li>Counts attributes and methods within classes.</li>
            <li>Evaluates relationships (inheritance, associations) between classes.</li>
            <li>Applies weights to calculate a baseline structural effort, which is then adjusted by TCF and ECF.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
