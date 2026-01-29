import React from 'react';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta" id="register">
      <div className="container">
        <div className="cta-wrapper">
          {/* Background Elements */}
          <div className="cta-background">
            <div className="cta-grid"></div>
            <div className="cta-glow cta-glow-1"></div>
            <div className="cta-glow cta-glow-2"></div>
          </div>

          {/* Content */}
          <div className="cta-content">
            <span className="cta-label">Ready to Join?</span>
            <h2 className="cta-title">Be Part of BYTE بیٹھک</h2>
            <p className="cta-description">
              This is your moment to step beyond the classroom, connect with builders and founders, 
              and see what modern tech development actually looks like. No hype. No fluff. Just 
              real knowledge, honest conversations, and a community that gets it.
            </p>

            <div className="cta-action">
              <a href="https://forms.gle/cPwrfK2CMYf1m51o8" target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-primary">
                Register Now
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Event Details */}
            <div className="cta-details">
              <div className="detail-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <span className="detail-label">Date</span>
                  <span className="detail-value">February 16, 2026</span>
                </div>
              </div>

              <div className="detail-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <span className="detail-label">Venue</span>
                  <span className="detail-value">Transport Engineering Seminar Hall, UET Lahore</span>
                </div>
              </div>

              <div className="detail-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <span className="detail-label">Capacity</span>
                  <span className="detail-value">Limited Seats</span>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="cta-footer">
              <p className="footer-text">
                Join students, developers, and founders building the future of tech at UET Lahore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
