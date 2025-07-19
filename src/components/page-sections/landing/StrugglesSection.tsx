import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './styles/StrugglesSection.css'

const StrugglesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const slides = [
    {
      id: 0,
      title: 'Regulatory Maze',
      description: 'Permits that seem simple aren\'t. Sub-decrees that have never been issued. Middle-bureaucrats.',
      image: '/visual/c43c10f6-1b3a-402a-9244-e5f7a234bcbe.png',
      color: 'rgba(204, 85, 0, 0.9)' // Terracotta
    },
    {
      id: 1,
      title: 'Hidden Networks',
      description: 'The real decision-makers stay invisible',
      image: '/visual/ChatGPT Image Jul 19, 2025, 09_21_26 AM.png',
      color: 'rgba(164, 120, 100, 0.9)' // Mocha Mousse
    },
    {
      id: 2,
      title: 'Legal Gaps',
      description: 'International protection requires local expertise',
      image: '/visual/ChatGPT Image Jul 19, 2025, 09_21_30 AM.png',
      color: 'rgba(17, 45, 78, 0.9)' // Navy
    }
  ]

  return (
    <section ref={sectionRef} className="struggles-section">
      <div className="struggles-grid-container">
        <motion.h3 
          className="struggles-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          We Understand the Struggles!
        </motion.h3>
        <div className="struggles-cards-grid">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={`struggle-card ${index === 2 ? 'struggle-card--light-overlay' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
              whileHover={{ y: -8 }}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="struggle-card__overlay" />
              <div className="struggle-card__content">
                <h3 className="struggle-card__title">{slide.title}</h3>
                <p className="struggle-card__description">{slide.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrugglesSection