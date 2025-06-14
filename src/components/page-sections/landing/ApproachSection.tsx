import React, { useState, useEffect, useRef } from 'react'
import './styles/ApproachSection.css'

const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
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

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 3)
      }, 4000)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} id="approach" className={`approach-section ${isVisible ? 'approach-section--visible' : ''}`}>
      <div className="approach-section__bg-animation">
        <div className="bg-particle bg-particle--1"></div>
        <div className="bg-particle bg-particle--2"></div>
        <div className="bg-particle bg-particle--3"></div>
        <div className="bg-particle bg-particle--4"></div>
        <div className="bg-particle bg-particle--5"></div>
      </div>
      
      <div className="container">
        <div className="approach-section__header">
          <div className="approach-section__badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Revolutionary Methodology
          </div>
          <h2>
            <span className="text-gradient">Proprietary Techniques</span><br/>
            for Accelerated Growth
          </h2>
          <p className="approach-section__description">
            Our cutting-edge methodology fuses <strong>international excellence</strong> with <strong>deep Cambodian market intelligence</strong>, 
            delivering transformational results through proprietary frameworks developed exclusively for Southeast Asian markets.
          </p>
        </div>

        {/* Interactive Methodology Showcase */}
        <div className="methodology-showcase">
          <div className="methodology-nav">
            {[
              { id: 0, title: 'Discovery & Intelligence', icon: '🔍', color: 'var(--color-accent)' },
              { id: 1, title: 'Strategic Architecture', icon: '🎯', color: 'var(--color-secondary)' },
              { id: 2, title: 'Execution Excellence', icon: '⚡', color: 'var(--color-primary)' }
            ].map((phase, index) => (
              <button
                key={phase.id}
                className={`methodology-nav__item ${activeStep === index ? 'methodology-nav__item--active' : ''}`}
                onClick={() => setActiveStep(index)}
                style={{ '--phase-color': phase.color } as React.CSSProperties}
              >
                <div className="methodology-nav__icon">{phase.icon}</div>
                <div className="methodology-nav__title">{phase.title}</div>
                <div className="methodology-nav__progress">
                  <div className="methodology-nav__progress-bar"></div>
                </div>
              </button>
            ))}
          </div>

          <div className="methodology-content">
            <div className={`methodology-phase ${activeStep === 0 ? 'methodology-phase--active' : ''}`}>
              <div className="methodology-phase__header">
                <div className="methodology-phase__meta">
                  <span className="methodology-phase__number">Phase 01</span>
                  <span className="methodology-phase__timeline">Week 1-2</span>
                </div>
                <h3 className="methodology-phase__title">Cambodia Market Intelligence Engine</h3>
                <p className="methodology-phase__subtitle">
                  Proprietary deep-dive analysis using our exclusive <strong>Cambodia Business Readiness Matrix™</strong>
                </p>
              </div>
              
              <div className="methodology-phase__content">
                <div className="phase-features">
                  <div className="phase-feature">
                    <div className="phase-feature__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="phase-feature__content">
                      <h4>AI-Powered Market Mapping</h4>
                      <p>Advanced algorithms analyze 50+ market variables unique to Cambodia's business ecosystem</p>
                    </div>
                  </div>
                  
                  <div className="phase-feature">
                    <div className="phase-feature__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="phase-feature__content">
                      <h4>Cultural Intelligence Scan</h4>
                      <p>Proprietary assessment of cultural fit and adaptation strategies for sustainable growth</p>
                    </div>
                  </div>
                  
                  <div className="phase-feature">
                    <div className="phase-feature__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="phase-feature__content">
                      <h4>Regulatory Compliance Matrix</h4>
                      <p>Real-time analysis of regulatory requirements and compliance pathways</p>
                    </div>
                  </div>
                </div>
                
                <div className="phase-metrics">
                  <div className="phase-metric">
                    <span className="phase-metric__number">50+</span>
                    <span className="phase-metric__label">Data Points</span>
                  </div>
                  <div className="phase-metric">
                    <span className="phase-metric__number">72hrs</span>
                    <span className="phase-metric__label">Analysis Time</span>
                  </div>
                  <div className="phase-metric">
                    <span className="phase-metric__number">95%</span>
                    <span className="phase-metric__label">Accuracy Rate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`methodology-phase ${activeStep === 1 ? 'methodology-phase--active' : ''}`}>
              <div className="methodology-phase__header">
                <div className="methodology-phase__meta">
                  <span className="methodology-phase__number">Phase 02</span>
                  <span className="methodology-phase__timeline">Week 3-4</span>
                </div>
                <h3 className="methodology-phase__title">Strategic Growth Architecture</h3>
                <p className="methodology-phase__subtitle">
                  Custom blueprint development using our <strong>Cambodia Success Pattern Database™</strong>
                </p>
              </div>
              
              <div className="methodology-phase__content">
                <div className="phase-features">
                  <div className="phase-feature">
                    <div className="phase-feature__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7 6.3C15.1 6.7 15.1 7.3 14.7 7.7L7.7 14.7C7.3 15.1 6.7 15.1 6.3 14.7C5.9 14.3 5.9 13.7 6.3 13.3L13.3 6.3C13.7 5.9 14.3 5.9 14.7 6.3Z" fill="currentColor"/>
                        <path d="M10.5 6.5L17.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="6.5" cy="6.5" r="2" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="17.5" cy="17.5" r="2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="phase-feature__content">
                      <h4>Growth Vector Optimization</h4>
                      <p>Multi-dimensional growth strategy leveraging Cambodia's unique market dynamics</p>
                    </div>
                  </div>
                  
                  <div className="phase-feature">
                    <div className="phase-feature__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="phase-feature__content">
                      <h4>Partnership Network Mapping</h4>
                      <p>Strategic alliance identification through our exclusive Cambodia business network</p>
                    </div>
                  </div>
                  
                  <div className="phase-feature">
                    <div className="phase-feature__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2V6M12 6L16 2M12 6L8 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22V18M12 18L16 22M12 18L8 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H6M6 12L2 16M6 12L2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 12H18M18 12L22 16M18 12L22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="phase-feature__content">
                      <h4>Risk Mitigation Framework</h4>
                      <p>Predictive risk modeling with Cambodia-specific contingency protocols</p>
                    </div>
                  </div>
                </div>
                
                <div className="phase-metrics">
                  <div className="phase-metric">
                    <span className="phase-metric__number">200+</span>
                    <span className="phase-metric__label">Success Patterns</span>
                  </div>
                  <div className="phase-metric">
                    <span className="phase-metric__number">48hrs</span>
                    <span className="phase-metric__label">Blueprint Delivery</span>
                  </div>
                  <div className="phase-metric">
                    <span className="phase-metric__number">100%</span>
                    <span className="phase-metric__label">Customization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`methodology-phase ${activeStep === 2 ? 'methodology-phase--active' : ''}`}>
              <div className="methodology-phase__header">
                <div className="methodology-phase__meta">
                  <span className="methodology-phase__number">Phase 03</span>
                  <span className="methodology-phase__timeline">Month 2-6</span>
                </div>
                <h3 className="methodology-phase__title">Execution Excellence Engine</h3>
                <p className="methodology-phase__subtitle">
                  Rapid implementation with our <strong>Cambodia Adaptive Optimization System™</strong>
                </p>
              </div>
              
              <div className="methodology-phase__content">
                <div className="phase-features">
                  <div className="phase-feature">
                    <div className="phase-feature__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M16 12L12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="phase-feature__content">
                      <h4>Real-Time Performance Optimization</h4>
                      <p>Continuous monitoring and adjustment using live market feedback loops</p>
                    </div>
                  </div>
                  
                  <div className="phase-feature">
                    <div className="phase-feature__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4897 2.02168 11.3404C2.16356 9.19106 2.99721 7.14589 4.39828 5.49696C5.79935 3.84803 7.69279 2.69041 9.79619 2.1944C11.8996 1.69839 14.1003 1.8775 16.07 2.70001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="phase-feature__content">
                      <h4>Agile Market Adaptation</h4>
                      <p>Dynamic strategy pivoting based on Cambodia's rapidly evolving business landscape</p>
                    </div>
                  </div>
                  
                  <div className="phase-feature">
                    <div className="phase-feature__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="phase-feature__content">
                      <h4>Team Capability Acceleration</h4>
                      <p>Intensive capability building with Cambodia-specific skills and competencies</p>
                    </div>
                  </div>
                </div>
                
                <div className="phase-metrics">
                  <div className="phase-metric">
                    <span className="phase-metric__number">24/7</span>
                    <span className="phase-metric__label">Monitoring</span>
                  </div>
                  <div className="phase-metric">
                    <span className="phase-metric__number">3x</span>
                    <span className="phase-metric__label">Faster Results</span>
                  </div>
                  <div className="phase-metric">
                    <span className="phase-metric__number">98%</span>
                    <span className="phase-metric__label">Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* Success Guarantee */}
        <div className="success-guarantee">
          <div className="success-guarantee__content">
            <div className="success-guarantee__badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Results Guarantee
            </div>
            <h3>We guarantee measurable results within 90 days, or your investment back.</h3>
            <p>Our methodology has delivered success for every single client in Cambodia. Join the 100% success rate.</p>
            <div className="guarantee-stats">
              <div className="guarantee-stat">
                <span className="guarantee-stat__number">100%</span>
                <span className="guarantee-stat__label">Success Rate</span>
              </div>
              <div className="guarantee-stat">
                <span className="guarantee-stat__number">90</span>
                <span className="guarantee-stat__label">Day Guarantee</span>
              </div>
              <div className="guarantee-stat">
                <span className="guarantee-stat__number">250%</span>
                <span className="guarantee-stat__label">Avg ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection