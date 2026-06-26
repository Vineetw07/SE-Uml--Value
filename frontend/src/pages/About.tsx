import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="page-container about-page"
    >
      <div className="about-header">
        <h1>About the Methodologies</h1>
        <p>Understanding how the Software Cost Estimator computes hours and costs.</p>
      </div>

      <div className="info-cards">
        <section className="info-card">
          <h2>Use Case Points (UCP)</h2>
          <p>
            The Use Case Points methodology is used when a <strong>Use Case Diagram</strong> is uploaded.
            It calculates estimation based on the system's functional requirements.
          </p>
          <div className="info-content">
            <h3>How it works:</h3>
            <ul>
              <li><strong>Unadjusted Actor Weight (UAW):</strong> Evaluates the complexity of actors interacting with the system (Simple, Average, Complex).</li>
              <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Analyzes the complexity of use cases (Simple, Average, Complex).</li>
              <li><strong>Complexity Factors:</strong> Applies Technical Complexity Factor (TCF) and Environmental Complexity Factor (ECF) to account for non-functional requirements and team capabilities.</li>
              <li><strong>Calculation:</strong> `UCP = (UAW + UUCW) × TCF × ECF`. The total hours are then derived based on an industry standard of 20 hours per UCP.</li>
            </ul>
          </div>
        </section>

        <section className="info-card">
          <h2>Graph Weight Model</h2>
          <p>
            The Graph Weight methodology is applied when a <strong>Class Diagram</strong> is uploaded.
            It evaluates the structural complexity of the system's architecture.
          </p>
          <div className="info-content">
            <h3>How it works:</h3>
            <ul>
              <li><strong>Element Counting:</strong> Automatically extracts and counts classes, attributes, methods, and relationships.</li>
              <li><strong>Weight Assignment:</strong> Assigns base hour weights to each element:
                <ul>
                  <li>Classes: 10 hours</li>
                  <li>Attributes: 2 hours</li>
                  <li>Methods: 4 hours</li>
                  <li>Relationships: 3 hours</li>
                </ul>
              </li>
              <li><strong>Total Calculation:</strong> Multiplies the base hours by the combined `TCF × ECF` multiplier to get the final estimated effort.</li>
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
