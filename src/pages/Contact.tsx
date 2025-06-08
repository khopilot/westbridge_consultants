import React, { useEffect } from 'react'
import ContactHero from '../components/page-sections/contact/ContactHero'
import ContactMethods from '../components/page-sections/contact/ContactMethods'
import ContactMain from '../components/page-sections/contact/ContactMain'
import ContactMap from '../components/page-sections/contact/ContactMap'

const Contact: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <ContactHero />
      <ContactMethods />
      <ContactMain />
      <ContactMap />
    </div>
  )
}

export default Contact 