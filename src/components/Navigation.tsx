import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 7L12 12L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      path: '/projects', 
      label: 'Projects', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
        {/* Elegant Progress Indicator */}
        <div 
          className="nav__progress" 
          style={{ 
            width: `${scrollProgress}%`,
            height: '1px',
            background: 'linear-gradient(90deg, var(--color-accent) 0%, var(--color-primary) 50%, var(--color-secondary) 100%)',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1001,
            opacity: isScrolled ? 0.8 : 0,
            boxShadow: isScrolled ? '0 0 8px rgba(74, 144, 226, 0.3)' : 'none'
          }}
        />
        
        <div className="container">
          <div className="nav__container">
            {/* Refined Logo */}
            <Link to="/" className="nav__logo" onClick={closeMobileMenu}>
              <div className="nav__logo-icon">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8H28C29.1 8 30 8.9 30 10V14L16 22L2 14V10C2 8.9 2.9 8 4 8Z" fill="var(--color-primary)"/>
                  <path d="M2 16L16 24L30 16V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V16Z" fill="var(--color-accent)" fillOpacity="0.7"/>
                </svg>
              </div>
              <div className="nav__logo-text">
                <span className="nav__logo-main">Goulding & Co</span>
                <span className="nav__logo-sub">Strategic Advisory</span>
              </div>
            </Link>
            
            {/* Elegant Desktop Navigation */}
            <ul className="nav__menu">
              {navItems.map((item, index) => (
                <li key={item.path} className="nav__item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link 
                    to={item.path} 
                    className={`nav__link ${location.pathname === item.path ? 'nav__link--active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <span className="nav__link-icon">{item.icon}</span>
                    <span className="nav__link-text">{item.label}</span>
                    <span className="nav__link-indicator"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions with Theme Toggle */}
            <div className="nav__actions">
              <div className="nav__theme-wrapper">
                <ThemeToggle />
              </div>
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
        </div>
      </nav>

      {/* Refined Mobile Menu Overlay */}
      <div className={`nav__overlay ${isMobileMenuOpen ? 'nav__overlay--active' : ''}`} onClick={closeMobileMenu} />

      {/* Elegant Mobile Menu */}
      <div className={`nav__mobile ${isMobileMenuOpen ? 'nav__mobile--active' : ''}`}>
        <div className="nav__mobile-header">
          <div className="nav__mobile-logo">
            <Link to="/" onClick={closeMobileMenu}>
              <div className="nav__mobile-logo-icon">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8H28C29.1 8 30 8.9 30 10V14L16 22L2 14V10C2 8.9 2.9 8 4 8Z" fill="var(--color-primary)"/>
                  <path d="M2 16L16 24L30 16V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V16Z" fill="var(--color-accent)" fillOpacity="0.7"/>
                </svg>
              </div>
              <div className="nav__mobile-logo-text">
                <span className="nav__mobile-logo-main">Goulding & Co</span>
                <span className="nav__mobile-logo-sub">Strategic Advisory</span>
              </div>
            </Link>
          </div>
          <button 
            className="nav__mobile-close"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <nav className="nav__mobile-nav">
          <ul className="nav__mobile-list">
            {navItems.map((item, index) => (
              <li key={item.path} className="nav__mobile-item" style={{ animationDelay: `${index * 0.08 + 0.2}s` }}>
                <Link 
                  to={item.path} 
                  className={`nav__mobile-link ${location.pathname === item.path ? 'nav__mobile-link--active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <span className="nav__mobile-link-icon">{item.icon}</span>
                  <span className="nav__mobile-link-text">{item.label}</span>
                  <svg className="nav__mobile-link-arrow" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              contact@westbridge.com
            </a>
          </div>
          
          <div className="nav__mobile-theme">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation 