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

  const phases = [
    {
      id: 0,
      title: 'Initial Consultation',
      icon: '🤝',
      number: 'Step 01',
      subtitle: '60-minute session (in-person or virtual) to clarify goals, budget & timelines.',
      features: [
        {
          title: 'Goal, Budget & Timeline Alignment',
          description: 'Crystal-clear understanding of your objectives in 60 minutes.'
        },
        {
          title: 'Flexible Format',
          description: 'Meet in-person in Phnom Penh or via secure video conference.'
        },
        {
          title: 'Operational Footprint Decision',
          description: 'Determine if you will run operations locally or remotely.'
        }
      ]
    },
    {
      id: 1,
      title: 'Stakeholder & Obstacle Mapping',
      icon: '🗺️',
      number: 'Step 02',
      subtitle: 'We flag regulatory hurdles, landlords and which ministry signs off — complete stakeholder map.',
      features: [
        {
          title: 'Regulatory Radar',
          description: 'Full permitting and compliance checklist tailored to your industry.'
        },
        {
          title: 'Stakeholder Matrix',
          description: 'Identify key decision-makers, influencers and potential allies.'
        },
        {
          title: 'Risk Snapshot',
          description: 'Immediate visibility on hurdles that could delay your launch.'
        }
      ]
    },
    {
      id: 2,
      title: 'Solution Roadmap',
      icon: '📑',
      number: 'Step 03',
      subtitle: 'Clear strategy highlighting everything you need, who is responsible and practical timelines.',
      features: [
        {
          title: 'Step-by-Step Plan',
          description: 'From permits to partnerships, each action is timestamped.'
        },
        {
          title: 'Ownership Grid',
          description: 'Everyone knows exactly who does what and when.'
        },
        {
          title: 'Success Definition',
          description: 'Shared KPIs so you know precisely what success looks like.'
        }
      ]
    },
    {
      id: 3,
      title: 'On-Site Execution',
      icon: '🚀',
      number: 'Step 04',
      subtitle: 'Implementation happens swiftly under our watch; we track progress weekly.',
      features: [
        {
          title: 'Local Presence',
          description: 'Our bilingual team executes directly on-site in Cambodia.'
        },
        {
          title: 'Weekly Progress Reviews',
          description: 'Dashboard updates keep you informed in real-time.'
        },
        {
          title: 'Speed & Precision',
          description: 'Swift execution without compromising on quality.'
        }
      ]
    },
    {
      id: 4,
      title: 'Rapid Course Corrections',
      icon: '🔄',
      number: 'Step 05',
      subtitle: 'Immediate corrections if outcomes slip — priority is to keep your goals on track.',
      features: [
        {
          title: 'Live KPI Monitoring',
          description: 'Detect deviations before they become problems.'
        },
        {
          title: 'Contingency Protocols',
          description: 'Pre-approved corrective actions for zero downtime.'
        },
        {
          title: 'Outcome Guardianship',
          description: 'Your objectives remain our north-star throughout the engagement.'
        }
      ]
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
          <motion.div 
            className="methodology-badge"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Our Proven Methodology
          </motion.div>

          <motion.div 
            className="header-accent"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
          <h2 className="confidence-title">
            Operate with Confidence
            <span className="title-subtitle">in Cambodia's Complex Market</span>
          </h2>
          <p className="confidence-intro">
            Tackling a complicated business environment isn't difficult when you have the right guide. 
            Our 5-step framework turns complexity into certainty — fast.
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
                x: activeStep === index ? 0 : 50,
                display: activeStep === index ? 'block' : 'none'
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
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