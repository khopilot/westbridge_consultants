import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './styles/CaseStudiesSection.css'

interface CaseStudy {
  title: string
  subtitle: string
  mainTitle: string
  description: string
  image: string
  challenge: string
  solution: string
  outcome: string
}

const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  
  const successStories: CaseStudy[] = [
    {
      title: 'Infrastructure',
      subtitle: '$500M Project Saved',
      mainTitle: 'Stakeholder Crisis\nResolution',
      description: 'Transformed opposition into partnership. Major infrastructure project rescued through strategic stakeholder integration.',
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2010_06_10%20AM.png',
      challenge: 'We consulted on a major infrastructure project located in a particularly sensitive zone with many uncoordinated stakeholders who threatened to block the project as they saw it as a threat to their livelihood.',
      solution: 'We integrated the stakeholders into the infrastructure project and offered financial help and a value proposition (i.e. a former informer vendor gets a stall)',
      outcome: 'The project was able to continue.'
    },
    {
      title: 'Market Entry',
      subtitle: 'Zero to Operational',
      mainTitle: '90-Day\nLaunch Success',
      description: 'European enterprise entered Cambodia seamlessly. From first contact to full operations in three months.',
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2010_07_36%20AM.png',
      challenge: 'A European medium enterprise wanted to explore the Cambodian market but had no idea how to start. They contacted us expressing interest, but apprehension.',
      solution: 'We facilitated a local trip and contacts at the ministerial level and in the industry.',
      outcome: 'Client established a Cambodian branch of his business months later.'
    },
    {
      title: 'Restructuring',
      subtitle: 'Solvency Restored',
      mainTitle: '50% Cost\nReduction',
      description: 'Conglomerate saved from bankruptcy. Operational excellence achieved through rapid financial restructuring.',
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2010_09_09%20AM.png',
      challenge: 'A fast-growing local conglomerate was hit hard by the fall in real estate land-values. They asked us to restructure their assets and company to prevent bankruptcy and reestablish positive cash flow.',
      solution: 'A quick financial audit revealed very poor internal controls and runaway spending in many departments. OPEX was cut by 50% in less than one month.',
      outcome: 'Client was able to avoid bankruptcy and continue servicing the loans'
    }
  ]

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
    <section id="success-stories" className="case-studies-section">
      {/* Section Header */}
      <motion.div 
        className="case-studies-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textAnimation}
      >
        <h2 className="case-studies-title">Success Stories</h2>
        <p className="case-studies-subtitle">
          Real results. Real impact. Real transformation.
        </p>
      </motion.div>

      {/* Success Story 1 - Infrastructure */}
      <div className="case-study-fullwidth infrastructure-section">
        <div className="case-study-static-wrapper">
          <img 
            src={successStories[0].image}
            alt={successStories[0].title}
            className="case-study-fullwidth-img"
          />
        </div>
        
        <div className="case-study-content-wrapper top-left">
          <motion.div 
            className="case-study-content-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textAnimation}
            onClick={() => setSelectedCase(successStories[0])}
          >
            <span className="case-study-number-accent">01</span>
            <h3 className="case-study-category">{successStories[0].title}</h3>
            <h2 className="case-study-main-title">{successStories[0].mainTitle}</h2>
            <div className="case-study-separator"></div>
            <p className="case-study-description">{successStories[0].description}</p>
            <div className="case-study-cta">
              <span>View Details</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="corner-accent-bottom"></div>
          </motion.div>
        </div>
      </div>

      {/* Success Story 2 - Market Entry */}
      <div className="case-study-fullwidth market-section">
        <div className="case-study-static-wrapper">
          <img 
            src={successStories[1].image}
            alt={successStories[1].title}
            className="case-study-fullwidth-img"
          />
        </div>
        
        <div className="case-study-content-wrapper top-right">
          <motion.div 
            className="case-study-content-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textAnimation}
            onClick={() => setSelectedCase(successStories[1])}
          >
            <span className="case-study-number-accent">02</span>
            <h3 className="case-study-category">{successStories[1].title}</h3>
            <h2 className="case-study-main-title">{successStories[1].mainTitle}</h2>
            <div className="case-study-separator"></div>
            <p className="case-study-description">{successStories[1].description}</p>
            <div className="case-study-cta">
              <span>View Details</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="corner-accent-bottom"></div>
          </motion.div>
        </div>
      </div>

      {/* Success Story 3 - Restructuring */}
      <div className="case-study-fullwidth restructuring-section">
        <div className="case-study-static-wrapper">
          <img 
            src={successStories[2].image}
            alt={successStories[2].title}
            className="case-study-fullwidth-img"
          />
        </div>
        
        <div className="case-study-content-wrapper top-left">
          <motion.div 
            className="case-study-content-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textAnimation}
            onClick={() => setSelectedCase(successStories[2])}
          >
            <span className="case-study-number-accent">03</span>
            <h3 className="case-study-category">{successStories[2].title}</h3>
            <h2 className="case-study-main-title">{successStories[2].mainTitle}</h2>
            <div className="case-study-separator"></div>
            <p className="case-study-description">{successStories[2].description}</p>
            <div className="case-study-cta">
              <span>View Details</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="corner-accent-bottom"></div>
          </motion.div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="case-study-modal" onClick={() => setSelectedCase(null)}>
          <div className="case-study-modal__content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="case-study-modal__close"
              onClick={() => setSelectedCase(null)}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="case-study-modal__header">
              <div className="case-study-modal__image">
                <img src={selectedCase.image} alt={selectedCase.title} />
              </div>
              <h2>{selectedCase.mainTitle.replace('\n', ' ')}</h2>
              <p className="case-study-modal__subtitle">{selectedCase.subtitle}</p>
            </div>
            
            <div className="case-study-modal__body">
              <div className="case-study-modal__section">
                <h3>Challenge</h3>
                <p>{selectedCase.challenge}</p>
              </div>
              
              <div className="case-study-modal__section">
                <h3>Solution</h3>
                <p>{selectedCase.solution}</p>
              </div>
              
              <div className="case-study-modal__section">
                <h3>Outcome</h3>
                <p>{selectedCase.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CaseStudiesSection