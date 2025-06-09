import React, { useState, useEffect, useRef } from 'react'
import './styles/TechniquesSection.css'

const TechniquesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredTechnique, setHoveredTechnique] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const techniques = [
    {
      title: "Cambodia Business DNA Analysis™",
      description: "Proprietary algorithm that maps your business DNA against 500+ successful Cambodia market entries",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metrics: ["500+ Patterns", "99.2% Accuracy", "72hr Analysis"]
    },
    {
      title: "Cultural Velocity Engine™",
      description: "AI-powered cultural adaptation framework that accelerates market acceptance by 400%",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15848 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metrics: ["400% Faster", "98% Acceptance", "Real-time AI"]
    },
    {
      title: "Regulatory Pathway Optimizer™",
      description: "Predictive compliance system that navigates Cambodia's regulatory landscape with zero delays",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metrics: ["Zero Delays", "100% Compliance", "Predictive AI"]
    },
    {
      title: "Growth Acceleration Matrix™",
      description: "Multi-dimensional growth optimization system delivering 3x faster market penetration",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metrics: ["3x Faster", "250% ROI", "Live Data"]
    }
  ]

  return (
    <section ref={sectionRef} id="techniques" className={`techniques-section ${isVisible ? 'techniques-section--visible' : ''}`}>
      <div className="techniques-section__bg-animation">
        <div className="bg-particle bg-particle--1"></div>
        <div className="bg-particle bg-particle--2"></div>
        <div className="bg-particle bg-particle--3"></div>
      </div>
      
      <div className="container">
        <div className="techniques-section__header">
          <div className="techniques-section__badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Revolutionary Innovation
          </div>
          <h2>
            <span className="text-gradient">Revolutionary Techniques</span><br/>
            That Set Us Apart
          </h2>
          <p className="techniques-section__description">
            Proprietary methodologies developed exclusively for the Cambodian market
          </p>
        </div>
        
        <div className="techniques-grid">
          {techniques.map((technique, index) => (
            <div 
              key={index}
              className={`technique-card ${hoveredTechnique === index ? 'technique-card--hovered' : ''}`}
              onMouseEnter={() => setHoveredTechnique(index)}
              onMouseLeave={() => setHoveredTechnique(null)}
            >
              <div className="technique-card__glow"></div>
              <div className="technique-card__icon">
                {technique.icon}
              </div>
              <div className="technique-card__content">
                <h3 className="technique-card__title">{technique.title}</h3>
                <p className="technique-card__description">{technique.description}</p>
                <div className="technique-card__metrics">
                  {technique.metrics.map((metric, idx) => (
                    <span key={idx} className="technique-metric">{metric}</span>
                  ))}
                </div>
              </div>
              <div className="technique-card__cta">
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechniquesSection