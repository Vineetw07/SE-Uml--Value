export default function About() {
  return (
    <div className="about-container">
      <div className="about-content panel-reveal">
        <p className="eyebrow">Project Overview</p>
        <h1>About UML Value Estimator</h1>

        <div className="about-section">
          <h2>The Problem</h2>
          <p>
            Software cost estimation has historically been a manual, tedious, and error-prone process. Developers and architects often have to manually count elements in their system architecture diagrams and blindly apply heuristics to guess project hours.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Solution</h2>
          <p>
            The UML Value Estimator is an automated tool that replaces manual counting with an intelligent algorithmic approach. By simply uploading a standard system design diagram exported from your modeling tool, the system automatically parses its structure and computes a concrete estimate in both hours and dollars.
          </p>
        </div>

        <div className="about-section">
          <h2>Under the Hood</h2>
          <div className="tech-stack-grid">
            <div className="tech-card">
              <h3>Fast Backend</h3>
              <p>Powered by a blazing-fast C++ Raw Winsock Server that analyzes structural complexity and applies the Use Case Points (UCP) or Graph Weight models.</p>
            </div>
            <div className="tech-card">
              <h3>Modern Frontend</h3>
              <p>A beautiful React and TypeScript interface built with Vite, ensuring a seamless user experience for adjusting technical and environmental complexity factors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}