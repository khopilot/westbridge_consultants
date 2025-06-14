import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/ServicesCTA.css'

const ServicesCTA: React.FC = () => {
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

  const ctaOptions = [
    {
      title: 'Free Consultation',
      description: 'Get expert insights tailored to your business goals',
      action: 'Schedule Call',
      link: '/contact',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9847 21.5573 21.2137 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0488 2.28271 3.30224 2.17052C3.55568 2.05833 3.82957 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06266 2.16708 8.43235 2.48353C8.80204 2.79999 9.04715 3.23945 9.10999 3.72C9.22999 4.68007 9.47999 5.62273 9.84999 6.53C9.97999 6.88792 10.01 7.27691 9.92999 7.65088C9.84999 8.02485 9.66999 8.36811 9.40999 8.64L8.08999 9.96C9.51355 12.4135 11.5865 14.4864 14.04 15.91L15.36 14.59C15.6319 14.33 15.9751 14.15 16.3491 14.07C16.7231 13.99 17.1121 14.02 17.47 14.15C18.3773 14.52 19.3199 14.77 20.28 14.89C20.7658 14.9585 21.2094 15.2145 21.5265 15.5948C21.8437 15.9751 22.0122 16.4503 21.2 16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      highlight: true
    },
    {
      title: 'Market Analysis',
      description: 'Comprehensive assessment of your market opportunity',
      action: 'Request Report',
      link: '/contact',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21M7 14L12 9L16 13L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 8V12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      highlight: false
    },
    {
      title: 'Partnership Meeting',
      description: 'Explore how we can support your Cambodia strategy',
      action: 'Meet Our Team',
      link: '/about',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      highlight: false
    }
  ]

  return (
    <section className="services-cta py-3" style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}>
      <div className="container">
        <div className="services-cta__content fade-up">
          <div className="services-cta__header">
            <div className="services-cta__badge">
              🚀 Ready to Start Your Journey?
            </div>
            <h2 className="services-cta__title">
              Transform Your Business in Cambodia
            </h2>
            <p className="services-cta__description">
              Join the growing number of successful businesses that have partnered with 
              Goulding & Co Strategic Advisory to navigate Cambodia's dynamic market. Whether you're 
              entering the market or scaling operations, we have the expertise and connections 
              to accelerate your success.
            </p>
          </div>

          <div className="services-cta__options">
            {ctaOptions.map((option, index) => (
              <div 
                key={index} 
                className={`cta-option ${option.highlight ? 'cta-option--highlight' : ''} fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cta-option__icon">
                  {option.icon}
                </div>
                <div className="cta-option__content">
                  <h3 className="cta-option__title">{option.title}</h3>
                  <p className="cta-option__description">{option.description}</p>
                  <Link to={option.link} className="btn btn--primary">
                    {option.action}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Quick Summary */}
          <div className="services-cta__benefits fade-up" style={{ marginTop: '3rem' }}>
            <h3>Why Choose Goulding & Co Strategic Advisory?</h3>
            <div className="cta-benefits__grid">
              <div className="cta-benefit">
                <span className="cta-benefit__number">8+</span>
                <span className="cta-benefit__label">Years in Cambodia</span>
              </div>
              <div className="cta-benefit">
                <span className="cta-benefit__number">50+</span>
                <span className="cta-benefit__label">Successful Projects</span>
              </div>
              <div className="cta-benefit">
                <span className="cta-benefit__number">95%</span>
                <span className="cta-benefit__label">Client Success Rate</span>
              </div>
              <div className="cta-benefit">
                <span className="cta-benefit__number">24/7</span>
                <span className="cta-benefit__label">Local Support</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="services-cta__contact fade-up" style={{ marginTop: '2rem' }}>
            <div className="cta-contact__methods">
              <div className="cta-contact__method">
                <span className="cta-contact__icon">📞</span>
                <div className="cta-contact__info">
                  <span className="cta-contact__label">Call Us</span>
                  <span className="cta-contact__value">+855 23 123 456</span>
                </div>
              </div>
              <div className="cta-contact__method">
                <span className="cta-contact__icon">📧</span>
                <div className="cta-contact__info">
                  <span className="cta-contact__label">Email Us</span>
                  <span className="cta-contact__value">hello@westbridge.com.kh</span>
                </div>
              </div>
              <div className="cta-contact__method">
                <span className="cta-contact__icon">📍</span>
                <div className="cta-contact__info">
                  <span className="cta-contact__label">Visit Us</span>
                  <span className="cta-contact__value">Phnom Penh, Cambodia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="services-cta__trust fade-up" style={{ marginTop: '2rem' }}>
            <p className="cta-trust__text">
              Trusted by businesses from startups to Fortune 500 companies across Cambodia
            </p>
            <div className="cta-trust__badges">
              <span className="cta-trust__badge">🏛️ Government Registered</span>
              <span className="cta-trust__badge">⚖️ Legal Compliance</span>
              <span className="cta-trust__badge">🛡️ Fully Insured</span>
              <span className="cta-trust__badge">🌟 ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA 