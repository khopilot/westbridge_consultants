import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/landing', label: 'Landing' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  const services = [
    'Market Entry Strategy',
    'Business Setup & Licensing',
    'Partnership Development',
    'Regulatory Compliance',
    'Investment Advisory',
    'Digital Transformation'
  ]

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__content">
            {/* Company Information */}
            <div className="footer__section footer__section--primary">
              <div className="footer__logo">
                <div className="footer__logo-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8H28C29.1 8 30 8.9 30 10V14L16 22L2 14V10C2 8.9 2.9 8 4 8Z" fill="currentColor"/>
                    <path d="M2 16L16 24L30 16V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V16Z" fill="currentColor" fillOpacity="0.7"/>
                  </svg>
                </div>
                <div className="footer__logo-text">
                  <span className="footer__logo-main">Goulding & Co</span>
                  <span className="footer__logo-sub">Strategic Advisory</span>
                </div>
              </div>
              <p className="footer__tagline">
                Your trusted partner for business success in Cambodia. Expert guidance for market entry, regulatory compliance, and sustainable growth in Southeast Asia's most promising economy.
              </p>
              
              {/* Newsletter Signup */}
              <div className="footer__newsletter">
                <h4 className="footer__newsletter-title">Cambodia Business Insights</h4>
                <p className="footer__newsletter-desc">Get exclusive market updates and business opportunities in Cambodia.</p>
                <form className="footer__newsletter-form">
                  <div className="footer__newsletter-input-group">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="footer__newsletter-input"
                      aria-label="Email address for newsletter"
                    />
                    <button type="submit" className="footer__newsletter-button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__section">
              <h4 className="footer__section-title">Quick Links</h4>
              <nav className="footer__nav">
                <ul className="footer__nav-list">
                  {navigationLinks.map((link) => (
                    <li key={link.path} className="footer__nav-item">
                      <Link to={link.path} className="footer__nav-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services */}
            <div className="footer__section">
              <h4 className="footer__section-title">Our Services</h4>
              <ul className="footer__services-list">
                {services.map((service, index) => (
                  <li key={index} className="footer__services-item">
                    <Link to="/services" className="footer__services-link">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="footer__section">
              <h4 className="footer__section-title">Get in Touch</h4>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="footer__contact-info">
                    <span className="footer__contact-label">Email</span>
                    <a href="mailto:hello@westbridge.com.kh" className="footer__contact-link">
                      hello@westbridge.com.kh
                    </a>
                  </div>
                </div>

                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9847 21.5573 21.2137 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0488 2.28271 3.30224 2.17052C3.55568 2.05833 3.82957 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06266 2.16708 8.43235 2.48353C8.80204 2.79999 9.04715 3.23945 9.10999 3.72C9.22999 4.68007 9.47999 5.62273 9.84999 6.53C9.97999 6.88792 10.01 7.27691 9.92999 7.65088C9.84999 8.02485 9.66999 8.36811 9.40999 8.64L8.08999 9.96C9.51355 12.4135 11.5865 14.4864 14.04 15.91L15.36 14.59C15.6319 14.33 15.9751 14.15 16.3491 14.07C16.7231 13.99 17.1121 14.02 17.47 14.15C18.3773 14.52 19.3199 14.77 20.28 14.89C20.7658 14.9585 21.2094 15.2145 21.5265 15.5948C21.8437 15.9751 22.0122 16.4503 21.2 16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="footer__contact-info">
                    <span className="footer__contact-label">Phone</span>
                    <a href="tel:+85523123456" className="footer__contact-link">
                      +855 23 123 456
                    </a>
                  </div>
                </div>

                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="footer__contact-info">
                    <span className="footer__contact-label">Address</span>
                    <span className="footer__contact-text">
                      Diamond Island<br />
                      Phnom Penh, Cambodia
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="footer__social">
                <h5 className="footer__social-title">Connect With Us</h5>
                <div className="footer__social-links">
                  <a href="#" className="footer__social-link" aria-label="Follow us on LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="footer__social-link" aria-label="Follow us on Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="footer__social-link" aria-label="Follow us on Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <div className="footer__bottom-left">
              <p className="footer__copyright">
                &copy; {currentYear} Goulding & Co Strategic Advisory. All rights reserved.
              </p>
            </div>
            <div className="footer__bottom-right">
              <nav className="footer__bottom-nav">
                <a href="#" className="footer__bottom-link">Privacy Policy</a>
                <a href="#" className="footer__bottom-link">Terms of Service</a>
                <a href="#" className="footer__bottom-link">Cookie Policy</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 