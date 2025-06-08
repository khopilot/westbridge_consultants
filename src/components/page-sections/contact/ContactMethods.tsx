import React from 'react'
import './styles/ContactMethods.css'

const ContactMethods: React.FC = () => {
  const contactMethods = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email Us',
      info: 'contact@westbridge-cambodia.com',
      description: 'Send us an email anytime',
      action: 'mailto:contact@westbridge-cambodia.com'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19.92C22 20.52 21.39 21.07 20.8 20.99C19.27 20.83 17.77 20.39 16.4 19.68C13.55 18.18 11.18 15.82 9.68 12.98C8.96 11.6 8.52 10.1 8.37 8.57C8.29 7.98 8.84 7.37 9.44 7.37H12.44C12.89 7.37 13.27 7.69 13.32 8.14C13.41 9.03 13.63 9.89 13.96 10.71C14.08 10.98 14.01 11.3 13.8 11.51L12.63 12.68C13.84 14.82 15.18 16.16 17.32 17.37L18.49 16.2C18.7 15.99 19.02 15.92 19.29 16.04C20.11 16.37 20.97 16.59 21.86 16.68C22.31 16.73 22.63 17.11 22.63 17.56L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Call Us',
      info: '+855 12 345 678',
      description: 'Mon-Fri 9AM-6PM (GMT+7)',
      action: 'tel:+85512345678'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Visit Us',
      info: 'BKK 1, Phnom Penh',
      description: 'Central Business District',
      action: 'https://maps.google.com/?q=BKK+1+Khan+Chamkar+Mon+Phnom+Penh+Cambodia'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'WhatsApp',
      info: '+855 12 345 678',
      description: 'Quick messaging support',
      action: 'https://wa.me/85512345678'
    }
  ]

  return (
    <section className="contact-methods">
      <div className="container">
        <div className="contact-methods__content fade-up">
          <div className="contact-methods__intro">
            <h2>Get in Touch</h2>
            <p>Choose your preferred way to connect with us</p>
          </div>
          
          <div className="contact-methods__flow">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.action} 
                className="contact-method" 
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                target={method.action.startsWith('http') ? '_blank' : '_self'}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-method__icon">
                  {method.icon}
                </div>
                <div className="contact-method__content">
                  <h4>{method.title}</h4>
                  <span className="contact-method__info">{method.info}</span>
                  <small className="contact-method__desc">{method.description}</small>
                </div>
                <div className="contact-method__arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMethods 