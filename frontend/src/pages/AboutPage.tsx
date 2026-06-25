import { motion } from 'framer-motion';
import { FileCode, Activity, Sliders } from 'lucide-react';

export function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <div className="about-page">
      <div className="about-header">
        <h2>Methodology & Architecture</h2>
        <p>Understanding the engine behind the estimates.</p>
      </div>

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={sectionVariants} className="about-card">
          <div className="about-card-header">
            <div className="icon-box"><FileCode size={20} /></div>
            <h3>Use Case Points (UCP)</h3>
          </div>
          <div className="about-card-body">
            <p>
              The Use Case Points method is a software estimation technique used to forecast the software size for
              projects. It analyzes the functional requirements captured in Use Case diagrams.
            </p>
            <ul className="method-list">
              <li><strong>Unadjusted Actor Weight (UAW):</strong> Categorizes actors as Simple, Average, or Complex.</li>
              <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Analyzes the number of transactions per use case.</li>
              <li><strong>Technical Complexity Factor (TCF):</strong> Adjusts based on non-functional requirements (e.g., performance, security).</li>
              <li><strong>Environmental Complexity Factor (ECF):</strong> Adjusts based on team experience and project conditions.</li>
            </ul>
            <div className="formula-box">
              <code>UCP = (UAW + UUCW) × TCF × ECF</code>
            </div>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} className="about-card">
          <div className="about-card-header">
            <div className="icon-box"><Activity size={20} /></div>
            <h3>Class Graph Weight</h3>
          </div>
          <div className="about-card-body">
            <p>
              This custom metric evaluates the structural complexity of your system by analyzing Class Diagrams
              exported from modeling tools (like draw.io XML).
            </p>
            <ul className="method-list">
              <li><strong>Node Analysis:</strong> Evaluates the number of attributes and operations per class.</li>
              <li><strong>Edge Analysis:</strong> Analyzes relationships (associations, inheritances, dependencies).</li>
              <li><strong>Coupling Metric:</strong> Heavily interconnected classes increase the overall complexity weight.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} className="about-card full-width">
          <div className="about-card-header">
            <div className="icon-box"><Sliders size={20} /></div>
            <h3>The Architecture Pipeline</h3>
          </div>
          <div className="about-card-body pipeline-visualization">
            <div className="pipeline-step">
              <span className="step-num">1</span>
              <h4>Frontend Client</h4>
              <p>React/Vite app handles file uploads and factor configuration.</p>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-step highlight">
              <span className="step-num">2</span>
              <h4>C++ Engine</h4>
              <p>High-performance backend parses XML/JSON and runs graph algorithms.</p>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-step">
              <span className="step-num">3</span>
              <h4>Result Synthesis</h4>
              <p>Calculates final hour estimates using configurable productivity rates.</p>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}
