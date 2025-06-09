import React, { useEffect, useRef } from 'react'
import './styles/LandingHero.css'

const LandingHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-up-element')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="landing-hero" ref={heroRef}>
      {/* Animated Background Elements */}
      <div className="landing-hero__bg-elements">
        <div className="bg-element bg-element--1"></div>
        <div className="bg-element bg-element--2"></div>
        <div className="bg-element bg-element--3"></div>
      </div>
      
      <div className="container">
        <div className="landing-hero__content">
          <div className="landing-hero__badge fade-up-element">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Strategic Business Consulting in Cambodia</span>
          </div>
          
          <h1 className="fade-up-element">
            Transform Your Business in 
            <span className="text-gradient"> Cambodia's Growing Market</span>
          </h1>
          
          <h2 className="fade-up-element">Premier consulting services for sustainable growth and market leadership</h2>
          
          <p className="landing-hero__subtitle fade-up-element">
            Expert guidance from market entry to enterprise transformation. We combine deep local knowledge 
            with international best practices to accelerate your success in Southeast Asia's most promising economy.
          </p>
          
          <div className="landing-hero__cta fade-up-element">
            <button className="hero-cta hero-cta--primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>Start Your Journey</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="hero-cta hero-cta--secondary" onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>Explore Our Approach</span>
            </button>
          </div>
          
          <div className="landing-hero__highlights fade-up-element">
            <div className="landing-hero__highlight">
              <div className="highlight__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="highlight__content">
                <h3>Strategic Market Entry</h3>
                <p>Navigate regulations and establish your presence</p>
              </div>
            </div>
            <div className="landing-hero__highlight">
              <div className="highlight__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21L21 12L3 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="highlight__content">
                <h3>Operational Excellence</h3>
                <p>Optimize processes for maximum efficiency</p>
              </div>
            </div>
            <div className="landing-hero__highlight">
              <div className="highlight__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="highlight__content">
                <h3>Partnership Development</h3>
                <p>Build strategic local and international alliances</p>
              </div>
            </div>
            <div className="landing-hero__highlight">
              <div className="highlight__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="highlight__content">
                <h3>Innovation Strategy</h3>
                <p>Leverage technology for competitive advantage</p>
              </div>
            </div>
          </div>

          <div className="landing-hero__stats fade-up-element">
            <div className="landing-hero__stat">
              <span className="landing-hero__stat-number">
                <span className="stat-counter" data-target="50">0</span>+
              </span>
              <span className="landing-hero__stat-label">Businesses Transformed</span>
            </div>
            <div className="landing-hero__stat">
              <span className="landing-hero__stat-number">
                <span className="stat-counter" data-target="8">0</span>
              </span>
              <span className="landing-hero__stat-label">Years Local Experience</span>
            </div>
            <div className="landing-hero__stat">
              <span className="landing-hero__stat-number">
                <span className="stat-counter" data-target="95">0</span>%
              </span>
              <span className="landing-hero__stat-label">Success Rate</span>
            </div>
            <div className="landing-hero__stat">
              <span className="landing-hero__stat-number">24/7</span>
              <span className="landing-hero__stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingHero