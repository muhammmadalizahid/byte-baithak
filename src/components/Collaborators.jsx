import React from 'react';
import './Collaborators.css';
import palsLogo from '../pals.png';
import awsLogo from '../aws.png';

const Collaborators = () => {
  return (
    <section className="collaborators section">
      <div className="container">
        <div className="collaborators-header">
          <h2 className="section-title">Collaborators:</h2>
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
              PALS is a student-led society focused on developing leadership,
              technical awareness, and industry readiness among students through
              mentorship, training, and community-driven initiatives.
            </p>
          </div>

          {/* Divider */}
          <div className="collaborators-divider">
            <div className="divider-circle">×</div>
          </div>

          {/* AWS Cloud Clubs UET Lahore */}
          <div className="collaborator-card">
            <div className="collaborator-logo">
              <div className="logo-placeholder aws">
                <img src={awsLogo} alt="AWS Cloud Clubs UET Lahore Logo" className="logo-image" />
              </div>
            </div>
            <h3 className="collaborator-name">AWS Cloud Clubs UET Lahore</h3>
            <p className="collaborator-description">
              AWS Cloud Clubs at UET Lahore empowers students with cloud computing skills,
              AWS best practices, and industry-relevant expertise through hands-on
              learning and community-driven initiatives.
            </p>
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
