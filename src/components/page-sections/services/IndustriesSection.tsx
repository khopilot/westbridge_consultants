import React, { useEffect } from 'react'
import './styles/IndustriesSection.css'

const IndustriesSection: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const industries = [
    {
      icon: '🏭',
      title: 'Manufacturing & Textiles',
      description: 'Cambodia\'s largest export sector, driving economic growth and employment.',
      expertise: ['Export compliance', 'Quality standards', 'Supply chain optimization', 'Labor relations'],
      clients: '15+ companies',
      highlight: 'Better Work Cambodia certified partners'
    },
    {
      icon: '🌾',
      title: 'Agriculture & Agribusiness',
      description: 'From rice exports to cashew processing, supporting Cambodia\'s agricultural backbone.',
      expertise: ['Value chain development', 'Export facilitation', 'Organic certification', 'Cooperative development'],
      clients: '12+ companies',
      highlight: 'Sustainably certified supply chains'
    },
    {
      icon: '🏛️',
      title: 'Tourism & Hospitality',
      description: 'Rebuilding Cambodia\'s tourism industry with sustainable and innovative approaches.',
      expertise: ['Sustainable tourism', 'Digital marketing', 'Service excellence', 'Community engagement'],
      clients: '8+ companies',
      highlight: 'Post-pandemic recovery specialists'
    },
    {
      icon: '💳',
      title: 'Financial Services',
      description: 'Supporting financial inclusion and digital payment solutions across Cambodia.',
      expertise: ['Regulatory compliance', 'Digital banking', 'Microfinance', 'Payment systems'],
      clients: '6+ companies',
      highlight: 'NBC licensed institutions'
    },
    {
      icon: '💻',
      title: 'Technology & Startups',
      description: 'Fostering Cambodia\'s growing tech ecosystem and digital innovation.',
      expertise: ['Business model validation', 'Investment readiness', 'Market expansion', 'Digital strategy'],
      clients: '10+ companies',
      highlight: 'Venture capital ready businesses'
    },
    {
      icon: '🏗️',
      title: 'Construction & Real Estate',
      description: 'Supporting Cambodia\'s rapid urbanization and infrastructure development.',
      expertise: ['Project management', 'Regulatory approval', 'Investment structuring', 'Sustainability'],
      clients: '7+ companies',
      highlight: 'Green building certified projects'
    }
  ]

  return (
    <section className="industries-section py-3">
      <div className="container">
        <div className="text-center mb-3 fade-up">
          <h2>Industries We Serve</h2>
          <p>Deep expertise across Cambodia's key economic sectors, driving growth and innovation</p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="industry-card__header">
                <div className="industry-card__icon">
                  {industry.icon}
                </div>
                <div className="industry-card__title-section">
                  <h3 className="industry-card__title">{industry.title}</h3>
                  <span className="industry-card__clients">{industry.clients}</span>
                </div>
              </div>
              
              <p className="industry-card__description">{industry.description}</p>
              
              <div className="industry-card__expertise">
                <h4>Our Expertise:</h4>
                <div className="expertise-tags">
                  {industry.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="expertise-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="industry-card__highlight">
                <span className="highlight-badge">✨ {industry.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Insights */}
        <div className="industry-insights fade-up" style={{ marginTop: '4rem' }}>
          <div className="industry-insights__content">
            <h3>🇰🇭 Cambodia's Economic Landscape</h3>
            <div className="insights-grid">
              <div className="insight-item">
                <div className="insight-item__stat">7.1%</div>
                <div className="insight-item__label">GDP Growth Rate (Pre-pandemic)</div>
                <div className="insight-item__description">
                  One of the fastest-growing economies in Southeast Asia
                </div>
              </div>
              
              <div className="insight-item">
                <div className="insight-item__stat">$7.8B</div>
                <div className="insight-item__label">Annual Textile Exports</div>
                <div className="insight-item__description">
                  Major supplier to global fashion brands
                </div>
              </div>
              
              <div className="insight-item">
                <div className="insight-item__stat">16M</div>
                <div className="insight-item__label">Population</div>
                <div className="insight-item__description">
                  Young, growing consumer market with rising incomes
                </div>
              </div>
              
              <div className="insight-item">
                <div className="insight-item__stat">650M</div>
                <div className="insight-item__label">ASEAN Market Access</div>
                <div className="insight-item__description">
                  Gateway to Southeast Asia's integrated economy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sector Focus */}
        <div className="sector-focus fade-up" style={{ marginTop: '3rem' }}>
          <div className="sector-focus__content">
            <h3>🎯 Specialized Sector Knowledge</h3>
            <p>
              Our team combines international business expertise with deep local knowledge 
              of Cambodia's regulatory environment, cultural nuances, and market dynamics. 
              We understand the unique challenges and opportunities within each sector.
            </p>
            <div className="sector-focus__features">
              <div className="focus-feature">
                <span className="focus-feature__icon">📊</span>
                <span className="focus-feature__text">Market Intelligence & Analysis</span>
              </div>
              <div className="focus-feature">
                <span className="focus-feature__icon">🤝</span>
                <span className="focus-feature__text">Government & Stakeholder Relations</span>
              </div>
              <div className="focus-feature">
                <span className="focus-feature__icon">⚖️</span>
                <span className="focus-feature__text">Regulatory Compliance & Risk Management</span>
              </div>
              <div className="focus-feature">
                <span className="focus-feature__icon">🌱</span>
                <span className="focus-feature__text">Sustainable Business Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection 