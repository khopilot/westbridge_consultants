import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './LandingNavigation.css'

const LandingNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = ['hero', 'approach', 'why-cambodia', 'case-studies', 'team', 'whitepaper', 'contact']
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const offset = 120 // Navigation height offset
          
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 100 // Approximate navigation height
      const elementPosition = element.offsetTop - navHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
    { id: 'hero', label: 'Overview', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { id: 'approach', label: 'Methodology', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { id: 'why-cambodia', label: 'Cambodia Edge', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )},
    { id: 'case-studies', label: 'Success Stories', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { id: 'team', label: 'Leadership', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { id: 'whitepaper', label: 'Resources', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { id: 'contact', label: 'Get Started', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
  ]

  return (
    <nav className={`landing-nav ${isScrolled ? 'landing-nav--scrolled' : ''}`}>
      <div className="container">
        <div className="landing-nav__container">
          {/* Logo */}
          <div className="landing-nav__logo">
            <Link to="/" className="landing-nav__logo-link">
              <div className="landing-nav__logo-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8H28C29.1 8 30 8.9 30 10V14L16 22L2 14V10C2 8.9 2.9 8 4 8Z" fill="currentColor"/>
                  <path d="M2 16L16 24L30 16V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V16Z" fill="currentColor" fillOpacity="0.7"/>
                </svg>
              </div>
              <div className="landing-nav__logo-text">
                <span className="landing-nav__logo-main">Goulding & Co</span>
                <span className="landing-nav__logo-sub">Strategic Advisory</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="landing-nav__menu">
            {navigationItems.map((item) => (
              <li key={item.id} className="landing-nav__item">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`landing-nav__link ${activeSection === item.id ? 'landing-nav__link--active' : ''}`}
                >
                  <span className="landing-nav__link-icon">{item.icon}</span>
                  <span className="landing-nav__link-text">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="landing-nav__actions">
            <ThemeToggle />
            
            {/* Mobile Hamburger */}
            <button
              className={`landing-nav__hamburger ${isMobileMenuOpen ? 'landing-nav__hamburger--active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="landing-nav__hamburger-line"></span>
              <span className="landing-nav__hamburger-line"></span>
              <span className="landing-nav__hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`landing-nav__overlay ${isMobileMenuOpen ? 'landing-nav__overlay--active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>

      {/* Mobile Menu */}
      <div className={`landing-nav__mobile ${isMobileMenuOpen ? 'landing-nav__mobile--active' : ''}`}>
        <div className="landing-nav__mobile-header">
          <div className="landing-nav__mobile-logo">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="landing-nav__mobile-logo-icon">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8H28C29.1 8 30 8.9 30 10V14L16 22L2 14V10C2 8.9 2.9 8 4 8Z" fill="currentColor"/>
                  <path d="M2 16L16 24L30 16V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V16Z" fill="currentColor" fillOpacity="0.7"/>
                </svg>
              </div>
              <div className="landing-nav__mobile-logo-text">
                <span className="landing-nav__mobile-logo-main">Goulding & Co</span>
                <span className="landing-nav__mobile-logo-sub">Strategic Advisory</span>
              </div>
            </Link>
          </div>
          <button
            className="landing-nav__mobile-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <nav className="landing-nav__mobile-nav">
          <ul className="landing-nav__mobile-list">
            {navigationItems.map((item) => (
              <li 
                key={item.id} 
                className="landing-nav__mobile-item"
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`landing-nav__mobile-link ${activeSection === item.id ? 'landing-nav__mobile-link--active' : ''}`}
                >
                  <span className="landing-nav__mobile-link-icon">{item.icon}</span>
                  <span className="landing-nav__mobile-link-text">{item.label}</span>
                  <span className="landing-nav__mobile-link-arrow">→</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="landing-nav__mobile-footer">
          <div className="landing-nav__mobile-theme">
            <ThemeToggle />
          </div>
          
          <div className="landing-nav__mobile-contact">
            <div className="landing-nav__mobile-contact-title">Ready to Start?</div>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="landing-nav__mobile-contact-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default LandingNavigation