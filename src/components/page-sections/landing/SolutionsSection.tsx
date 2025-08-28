import React from 'react'
import { motion } from 'framer-motion'
import './styles/SolutionsSection.css'

const SolutionsSection: React.FC = () => {
  // Animation variants
  const textAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number]
      }
    }
  }

  return (
    <section id="solutions" className="solutions-section">
      {/* Section Header */}
      <motion.div 
        className="solutions-section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textAnimation}
      >
        <h2 className="solutions-section-title">Operate with Confidence in Cambodia</h2>
        <p className="solutions-section-statement">
          We've done the hard yards. Now we make it work for you.
        </p>
      </motion.div>

      {/* Navigate - Full Width */}
      <div className="solution-item-fullwidth navigate-section">
        <div className="solution-static-wrapper">
          <img 
            src="/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_ec27e7ca-aaed-4bc9-b112-747267c67717_2.png" 
            alt="Navigate"
            className="solution-fullwidth-img"
          />
        </div>
        
        <div className="solution-content-wrapper bottom-left">
          <motion.div 
            className="solution-content-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textAnimation}
          >
            <span className="solution-number-accent">01</span>
            <h3 className="solution-title-dark">Navigate</h3>
            <h2 className="solution-main-title">Complete<br/>Market Entry</h2>
            <div className="solution-separator"></div>
            <p className="solution-description-dark">Every permit mastered. Every process streamlined. Every gatekeeper aligned. Your path to success cleared.</p>
            <div className="corner-accent-bottom"></div>
          </motion.div>
        </div>
        
        {/* Right Side Image Card */}
        <div className="solution-image-card-wrapper">
          <motion.div 
            className="solution-image-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <img 
              src="/visual/u7965223339_Corporate_illustration_key_unlocking_multiple_doo_e6e52c30-0a9a-4932-b0fc-2bc90cdbdcc3_1.png" 
              alt="Navigate Key"
              className="solution-card-image"
            />
          </motion.div>
        </div>
      </div>

      {/* Structure - Full Width */}
      <div className="solution-item-fullwidth structure-section">
        <div className="solution-static-wrapper">
          <img 
            src="/visual/image_16x9_right_harmonic.png" 
            alt="Structure"
            className="solution-fullwidth-img"
          />
        </div>
        
        <div className="solution-content-wrapper bottom-left">
          <motion.div 
            className="solution-content-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textAnimation}
          >
            <span className="solution-number-accent">02</span>
            <h3 className="solution-title-dark">Structure</h3>
            <h2 className="solution-main-title">Legal<br/>Excellence</h2>
            <div className="solution-separator"></div>
            <p className="solution-description-dark">Bulletproof contracts. Airtight agreements. Your interests secured by frameworks that transcend borders.</p>
            <div className="corner-accent-bottom"></div>
          </motion.div>
        </div>
      </div>

      {/* Execute - Full Width */}
      <div className="solution-item-fullwidth execute-section">
        <div className="solution-static-wrapper">
          <img 
            src="/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_a839a925-5bd0-45e6-bd86-52b9fa6aba30_1 (1).png" 
            alt="Execute"
            className="solution-fullwidth-img"
          />
        </div>
        
        <div className="solution-content-wrapper bottom-right">
          <motion.div 
            className="solution-content-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textAnimation}
          >
            <span className="solution-number-accent">03</span>
            <h3 className="solution-title-dark">Execute</h3>
            <h2 className="solution-main-title">Flawless<br/>Execution</h2>
            <div className="solution-separator"></div>
            <p className="solution-description-dark">Bilingual specialists. Local expertise. Western standards. We don't just advise—we deliver results.</p>
            <div className="corner-accent-bottom"></div>
          </motion.div>
        </div>
      </div>

      {/* Protect - Full Width */}
      <div className="solution-item-fullwidth protect-section">
        <div className="solution-static-wrapper">
          <img 
            src="/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_8c312f53-0225-412e-9fc2-f5c7ed76dd93_0.png" 
            alt="Protect"
            className="solution-fullwidth-img"
          />
        </div>
        
        <div className="solution-content-wrapper bottom-left">
          <motion.div 
            className="solution-content-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textAnimation}
          >
            <span className="solution-number-accent">04</span>
            <h3 className="solution-title-dark">Protect</h3>
            <h2 className="solution-main-title">Total<br/>Protection</h2>
            <div className="solution-separator"></div>
            <p className="solution-description-dark">Your capital safeguarded. Your timeline respected. Your reputation elevated. Total business protection.</p>
            <div className="corner-accent-bottom"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection