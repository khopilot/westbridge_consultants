import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import './styles/CaseStudiesSection.css'

interface CaseStudy {
  title: string
  subtitle: string
  image: string
  challenge: string
  solution: string
  outcome: string
}

const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  
  const successStories: CaseStudy[] = [
    {
      title: '$500M Infrastructure Project',
      subtitle: 'Saved from stakeholder crisis',
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2010_06_10%20AM.png',
      challenge: 'We consulted on a major infrastructure project located in a particularly sensitive zone with many uncoordinated stakeholders who threatened to block the project as they saw it as a threat to their livelihood.',
      solution: 'We integrated the stakeholders into the infrastructure project and offered financial help and a value proposition (i.e. a former informer vendor gets a stall)',
      outcome: 'The project was able to continue.'
    },
    {
      title: 'Market Entry Strategy',
      subtitle: 'From zero to operational in 90 days',
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2010_07_36%20AM.png',
      challenge: 'A European medium enterprise wanted to explore the Cambodian market but had no idea how to start. They contacted us expressing interest, but apprehension.',
      solution: 'We facilitated a local trip and contacts at the ministerial level and in the industry.',
      outcome: 'Client established a Cambodian branch of his business months later.'
    },
    {
      title: 'Financial Restructuring',
      subtitle: '50% cost reduction, solvency restored',
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2010_09_09%20AM.png',
      challenge: 'A fast-growing local conglomerate was hit hard by the fall in real estate land-values. They asked us to restructure their assets and company to prevent bankruptcy and reestablish positive cash flow.',
      solution: 'A quick financial audit revealed very poor internal controls and runaway spending in many departments. OPEX was cut by 50% in less than one month.',
      outcome: 'Client was able to avoid bankruptcy and continue servicing the loans'
    }
  ]
  return (
    <section id="success-stories" className="case-studies-section">
      <div className="container">
        <div className="case-studies-section__header text-center" data-aos="fade-up">
        </div>

        <div className="success-stories-grid">
          {successStories.map((story, index) => (
            <Tilt
              key={index}
              className="tilt-wrapper"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareBorderRadius="16px"
              scale={1.02}
            >
              <div 
                className="success-story-card" 
                data-aos="fade-up" 
                data-aos-delay={200 + index * 100}
                onClick={() => setSelectedCase(story)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedCase(story)
                  }
                }}
              >
                <div className="success-story-card__image">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="success-story-card__content">
                  <h3 className="success-story-card__title">{story.title}</h3>
                  <p className="success-story-card__subtitle">"{story.subtitle}"</p>
                  <div className="success-story-card__arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
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
              <h2>{selectedCase.title}</h2>
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