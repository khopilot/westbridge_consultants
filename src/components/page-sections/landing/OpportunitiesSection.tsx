import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import './styles/OpportunitiesSection.css'

const OpportunitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const waveTransform = useTransform(scrollYProgress, [0, 1], [0, 100])
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const slides = [
    {
      id: 0,
      title: 'Regulatory Maze',
      description: 'Permits that seem simple aren\'t. Sub-decrees that have never been issued. Middle-bureaucrats.',
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_d25a0fb6-9421-4dd5-b22b-a2f4cf092dc8_2.png',
      color: 'rgba(204, 85, 0, 0.9)' // Terracotta
    },
    {
      id: 1,
      title: 'Hidden Networks',
      description: 'The real decision-makers stay invisible',
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_195d9c8e-7b48-42fe-8f22-3df9810f3a25_3.png',
      color: 'rgba(164, 120, 100, 0.9)' // Mocha Mousse
    },
    {
      id: 2,
      title: 'Legal Gaps',
      description: 'International protection requires local expertise',
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_n_2a906879-821b-43fa-8caa-44a15544c9d8.png',
      color: 'rgba(17, 45, 78, 0.9)' // Navy
    }
  ]

  return (
    <section ref={sectionRef} id="opportunities" className="opportunities-section">
      {/* Background Effects */}
      <div className="opportunities-bg-effects">
        <motion.div 
          className="wave wave-1"
          style={{ x: waveTransform }}
        />
        <motion.div 
          className="wave wave-2"
          style={{ x: useTransform(waveTransform, x => x * -0.8) }}
        />
      </div>

      {/* Header Section */}
      <div className="opportunities-header">
        <motion.div 
          className="opportunities-main-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="opportunities-content-wrapper">
            <div className="opportunities-text-content">
              <div className="opportunities-highlight">
                <div className="cambodia-line">
                  <img 
                    src="/157f5e02-2c3f-4d42-8f11-a7a9a2aabda1.png" 
                    alt="Cambodia Map" 
                    className="cambodia-map-inline"
                  />
                  <span className="text-huge">CAMBODIA</span>
                </div>
                <span className="equals-sign">=</span>
                <span className="text-huge">MASSIVE POTENTIAL</span>
              </div>
              <p className="opportunities-subtext">
                but hidden rules, slow permits, failed deals are often creating <span className="text-emphasis">massive entry barriers</span> for outsiders. Cambodia rewards bold investors who understand unwritten rules.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Transition Image */}
        <motion.div 
          className="transition-image"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <img 
            src="/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_0edfd203-0b26-4e43-bec4-9948aa3be606_1.png"
            alt="Transition"
            className="transition-image-content"
          />
        </motion.div>

      </div>

      {/* Struggles Cards Grid */}
      <div className="struggles-grid-container">
        {/* "We Understand the Struggles!" */}
        <motion.h3 
          className="struggles-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
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
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
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

export default OpportunitiesSection