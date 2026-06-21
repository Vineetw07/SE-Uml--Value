import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Activity, GitCommitHorizontal } from 'lucide-react';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <div className="page-container about-page">
      <motion.div
        className="about-header text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Methodology & Models</h1>
        <p className="page-description mx-auto max-w-2xl">
          Understanding the science behind the estimates. Our tool leverages industry-standard algorithmic approaches to derive objective cost and effort predictions from software architecture.
        </p>
      </motion.div>

      <motion.div
        className="methodology-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="info-section glass-panel" variants={itemVariants}>
          <div className="section-icon"><BookOpen size={32} /></div>
          <h2>Use Case Points (UCP)</h2>
          <p className="lead">Applied when estimating from Use Case Diagrams.</p>
          <p>
            The Use Case Points method measures the size and complexity of a software system based on its use cases and the actors interacting with them.
          </p>
          <ul className="info-list">
            <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Calculates the complexity of individual use cases based on the number of transactions.</li>
            <li><strong>Unadjusted Actor Weight (UAW):</strong> Classifies actors as Simple, Average, or Complex based on their interaction type (API, CLI, GUI).</li>
            <li><strong>Technical Complexity Factor (TCF):</strong> Adjusts the estimate based on 13 technical constraints like performance, concurrency, and security.</li>
            <li><strong>Environmental Complexity Factor (ECF):</strong> Accounts for 8 team-related variables like experience, motivation, and stable requirements.</li>
          </ul>
          <div className="formula-box">
            <code>UCP = (UUCW + UAW) × TCF × ECF</code>
          </div>
        </motion.div>

        <motion.div className="info-section glass-panel" variants={itemVariants}>
          <div className="section-icon"><GitCommitHorizontal size={32} /></div>
          <h2>Class Graph Weight</h2>
          <p className="lead">Applied when estimating from Class Diagrams.</p>
          <p>
            This structural approach analyzes the object-oriented design of the system to predict development effort.
          </p>
          <ul className="info-list">
            <li><strong>Class Complexity:</strong> Evaluates the internal complexity of each class by counting its attributes and methods.</li>
            <li><strong>Relationship Weight:</strong> Analyzes the coupling between classes. Inheritance, associations, and dependencies contribute to overall graph weight.</li>
            <li><strong>Adjustment Factors:</strong> Similar to UCP, the baseline graph weight is multiplied by the project's technical and environmental constraints.</li>
          </ul>
        </motion.div>

        <motion.div className="info-section glass-panel" variants={itemVariants}>
          <div className="section-icon"><Activity size={32} /></div>
          <h2>Continuous Calibration</h2>
          <p>
            Estimation is not static. Our backend engine includes a self-calibrating SQLite database. By logging the actual hours spent on a project versus the initial model estimate, the system can refine its conversion factors (hours per point) over time, yielding increasingly accurate predictions tailored to your specific team's velocity.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};
