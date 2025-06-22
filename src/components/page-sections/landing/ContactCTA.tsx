import React from 'react'
import './styles/ContactCTA.css'

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="contact-cta py-3">
      <div className="container">
        <div className="contact-cta__content">
          <div className="contact-cta__header text-center">
            <h2>Connect with Us</h2>
          </div>

          <div className="contact-info">
            <div className="contact-methods">
              <a href="#" className="contact-method">
                <div className="contact-method__icon">💬</div>
                <div className="contact-method__content">
                  <div className="contact-method__label">Telegram</div>
                  <div className="contact-method__value">@westbridge_kh</div>
                </div>
              </a>
              
              <a href="https://wa.me/85512345678" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method__icon">💬</div>
                <div className="contact-method__content">
                  <div className="contact-method__label">WhatsApp</div>
                  <div className="contact-method__value">+855 12 345 678</div>
                </div>
              </a>
              
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
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default ContactCTA