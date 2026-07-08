import React from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { Code, Cpu, Target } from 'lucide-react';

const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

export const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page about-page"
    >
      <div className="page-header text-center">
        <h1 className="text-gradient">The Science Behind the Estimate</h1>
        <p className="page-subtitle">Understanding the methodologies that power our award-winning Software Cost Estimator.</p>
      </div>

      <div className="content-grid">
        <div className="info-card glass-panel">
          <div className="card-header">
            <Target className="text-accent" size={32} />
            <h2>Use Case Points (UCP)</h2>
          </div>
          <div className="card-body">
            <p>
              The Use Case Points method is an industry-standard sizing metric used to estimate the size and complexity of a software project.
            </p>
            <ul>
              <li><strong>Actors:</strong> Categorized as Simple (API), Average (TCP/IP), or Complex (GUI).</li>
              <li><strong>Use Cases:</strong> Evaluated based on the number of transactions and entities involved.</li>
              <li><strong>Technical Complexity Factors (TCF):</strong> Adjusts for non-functional requirements like performance and security.</li>
              <li><strong>Environmental Factors (EF):</strong> Accounts for team experience and capabilities.</li>
            </ul>
            <p className="highlight-text">
              Our system parses your Use Case diagrams (JSON format) to automatically calculate Unadjusted Actor Weight (UAW) and Unadjusted Use Case Weight (UUCW) to deliver a precise UCP score.
            </p>
          </div>
        </div>

        <div className="info-card glass-panel">
          <div className="card-header">
            <Cpu className="text-accent" size={32} />
            <h2>Class Graph Weight</h2>
          </div>
          <div className="card-body">
            <p>
              Moving beyond functional requirements, our Class Graph Weight engine analyzes the structural complexity of your system's architecture.
            </p>
            <ul>
              <li><strong>Node Analysis:</strong> Evaluates individual classes, calculating intrinsic complexity based on attributes and methods.</li>
              <li><strong>Edge Analysis:</strong> Measures the coupling between classes (associations, inheritances, dependencies).</li>
              <li><strong>Graph Traversal:</strong> Uses advanced algorithms to understand the depth and interconnectedness of the system.</li>
            </ul>
            <p className="highlight-text">
              By parsing standard XML representations of Class Diagrams, the backend C++ engine computes a structural weight that translates directly into anticipated development effort.
            </p>
          </div>
        </div>
      </div>

      <div className="tech-stack-section glass-panel mt-4">
         <div className="card-header text-center justify-center">
            <Code className="text-accent" size={32} />
            <h2>Engineering Architecture</h2>
          </div>
          <div className="stack-details">
            <div className="stack-col">
              <h3>Frontend</h3>
              <p>Built with React, Vite, and TypeScript. Designed for performance and visual fidelity, featuring smooth framer-motion transitions and vanilla CSS styling.</p>
            </div>
            <div className="divider"></div>
            <div className="stack-col">
              <h3>Backend</h3>
              <p>Powered by a high-performance C++ engine utilizing Winsock. Handles intense graph algorithms and file parsing with near-zero latency.</p>
            </div>
          </div>
      </div>
    </motion.div>
  );
};
