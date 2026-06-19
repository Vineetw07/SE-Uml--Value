import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="page-container about-page">
      <motion.section
        className="content-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-content">
          <h2>About UML Value Estimator</h2>
          <p className="lead-text">
            Bridging the gap between software architecture and project planning.
          </p>
          <p>
            The UML Value Estimator is a cutting-edge tool designed to automate the complex process of predicting software project hours and costs directly from system architecture diagrams.
          </p>
          <p>
            By analyzing Use Case and Class Diagrams, our C++ backend engine calculates metrics like Use Case Points (UCP) and Class Graph Weights. Combined with your custom Technical and Environmental Complexity Factors (TCF/ECF), we provide defensible, model-backed estimates that take the guesswork out of software budgeting.
          </p>

          <div className="methodology-grid mt-8">
             <div className="method-card">
                 <h4>Use Case Points (UCP)</h4>
                 <p>Estimates size and effort based on the number and complexity of use cases and actors.</p>
             </div>
             <div className="method-card">
                 <h4>Class Graph Weight</h4>
                 <p>Analyzes the structural complexity of classes, attributes, methods, and relationships.</p>
             </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
