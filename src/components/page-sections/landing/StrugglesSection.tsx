import React from 'react'
import './styles/StrugglesSection.css'

const StrugglesSection: React.FC = () => {
  const struggles = [
    {
      icon: '🏛️',
      title: 'Regulatory Maze',
      description: 'Permits that seem simple aren\'t. Sub-decrees that have never been issued. Middle-bureaucrats.'
    },
    {
      icon: '🔗',
      title: 'Hidden Networks',
      description: 'The real decision-makers stay invisible'
    },
    {
      icon: '⚖️',
      title: 'Legal Gaps',
      description: 'International protection requires local expertise'
    }
  ]

  return (
    <section id="struggles" className="struggles-section">
      <div className="container">
        <div className="struggles-section__header text-center" data-aos="fade-up">
          <h2 data-aos="fade-up" data-aos-delay="100">We Understand the Struggles!</h2>
        </div>

        <div className="struggles-section__grid">
          {struggles.map((struggle, index) => (
            <div 
              key={index}
              className="struggle-card" 
              data-aos="fade-up" 
              data-aos-delay={200 + index * 100}
            >
              <div className="struggle-card__icon">{struggle.icon}</div>
              <h3 className="struggle-card__title">{struggle.title}</h3>
              <p className="struggle-card__description">{struggle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrugglesSection