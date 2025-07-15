import React from 'react'
import './styles/ContactCTA.css'

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="contact-cta">
      <div className="container">
        <div className="contact-cta__content">
          <div className="contact-cta__header text-center">
            <img 
              src="/visual/Logo_gouldingandco_white.png" 
              alt="Goulding & Co" 
              className="contact-cta__logo"
            />
            <h2>CONTACT</h2>
          </div>

          <div className="contact-grid">
            {/* Social Links */}
            <div className="contact-social">
              <h3>Connect with Brett</h3>
              <div className="social-links">
                <a href="https://t.me/brettgoulding" target="_blank" rel="noopener noreferrer" className="social-link social-link--telegram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.21 2.27-1.13 7.75-1.6 10.29-.2 1.08-.59 1.44-.97 1.47-.82.07-1.45-.54-2.24-.99-1.24-.71-1.94-1.16-3.14-1.86-1.39-.81-.49-1.26.3-1.99.21-.19 3.85-3.52 3.91-3.82.01-.04.02-.17-.07-.25s-.22-.05-.32-.03c-.14.03-2.3 1.46-6.5 4.29-.61.42-1.17.63-1.67.62-.55-.01-1.61-.31-2.4-.57-.97-.31-1.74-.48-1.67-1.01.04-.27.42-.55 1.14-.82 4.45-1.94 7.41-3.22 8.89-3.84 4.24-1.77 5.12-2.08 5.69-2.09.13 0 .41.03.59.18.15.12.19.29.21.43.02.1.04.26.02.4z"/>
                  </svg>
                  Telegram
                </a>
                <a href="https://wa.me/85512345678" target="_blank" rel="noopener noreferrer" className="social-link social-link--whatsapp">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
                <a href="https://m.me/brettgoulding" target="_blank" rel="noopener noreferrer" className="social-link social-link--messenger">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.466 5.501 3.75 7.18V22l3.423-1.878c.914.253 1.88.389 2.877.389 5.523 0 10-4.145 10-9.268S17.523 2 12 2zm.994 12.486l-2.561-2.732-5 2.732 5.5-5.833 2.622 2.732 4.939-2.732-5.5 5.833z"/>
                  </svg>
                  Messenger
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-email">
              <h3>Email</h3>
              <a href="mailto:hello@gouldingco.com" className="email-link">
                hello@gouldingco.com
              </a>
            </div>

            {/* Map */}
            <div className="contact-map">
              <h3>Office Location</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.8813456789!2d104.92!3d11.5504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzAxLjQiTiAxMDTCsDU1JzEyLjAiRQ!5e0!3m2!1sen!2skh!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
                <p className="address">
                  Phnom Penh, Cambodia<br />
                  Business Hours: Mon-Fri 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA