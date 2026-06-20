import { motion } from 'framer-motion';
import { BookOpen, Calculator, Layers } from 'lucide-react';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <motion.div
      className="page-container page-about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={itemVariants} className="about-header">
        <h1>Behind the Estimates</h1>
        <p>Understanding the models that power our automated software cost estimator.</p>
      </motion.div>

      <div className="about-content">
        <motion.section variants={itemVariants} className="info-card">
          <div className="info-icon bg-blue">
            <BookOpen size={24} />
          </div>
          <h2>Use Case Points (UCP)</h2>
          <p>
            The Use Case Points model is used to estimate the size and effort of a software project
            based on its use case diagram. It categorizes actors and use cases into simple, average,
            or complex categories.
          </p>
          <ul className="info-list">
            <li><strong>Unadjusted Use Case Points (UUCP):</strong> Base size determined by counting and weighting actors and use cases.</li>
            <li><strong>Technical Complexity Factor (TCF):</strong> Adjusts size based on technical requirements like distributed systems, performance, and security.</li>
            <li><strong>Environmental Complexity Factor (ECF):</strong> Adjusts size based on team experience, motivation, and stability of requirements.</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className="info-card">
          <div className="info-icon bg-purple">
            <Layers size={24} />
          </div>
          <h2>Graph Weight Model</h2>
          <p>
            For Class Diagrams, we use a structural Graph Weight model. This approach analyzes the
            complexity of the object-oriented design by counting structural components and their relationships.
          </p>
          <ul className="info-list">
            <li><strong>Classes:</strong> Weighted highest (10 hrs base) as they represent core domain concepts.</li>
            <li><strong>Methods:</strong> Weighted at 4 hrs base, representing behavioral complexity.</li>
            <li><strong>Relationships:</strong> Weighted at 3 hrs base, measuring coupling and integration effort.</li>
            <li><strong>Attributes:</strong> Weighted at 2 hrs base, representing data state complexity.</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className="info-card">
          <div className="info-icon bg-green">
            <Calculator size={24} />
          </div>
          <h2>Calibration & Costing</h2>
          <p>
            The raw hours calculated by the chosen model are then multiplied by the combined complexity
            factors (TCF × ECF) to produce the final effort estimate. Finally, multiplying by your team's
            blended hourly rate yields the total projected cost.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};
