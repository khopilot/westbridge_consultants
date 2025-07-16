import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './styles/LandingHero.css'

const LandingHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Floating animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  // Text animation variants
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number]
      }
    })
  }

  return (
    <section id="hero" className="landing-hero" ref={heroRef} style={{ position: 'relative' }}>
      {/* Animated Background with Parallax */}
      <motion.div 
        className="landing-hero__bg-pattern"
        style={{ opacity }}
      >
        {/* Cambodia SVG Background */}
        <motion.div 
          className="cambodia-bg"
          style={{ y: y2 }}
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <img 
            src="/cambodia.svg" 
            alt="Cambodia Map Background" 
            className="cambodia-svg"
          />
        </motion.div>
        
        <motion.div 
          className="bg-shape bg-shape--1"
          style={{ x: mousePosition.x, y: mousePosition.y }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-shape bg-shape--2"
          style={{ x: -mousePosition.x, y: -mousePosition.y }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" as const }}
        />
        <motion.div 
          className="bg-shape bg-shape--3"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        />
      </motion.div>
      
      <div className="container">
        <motion.div 
          className="landing-hero__content"
          style={{ y: y1 }}
        >

          
          <div className="hero-content-center">
            {/* Main Title - Large, prominent text */}
            <motion.h1 
              className="hero-title"
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
              Cambodia rewards <span className="text-huge">bold</span> <span className="text-huge">investors</span>, but only if you master its rules. We shorten the learning curve, <span className="text-huge">cut the risk</span>, <span className="text-huge">and get you moving</span> fast.
            </motion.h2>
            
            {/* Supporting Text */}
            <motion.p 
              className="hero-supporting-text"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={textAnimation}
            >
              <span className="text-huge">We have spent</span> ten <span className="text-huge">years</span> in Cambodia <span className="text-huge">learning the hard way</span>. With us, you <span className="text-huge">start</span> on day one <span className="text-huge">with</span> that <span className="text-huge">decade of knowledge</span> in your pocket.
            </motion.p>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="landing-hero__scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LandingHero