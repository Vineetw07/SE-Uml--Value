export const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <header className="about-header">
          <p className="eyebrow">Estimation Engines</p>
          <h1>The Science Behind the Models</h1>
          <p className="about-subtitle">
            We use two primary algorithmic approaches to convert your architectural diagrams into tangible hours and costs.
          </p>
        </header>

        <div className="models-grid">
          <div className="model-card">
            <div className="model-card-header">
              <span className="model-label model-label--ucp">UCP Model</span>
              <h2>Use Case Points (UCP)</h2>
            </div>
            <p>
              The Use Case Points method is a software estimation technique used to forecast the software size for software development projects. It is based on the use case diagram.
            </p>
            <div className="model-details">
              <h3>How it works:</h3>
              <ul>
                <li><strong>Actors Weight:</strong> Classifies actors as Simple, Average, or Complex based on their interaction type (API, CLI, GUI).</li>
                <li><strong>Use Cases Weight:</strong> Classifies use cases based on the number of transactions or interacting classes.</li>
                <li><strong>Unadjusted Use Case Weight (UUCP):</strong> The sum of Actor and Use Case weights.</li>
                <li><strong>Complexity Factors:</strong> Applies Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) to the UUCP.</li>
              </ul>
              <div className="formula-box">
                <code>UCP = UUCP × TCF × ECF</code>
                <code>Hours = UCP × Productivity Factor</code>
              </div>
            </div>
          </div>

          <div className="model-card">
            <div className="model-card-header">
              <span className="model-label model-label--gw">Graph Weight</span>
              <h2>Class Diagram Graph Weight</h2>
            </div>
            <p>
              The Graph Weight model analyzes the structural complexity of an object-oriented design by evaluating the properties of its classes and their relationships.
            </p>
            <div className="model-details">
              <h3>How it works:</h3>
              <ul>
                <li><strong>Class Size:</strong> Estimates the effort based on the number of classes.</li>
                <li><strong>Attribute Complexity:</strong> Each attribute within a class adds to the implementation effort (default 2 hrs/attribute).</li>
                <li><strong>Method Complexity:</strong> Each method requires significant implementation and testing effort (default 4 hrs/method).</li>
                <li><strong>Relationship Weight:</strong> Analyzes associations, generalizations, and dependencies between classes.</li>
              </ul>
              <div className="formula-box">
                <code>Base Effort = ∑(Classes, Attrs, Methods, Rels)</code>
                <code>Total Hours = Base Effort × TCF × ECF</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
