import React from 'react';
import './WhoShouldAttend.css';

const WhoShouldAttend = () => {
  const audiences = [
    {
      title: 'CS & Engineering Students',
      description: 'Ready to go beyond coursework and explore what modern software development actually looks like in practice.',
      gradient: '#5A1761',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10M22 10V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V10M22 10H2M8 14H8.01M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Aspiring Founders',
      description: "Have an idea or thinking about starting? Learn from those who've built startups and understand the reality behind the hype.",
      gradient: '#33193F',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Developers',
      description: 'Building things already? Connect with peers, learn new patterns, and discover tools and practices used at scale.',
      gradient: '#2A0E2B',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Tech-Curious Professionals',
      description: 'From adjacent fields but interested in understanding tech culture, career paths, and how modern products are built.',
      gradient: '#1F0A1C',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="who-attend section">
      <div className="container">
        <div className="who-attend-header">
          <h2 className="section-title">Who Should Attend:</h2>
          <p className="section-description">
            This event is for builders, learners, and doers. If you're serious about tech and 
            want exposure beyond the usual, you belong here.
          </p>
        </div>

        <div className="audiences-grid">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="audience-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="audience-icon-wrapper" style={{ background: audience.gradient }}>
                <div className="audience-icon">
                  {audience.icon}
                </div>
              </div>
              <h3 className="audience-title">{audience.title}</h3>
              <p className="audience-description">{audience.description}</p>
              <div className="audience-gradient-line" style={{ background: audience.gradient }}></div>
            </div>
          ))}
        </div>

        <div className="who-attend-cta">
          <div className="cta-box">
            <h3 className="cta-box-title">Not sure if this is for you?</h3>
            <p className="cta-box-text">
              If you're curious about modern tech, want to learn from practitioners, or are thinking 
              about building something—you should be here. No gatekeeping, no prerequisites.
            </p>
            <a href="#register" className="btn btn-primary">
              Secure Your Spot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
