import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Layers } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.02 }
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.5
};

export const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-container"
    >
      <div className="about-header">
        <h1 className="about-title">The Science Behind the Estimate</h1>
        <p className="about-subtitle">
          We transform subjective guesswork into deterministic mathematics using industry-standard algorithmic models.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-icon"><BookOpen size={40} /></div>
          <div className="section-text">
            <h2>Use Case Points (UCP)</h2>
            <p>
              Invented by Gustav Karner, UCP is a software estimation technique used to measure the size of a software project from its use cases.
              Our engine analyzes your Use Case Diagrams, categorizing Actors and Use Cases into Simple, Average, and Complex buckets.
            </p>
            <p>
              It then applies the Unadjusted Use Case Weight (UUCW) and Unadjusted Actor Weight (UAW) formulas, multiplying the result by your fine-tuned
              Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF) to yield highly precise hour estimates.
            </p>
          </div>
        </section>

        <section className="about-section reverse">
          <div className="section-icon"><Layers size={40} /></div>
          <div className="section-text">
            <h2>Class Diagram Graph Weighting</h2>
            <p>
              For structural design, we employ a Graph Weighting model. By traversing the abstract syntax tree of your Class Diagrams,
              we extract concrete counts for Classes, Attributes, Methods, and Relationships.
            </p>
            <p>
              Each element is assigned a baseline implementation weight in hours based on historical data. These weights are aggregated and scaled
              by your project's unique complexity multipliers, providing a granular, component-by-component effort breakdown.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-icon"><Target size={40} /></div>
          <div className="section-text">
            <h2>Continuous Calibration</h2>
            <p>
              Estimation is an iterative science. While our mathematical models provide a strong baseline, true accuracy requires tuning to your specific team.
            </p>
            <p>
              The engine allows you to adjust hourly rates and tweak 21 different environmental and technical parameters.
              This ensures the algorithmic output perfectly aligns with your team's real-world velocity and constraints.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
