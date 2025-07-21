import React from 'react'
import './styles/OpportunitiesSection.css'

const OpportunitiesSection: React.FC = () => {
  return (
    <section id="opportunities" className="opportunities-section">
      <div className="opportunities-container">
        <div className="opportunities-content">
          <div className="opportunities-equation">
            <div className="equation-item">
              <img 
                src="/157f5e02-2c3f-4d42-8f11-a7a9a2aabda1.png" 
                alt="Cambodia Map" 
                className="cambodia-map"
              />
              <span className="equation-text">CAMBODIA</span>
            </div>
            <span className="equation-equals">=</span>
            <span className="equation-text">MASSIVE POTENTIAL</span>
          </div>
          
          <p className="opportunities-description">
            but hidden rules, slow permits, failed deals are often creating <span className="highlight">massive entry barriers</span> for outsiders. Cambodia rewards bold investors who understand unwritten rules.
          </p>
        </div>
        
        <div className="opportunities-image">
          <img 
            src="/360_F_344861474_80Hul52ydDYeg4SlGBNFdrNAsqoIy84w.jpg"
            alt="Cambodia Business Opportunities"
          />
        </div>
      </div>
    </section>
  )
}

export default OpportunitiesSection