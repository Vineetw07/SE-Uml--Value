import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import type { Transition } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 },
};

const pageTransition: Transition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.4,
};

export const About: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-content about-page"
    >
      <div className="about-header">
        <Info size={48} className="about-icon" />
        <h2>About UML Value Estimator</h2>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h3>The Problem</h3>
          <p>
            Manual component counting for software cost estimation is tedious and error-prone.
            Traditional methods require hours of painstaking review of system architecture diagrams.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Solution</h3>
          <p>
            The Software Cost Estimator automates this process. By applying industry-standard models
            directly to your exported UML diagrams, we provide defensible, transparent cost and effort estimates in seconds.
          </p>
        </div>

        <div className="about-card">
          <h3>Methodology</h3>
          <ul className="methodology-list">
            <li><strong>Use Case Diagrams:</strong> Evaluated using the Use Case Points (UCP) framework.</li>
            <li><strong>Class Diagrams:</strong> Assessed using our proprietary Graph Weight model.</li>
            <li><strong>Complexity Adjustment:</strong> Incorporates 13 Technical and 8 Environmental factors.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
