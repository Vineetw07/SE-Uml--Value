import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Settings2 } from 'lucide-react';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    },
    exit: { opacity: 0, y: 20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="page-container about-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="about-header" variants={itemVariants}>
        <h1 className="page-title">How It Works</h1>
        <p className="page-subtitle">
          Understanding the mathematical models behind our automated software estimation engine.
        </p>
      </motion.div>

      <div className="about-content">
        <motion.section className="model-section" variants={itemVariants}>
          <div className="model-header">
            <div className="icon-wrapper"><BookOpen size={24} /></div>
            <h2>Use Case Points (UCP)</h2>
          </div>
          <p>
            The Use Case Points model is applied to Use Case Diagrams. It calculates effort based on the number and complexity of actors and use cases.
          </p>
          <ul className="model-list">
            <li><strong>Simple Actors:</strong> External systems interacting via API.</li>
            <li><strong>Complex Actors:</strong> Human users interacting via GUI.</li>
            <li><strong>Use Case Complexity:</strong> Measured by the number of steps or transactions required.</li>
          </ul>
        </motion.section>

        <motion.section className="model-section" variants={itemVariants}>
          <div className="model-header">
            <div className="icon-wrapper"><Target size={24} /></div>
            <h2>Class Graph Weight</h2>
          </div>
          <p>
            For Class Diagrams, we use a Graph Weighting algorithm. It evaluates the structural complexity of your object-oriented design.
          </p>
          <ul className="model-list">
            <li><strong>Class Complexity:</strong> Determined by the sum of its attributes and methods.</li>
            <li><strong>Relationship Weight:</strong> Associations, inheritances, and dependencies increase the overall architectural weight.</li>
          </ul>
        </motion.section>

        <motion.section className="model-section" variants={itemVariants}>
          <div className="model-header">
            <div className="icon-wrapper"><Settings2 size={24} /></div>
            <h2>Complexity Factors</h2>
          </div>
          <p>
            Both models are adjusted using Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) to fine-tune the final estimate to your specific team and project constraints.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};
