import React, { useEffect } from 'react'
import './styles/TestimonialsSection.css'

const TestimonialsSection: React.FC = () => {
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

  const testimonials = [
    {
      quote: "West Bridge Consultants helped us navigate the complex process of expanding our rice export business to new ASEAN markets. Their deep understanding of both Cambodian regulations and international trade requirements was invaluable.",
      author: "Sorn Vicheka",
      position: "Managing Director",
      company: "Golden Rice Export Co.",
      location: "Battambang",
      industry: "Agriculture"
    },
    {
      quote: "As a tech startup in Phnom Penh, we needed guidance on business registration and investor relations. West Bridge made the entire process smooth and helped us secure our first round of funding within 4 months.",
      author: "Dr. Jennifer Kim",
      position: "CEO & Founder",
      company: "CamboTech Solutions",
      location: "Phnom Penh",
      industry: "Technology"
    },
    {
      quote: "Our tourism business was struggling post-pandemic. West Bridge helped us pivot our strategy, develop sustainable tourism practices, and build partnerships with international tour operators. We're now stronger than ever.",
      author: "Pich Sophea",
      position: "Owner",
      company: "Angkor Heritage Tours",
      location: "Siem Reap",
      industry: "Tourism"
    },
    {
      quote: "The regulatory landscape for banking in Cambodia is complex. West Bridge's expertise in financial services compliance helped us launch our new microfinance products while ensuring full regulatory compliance.",
      author: "David Chen",
      position: "Regional Director",
      company: "Community Development Bank",
      location: "Phnom Penh",
      industry: "Financial Services"
    }
  ]

  return (
    <section className="py-3">
      <div className="container">
        <div className="text-center mb-3">
          <h2>Trusted by Cambodian Business Leaders</h2>
          <p>Hear from clients across Cambodia who have transformed their businesses with our guidance</p>
        </div>
        
        <div className="grid grid--2-col">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-card__content">
                <div className="testimonial-card__industry">
                  {testimonial.industry}
                </div>
                <blockquote className="testimonial-card__quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__author-info">
                    <strong className="testimonial-card__author-name">{testimonial.author}</strong>
                    <div className="testimonial-card__author-position">{testimonial.position}</div>
                    <div className="testimonial-card__company">{testimonial.company}</div>
                    <div className="testimonial-card__location">📍 {testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="testimonials__trust-indicators fade-up" style={{ marginTop: '3rem' }}>
          <div className="text-center mb-2">
            <h4>Recognized Across Industries</h4>
          </div>
          <div className="trust-indicators__grid">
            <div className="trust-indicator">
              <span className="trust-indicator__icon">🏭</span>
              <span className="trust-indicator__label">Manufacturing</span>
            </div>
            <div className="trust-indicator">
              <span className="trust-indicator__icon">🌾</span>
              <span className="trust-indicator__label">Agriculture</span>
            </div>
            <div className="trust-indicator">
              <span className="trust-indicator__icon">🏛️</span>
              <span className="trust-indicator__label">Tourism</span>
            </div>
            <div className="trust-indicator">
              <span className="trust-indicator__icon">💳</span>
              <span className="trust-indicator__label">Financial Services</span>
            </div>
            <div className="trust-indicator">
              <span className="trust-indicator__icon">💻</span>
              <span className="trust-indicator__label">Technology</span>
            </div>
            <div className="trust-indicator">
              <span className="trust-indicator__icon">🏗️</span>
              <span className="trust-indicator__label">Construction</span>
            </div>
          </div>
        </div>

        {/* Client Success Stats */}
        <div className="testimonials__stats fade-up" style={{ marginTop: '2rem' }}>
          <div className="stats-banner">
            <div className="stats-banner__content">
              <h4>Client Success by the Numbers</h4>
              <div className="stats-banner__metrics">
                <div className="stats-metric">
                  <span className="stats-metric__number">95%</span>
                  <span className="stats-metric__label">Client Retention Rate</span>
                </div>
                <div className="stats-metric">
                  <span className="stats-metric__number">4.9/5</span>
                  <span className="stats-metric__label">Average Client Rating</span>
                </div>
                <div className="stats-metric">
                  <span className="stats-metric__number">18</span>
                  <span className="stats-metric__label">Average Project Completion (Days)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 