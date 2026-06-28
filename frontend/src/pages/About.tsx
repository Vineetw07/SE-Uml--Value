import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Network, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <motion.div
      className="page-container about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header text-center">
        <p className="eyebrow">How it works</p>
        <h1>Estimation Models Explained</h1>
        <p className="page-description mx-auto">
          Learn how our platform transforms raw architecture diagrams into concrete, data-backed estimates.
        </p>
      </div>

      <div className="models-grid">
        <motion.div
          className="model-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="model-icon">
            <FileCode size={32} />
          </div>
          <h2>Use Case Points (UCP)</h2>
          <span className="model-tag">For Use Case Diagrams</span>
          <p>
            The Use Case Points model calculates software size based on system actors and use cases. We categorize them by complexity (Simple, Average, Complex).
          </p>
          <ul className="model-features">
            <li><strong>Actors:</strong> Classified by their interface type (API, GUI, etc.).</li>
            <li><strong>Use Cases:</strong> Classified by the number of transactions or steps.</li>
            <li><strong>Unadjusted UCP (UUCP):</strong> The base sum of all actor and use case weights.</li>
            <li><strong>Complexity Adjustment:</strong> Multiplied by your tuned Technical (TCF) and Environmental (ECF) factors.</li>
          </ul>
        </motion.div>

        <motion.div
          className="model-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="model-icon">
            <Network size={32} />
          </div>
          <h2>Graph Weight Model</h2>
          <span className="model-tag">For Class Diagrams</span>
          <p>
            Our proprietary Graph Weight model analyzes the structural density of object-oriented architectures by treating the class diagram as a directed graph.
          </p>
          <ul className="model-features">
            <li><strong>Nodes:</strong> Each Class represents a unit of work (10 hrs base).</li>
            <li><strong>Properties:</strong> Attributes (2 hrs) and Methods (4 hrs) add internal complexity.</li>
            <li><strong>Edges:</strong> Relationships (associations, inheritances) add integration complexity (3 hrs).</li>
            <li><strong>Calculation:</strong> Base hours are tallied and then scaled by your custom TCF/ECF multipliers.</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="calculation-flow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3>The Estimation Pipeline</h3>
        <div className="pipeline-visual">
          <div className="pipeline-step">
            <div className="step-circle">1</div>
            <span>Parse Diagram</span>
          </div>
          <div className="pipeline-connector"><ArrowRight size={20} /></div>
          <div className="pipeline-step">
            <div className="step-circle">2</div>
            <span>Apply Weights</span>
          </div>
          <div className="pipeline-connector"><ArrowRight size={20} /></div>
          <div className="pipeline-step">
            <div className="step-circle">3</div>
            <span>Apply Factors</span>
          </div>
          <div className="pipeline-connector"><ArrowRight size={20} /></div>
          <div className="pipeline-step">
            <div className="step-circle"><Calculator size={18} /></div>
            <span>Final Cost</span>
          </div>
        </div>
      </motion.div>

      <div className="text-center mt-12">
        <Link to="/estimator" className="btn-primary-large">
          Ready to estimate? Go to Workspace
        </Link>
      </div>
    </motion.div>
  );
};
