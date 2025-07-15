import React from 'react'
import './styles/SolutionsSection.css'

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: '🧭',
      title: 'Navigate',
      description: 'Every permit, every process, every gatekeeper'
    },
    {
      icon: '🏗️',
      title: 'Structure',
      description: 'International-grade legal protection'
    },
    {
      icon: '⚡',
      title: 'Execute',
      description: 'On-ground team, bilingual, results-focused'
    },
    {
      icon: '🛡️',
      title: 'Protect',
      description: 'Your capital, your timeline, your reputation'
    }
  ]

  return (
    <section id="solutions" className="solutions-section">
      <div className="container">
        <div className="solutions-section__header text-center" data-aos="fade-up">
          <h2 data-aos="fade-up" data-aos-delay="100">OUR SOLUTIONS</h2>
          <h3 data-aos="fade-up" data-aos-delay="200">Operate with Confidence in Cambodia's Complex Market</h3>
          <p className="solutions-section__intro" data-aos="fade-up" data-aos-delay="300">
            Tackling a complicated business environment isn't difficult when you have the right guide.
          </p>
          <p className="solutions-section__bold-statement" data-aos="fade-up" data-aos-delay="400">
            We've spent a decade mapping what works. Now we make it work for you.
          </p>
        </div>

        <div className="solutions-section__grid">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="solution-card" 
              data-aos="zoom-in" 
              data-aos-delay={500 + index * 100}
            >
              <div className="solution-card__icon">{solution.icon}</div>
              <h3 className="solution-card__title">{solution.title}</h3>
              <p className="solution-card__description">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection