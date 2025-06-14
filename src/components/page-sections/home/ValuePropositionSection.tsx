import React, { useEffect } from 'react'
import './styles/ValuePropositionSection.css'

const ValuePropositionSection: React.FC = () => {
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

  const valueProps = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Local Market Expertise",
      description: "Deep understanding of Cambodia's business culture, regulatory environment, and market dynamics across all provinces."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Regulatory Compliance",
      description: "Navigate Cambodia's evolving legal framework with confidence, ensuring full compliance with local laws and international standards."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "ASEAN Gateway Strategy",
      description: "Leverage Cambodia's strategic position as your gateway to the 650-million-person ASEAN market and beyond."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Bilingual Expertise",
      description: "Native Khmer and English fluency ensures seamless communication with all stakeholders, from government officials to international partners."
    }
  ]

  return (
    <section className="py-3">
      <div className="container">
        <div className="text-center mb-3">
          <h2>Why Choose Goulding & Co Strategic Advisory</h2>
          <p>Your trusted partner for navigating Cambodia's business landscape with confidence and success</p>
        </div>
        
        <div className="grid grid--2-col">
          {valueProps.map((prop, index) => (
            <div key={index} className="card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card__icon">
                {prop.icon}
              </div>
              <h3 className="card__title">{prop.title}</h3>
              <p>{prop.description}</p>
            </div>
          ))}
        </div>

        {/* Cambodia Focus Banner */}
        <div className="value-prop__banner fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="value-prop__banner-content">
            <h3>🇰🇭 Proudly Serving Cambodia</h3>
            <p>
              Established in Phnom Penh with deep roots in Cambodian business culture. 
              We understand the unique opportunities and challenges of operating in 
              one of Southeast Asia's fastest-growing economies.
            </p>
            <div className="value-prop__highlights">
              <span>🏢 Phnom Penh Headquarters</span>
              <span>🤝 Government Relations</span>
              <span>📈 Local Growth Focus</span>
              <span>🌏 Regional Connectivity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuePropositionSection 