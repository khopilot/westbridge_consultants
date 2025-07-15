import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import './styles/OperateWithConfidence.css'

const OperateWithConfidence: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const waveTransform = useTransform(scrollYProgress, [0, 1], [0, 100])
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Auto-advance steps
  useEffect(() => {
    if (!isInView) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 5000)
    return () => clearInterval(timer)
  }, [isInView])

  const solutions = [
    {
      id: 0,
      title: 'Navigate',
      icon: '🧭',
      description: 'Every permit, every process, every gatekeeper'
    },
    {
      id: 1,
      title: 'Structure',
      icon: '🏗️',
      description: 'International-grade legal protection'
    },
    {
      id: 2,
      title: 'Execute',
      icon: '⚡',
      description: 'On-ground team, bilingual, results-focused'
    },
    {
      id: 3,
      title: 'Protect',
      icon: '🛡️',
      description: 'Your capital, your timeline, your reputation'
    }
  ]

  return (
    <section ref={sectionRef} id="approach" className="operate-confidence" style={{ position: 'relative' }}>
      {/* Platinum wave backgrounds */}
      <div className="wave-container">
        <motion.div 
          className="wave wave-1"
          style={{ x: waveTransform }}
        />
        <motion.div 
          className="wave wave-2"
          style={{ x: useTransform(waveTransform, x => x * -0.8) }}
        />
        <motion.div 
          className="wave wave-3"
          style={{ x: useTransform(waveTransform, x => x * 0.6) }}
        />
        <motion.div 
          className="wave wave-4"
          style={{ x: useTransform(waveTransform, x => x * -0.4) }}
        />
      </div>

      {/* Shimmer overlay */}
      <div className="shimmer-overlay" />

      <div className="container">
        <motion.div 
          className="confidence-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >


          <h2 className="confidence-title">
            OUR SOLUTIONS
          </h2>
          <h3 className="confidence-subtitle">
            Operate with Confidence in Cambodia's Complex Market
          </h3>
          <p className="confidence-intro">
            Tackling a complicated business environment isn't difficult when you have the right guide.
            We've spent a decade mapping what works. Now we make it work for you.
          </p>
        </motion.div>

        {/* Steps Navigation */}
        <motion.div 
          className="steps-navigation"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {phases.map((phase, index) => (
            <motion.button
              key={phase.id}
              className={`step-nav-item ${activeStep === index ? 'step-nav-item--active' : ''}`}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="step-icon">{phase.icon}</span>
              <span className="step-title">{phase.title}</span>
              <motion.div 
                className="step-progress"
                initial={{ width: 0 }}
                animate={{ width: activeStep === index ? "100%" : "0%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Active Step Content */}
        <motion.div className="step-showcase">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`step-content ${activeStep === index ? 'step-content--active' : ''}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: activeStep === index ? 1 : 0,
                x: activeStep === index ? 0 : 30
              }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <div className="step-header">
                <div className="step-number-badge">{phase.number}</div>
                <h3 className="step-title-main">{phase.title}</h3>
                <p className="step-subtitle">{phase.subtitle}</p>
              </div>

              <div className="step-features">
                {phase.features.map((feature, fIndex) => (
                  <motion.div
                    key={feature.title}
                    className="feature-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * fIndex + 0.2 }}
                  >
                    <div className="feature-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Floating particles effect */}
      <div className="particles-container">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * 1200,
              y: 800,
              opacity: 0
            }}
            animate={{
              y: -100,
              opacity: [0, 0.8, 0],
              x: `+=${Math.random() * 200 - 100}`
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default OperateWithConfidence