import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/CTASection.css'

const CTASection: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-3 cta-section" style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}>
      <div className="container text-center">
        <div className="fade-up">
          <div className="cta-section__badge">
            🚀 Ready to Grow Your Business?
          </div>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Partner with Cambodia's Leading Strategic Advisors
          </h2>
          <p className="cta-section__description">
            Join over 50 successful Cambodian businesses who have transformed their operations, 
            expanded their markets, and achieved sustainable growth with Goulding & Co Strategic Advisory. 
            From startup guidance to enterprise transformation, we're here to bridge your vision 
            with reality.
          </p>
          
          {/* Value Proposition Points */}
          <div className="cta-section__benefits">
            <div className="cta-benefit">
              <span className="cta-benefit__icon">✅</span>
              <span className="cta-benefit__text">Free Initial Consultation</span>
            </div>
            <div className="cta-benefit">
              <span className="cta-benefit__icon">🎯</span>
              <span className="cta-benefit__text">Tailored Solutions for Your Industry</span>
            </div>
            <div className="cta-benefit">
              <span className="cta-benefit__icon">🤝</span>
              <span className="cta-benefit__text">Local Expertise, Global Standards</span>
            </div>
            <div className="cta-benefit">
              <span className="cta-benefit__icon">⚡</span>
              <span className="cta-benefit__text">Rapid Implementation</span>
            </div>
          </div>

          <div className="cta-section__actions">
            <Link to="/contact" className="btn btn--primary">
              Start Your Transformation
            </Link>
            <Link to="/about" className="btn btn--secondary btn--secondary-light">
              Learn More About Us
            </Link>
          </div>

          {/* Contact Quick Info */}
          <div className="cta-section__contact-info">
            <div className="cta-contact-item">
              <span className="cta-contact-icon">📞</span>
              <span className="cta-contact-text">+855 23 123 456</span>
            </div>
            <div className="cta-contact-item">
              <span className="cta-contact-icon">📧</span>
              <span className="cta-contact-text">hello@westbridge.com.kh</span>
            </div>
            <div className="cta-contact-item">
              <span className="cta-contact-icon">📍</span>
              <span className="cta-contact-text">Phnom Penh, Cambodia</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="cta-section__trust">
            <p className="cta-trust__text">
              Trusted by businesses across Phnom Penh, Siem Reap, Battambang, and beyond
            </p>
            <div className="cta-trust__badges">
              <span className="cta-trust__badge">🏛️ Government Certified</span>
              <span className="cta-trust__badge">🌟 5-Star Rated</span>
              <span className="cta-trust__badge">🛡️ Fully Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 