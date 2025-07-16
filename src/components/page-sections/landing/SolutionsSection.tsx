import React from 'react'
import './styles/SolutionsSection.css'

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_d9d800fe-9077-4ded-ab19-19c498b40e0f_0.png',
      title: 'Navigate',
      description: 'Every permit, every process, every gatekeeper'
    },
    {
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_51f32a45-bc82-4fd3-a57f-49a45165d9bf_3.png',
      title: 'Structure',
      description: 'International-grade legal protection'
    },
    {
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_8138b50b-eafd-4626-b3e7-bb37b53fd71b_0.png',
      title: 'Execute',
      description: 'On-ground team, bilingual, results-focused'
    }
  ]

  return (
    <section id="solutions" className="solutions-section">
      <div className="container">
        <h2 className="solutions-section__subtitle">Operate with Confidence in Cambodia's Complex Market</h2>
        <p className="solutions-section__intro">
          Tackling a complicated business environment isn't difficult when you have the right guide.
        </p>
        <p className="solutions-section__bold-statement">
          We've spent a decade mapping what works. Now we make it work for you.
        </p>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="solution-card-fixed"
              style={{ backgroundImage: `url(${solution.image})` }}
            >
              <div className="solution-card-overlay">
                <h3 className="solution-card__title">{solution.title}</h3>
                <p className="solution-card__description">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection