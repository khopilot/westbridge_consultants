import React from 'react'
import './styles/SolutionsSection.css'

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2009_21_35%20AM.png',
      title: 'Navigate',
      description: 'Every permit, every process, every gatekeeper'
    },
    {
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2009_39_03%20AM.png',
      title: 'Structure',
      description: 'International-grade legal protection'
    },
    {
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2009_59_48%20AM.png',
      title: 'Execute',
      description: 'On-ground team, bilingual, results-focused'
    },
    {
      image: '/visual/ChatGPT%20Image%20Jul%2019,%202025,%2010_02_10%20AM.png',
      title: 'Protect',
      description: 'Your capital, your timeline, your reputation'
    }
  ]

  return (
    <section id="solutions" className="solutions-section">
      <div className="container">
        <h2 className="solutions-section__subtitle">Operate with Confidence in Cambodia</h2>
        <p className="solutions-section__intro">
          Tackling Cambodia isn't difficult when you have the right help.
        </p>
        <p className="solutions-section__bold-statement">
          We've done the hard yard . Now we make it work for you.
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