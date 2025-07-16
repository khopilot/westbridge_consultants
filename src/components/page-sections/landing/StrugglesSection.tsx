import React from 'react'
import './styles/StrugglesSection.css'

const StrugglesSection: React.FC = () => {
  const struggles = [
    {
      title: 'Regulatory Maze',
      description: 'Permits that seem simple aren\'t. Sub-decrees that have never been issued. Middle-bureaucrats.',
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_0edfd203-0b26-4e43-bec4-9948aa3be606_1.png'
    },
    {
      title: 'Hidden Networks',
      description: 'The real decision-makers stay invisible',
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_8c312f53-0225-412e-9fc2-f5c7ed76dd93_3.png'
    },
    {
      title: 'Legal Gaps',
      description: 'International protection requires local expertise',
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_bdbbe087-9cc4-4f88-8e0e-f765b564c2c2_0.png'
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
              style={{ backgroundImage: `url(${struggle.image})` }}
            >
              <div className="struggle-card__content">
                <h3 className="struggle-card__title">{struggle.title}</h3>
                <p className="struggle-card__description">{struggle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrugglesSection