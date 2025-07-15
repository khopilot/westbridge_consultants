import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import './styles/OpportunitiesSection.css'

const OpportunitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const waveTransform = useTransform(scrollYProgress, [0, 1], [0, 100])
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!isInView) return
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(timer)
  }, [isInView])

  const slides = [
    {
      id: 0,
      title: 'Regulatory Maze',
      description: 'Permits that seem simple aren\'t. Sub-decrees that have never been issued. Middle-bureaucrats.',
      icon: '🏛️',
      image: '/regulatory-maze.jpg',
      color: 'rgba(204, 85, 0, 0.9)' // Terracotta
    },
    {
      id: 1,
      title: 'Hidden Networks',
      description: 'The real decision-makers stay invisible',
      icon: '🔗',
      image: '/hidden-networks.jpg',
      color: 'rgba(164, 120, 100, 0.9)' // Mocha Mousse
    },
    {
      id: 2,
      title: 'Legal Gaps',
      description: 'International protection requires local expertise',
      icon: '⚖️',
      image: '/legal-gaps.jpg',
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
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          THE OPPORTUNITIES
        </motion.h2>
        
        <motion.div 
          className="opportunities-main-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <p className="opportunities-highlight">
            Cambodia = <span className="text-huge">massive potential</span>
          </p>
          <p className="opportunities-subtext">
            but hidden rules, slow permits, failed deals are often creating <span className="text-emphasis">massive entry barriers</span> for outsiders. Cambodia rewards bold investors who understand unwritten rules.
          </p>
        </motion.div>

        {/* Transition Image */}
        <motion.div 
          className="transition-image"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="transition-gradient"></div>
        </motion.div>

        {/* "We Understand the Struggles!" */}
        <motion.h3 
          className="struggles-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          We Understand the Struggles!
        </motion.h3>
      </div>

      {/* Full-Screen Slideshow */}
      <div className="slideshow-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="slide-active"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="slide-main-card">
              <div className="slide-image-container">
                <div 
                  className="slide-image"
                  style={{ background: slides[activeSlide].color }}
                >
                  <div className="slide-icon">{slides[activeSlide].icon}</div>
                </div>
              </div>
              <div className="slide-content">
                <h3 className="slide-title">{slides[activeSlide].title}</h3>
                <p className="slide-description">{slides[activeSlide].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Navigation Thumbnails */}
        <div className="slide-thumbnails">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              className={`slide-thumb ${activeSlide === index ? 'slide-thumb--active' : ''}`}
              onClick={() => setActiveSlide(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="thumb-image"
                style={{ background: slide.color }}
              >
                <span className="thumb-icon">{slide.icon}</span>
              </div>
              <div className="thumb-content">
                <h4 className="thumb-title">{slide.title}</h4>
                <p className="thumb-description">{slide.description}</p>
              </div>
              <motion.div 
                className="thumb-progress"
                initial={{ width: 0 }}
                animate={{ width: activeSlide === index ? "100%" : "0%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpportunitiesSection