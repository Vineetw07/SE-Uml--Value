import React from 'react';
import { BookOpen, Code, Cpu, LineChart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="about-page fade-in">
      <div className="about-header">
        <p className="eyebrow">About the Project</p>
        <h1 className="page-title">Software Cost Estimator</h1>
        <p className="page-subtitle">
          Automating software project hours and cost prediction directly from system architecture diagrams.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section info-card">
          <div className="info-card-icon">
            <BookOpen size={24} />
          </div>
          <div className="info-card-content">
            <h2>The Problem We Solve</h2>
            <p>
              Traditional software cost estimation is often subjective, time-consuming, and prone to human error. Project managers and architects spend countless hours manually calculating effort based on abstract requirements. Our tool bridges the gap between technical architecture and business metrics by automating the estimation process.
            </p>
          </div>
        </div>

        <div className="about-grid">
          <div className="info-card">
            <div className="info-card-icon">
              <Cpu size={24} />
            </div>
            <div className="info-card-content">
              <h3>How It Works</h3>
              <p>
                The Estimator takes standard UML diagrams (Use Case and Class Diagrams) as input. By analyzing the structural elements—actors, use cases, classes, and their relationships—it applies industry-standard estimation models.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-icon">
              <Code size={24} />
            </div>
            <div className="info-card-content">
              <h3>Technical Architecture</h3>
              <p>
                <strong>Frontend:</strong> A fast, multi-page React application built with Vite and TypeScript, featuring a beautiful Vanilla CSS design.
                <br /><br />
                <strong>Backend:</strong> A high-performance C++ (Winsock) server dedicated to parsing and processing complex system architecture diagrams efficiently.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-icon">
              <LineChart size={24} />
            </div>
            <div className="info-card-content">
              <h3>Estimation Models</h3>
              <p>
                <strong>Use Case Points (UCP):</strong> Calculates effort based on actor complexity, use case complexity, and environmental/technical factors.
                <br /><br />
                <strong>Class Graph Weight:</strong> Analyzes the structural complexity of object-oriented designs to predict implementation effort.
              </p>
            </div>
          </div>
        </div>

        <div className="about-footer info-card text-center">
          <h2>Empowering Data-Driven Decisions</h2>
          <p>
            By translating technical models into defensible financial metrics, we empower development teams to bid accurately, allocate resources efficiently, and deliver projects on budget.
          </p>
        </div>
      </div>
    </div>
  );
};
