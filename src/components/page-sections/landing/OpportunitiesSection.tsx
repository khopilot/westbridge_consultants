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
            src="/360_F_344861474_80Hul52ydDYeg4SlGBNFdrNAsqoIy84w.jpg"
            alt="Transition"
            className="transition-image-content"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default OpportunitiesSection