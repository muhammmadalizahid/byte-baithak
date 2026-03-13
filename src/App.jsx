import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhatMakesDifferent from './components/WhatMakesDifferent';
import Goals from './components/Goals';
import WhoShouldAttend from './components/WhoShouldAttend';
import Collaborators from './components/Collaborators';
import FinalCTA from './components/FinalCTA';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <WhatMakesDifferent />
      <Goals />
      <WhoShouldAttend />
      <Collaborators />
      <FinalCTA />
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-title">BYTE بیٹھک</h3>
              <p className="footer-tagline">Bridging Innovation & Talent at UET Lahore</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Organized By</h4>
                <ul>
                  <li><a href="#">PALS UET</a></li>
                  <li><a href="#">AWS Cloud Clubs UET Lahore</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><strong>PALS UET:</strong></li>
                  <li><a href="https://www.linkedin.com/company/pals-uet/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://www.instagram.com/pals.uet?igsh=ZnF5bmduazd5eDlm" target="_blank" rel="noopener noreferrer">Instagram</a></li><br/>
                  <li><strong>AWS Cloud Clubs UET:</strong></li>
                  <li><a href="https://www.linkedin.com/company/aws-cloud-club-uet-lahore/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://www.instagram.com/awscloudclubuet?igsh=dmV5N29mM25oZ3Vz" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Contact</h4>
                <ul>
                  <li><a href="tel:03390002956">0339 0002956</a></li>
                  <li><a href="tel:03390002956">03204340996</a></li>
                  <li><a href="mailto:palsuetlahore@gmail.com">palsuetlahore@gmail.com</a></li>
                  <li><a href="mailto:palsuetlahore@gmail.com">mrayyan5296@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 BYTE بیٹھک. All rights reserved.</p>
            <p className="footer-credit">PALS UET × AWS Cloud Clubs UET Lahore</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
