import React from 'react'
import './styles/ContactCTA.css'

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="contact-cta py-3">
      <div className="container">
        <div className="contact-cta__content">
          <div className="contact-cta__header text-center">
            <div className="contact-cta__badge">
              🚀 Ready to Start?
            </div>
            <h2>Take the Next Step with Cambodia's Premier Strategic Advisors</h2>
            <p className="contact-cta__description">
              Don't let another opportunity pass by. Connect with our team today and discover how 
              we can accelerate your business success in Cambodia's dynamic market.
            </p>
          </div>

          <div className="contact-options">
            <div className="contact-option contact-option--primary">
              <div className="contact-option__icon">📞</div>
              <div className="contact-option__content">
                <h3>Schedule a Free Consultation</h3>
                <p>Get personalized insights and recommendations for your Cambodia business strategy in a no-obligation 30-minute consultation.</p>
                <div className="contact-option__details">
                  <span>✓ Market opportunity assessment</span>
                  <span>✓ Regulatory guidance preview</span>
                  <span>✓ Custom roadmap outline</span>
                </div>
                <button className="contact-option__button">Book Consultation</button>
              </div>
            </div>

            <div className="contact-option">
              <div className="contact-option__icon">📧</div>
              <div className="contact-option__content">
                <h3>Get Expert Insights</h3>
                <p>Send us your business challenge or opportunity, and receive a detailed response from our Cambodia specialists.</p>
                <div className="contact-option__details">
                  <span>✓ 24-hour response guarantee</span>
                  <span>✓ Confidential discussion</span>
                  <span>✓ Actionable recommendations</span>
                </div>
                <button className="contact-option__button contact-option__button--secondary">Send Message</button>
              </div>
            </div>

            <div className="contact-option">
              <div className="contact-option__icon">🎯</div>
              <div className="contact-option__content">
                <h3>Request Proposal</h3>
                <p>Ready to move forward? Get a comprehensive project proposal tailored to your specific business objectives.</p>
                <div className="contact-option__details">
                  <span>✓ Detailed scope & timeline</span>
                  <span>✓ Transparent pricing</span>
                  <span>✓ Success metrics defined</span>
                </div>
                <button className="contact-option__button contact-option__button--secondary">Request Proposal</button>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h3>Connect With Us Directly</h3>
            <div className="contact-methods">
              <a href="tel:+85523123456" className="contact-method">
                <div className="contact-method__icon">📞</div>
                <div className="contact-method__content">
                  <div className="contact-method__label">Phone</div>
                  <div className="contact-method__value">+855 23 123 456</div>
                </div>
              </a>
              
              <a href="mailto:hello@westbridge.com.kh" className="contact-method">
                <div className="contact-method__icon">📧</div>
                <div className="contact-method__content">
                  <div className="contact-method__label">Email</div>
                  <div className="contact-method__value">hello@westbridge.com.kh</div>
                </div>
              </a>
              
              <a href="https://maps.google.com/?q=Phnom+Penh+Cambodia" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method__icon">📍</div>
                <div className="contact-method__content">
                  <div className="contact-method__label">Office</div>
                  <div className="contact-method__value">Phnom Penh, Cambodia</div>
                </div>
              </a>
              
              <a href="https://wa.me/85512345678" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method__icon">💬</div>
                <div className="contact-method__content">
                  <div className="contact-method__label">WhatsApp</div>
                  <div className="contact-method__value">+855 12 345 678</div>
                </div>
              </a>
            </div>
          </div>

          <div className="urgency-indicators">
            <div className="urgency-indicator">
              <div className="urgency-indicator__icon">⚡</div>
              <div className="urgency-indicator__content">
                <h4>Fast Response Time</h4>
                <p>Initial consultation within 48 hours</p>
              </div>
            </div>
            <div className="urgency-indicator">
              <div className="urgency-indicator__icon">🎯</div>
              <div className="urgency-indicator__content">
                <h4>No Commitment Required</h4>
                <p>Free consultation with no strings attached</p>
              </div>
            </div>
            <div className="urgency-indicator">
              <div className="urgency-indicator__icon">🔒</div>
              <div className="urgency-indicator__content">
                <h4>Confidential Discussion</h4>
                <p>Your business information stays private</p>
              </div>
            </div>
          </div>

          <div className="social-proof">
            <p className="social-proof__text">
              Join 50+ successful businesses who have chosen Goulding & Co Strategic Advisory for their Cambodia expansion
            </p>
            <div className="social-proof__stats">
              <div className="proof-stat">
                <span className="proof-stat__number">95%</span>
                <span className="proof-stat__label">Client Satisfaction</span>
              </div>
              <div className="proof-stat">
                <span className="proof-stat__number">24hrs</span>
                <span className="proof-stat__label">Average Response</span>
              </div>
              <div className="proof-stat">
                <span className="proof-stat__number">8yrs</span>
                <span className="proof-stat__label">Cambodia Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA