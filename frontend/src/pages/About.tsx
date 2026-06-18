import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GitMerge, FileJson } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="page-container about-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="about-header"
      >
        <div className="eyebrow-badge">
          <BookOpen size={16} className="text-cyan" />
          <span>Methodology</span>
        </div>
        <h1 className="section-title">How the Estimator Works</h1>
        <p className="section-subtitle">
          Our automated engine eliminates the guesswork from software estimation by mapping standardized UML diagrams to mathematically proven effort models.
        </p>
      </motion.div>

      <div className="about-content">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="methodology-section"
        >
          <div className="methodology-card">
            <div className="methodology-icon bg-blue-50 text-primary">
              <FileJson size={28} />
            </div>
            <h2>Use Case Points (UCP)</h2>
            <p>
              When a Use Case Diagram is uploaded, the backend engine parses actors and use cases to determine system complexity based on the Use Case Points (UCP) model introduced by Gustav Karner.
            </p>
            <ul className="methodology-list">
              <li><strong>Actors:</strong> Classified as Simple (e.g., API), Average (e.g., automated system), or Complex (e.g., human UI).</li>
              <li><strong>Use Cases:</strong> Evaluated based on the number of transactions or linked steps (Simple, Average, Complex).</li>
              <li><strong>UUCP:</strong> The sum of unadjusted actor weights (UAW) and unadjusted use case weights (UUCW).</li>
              <li><strong>Adjustment:</strong> The UUCP is then multiplied by the Technical Complexity Factor (TCF) and Environmental Complexity Factor (ECF) to yield the final UCP.</li>
              <li><strong>Hours:</strong> Final UCP is multiplied by a productivity factor (usually 20 hours per UCP) to calculate total effort.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="methodology-section"
        >
          <div className="methodology-card">
            <div className="methodology-icon bg-green-50 text-green">
              <GitMerge size={28} />
            </div>
            <h2>Class Diagram Graph Weight</h2>
            <p>
              For Class Diagrams, the engine utilizes a custom Graph Weight heuristic. A class diagram is treated as a directed graph where nodes are classes and edges are relationships (inheritance, association).
            </p>
            <ul className="methodology-list">
              <li><strong>Class Weight:</strong> Calculated based on the number of attributes and methods. A class with more methods has a higher baseline weight.</li>
              <li><strong>Edge Weight:</strong> Relationships between classes add weight. Inheritance paths are weighted more heavily than simple associations.</li>
              <li><strong>Base Complexity:</strong> The sum of all node and edge weights.</li>
              <li><strong>Adjustment:</strong> Like UCP, the base complexity is modified by the user-defined TCF and ECF.</li>
              <li><strong>Hours:</strong> The adjusted complexity score is multiplied by an internal scaling factor to produce an effort estimate.</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
