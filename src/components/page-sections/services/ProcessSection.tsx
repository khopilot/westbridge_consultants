import React, { useEffect } from 'react'
import './styles/ProcessSection.css'

const ProcessSection: React.FC = () => {
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

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your business goals, current situation, and the specific opportunities and challenges within Cambodia\'s market landscape.',
      details: [
        'Market opportunity assessment',
        'Regulatory requirements review',
        'Competitive landscape analysis',
        'Risk and compliance evaluation'
      ],
      timeframe: '1-2 weeks'
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'Development of a tailored roadmap that aligns with Cambodia\'s business environment and leverages local opportunities for maximum impact.',
      details: [
        'Customized business strategy',
        'Implementation timeline',
        'Resource allocation plan',
        'Partnership recommendations'
      ],
      timeframe: '2-3 weeks'
    },
    {
      number: '03',
      title: 'Implementation & Execution',
      description: 'Hands-on support throughout the execution phase, ensuring smooth implementation with continuous guidance and local expertise.',
      details: [
        'Project management',
        'Stakeholder coordination',
        'Progress monitoring',
        'Real-time adjustments'
      ],
      timeframe: '4-12 weeks'
    },
    {
      number: '04',
      title: 'Optimization & Growth',
      description: 'Ongoing support to optimize operations, measure performance, and identify new growth opportunities in Cambodia and the broader ASEAN region.',
      details: [
        'Performance analytics',
        'Continuous improvement',
        'Growth strategy refinement',
        'Expansion planning'
      ],
      timeframe: 'Ongoing'
    }
  ]

  return (
    <section className="process-section py-3">
      <div className="container">
        <div className="process-header text-center mb-3 fade-up">
          <div className="process-badge">
            <span>Our Process</span>
          </div>
          <h2>Proven Methodology for Cambodia</h2>
          <p>A systematic 4-step approach refined through 8 years of experience helping businesses succeed in Cambodia's dynamic market</p>
        </div>

        <div className="process-timeline-wrapper">
          <div className="process-timeline-line"></div>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className={`process-step fade-up ${index % 2 === 0 ? 'process-step--left' : 'process-step--right'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="process-step__content">
                  <div className="process-step__header">
                    <div className="process-step__number">
                      <span>{step.number}</span>
                    </div>
                    <div className="process-step__meta">
                      <h3 className="process-step__title">{step.title}</h3>
                      <div className="process-step__timeframe">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{step.timeframe}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="process-step__description">{step.description}</p>
                  
                  <div className="process-step__details">
                    <h4>Key Deliverables</h4>
                    <div className="process-step__activities">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="activity-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="process-benefits fade-up">
          <div className="process-benefits__header">
            <h3>Why Our Methodology Delivers Results</h3>
            <p>Designed specifically for Cambodia's business environment with local insights and proven strategies</p>
          </div>
          <div className="process-benefits__grid">
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Local Market Intelligence</h4>
              <p>Deep understanding of Cambodia's cultural nuances, regulatory landscape, and business customs gained through 8 years of on-ground experience</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Adaptive Framework</h4>
              <p>Flexible methodology that evolves with Cambodia's rapidly changing business environment while maintaining proven core principles</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Track Record of Success</h4>
              <p>95% success rate across 50+ businesses with measurable results in market entry, growth, and operational efficiency</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Strategic Network Access</h4>
              <p>Exclusive connections with government officials, industry leaders, and local partners to accelerate your business success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection 