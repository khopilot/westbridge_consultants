import React from 'react'
import './styles/WhitePaperSection.css'

const WhitePaperSection: React.FC = () => {
  return (
    <section id="whitepaper" className="whitepaper-section py-3">
      <div className="container">
        <div className="whitepaper-content">
          <div className="whitepaper-preview">
            <div className="whitepaper-preview__cover">
              <div className="whitepaper-preview__badge">Industry Report</div>
              <div className="whitepaper-preview__icon">🇰🇭</div>
              <div className="whitepaper-preview__title">Cambodia 2025</div>
              <div className="whitepaper-preview__subtitle">A Bird's View</div>
              <div className="whitepaper-preview__meta">
                <span>2025 Edition</span>
                <span>•</span>
                <span>28 Pages</span>
              </div>
            </div>
          </div>
          
          <div className="whitepaper-info">
            <div className="whitepaper-info__header">
              <h2>Cambodia 2025: A Bird's View</h2>
              <p className="whitepaper-info__description">
                What are Cambodia's unique challenges and opportunities in the mid-2020s as the country strives towards becoming an upper-middle-income country?
              </p>
              <p className="whitepaper-info__subdescription">
                In this comprehensive paper, we discuss the recent developments in the Cambodian economy – the explosive growth from 2004 to 2020, the difficulties of COVID, the fall of the real estate sector, as well as remaining challenges like the productivity gap.
              </p>
            </div>

            <div className="whitepaper-highlights">
              <div className="highlight-item highlight-item--compact">
                <div className="highlight-item__icon">📈</div>
                <div className="highlight-item__text">Economic Growth Analysis</div>
              </div>
              <div className="highlight-item highlight-item--compact">
                <div className="highlight-item__icon">🏗️</div>
                <div className="highlight-item__text">Real Estate Market Insights</div>
              </div>
              <div className="highlight-item highlight-item--compact">
                <div className="highlight-item__icon">💡</div>
                <div className="highlight-item__text">Future Opportunities</div>
              </div>
              <div className="highlight-item highlight-item--compact">
                <div className="highlight-item__icon">⚡</div>
                <div className="highlight-item__text">Productivity Challenges</div>
              </div>
            </div>

            <div className="whitepaper-cta">
              <div className="whitepaper-cta__content">
                <a href="#" className="download-btn download-btn--primary download-btn--large">
                  <span className="download-btn__icon">📥</span>
                  <span className="download-btn__text">
                    <span className="download-btn__main">Download Full Report</span>
                    <span className="download-btn__sub">PDF • 2.8 MB • Instant Download</span>
                  </span>
                </a>
                <p className="whitepaper-cta__note">
                  No email required • Free access
                </p>
              </div>
            </div>

            <div className="whitepaper-author">
              <p>Published by <strong>Goulding & Co Strategic Advisory</strong> • January 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhitePaperSection