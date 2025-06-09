import React from 'react'
import './styles/WhyCambodiaSection.css'

const WhyCambodiaSection: React.FC = () => {
  return (
    <section id="why-cambodia" className="why-cambodia-section py-3">
      <div className="container">
        <div className="why-cambodia-section__header text-center mb-3">
          <div className="why-cambodia-section__badge">
            🇰🇭 Local Expertise
          </div>
          <h2>Why Cambodia? Why Now?</h2>
          <p className="why-cambodia-section__description">
            Cambodia represents one of Southeast Asia's most promising growth markets. Our deep local expertise 
            and execution track record position your business for success in this dynamic economy.
          </p>
        </div>

        <div className="why-cambodia__content">
          <div className="market-insights">
            <div className="market-insights__content">
              <h3>Market Opportunity</h3>
              <div className="insights-grid">
                <div className="insight-item">
                  <div className="insight-item__stat">7.1%</div>
                  <div className="insight-item__label">GDP Growth Rate</div>
                  <div className="insight-item__description">Among the fastest growing economies in Asia</div>
                </div>
                <div className="insight-item">
                  <div className="insight-item__stat">16M+</div>
                  <div className="insight-item__label">Population</div>
                  <div className="insight-item__description">Young, tech-savvy consumer base</div>
                </div>
                <div className="insight-item">
                  <div className="insight-item__stat">$28B</div>
                  <div className="insight-item__label">GDP Value</div>
                  <div className="insight-item__description">Rapidly expanding market size</div>
                </div>
                <div className="insight-item">
                  <div className="insight-item__stat">75%</div>
                  <div className="insight-item__label">Mobile Penetration</div>
                  <div className="insight-item__description">Digital transformation opportunity</div>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise-showcase">
            <div className="expertise-showcase__content">
              <div className="expertise-showcase__text">
                <h3>Our Cambodia Advantage</h3>
                <p>
                  Eight years of continuous presence in Cambodia has given us unparalleled insights into the market dynamics, 
                  regulatory landscape, and business culture that drive success in this emerging economy.
                </p>
                <div className="expertise-highlights">
                  <div className="expertise-highlight">
                    <div className="expertise-highlight__icon">🏢</div>
                    <div className="expertise-highlight__content">
                      <h4>Established Network</h4>
                      <p>Deep relationships with government officials, industry leaders, and key stakeholders across all major sectors.</p>
                    </div>
                  </div>
                  <div className="expertise-highlight">
                    <div className="expertise-highlight__icon">📋</div>
                    <div className="expertise-highlight__content">
                      <h4>Regulatory Mastery</h4>
                      <p>Complete understanding of Cambodia's evolving business regulations, licensing requirements, and compliance frameworks.</p>
                    </div>
                  </div>
                  <div className="expertise-highlight">
                    <div className="expertise-highlight__icon">🤝</div>
                    <div className="expertise-highlight__content">
                      <h4>Cultural Integration</h4>
                      <p>Expertise in navigating Khmer business culture, relationship building, and long-term partnership development.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="expertise-showcase__stats">
                <div className="stat-card">
                  <span className="stat-card__number">50+</span>
                  <span className="stat-card__label">Successful Projects</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__number">8</span>
                  <span className="stat-card__label">Years Local Experience</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__number">15+</span>
                  <span className="stat-card__label">Industry Sectors</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__number">100%</span>
                  <span className="stat-card__label">Client Retention Rate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="execution-track-record">
            <h3>Proven Execution Track Record</h3>
            <div className="track-record-grid">
              <div className="track-record-item">
                <div className="track-record-item__header">
                  <div className="track-record-item__icon">🏭</div>
                  <h4>Manufacturing & Export</h4>
                </div>
                <p>Helped establish 12+ manufacturing operations, navigating special economic zones and export regulations.</p>
                <div className="track-record-item__results">
                  <span>$50M+ in export value generated</span>
                </div>
              </div>
              <div className="track-record-item">
                <div className="track-record-item__header">
                  <div className="track-record-item__icon">🏪</div>
                  <h4>Retail & Consumer Goods</h4>
                </div>
                <p>Facilitated market entry for international brands, establishing distribution networks and retail partnerships.</p>
                <div className="track-record-item__results">
                  <span>25+ store locations opened</span>
                </div>
              </div>
              <div className="track-record-item">
                <div className="track-record-item__header">
                  <div className="track-record-item__icon">💻</div>
                  <h4>Technology & Fintech</h4>
                </div>
                <p>Guided tech startups through regulatory approvals and partnership development with local financial institutions.</p>
                <div className="track-record-item__results">
                  <span>8 fintech licenses obtained</span>
                </div>
              </div>
              <div className="track-record-item">
                <div className="track-record-item__header">
                  <div className="track-record-item__icon">🌾</div>
                  <h4>Agriculture & Food Processing</h4>
                </div>
                <p>Modernized agricultural operations and established food processing facilities meeting international standards.</p>
                <div className="track-record-item__results">
                  <span>300% productivity increase</span>
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