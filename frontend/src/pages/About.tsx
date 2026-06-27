import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <motion.div
      className="page-container about-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <div className="about-header">
        <p className="eyebrow">Methodology</p>
        <h1>How Estimation Works</h1>
        <p className="subtitle">
          Learn about the algorithms powering the automated estimations.
        </p>
      </div>

      <div className="about-content">
        <section className="about-card">
          <div className="card-icon-header">
            <div className="icon-wrapper">
              <BookOpen size={24} />
            </div>
            <h2>Use Case Points (UCP)</h2>
          </div>
          <p>
            The Use Case Points model calculates effort based on the complexity of actors and use cases in a system.
          </p>
          <ul className="method-list">
            <li><strong>Unadjusted Use Case Weight (UUCW):</strong> Computed from the number of transactions per use case.</li>
            <li><strong>Unadjusted Actor Weight (UAW):</strong> Determined by the interfaces actors use (e.g., API vs. GUI).</li>
            <li><strong>Factors (TCF & ECF):</strong> Modifies the raw counts based on technical and team constraints.</li>
          </ul>
        </section>

        <section className="about-card">
          <div className="card-icon-header">
            <div className="icon-wrapper">
              <Layers size={24} />
            </div>
            <h2>Graph Weight Model</h2>
          </div>
          <p>
            For Class Diagrams, effort is derived structurally. The tool traverses the JSON/XML graph and aggregates node weights.
          </p>
          <ul className="method-list">
            <li><strong>Class Base Weight:</strong> Every distinct class assigns a baseline weight.</li>
            <li><strong>Attribute & Method Weight:</strong> Fields and methods increase the structural complexity directly.</li>
            <li><strong>Relationships:</strong> Associations, inheritance, and implementations multiply effort, reflecting tight coupling.</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};
