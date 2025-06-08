import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setScrollProgress(scrollPercent)
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset'
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7 6.3C15.1 6.7 15.1 7.3 14.7 7.7L12.7 9.7C12.3 10.1 11.7 10.1 11.3 9.7L9.3 7.7C8.9 7.3 8.9 6.7 9.3 6.3C9.7 5.9 10.3 5.9 10.7 6.3L12 7.6L13.3 6.3C13.7 5.9 14.3 5.9 14.7 6.3Z" fill="currentColor"/>
          <path d="M12 2C13.3 2 14.4 2.6 15.1 3.5L21 10.5C21.6 11.2 22 12.1 22 13V19C22 20.7 20.7 22 19 22H5C3.3 22 2 20.7 2 19V13C2 12.1 2.4 11.2 3 10.5L8.9 3.5C9.6 2.6 10.7 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      path: '/projects', 
      label: 'Projects', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
        {/* Refined Scroll Progress Bar */}
        <div 
          className="nav__progress" 
          style={{ 
            width: `${scrollProgress}%`,
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'width 0.25s ease-out',
            zIndex: 1001,
            opacity: isScrolled ? 1 : 0
          }}
        />
        
        <div className="container">
          <div className="nav__container">
            {/* Professional Logo */}
            <Link to="/" className="nav__logo" onClick={closeMobileMenu}>
              <div className="nav__logo-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8H28C29.1 8 30 8.9 30 10V14L16 22L2 14V10C2 8.9 2.9 8 4 8Z" fill="var(--color-primary)"/>
                  <path d="M2 16L16 24L30 16V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V16Z" fill="var(--color-secondary)" fillOpacity="0.8"/>
                </svg>
              </div>
              <div className="nav__logo-text">
                <span className="nav__logo-main">West Bridge</span>
                <span className="nav__logo-sub">Consultants</span>
              </div>
            </Link>
            
            {/* Refined Desktop Navigation */}
            <ul className="nav__menu">
              {navItems.map((item, index) => (
                <li key={item.path} className="nav__item" style={{ animationDelay: `${index * 0.08}s` }}>
                  <Link 
                    to={item.path} 
                    className={`nav__link ${location.pathname === item.path ? 'nav__link--active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <span className="nav__link-icon">{item.icon}</span>
                    <span className="nav__link-text">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Professional Hamburger Menu */}
            <button 
              className={`nav__hamburger ${isMobileMenuOpen ? 'nav__hamburger--active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Elegant Mobile Menu Overlay */}
      <div className={`nav__overlay ${isMobileMenuOpen ? 'nav__overlay--active' : ''}`} onClick={closeMobileMenu} />

      {/* Professional Mobile Menu */}
      <div className={`nav__mobile ${isMobileMenuOpen ? 'nav__mobile--active' : ''}`}>
        <div className="nav__mobile-header">
          <div className="nav__mobile-logo">
            <Link to="/" onClick={closeMobileMenu}>
              <span className="nav__mobile-logo-text">West Bridge</span>
              <span className="nav__mobile-logo-sub">Consultants</span>
            </Link>
          </div>
          <button 
            className="nav__mobile-close"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <nav className="nav__mobile-nav">
          <ul className="nav__mobile-list">
            {navItems.map((item, index) => (
              <li key={item.path} className="nav__mobile-item" style={{ animationDelay: `${index * 0.06 + 0.15}s` }}>
                <Link 
                  to={item.path} 
                  className={`nav__mobile-link ${location.pathname === item.path ? 'nav__mobile-link--active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <span className="nav__mobile-link-icon">{item.icon}</span>
                  <span className="nav__mobile-link-text">{item.label}</span>
                  <svg className="nav__mobile-link-arrow" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__mobile-footer">
          <div className="nav__mobile-contact">
            <p className="nav__mobile-contact-title">Get in Touch</p>
            <a href="mailto:contact@westbridge.com" className="nav__mobile-contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              contact@westbridge.com
            </a>
            <a href="tel:+15551234567" className="nav__mobile-contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9847 21.5573 21.2137 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0488 2.28271 3.30224 2.17052C3.55568 2.05833 3.82957 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06266 2.16708 8.43235 2.48353C8.80204 2.79999 9.04715 3.23945 9.10999 3.72C9.22999 4.68007 9.47999 5.62273 9.84999 6.53C9.97999 6.88792 10.01 7.27691 9.92999 7.65088C9.84999 8.02485 9.66999 8.36811 9.40999 8.64L8.08999 9.96C9.51355 12.4135 11.5865 14.4864 14.04 15.91L15.36 14.59C15.6319 14.33 15.9751 14.15 16.3491 14.07C16.7231 13.99 17.1121 14.02 17.47 14.15C18.3773 14.52 19.3199 14.77 20.28 14.89C20.7658 14.9585 21.2094 15.2145 21.5265 15.5948C21.8437 15.9751 22.0122 16.4503 21.2 16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +1 (555) 123-4567
            </a>
          </div>
          
          <div className="nav__mobile-social">
            <a href="#" className="nav__mobile-social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="nav__mobile-social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation 