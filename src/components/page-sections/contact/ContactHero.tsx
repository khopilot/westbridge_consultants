import React from 'react'
import './styles/ContactHero.css'

const ContactHero: React.FC = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero__overlay"></div>
      <div className="container">
        <div className="contact-hero__content fade-up">
          <div className="contact-hero__badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22 20.52 21.39 21.07 20.8 20.99C19.27 20.83 17.77 20.39 16.4 19.68C13.55 18.18 11.18 15.82 9.68 12.98C8.96 11.6 8.52 10.1 8.37 8.57C8.29 7.98 8.84 7.37 9.44 7.37H12.44C12.89 7.37 13.27 7.69 13.32 8.14C13.41 9.03 13.63 9.89 13.96 10.71C14.08 10.98 14.01 11.3 13.8 11.51L12.63 12.68C13.84 14.82 15.18 16.16 17.32 17.37L18.49 16.2C18.7 15.99 19.02 15.92 19.29 16.04C20.11 16.37 20.97 16.59 21.86 16.68C22.31 16.73 22.63 17.11 22.63 17.56L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Let's Connect</span>
          </div>
          <h1>Ready to Transform Your Business in Cambodia?</h1>
          <p>
            Whether you're planning market entry, need strategic guidance, or want to explore new opportunities, 
            our team of Cambodia experts is here to help you succeed in Southeast Asia's most dynamic market.
          </p>
          
          <div className="contact-hero__features">
            <div className="hero-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Strategic Planning</span>
            </div>
            <div className="hero-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Legal Compliance</span>
            </div>
            <div className="hero-feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Fast Results</span>
            </div>
          </div>
          <div className="contact-hero__stats">
            <div className="contact-hero__stat">
              <span className="contact-hero__stat-number">24h</span>
              <span className="contact-hero__stat-label">Response Time</span>
            </div>
            <div className="contact-hero__stat">
              <span className="contact-hero__stat-number">50+</span>
              <span className="contact-hero__stat-label">Happy Clients</span>
            </div>
            <div className="contact-hero__stat">
              <span className="contact-hero__stat-number">8+</span>
              <span className="contact-hero__stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero 