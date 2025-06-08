import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/ServicesHero.css'

const ServicesHero: React.FC = () => {
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
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          
          {/* Clean Badge */}
          <div className="hero__badge fade-up">
            🇰🇭 Professional Consulting Excellence
          </div>
          
          {/* Main Headline */}
          <h1 className="hero__title fade-up" style={{ animationDelay: '0.1s' }}>
            Transform Your Business in Cambodia's Dynamic Market
          </h1>
          
          {/* Supporting Text */}
          <p className="hero__description fade-up" style={{ animationDelay: '0.2s' }}>
            8 years of proven expertise helping businesses navigate Cambodia's opportunities. 
            From market entry to scaling across ASEAN, we deliver results that matter.
          </p>

          {/* Clean CTA Section */}
          <div className="hero__cta-section fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="hero__cta-buttons">
              <Link to="/contact" className="btn btn--primary hero__cta-primary">
                Get Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="#services-grid" className="hero__cta-secondary">
                <span>Explore Our Services</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            {/* Trust Badge */}
            <div className="hero__trust-badge">
              <span className="trust-badge__icon">✓</span>
              <span className="trust-badge__text">Trusted by 50+ businesses • Government registered • ISO certified</span>
            </div>
          </div>

          {/* Elegant Stats Grid */}
          <div className="hero__stats-grid fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="stat-item">
              <div className="stat-item__number">50+</div>
              <div className="stat-item__label">Businesses Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__number">95%</div>
              <div className="stat-item__label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__number">8</div>
              <div className="stat-item__label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__number">15</div>
              <div className="stat-item__label">Industry Sectors</div>
            </div>
          </div>

          {/* Key Value Props - Clean & Minimal */}
          <div className="hero__value-highlights fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="value-highlight">
              <span className="value-highlight__icon">⚡</span>
              <span>Fast Market Entry</span>
            </div>
            <div className="value-highlight">
              <span className="value-highlight__icon">🌏</span>
              <span>ASEAN Gateway</span>
            </div>
            <div className="value-highlight">
              <span className="value-highlight__icon">🤝</span>
              <span>Local Expertise</span>
            </div>
            <div className="value-highlight">
              <span className="value-highlight__icon">📈</span>
              <span>Proven Results</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesHero 