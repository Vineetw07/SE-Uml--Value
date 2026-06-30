import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Brain, Database } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="page-container about-page"
    >
      <div className="page-header">
        <h2>Our Methodology</h2>
        <p>Understanding the science behind our software estimation engine.</p>
      </div>

      <div className="methodology-content">
        <section className="method-section">
          <div className="method-icon-wrap">
            <Brain size={40} className="method-icon" />
          </div>
          <div className="method-text">
            <h3>Use Case Points (UCP)</h3>
            <p>
              For Use Case Diagrams, we employ the industry-standard Use Case Points model.
              This algorithm evaluates the complexity of your system's actors and use cases.
              By classifying actors as Simple, Average, or Complex based on their interaction type (API, CLI, GUI),
              and use cases by their transaction count, we generate Unadjusted Use Case Points (UUCP).
            </p>
          </div>
        </section>

        <section className="method-section reverse">
          <div className="method-icon-wrap">
            <Settings size={40} className="method-icon" />
          </div>
          <div className="method-text">
            <h3>Graph Weight Model</h3>
            <p>
              When analyzing Class Diagrams, our engine uses a sophisticated Graph Weight Model.
              It treats your class architecture as a directed graph, calculating the intrinsic weight
              of individual classes by analyzing their attributes and methods. Furthermore, it evaluates
              the coupling and structural complexity by measuring the relationships (associations, inheritances)
              between these classes.
            </p>
          </div>
        </section>

        <section className="method-section">
          <div className="method-icon-wrap">
            <Database size={40} className="method-icon" />
          </div>
          <div className="method-text">
            <h3>TCF & ECF Calibration</h3>
            <p>
              No two teams or projects are identical. That's why both models are augmented by
              Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF).
              By tweaking these sliders, you calibrate the raw algorithmic output to account for
              your team's experience, the project's non-functional requirements, and technical constraints.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
