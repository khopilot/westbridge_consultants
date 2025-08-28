import React from 'react'
import { motion } from 'framer-motion'
import './styles/LandingHero.css'

const LandingHero: React.FC = () => {
  // Text animation variants for professional fade-in
  const textAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number]
      }
    })
  }

  return (
    <section id="hero" className="landing-hero-lawfirm">
      {/* Full-width background image */}
      <div className="hero-background-image">
        <img 
          src="/visual/u7965223339_Professional_business_illustration_tangled_rope_f_dd5a68d6-0e82-414b-98b8-2858d39a0e9e_0.png" 
          alt="Strategic Partnership" 
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content-wrapper">
          {/* Left-aligned content */}
          <motion.div className="hero-text-content">
            {/* Main Title */}
            <motion.h1 
              className="hero-main-title"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textAnimation}
            >
              CAMBODIA MADE SIMPLE
            </motion.h1>
            
            {/* Subheading */}
            <motion.h2
              className="hero-subheading"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textAnimation}
            >
              <span className="text-huge">Cambodia rewards bold investors</span>, but only those who master its rules. <span className="text-huge">We</span> shorten the learning curve, <span className="text-huge">cut the risk, and get things moving</span> fast.
            </motion.h2>
            
            {/* Supporting Text */}
            <motion.p 
              className="hero-supporting-text"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={textAnimation}
            >
              <span className="text-huge">We have spent years</span> in Cambodia <span className="text-huge">learning the system</span>. With us, you <span className="text-huge">start</span> on day one <span className="text-huge">with that knowledge</span> in your pocket.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default LandingHero