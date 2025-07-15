import React, { useState } from 'react'
import './styles/SolutionsSection.css'

const SolutionsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
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
    },
    {
      image: '/visual/u7965223339_Minimal_business_illustration_exact_colors_051e2e_5739ee9c-fe68-4dc9-929e-2d83799a8049_1.png',
      title: 'Protect',
      description: 'Your capital, your timeline, your reputation'
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % solutions.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + solutions.length) % solutions.length)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section id="solutions" className="solutions-section">
      <div className="container">
        <div className="solutions-section__header text-center">
          <h2>OUR SOLUTIONS</h2>
          <h3>Operate with Confidence in Cambodia's Complex Market</h3>
          <p className="solutions-section__intro">
            Tackling a complicated business environment isn't difficult when you have the right guide.
          </p>
        </div>

        <div className="solutions-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="carousel-slide"
                >
                  <div 
                    className="solution-card-large"
                    style={{ backgroundImage: `url(${solution.image})` }}
                  >
                    <div className="solution-card-content">
                      <h3 className="solution-card__title">{solution.title}</h3>
                      <p className="solution-card__description">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="carousel-nav carousel-nav--prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="carousel-nav carousel-nav--next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {solutions.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="solutions-section__bold-statement">
          We've spent a decade mapping what works. Now we make it work for you.
        </p>
      </div>
    </section>
  )
}

export default SolutionsSection