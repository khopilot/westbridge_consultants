import React, { useState } from 'react'
import './styles/ContactMain.css'

const ContactMain: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ 
        name: '', email: '', company: '', phone: '', 
        service: '', budget: '', timeline: '', message: '' 
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  const officeInfo = [
    {
      title: 'Phnom Penh Office',
      address: 'BKK 1, Khan Chamkar Mon, Phnom Penh, Cambodia',
      phone: '+855 12 345 678',
      email: 'phnompenh@westbridge-cambodia.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM'
    },
    {
      title: 'Siem Reap Office',
      address: 'Sivatha Boulevard, Siem Reap, Cambodia',
      phone: '+855 63 123 456',
      email: 'siemreap@westbridge-cambodia.com',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM'
    }
  ]

  return (
    <section className="contact-main">
      <div className="container">
        <div className="contact-main__header fade-up">
          <div className="section-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Get Started</span>
          </div>
          <h2>Let's Discuss Your Project</h2>
          <p>Share your vision with us and discover how we can help you succeed in Cambodia's dynamic business landscape.</p>
        </div>
        
        <div className="contact-main__grid">
          {/* Contact Form */}
          <div className="contact-form-section fade-up">
            <div className="contact-form-header">
              <h2>Start Your Journey</h2>
              <p>Tell us about your project and let's discuss how we can help you achieve your goals in Cambodia.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-section">
                <h5>Personal Information</h5>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+855 12 345 678"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h5>Project Details</h5>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      <option value="market-entry">Market Entry Strategy</option>
                      <option value="business-setup">Business Setup & Registration</option>
                      <option value="legal-compliance">Legal & Compliance</option>
                      <option value="investment-advisory">Investment Advisory</option>
                      <option value="operational-support">Operational Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (Within 1 month)</option>
                    <option value="short-term">Short-term (1-3 months)</option>
                    <option value="medium-term">Medium-term (3-6 months)</option>
                    <option value="long-term">Long-term (6+ months)</option>
                    <option value="planning">Just planning/exploring</option>
                  </select>
                </div>
              </div>

              <div className="form-section">
                <h5>Tell Us More</h5>
                <div className="form-group">
                  <label htmlFor="message">Project Description *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and how we can help you succeed in Cambodia..."
                    rows={5}
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className={`btn btn--primary contact-form__submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Office Information */}
          <div className="office-info-section fade-up">
            <div className="office-info-header">
              <h3>Our Offices</h3>
              <p>Visit us at our convenient locations across Cambodia</p>
            </div>

            <div className="office-cards">
              {officeInfo.map((office, index) => (
                <div key={index} className="office-card">
                  <h4>{office.title}</h4>
                  <div className="office-details">
                    <div className="office-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{office.address}</span>
                    </div>
                    <div className="office-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22 20.52 21.39 21.07 20.8 20.99C19.27 20.83 17.77 20.39 16.4 19.68C13.55 18.18 11.18 15.82 9.68 12.98C8.96 11.6 8.52 10.1 8.37 8.57C8.29 7.98 8.84 7.37 9.44 7.37H12.44C12.89 7.37 13.27 7.69 13.32 8.14C13.41 9.03 13.63 9.89 13.96 10.71C14.08 10.98 14.01 11.3 13.8 11.51L12.63 12.68C13.84 14.82 15.18 16.16 17.32 17.37L18.49 16.2C18.7 15.99 19.02 15.92 19.29 16.04C20.11 16.37 20.97 16.59 21.86 16.68C22.31 16.73 22.63 17.11 22.63 17.56L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{office.phone}</span>
                    </div>
                    <div className="office-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{office.email}</span>
                    </div>
                    <div className="office-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="contact-faq">
              <h4>Quick Answers</h4>
              <div className="faq-items">
                <div className="faq-item">
                  <strong>How quickly do you respond?</strong>
                  <p>We respond to all inquiries within 24 hours, often much sooner during business hours.</p>
                </div>
                <div className="faq-item">
                  <strong>Do you offer free consultations?</strong>
                  <p>Yes! We offer a complimentary 30-minute consultation to discuss your needs and how we can help.</p>
                </div>
                <div className="faq-item">
                  <strong>What information should I prepare?</strong>
                  <p>Your business goals, timeline, budget range, and any specific challenges you're facing in Cambodia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMain