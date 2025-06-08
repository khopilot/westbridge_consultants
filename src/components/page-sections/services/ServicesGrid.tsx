import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/ServicesGrid.css'

const ServicesGrid: React.FC = () => {
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

  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Business Registration & Setup',
      description: 'Complete guidance through Cambodia\'s business registration process, from choosing the right entity type to obtaining all necessary licenses and permits.',
      features: ['Company incorporation', 'License acquisition', 'Tax registration', 'Work permit assistance']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Market Entry Strategy',
      description: 'Strategic planning for entering Cambodia\'s unique market, including competitor analysis, local partnership opportunities, and cultural adaptation strategies.',
      features: ['Market research', 'Competitive analysis', 'Partnership development', 'Cultural consulting']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Regulatory Compliance',
      description: 'Ensure full compliance with Cambodia\'s evolving regulatory framework, including labor laws, environmental regulations, and industry-specific requirements.',
      features: ['Legal compliance audit', 'Policy development', 'Regulatory monitoring', 'Government liaison']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Human Resources Development',
      description: 'Build and optimize your workforce with local hiring strategies, training programs, and HR policy development tailored to Cambodia\'s labor market.',
      features: ['Recruitment strategy', 'Training programs', 'HR policy design', 'Performance management']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'ASEAN Expansion Planning',
      description: 'Leverage Cambodia\'s strategic position to access the broader ASEAN market. We help you scale operations across Southeast Asia\'s integrated economy.',
      features: ['ASEAN market analysis', 'Trade facilitation', 'Cross-border strategy', 'Regional partnerships']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Digital Transformation',
      description: 'Modernize your operations with technology solutions adapted to Cambodia\'s digital infrastructure and mobile-first business environment.',
      features: ['Digital strategy', 'Technology implementation', 'Mobile solutions', 'E-commerce development']
    }
  ]

  return (
    <section className="py-3">
      <div className="container">
        <div className="text-center mb-3 fade-up">
          <h2>Comprehensive Business Solutions</h2>
          <p>Tailored services designed specifically for the Cambodian business environment</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card__icon">
                {service.icon}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              
              <div className="service-card__features">
                <h4>Key Services:</h4>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-card__cta">
                <Link to="/contact" className="btn btn--primary">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Services Overview Banner */}
        <div className="services-overview-banner fade-up" style={{ marginTop: '4rem' }}>
          <div className="services-overview-banner__content">
            <h3>🎯 End-to-End Business Support</h3>
            <p>
              From initial market entry to scaling across ASEAN, we provide comprehensive 
              support at every stage of your business journey in Cambodia. Our deep local 
              knowledge combined with international best practices ensures your success.
            </p>
            <div className="services-overview-highlights">
              <span>🏢 Complete Setup</span>
              <span>⚡ Fast Implementation</span>
              <span>🤝 Local Expertise</span>
              <span>🌏 ASEAN Gateway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid 