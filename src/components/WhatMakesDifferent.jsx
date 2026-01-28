import React from 'react';
import './WhatMakesDifferent.css';

const WhatMakesDifferent = () => {
  return (
    <section className="different section">
      <div className="container">
        <div className="different-header">
          <span className="section-label">Two Pillars</span>
          <h2 className="section-title">What Makes BYTE بیٹھک Different</h2>
          <p className="section-description">
            We're not trying to be everything. We focus on two things that matter: 
            real-world tech knowledge and authentic startup conversations.
          </p>
        </div>

        <div className="pillars-container">
          {/* Pillar 1: Tech Talks */}
          <div className="pillar pillar-left">
            <div className="pillar-visual">
              <div className="pillar-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M8 3H16M8 3V8M16 3H19C20.1046 3 21 3.89543 21 5V8M16 3V8M8 8H16M8 8V16M16 8V16M8 16H5C3.89543 16 3 16.8954 3 18V21M8 16V21M16 16H19C20.1046 16 21 16.8954 21 18V21M16 16V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            
            <div className="pillar-content">
              <h3 className="pillar-title">Tech Talks</h3>
              <p className="pillar-subtitle">Expert-Led Sessions on What Actually Matters</p>
              
              <ul className="pillar-list">
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Industry Speakers</strong>
                    <p>Professionals actively building products at scale</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Practical Insights</strong>
                    <p>No theory dumps—real patterns, trade-offs, and decisions</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Real-World Tools</strong>
                    <p>Frameworks and technologies used in production environments</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Career Context</strong>
                    <p>What the market needs and how to position yourself</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Deep Technical Dives</strong>
                    <p>Architecture patterns, system design, and scalability lessons</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Center Divider */}
          <div className="pillar-divider">
            <div className="divider-line"></div>
            <div className="divider-badge">+</div>
            <div className="divider-line"></div>
          </div>

          {/* Pillar 2: Startup Conversations */}
          <div className="pillar pillar-right">
            <div className="pillar-visual">
              <div className="pillar-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="pillar-content">
              <h3 className="pillar-title">Startup Conversations</h3>
              <p className="pillar-subtitle">Idea Sharing Without the Competitive Noise</p>
              
              <ul className="pillar-list">
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Non-Competitive Format</strong>
                    <p>No pitching competitions—just honest idea exploration</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Feedback-Focused</strong>
                    <p>Get real input from founders and experienced builders</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Discussion-Driven</strong>
                    <p>Open dialogue on challenges, assumptions, and validation</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Collaboration First</strong>
                    <p>Find co-founders, mentors, and early supporters organically</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">→</span>
                  <div>
                    <strong>Reality Checks</strong>
                    <p>Learn from failures and pivots—the messy truth behind success stories</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
