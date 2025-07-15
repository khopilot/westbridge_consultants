import React from 'react'
import './styles/ContactCTA.css'

const ContactCTA: React.FC = () => {

  return (
    <section id="contact" className="contact-minimal">
      <div className="contact-minimal-container">
        {/* Logo */}
        <div className="contact-logo-section">
          <img 
            src="/visual/Logo_gouldingandco_white.png" 
            alt="Goulding & Co" 
            className="contact-logo"
          />
        </div>

        {/* Contact Methods Icons */}
        <div className="contact-icons">
          <h2>Contact Brett</h2>
          <div className="icons-row">
            <a href="https://t.me/brettkh" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"/>
              </svg>
              <span>Telegram</span>
            </a>
            <a href="https://wa.me/85512345678" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://m.me/brettkh" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C6.5,2 2,6.14 2,11.25C2,14.13 3.42,16.7 5.65,18.4L5.71,22L9.16,20.12C10.08,20.37 11.05,20.5 12,20.5C17.5,20.5 22,16.36 22,11.25C22,6.14 17.5,2 12,2M13.03,14.41L10.54,11.78L5.5,14.41L10.88,8.78L13.46,11.41L18.31,8.78L13.03,14.41Z"/>
              </svg>
              <span>Messenger</span>
            </a>
            <a href="mailto:brett@westbridge-cambodia.com" className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Office Location */}
        <div className="office-location">
          <h3>Office</h3>
          <p>BKK 1, Khan Chamkar Mon<br/>Phnom Penh, Cambodia</p>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.983744505766!2d104.92084561531436!3d11.552703091790954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sBKK1%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1635842957849!5m2!1sen!2skh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactCTA