export function About() {
  return (
    <main className="page-container">
      <div className="workspace-intro">
        <div>
          <p className="eyebrow">About Us</p>
          <h2>The Award-Winning UML Estimator</h2>
          <p>
            Welcome to the future of software estimation. Our platform leverages advanced AI and model-based techniques to convert your UML diagrams into highly accurate effort and cost estimates. We bridge the gap between design and project management.
          </p>
        </div>
      </div>
      <div className="workspace-grid" style={{ marginTop: '20px' }}>
        <div className="setup-panel">
          <div className="panel-heading">
            <h3>Our Mission</h3>
          </div>
          <p>
            To provide development teams with the confidence they need to plan, execute, and deliver software projects on time and within budget.
          </p>
          <div className="panel-heading" style={{ marginTop: '20px' }}>
            <h3>Why Choose Us?</h3>
          </div>
          <ul>
            <li><strong>Accuracy:</strong> Backed by robust models like Use Case Points (UCP).</li>
            <li><strong>Speed:</strong> Instant estimates directly from your architecture diagrams.</li>
            <li><strong>Transparency:</strong> Clear breakdown of factors influencing your project cost.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
