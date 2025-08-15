import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './styles/StrugglesSection.css'

const StrugglesSection: React.FC = () => {
  const { scrollYProgress } = useScroll()
  
  // Parallax transforms for each section
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -75])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])
  
  // Text animation variants
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

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number]
      }
    }
  }

  const riskItems = [
    {
      title: 'Regulatory Maze',
      description: 'Permits that seem simple aren\'t. Sub-decrees that have never been issued. Middle-bureaucrats.',
      image: '/visual/u7965223339_Professional_business_illustration_tangled_rope_f_dd5a68d6-0e82-414b-98b8-2858d39a0e9e_3.png',
      parallaxY: y1
    },
    {
      title: 'Hidden Networks',
      description: 'The real decision-makers stay invisible',
      image: '/visual/u7965223339_Business_illustration_iceberg_showing_visible_and_ab08b6b4-b30c-4007-b514-a6d88dd263bc_2.png',
      parallaxY: y2
    },
    {
      title: 'Legal Gaps',
      description: 'International protection requires local expertise',
      image: '/visual/u7965223339_Professional_illustration_stylized_compass_with_d_b264353c-033e-4f71-b5a4-45e0a630bee1_1.png',
      parallaxY: y3
    }
  ]

  return (
    <section className="risk-section">
      {/* Hero Section with Square Image */}
      <div className="risk-hero-section">
        <motion.div 
          className="risk-hero-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textAnimation}
        >
          <h2 className="risk-section-title">We Understand the Risk</h2>
          <p className="risk-section-subtitle">
            Cambodia's business landscape is complex. We navigate the challenges so you don't have to.
          </p>
        </motion.div>
        
        <motion.div 
          className="risk-hero-image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img 
            src="/visual/u7965223339_Business_illustration_broken_piggy_bank_reassembl_913d0328-9266-4925-b4dc-2225abda9862_3.png"
            alt="Risk Management"
            className="risk-hero-img"
          />
        </motion.div>
      </div>

      {/* Risk Items with Side Images */}
      {riskItems.map((item, index) => (
        <div key={index} className="risk-item-container">
          <div className={`risk-item-grid ${index % 2 === 0 ? 'grid-normal' : 'grid-reverse'}`}>
            {/* Text Content */}
            <motion.div 
              className="risk-item-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textAnimation}
            >
              <div className="risk-item-accent-line"></div>
              <h3 className="risk-item-title">{item.title}</h3>
              <p className="risk-item-description">{item.description}</p>
            </motion.div>
            
            {/* Image */}
            <motion.div 
              className="risk-item-image-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageAnimation}
              style={{ y: item.parallaxY }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="risk-item-image"
              />
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default StrugglesSection