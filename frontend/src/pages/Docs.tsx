import React from 'react';

export const Docs: React.FC = () => {
  return (
    <section className="page-shell panel-reveal" aria-labelledby="docs-heading">
      <div className="workspace-intro">
        <div>
          <p className="eyebrow">Documentation</p>
          <h2 id="docs-heading">User Guide & References</h2>
          <p>
            Learn how to format your diagrams, configure estimation factors, and interpret the results to get the most out of the Estimator.
          </p>
        </div>
      </div>

      <div className="workspace-grid docs-content">
        <div className="setup-panel">
           <div className="panel-heading">
            <div>
              <h3>Supported Diagram Formats</h3>
            </div>
          </div>
          <p>The estimator accepts exported files from common UML modeling tools. Please ensure your files adhere to the following structures:</p>
          <br />

          <h4>Use Case Diagrams (JSON)</h4>
          <p>Your JSON should contain arrays of `actors` and `useCases`. Each element must have a `complexity` field ("simple", "average", or "complex").</p>
          <pre className="code-block">
{`{
  "actors": [
    { "name": "User", "complexity": "simple" }
  ],
  "useCases": [
    { "name": "Login", "complexity": "average" }
  ]
}`}
          </pre>

          <br />
          <h4>Class Diagrams (XML)</h4>
          <p>Your XML should define `Class` elements with nested `Attribute` and `Method` elements. Complexity is inferred from the number of attributes and methods.</p>
           <pre className="code-block">
{`<ClassDiagram>
  <Class name="User">
    <Attribute name="id" />
    <Method name="login" />
  </Class>
</ClassDiagram>`}
          </pre>
        </div>

        <div className="result-panel">
          <div className="panel-heading">
            <div>
              <h3>Estimation Factors</h3>
            </div>
          </div>
          <p>
            The estimation engine uses the standard Use Case Points (UCP) method. This involves adjusting the base unadjusted points by Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF).
          </p>
          <br/>
          <h4>Technical Complexity Factors (TCF)</h4>
          <p>
            These 13 factors assess the technical difficulty of the project, such as distributed systems, performance requirements, and security features. Scale each from 0 (irrelevant) to 5 (essential).
          </p>
          <br/>
          <h4>Environmental Complexity Factors (ECF)</h4>
          <p>
            These 8 factors evaluate the team's environment and capability, including experience with UML, motivation, and requirement stability. Scale each from 0 to 5.
          </p>
          <br/>
          <div className="panel-heading">
            <div>
              <h3>Interpreting Results</h3>
            </div>
          </div>
          <ul className="docs-list">
             <li><strong>Unadjusted Points (UUCP):</strong> The raw complexity based solely on actors and use cases (or classes).</li>
             <li><strong>Adjusted Points (UCP):</strong> The UUCP multiplied by TCF and ECF.</li>
             <li><strong>Total Hours:</strong> Calculated by multiplying the UCP by a standard productivity factor (e.g., 20 hours per point).</li>
             <li><strong>Total Cost:</strong> Total Hours multiplied by your specified hourly rate.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
