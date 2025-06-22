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
                <div className="contact-method__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-method__content">
                  <div className="contact-method__label">Telegram</div>
                  <div className="contact-method__value">@westbridge_kh</div>
                </div>
              </a>
              
              <a href="https://wa.me/85512345678" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" fill="#ffffff"/>
                    <path d="M13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11Z" fill="#ffffff"/>
                    <path d="M17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z" fill="#ffffff"/>
                    <path d="M21 7.5C21 5.01472 18.9853 3 16.5 3C14.3631 3 12.5778 4.51734 12.1449 6.50274C12.0967 6.49921 12.0483 6.49734 12 6.49734C9.23858 6.49734 7 8.73592 7 11.4973C7 11.8096 7.0279 12.1158 7.08168 12.4136C5.88113 13.0636 5 14.2994 5 15.5C5 17.433 6.567 19 8.5 19H9.35418C10.0593 20.1954 11.4346 21 13 21C14.5654 21 15.9407 20.1954 16.6458 19H17.5C19.7091 19 21.5 17.2091 21.5 15C21.5 13.7044 20.9185 12.5493 20.0224 11.7963C20.6515 10.9962 21 10.0005 21 9C21 8.49731 20.9183 8.01433 20.7658 7.56152C20.9216 7.38665 21 7.18414 21 7.5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-method__content">
                  <div className="contact-method__label">WhatsApp</div>
                  <div className="contact-method__value">+855 12 345 678</div>
                </div>
              </a>
              
              <a href="tel:+85523123456" className="contact-method">
                <div className="contact-method__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.52 21.39 21.07 20.8 20.99C19.27 20.83 17.77 20.39 16.4 19.68C13.55 18.18 11.18 15.82 9.68 12.98C8.96 11.6 8.52 10.1 8.37 8.57C8.29 7.98 8.84 7.37 9.44 7.37H12.44C12.89 7.37 13.27 7.69 13.32 8.14C13.41 9.03 13.63 9.89 13.96 10.71C14.08 10.98 14.01 11.3 13.8 11.51L12.63 12.68C13.84 14.82 15.18 16.16 17.32 17.37L18.49 16.2C18.7 15.99 19.02 15.92 19.29 16.04C20.11 16.37 20.97 16.59 21.86 16.68C22.31 16.73 22.63 17.11 22.63 17.56L22 16.92Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-method__content">
                  <div className="contact-method__label">Phone</div>
                  <div className="contact-method__value">+855 23 123 456</div>
                </div>
              </a>
              
              <a href="mailto:hello@westbridge.com.kh" className="contact-method">
                <div className="contact-method__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
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