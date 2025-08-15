import React, { useState, useEffect, useRef } from 'react'
import './LandingNavigation.css'

const LandingNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  
  const lastScrollY = useRef(0)
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  // Handle body overflow when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Handle scroll effects with optimized hide/show behavior
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const scrollDelta = currentScrollY - lastScrollY.current
          
          // Update scrolled state
          setIsScrolled(currentScrollY > 50)
          
          // Smart hide/show logic
          if (currentScrollY < 50) {
            // Always show at top
            setIsVisible(true)
          } else if (scrollDelta > 15 && currentScrollY > 150) {
            // Hide when scrolling down fast (increased threshold)
            setIsVisible(false)
          } else if (scrollDelta < -8) {
            // Show when scrolling up (increased threshold)
            setIsVisible(true)
          }
          
          // Clear existing timeout
          if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current)
          }
          
          // Show navbar after scrolling stops
          scrollTimeout.current = setTimeout(() => {
            setIsVisible(true)
          }, 300)
          
          lastScrollY.current = currentScrollY

          // Update active section
          const sections = ['hero', 'opportunities', 'solutions', 'team', 'contact']
          const viewportHeight = window.innerHeight
          const scrollCenter = currentScrollY + viewportHeight / 2
          
          for (const sectionId of sections) {
            const element = document.getElementById(sectionId)
            if (element) {
              const { offsetTop, offsetHeight } = element
              
              if (scrollCenter >= offsetTop && scrollCenter < offsetTop + offsetHeight) {
                setActiveSection(sectionId)
                break
              }
            }
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 70 // Height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight
      
      // Ensure navbar is visible when navigating
      setIsVisible(true)
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      
      // Update active section immediately
      setActiveSection(sectionId)
      
      // Add to history for better navigation
      if (history.pushState) {
        history.pushState(null, '', `#${sectionId}`)
      }
    }
    setIsMobileMenuOpen(false)
  }

  const navigationItems = {
    left: [
      { id: 'opportunities', label: 'Why Cambodia', icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )},
      { id: 'solutions', label: 'Our Solutions', icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )},
    ],
    right: [
      { id: 'team', label: 'Leadership', icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )},
      { id: 'contact', label: 'Contact', icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    ]
  }

  return (
    <nav className={`landing-nav ${isScrolled ? 'landing-nav--scrolled' : ''} ${!isVisible ? 'landing-nav--hidden' : ''}`}>
      <div className="container">
        <div className="landing-nav__container">
          {/* Left Navigation */}
          <ul className="landing-nav__menu landing-nav__menu--left">
            {navigationItems.left.map((item) => (
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

          {/* Center Logo - Clickable to scroll to top */}
          <div className="landing-nav__logo">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="landing-nav__logo-link"
              aria-label="Scroll to top"
            >
              <img 
                src="/Logo_gouldingandco_black.png" 
                alt="Goulding & Co" 
                className="landing-nav__logo-image"
              />
            </button>
          </div>

          {/* Right Navigation */}
          <div className="landing-nav__right-section">
            <ul className="landing-nav__menu landing-nav__menu--right">
              {navigationItems.right.map((item) => (
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
            <button onClick={() => { scrollToSection('hero'); setIsMobileMenuOpen(false); }}>
              <div className="landing-nav__mobile-logo-icon">
                <img 
                  src="/Logo_gouldingandco_black.png" 
                  alt="Goulding & Co Strategic Advisory"
                  style={{ 
                    width: '120px', 
                    height: 'auto',
                    filter: 'var(--logo-filter, none)'
                  }}
                />
              </div>
            </button>
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
            {[...navigationItems.left, ...navigationItems.right].map((item) => (
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