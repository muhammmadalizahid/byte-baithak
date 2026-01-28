import React from 'react';
import './Collaborators.css';
import palsLogo from '../pals.png';
import gdgLogo from '../gdg.png';

const Collaborators = () => {
  return (
    <section className="collaborators section">
      <div className="container">
        <div className="collaborators-header">
          <span className="section-label">Organized By</span>
          <h2 className="section-title">Collaborators</h2>
          <p className="section-description">
            Byte Baithak is a joint initiative bringing together academic excellence and 
            tech community building at UET Lahore.
          </p>
        </div>

        <div className="collaborators-grid">
          {/* PALS UET */}
          <div className="collaborator-card">
            <div className="collaborator-logo">
              <div className="logo-placeholder pals">
                <img src={palsLogo} alt="PALS UET Logo" className="logo-image" />
              </div>
            </div>
            <h3 className="collaborator-name">PALS UET</h3>
            <p className="collaborator-description">
              The Pakistan-Austria Liaison Society at UET Lahore fosters academic excellence, 
              international collaboration, and student development through tech-focused initiatives.
            </p>
            <div className="collaborator-link">
              <a href="#" className="link-subtle">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="collaborators-divider">
            <div className="divider-circle">×</div>
          </div>

          {/* GDG OC UET */}
          <div className="collaborator-card">
            <div className="collaborator-logo">
              <div className="logo-placeholder gdg">
                <img src={gdgLogo} alt="GDG OC UET Logo" className="logo-image" />
              </div>
            </div>
            <h3 className="collaborator-name">GDG OC UET</h3>
            <p className="collaborator-description">
              Google Developer Group On Campus at UET Lahore connects students with Google's 
              developer ecosystem, modern tech practices, and industry experts.
            </p>
            <div className="collaborator-link">
              <a href="#" className="link-subtle">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Partnership Statement */}
        <div className="partnership-statement">
          <div className="statement-box">
            <p className="statement-text">
              Together, we're building a platform where academic rigor meets industry practice, 
              where students become builders, and where ideas find the community they need to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
