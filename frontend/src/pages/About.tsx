import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Database, Settings } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-hero">
        <h1>How Estimation Works</h1>
        <p className="about-subtitle">Understanding the methodology behind our UML-driven software cost estimates.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-icon">
            <BookOpen size={28} color="#2563eb" />
          </div>
          <h2>The Methodology</h2>
          <p>
            The UML Value Estimator uses industry-standard methodologies to predict software development effort.
            By parsing architectural diagrams (Use Case and Class diagrams), we extract structural metrics that correlate strongly with development time.
          </p>
        </section>

        <section className="about-section">
          <div className="section-icon">
            <Calculator size={28} color="#059669" />
          </div>
          <h2>Use Case Points (UCP)</h2>
          <p>
            For Use Case diagrams, we employ the Use Case Points methodology. This involves identifying actors and use cases,
            categorizing them by complexity (simple, average, complex), and calculating an Unadjusted Use Case Weight (UUCW).
          </p>
          <ul className="about-list">
            <li><strong>Actors:</strong> Classified by their interface type (API, CLI, GUI).</li>
            <li><strong>Use Cases:</strong> Classified by the number of transactions or database entities affected.</li>
          </ul>
        </section>

        <section className="about-section">
          <div className="section-icon">
            <Database size={28} color="#0891b2" />
          </div>
          <h2>Class Graph Weights</h2>
          <p>
            For Class diagrams, we analyze the structural complexity of the system. This includes counting classes,
            attributes, methods, and the relationships between them (inheritance, associations).
            Heavier interconnected graphs indicate higher implementation effort.
          </p>
        </section>

        <section className="about-section">
          <div className="section-icon">
            <Settings size={28} color="#4f46e5" />
          </div>
          <h2>Technical & Environmental Factors</h2>
          <p>
            Raw weights are adjusted using Technical Complexity Factors (TCF) and Environmental Complexity Factors (ECF).
          </p>
          <div className="factors-explanation">
            <div className="factor-box">
              <h3>TCF</h3>
              <p>Accounts for non-functional requirements like distributed systems, performance constraints, and security.</p>
            </div>
            <div className="factor-box">
              <h3>ECF</h3>
              <p>Accounts for team capability, experience with the domain, motivation, and stability of requirements.</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
