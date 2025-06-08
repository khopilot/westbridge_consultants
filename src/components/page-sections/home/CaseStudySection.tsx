import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/CaseStudySection.css'

const CaseStudySection: React.FC = () => {
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
    <section className="py-3" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col-6">
            <div className="fade-up">
              <img 
                src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Cambodian textile factory modernization project" 
                style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '0.5rem' }}
              />
            </div>
          </div>
          <div className="col col-6">
            <div className="fade-up">
              <div className="case-study__badge">
                🏭 Manufacturing • Phnom Penh
              </div>
              <h3>Cambodian Textile Company Transformation</h3>
              <p className="case-study__intro">
                We helped Cambodia's leading textile manufacturer expand operations, 
                improve compliance standards, and secure major international contracts. 
                Our comprehensive approach addressed everything from supply chain optimization 
                to workforce development.
              </p>
              
              <div className="case-study__challenge">
                <h4>The Challenge</h4>
                <p>
                  A 500-employee textile company needed to meet international standards 
                  for major EU buyers while expanding production capacity by 60% and 
                  ensuring full compliance with Cambodia's labor laws.
                </p>
              </div>

              <div className="case-study__metrics">
                <div className="case-study__metric">
                  <span className="metric__number">60%</span>
                  <span className="metric__label">Production Increase</span>
                </div>
                <div className="case-study__metric">
                  <span className="metric__number">$1.2M</span>
                  <span className="metric__label">New Annual Contracts</span>
                </div>
                <div className="case-study__metric">
                  <span className="metric__number">100%</span>
                  <span className="metric__label">Compliance Rating</span>
                </div>
                <div className="case-study__metric">
                  <span className="metric__number">6</span>
                  <span className="metric__label">Months to Complete</span>
                </div>
              </div>

              <div className="case-study__outcomes">
                <h4>Key Outcomes</h4>
                <ul>
                  <li>Secured three major European textile contracts</li>
                  <li>Achieved Better Work Cambodia certification</li>
                  <li>Implemented lean manufacturing processes</li>
                  <li>Trained 200+ workers on new quality standards</li>
                  <li>Reduced waste by 35% through process optimization</li>
                </ul>
              </div>

              <Link to="/projects" className="btn btn--secondary">
                View All Success Stories
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Quick Stats */}
        <div className="case-study__additional fade-up" style={{ marginTop: '3rem' }}>
          <div className="text-center mb-2">
            <h4>Our Impact Across Cambodia</h4>
          </div>
          <div className="grid grid--4-col">
            <div className="stat-card">
              <div className="stat-card__number">50+</div>
              <div className="stat-card__label">Businesses Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">15</div>
              <div className="stat-card__label">Industries</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">$8M+</div>
              <div className="stat-card__label">Client Revenue Growth</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">2,000+</div>
              <div className="stat-card__label">Jobs Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudySection 