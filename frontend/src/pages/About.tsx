import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GitGraph, FileText } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="page-container about-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="about-header" variants={itemVariants}>
        <h1>Methodology & <span className="gradient-text">Models</span></h1>
        <p className="subtitle">Learn how Estimator Pro converts standard system diagrams into highly accurate project estimates.</p>
      </motion.div>

      <div className="about-grid">
        <motion.div className="about-card" variants={itemVariants}>
          <div className="card-icon"><BookOpen size={28} /></div>
          <h2>Use Case Points (UCP)</h2>
          <p>
            For Use Case Diagrams, we apply the renowned UCP algorithm. It calculates complexity by evaluating:
          </p>
          <ul>
            <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Based on the number of transactions per use case.</li>
            <li><strong>Unadjusted Actor Weight (UAW):</strong> Based on actor types (system, API, human).</li>
            <li><strong>Technical Complexity Factor (TCF):</strong> Adjusted based on non-functional requirements.</li>
            <li><strong>Environmental Complexity Factor (ECF):</strong> Adjusted based on team experience and constraints.</li>
          </ul>
        </motion.div>

        <motion.div className="about-card" variants={itemVariants}>
          <div className="card-icon"><GitGraph size={28} /></div>
          <h2>Graph Weight Model</h2>
          <p>
            For Class Diagrams, we utilize a Graph Weight structure. Software components are parsed into nodes and edges:
          </p>
          <ul>
            <li><strong>Classes:</strong> Form the foundation, acting as primary nodes (Base Hours: 10).</li>
            <li><strong>Attributes:</strong> Internal complexity parameters (Base Hours: 2).</li>
            <li><strong>Methods:</strong> Functional complexity parameters (Base Hours: 4).</li>
            <li><strong>Relationships:</strong> Coupling and integration complexity between nodes (Base Hours: 3).</li>
          </ul>
        </motion.div>
      </div>

      <motion.div className="about-architecture" variants={itemVariants}>
        <div className="card-icon"><FileText size={28} /></div>
        <h2>System Architecture</h2>
        <p>
          Estimator Pro relies on a high-performance C++ backend utilizing raw Winsock to parse XML and JSON diagram files rapidly without dependencies. The modern React frontend presents actionable data through a clean, intuitive, and award-winning interface. Actuals are logged into an SQLite database for ongoing calibration.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
