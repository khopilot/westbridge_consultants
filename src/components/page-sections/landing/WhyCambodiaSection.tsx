import React from 'react'
import './styles/WhyCambodiaSection.css'

const WhyCambodiaSection: React.FC = () => {
  return (
    <section id="why-cambodia" className="why-cambodia-section">
      <div className="container">
        <div className="why-cambodia-section__header text-center" data-aos="fade-up">
          <div className="why-cambodia-section__badge" data-aos="zoom-in" data-aos-delay="100">
            🇰🇭 Local Expertise
          </div>
          <h2 data-aos="fade-up" data-aos-delay="200">Why&nbsp;Cambodia</h2>
          <div className="why-cambodia-section__image-container" data-aos="zoom-in" data-aos-delay="250">
            <img 
              src="/cambodia-flag-map.png" 
              alt="Cambodia flag map" 
              className="why-cambodia-section__flag-map"
            />
          </div>
          <p className="why-cambodia-section__description" data-aos="fade-up" data-aos-delay="300">
            Cambodia is full of opportunities, but unlocking them requires knowledge that is not taught in universities. You need to understand who controls decisions locally and how the money flows. We spent years learning this by making mistakes, building contacts, and finding practical solutions. You get the results without the headaches.
          </p>
          <p className="why-cambodia-section__description" data-aos="fade-up" data-aos-delay="400">
            Cambodia is mostly rural. Its workforce is young. Operating costs are still low. The country has come a long way, but the transition is still ongoing and fuels growth. Indeed, Cambodia had the fastest-growing GDP in ASEAN over the past decade.
          </p>
        </div>

        <div className="why-cambodia__content">
          <div className="market-insights" data-aos="fade-right" data-aos-delay="500">
            <div className="market-insights__content">
              <h3>Market Opportunity</h3>
              <div className="insights-grid">
                <div className="insight-item" data-aos="zoom-in" data-aos-delay="600">
                  <div className="insight-item__stat">7.1%</div>
                  <div className="insight-item__label">GDP Growth Rate</div>
                  <div className="insight-item__description">Among the fastest growing economies in Asia</div>
                </div>
                <div className="insight-item" data-aos="zoom-in" data-aos-delay="700">
                  <div className="insight-item__stat">16M+</div>
                  <div className="insight-item__label">Population</div>
                  <div className="insight-item__description">Young, tech-savvy consumer base</div>
                </div>
                <div className="insight-item" data-aos="zoom-in" data-aos-delay="800">
                  <div className="insight-item__stat">$28B</div>
                  <div className="insight-item__label">GDP Value</div>
                  <div className="insight-item__description">Rapidly expanding market size</div>
                </div>
                <div className="insight-item" data-aos="zoom-in" data-aos-delay="900">
                  <div className="insight-item__stat">75%</div>
                  <div className="insight-item__label">Mobile Penetration</div>
                  <div className="insight-item__description">Digital transformation opportunity</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyCambodiaSection