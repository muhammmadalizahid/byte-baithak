import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section">
      <div className="container">
        <div className="about-header">
          <span className="section-label">About The Event</span>
          <h2 className="section-title">What is BYTE بیٹھک?</h2>
        </div>

        <div className="about-content">
          <div className="about-block">
            <h3 className="about-block-title">The Vision</h3>
            <p className="about-block-text">
              Byte Baithak is not just another tech event. It's a strategic convergence point where 
              cutting-edge fintech innovation meets the emerging tech talent of UET Lahore. We're 
              building a bridge between what's taught and what's practiced, between academic excellence 
              and industry reality.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>For Tech Builders</h4>
              <p>
                CS and engineering students ready to level up beyond coursework. Learn from industry 
                practitioners about real-world tools, frameworks, and architectural decisions that matter.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>For Future Founders</h4>
              <p>
                Aspiring entrepreneurs and innovators exploring startup culture. This is where ideas 
                get refined through honest feedback, not competitive pressure.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Why It Matters</h4>
              <p>
                The gap between academia and industry is real. Byte Baithak exists to close that gap 
                through direct knowledge transfer, practical insights, and meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
