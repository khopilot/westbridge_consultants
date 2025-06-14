import React from 'react'
import { Link } from 'react-router-dom'
import HeroAnimation from '../../HeroAnimation'
import './styles/HeroSection.css'

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      {/* Animated Background - Always visible */}
      <HeroAnimation />
      
      {/* Content Overlay */}
      <div className="hero__overlay"></div>
      
      <div className="container">
        <div className="hero__content">
          <h1>Find your way in Cambodia</h1>
          <h2>Cambodia is profitable but complicated.</h2>
          <p className="hero__subtitle">
            We simplify complexity, clarify risk, and get your projects moving quickly. We know local rules, relationships, and realities because we learned them firsthand. You benefit from our direct experience without repeating our mistakes.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Start Your Journey
            </Link>
            <Link to="/services" className="btn btn--secondary">
              Our Services
            </Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Cambodian Businesses Transformed</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">8</span>
              <span className="hero__stat-label">Years in Cambodia</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">95%</span>
              <span className="hero__stat-label">Client Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 