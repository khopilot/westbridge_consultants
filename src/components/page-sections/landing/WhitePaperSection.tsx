import React from 'react'
import './styles/WhitePaperSection.css'

const WhitePaperSection: React.FC = () => {
  return (
    <section id="whitepaper" className="whitepaper-section py-3">
      <div className="container">
        <div className="whitepaper-content">
          <div className="whitepaper-preview">
            <div className="whitepaper-preview__cover">
              <div className="whitepaper-preview__icon">📊</div>
              <div className="whitepaper-preview__title">Cambodia Business Guide 2024</div>
              <div className="whitepaper-preview__subtitle">Complete Market Entry Strategy</div>
            </div>
          </div>
          
          <div className="whitepaper-info">
            <div className="whitepaper-info__header">
              <div className="whitepaper-info__badge">
                📄 Free Download
              </div>
              <h2>The Complete Guide to Doing Business in Cambodia</h2>
              <p className="whitepaper-info__description">
                Download our comprehensive 45-page guide covering everything you need to know about 
                establishing and growing your business in Cambodia. Backed by 8 years of local experience 
                and featuring real case studies from successful implementations.
              </p>
            </div>

            <div className="whitepaper-highlights">
              <h3>What's Inside:</h3>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <div className="highlight-item__icon">🏛️</div>
                  <div className="highlight-item__content">
                    <h4>Regulatory Framework</h4>
                    <p>Complete overview of business registration, licensing, and compliance requirements</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item__icon">📈</div>
                  <div className="highlight-item__content">
                    <h4>Market Analysis</h4>
                    <p>Detailed sector analysis with growth opportunities and competitive landscape</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item__icon">💰</div>
                  <div className="highlight-item__content">
                    <h4>Financial Considerations</h4>
                    <p>Banking, taxation, investment incentives, and financial planning strategies</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item__icon">🤝</div>
                  <div className="highlight-item__content">
                    <h4>Cultural Insights</h4>
                    <p>Essential business culture, relationship building, and negotiation practices</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item__icon">📋</div>
                  <div className="highlight-item__content">
                    <h4>Implementation Roadmap</h4>
                    <p>Step-by-step checklist and timeline for successful market entry</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item__icon">📊</div>
                  <div className="highlight-item__content">
                    <h4>Case Studies</h4>
                    <p>Real examples from our successful client implementations across industries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="whitepaper-stats">
              <div className="whitepaper-stats__content">
                <h3>Proven Insights</h3>
                <div className="stats-grid">
                  <div className="whitepaper-stat">
                    <span className="whitepaper-stat__number shiny-metric">8</span>
                    <span className="whitepaper-stat__label">Years Research</span>
                  </div>
                  <div className="whitepaper-stat">
                    <span className="whitepaper-stat__number shiny-metric">50+</span>
                    <span className="whitepaper-stat__label">Client Cases</span>
                  </div>
                  <div className="whitepaper-stat">
                    <span className="whitepaper-stat__number shiny-metric">15</span>
                    <span className="whitepaper-stat__label">Industry Sectors</span>
                  </div>
                  <div className="whitepaper-stat">
                    <span className="whitepaper-stat__number shiny-metric">45</span>
                    <span className="whitepaper-stat__label">Pages Content</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="whitepaper-download">
              <div className="download-form">
                <h3>Download Your Free Copy</h3>
                <p>Get instant access to Cambodia's most comprehensive business guide</p>
                <div className="download-options">
                  <button className="download-btn download-btn--primary">
                    📄 Download PDF (2.5MB)
                  </button>
                  <button className="download-btn download-btn--secondary">
                    📧 Email Me the Guide
                  </button>
                </div>
                <div className="download-note">
                  <p>No signup required • Instant download • Updated quarterly</p>
                </div>
              </div>
            </div>

            <div className="whitepaper-bonus">
              <div className="bonus-content">
                <h4>Bonus Materials Included:</h4>
                <div className="bonus-items">
                  <div className="bonus-item">
                    <span className="bonus-item__icon">📋</span>
                    <span className="bonus-item__text">Business Registration Checklist</span>
                  </div>
                  <div className="bonus-item">
                    <span className="bonus-item__icon">💰</span>
                    <span className="bonus-item__text">Cost Calculator Spreadsheet</span>
                  </div>
                  <div className="bonus-item">
                    <span className="bonus-item__icon">📞</span>
                    <span className="bonus-item__text">Government Contacts Directory</span>
                  </div>
                  <div className="bonus-item">
                    <span className="bonus-item__icon">🗺️</span>
                    <span className="bonus-item__text">Market Entry Timeline Template</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhitePaperSection