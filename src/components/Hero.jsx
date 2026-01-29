import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date('2026-02-16T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Abstract Tech Background */}
      <div className="hero-background">
        <div className="grid-pattern"></div>
        <div className="floating-dots"></div>
      </div>

      <div className="container hero-content">
        {/* Subtle Organizer Badge */}
        <div className="organizer-badge">
          <span className="badge-text">PALS UET × GDGOC UET</span>
        </div>

        {/* Strong Headline */}
        <h1 className="hero-title">
          BYTE بیٹھک
        </h1>

        {/* Clear Subheading */}
        <p className="hero-subtitle">
          Bridging cutting-edge fintech innovation and emerging tech talent at UET Lahore
        </p>

        <p className="hero-description">
          Where expert-led tech talks meet startup conversations. A serious, vision-driven event for developers, founders, and tech innovators.
        </p>

        {/* Countdown Timer */}
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-cta">
          <a href="https://forms.gle/cPwrfK2CMYf1m51o8" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Join Byte Baithak
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#goals" className="btn btn-secondary btn-lg">
            View Agenda
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
