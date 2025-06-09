import React from 'react'
import './styles/TeamSection.css'

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="team-section py-3">
      <div className="container">
        <div className="team-section__header text-center mb-3">
          <div className="team-section__badge">
            👥 Leadership Team
          </div>
          <h2>Meet Your Cambodia Business Experts</h2>
          <p className="team-section__description">
            Our team combines decades of international business experience with deep local expertise. 
            Led by seasoned consultants Brett and Hugo, we bring proven leadership to your Cambodia venture.
          </p>
        </div>

        <div className="team-grid">
          <div className="team-member">
            <div className="team-member__photo">
              <div className="team-member__photo-placeholder">
                👨‍💼
              </div>
            </div>
            <div className="team-member__info">
              <h3 className="team-member__name">Brett Harrison</h3>
              <div className="team-member__title">Managing Partner & Strategic Advisor</div>
              <div className="team-member__credentials">
                <span className="credential">MBA, Wharton</span>
                <span className="credential">15+ Years Asia Experience</span>
              </div>
              <p className="team-member__bio">
                Brett leads our strategic consulting practice with extensive experience in Southeast Asian markets. 
                Previously served as Regional Director for Fortune 500 companies across ASEAN, with particular 
                expertise in manufacturing and export operations in Cambodia.
              </p>
              <div className="team-member__expertise">
                <h4>Core Expertise:</h4>
                <div className="expertise-tags">
                  <span className="expertise-tag">Market Entry Strategy</span>
                  <span className="expertise-tag">Operations Scaling</span>
                  <span className="expertise-tag">Export Development</span>
                  <span className="expertise-tag">Partnership Facilitation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="team-member__photo">
              <div className="team-member__photo-placeholder">
                👨‍💻
              </div>
            </div>
            <div className="team-member__info">
              <h3 className="team-member__name">Hugo Chen</h3>
              <div className="team-member__title">Senior Partner & Innovation Lead</div>
              <div className="team-member__credentials">
                <span className="credential">MS, Technology Management</span>
                <span className="credential">12+ Years Cambodia Focus</span>
              </div>
              <p className="team-member__bio">
                Hugo specializes in technology integration and digital transformation for Cambodian businesses. 
                His background in fintech and agtech has enabled numerous startups and traditional businesses 
                to leverage technology for competitive advantage.
              </p>
              <div className="team-member__expertise">
                <h4>Core Expertise:</h4>
                <div className="expertise-tags">
                  <span className="expertise-tag">Digital Transformation</span>
                  <span className="expertise-tag">Fintech Regulations</span>
                  <span className="expertise-tag">Process Automation</span>
                  <span className="expertise-tag">Innovation Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="core-consultants">
          <h3>Core Consulting Team</h3>
          <div className="consultants-grid">
            <div className="consultant-card">
              <div className="consultant-card__icon">🏭</div>
              <div className="consultant-card__content">
                <h4>Manufacturing Specialists</h4>
                <p>Former operations directors from leading Cambodian manufacturers with expertise in lean processes, quality systems, and export compliance.</p>
                <div className="consultant-card__focus">Focus: Textile, Electronics, Food Processing</div>
              </div>
            </div>
            
            <div className="consultant-card">
              <div className="consultant-card__icon">⚖️</div>
              <div className="consultant-card__content">
                <h4>Regulatory Affairs Experts</h4>
                <p>Former government officials and legal professionals with deep knowledge of Cambodia's business regulations and licensing procedures.</p>
                <div className="consultant-card__focus">Focus: Compliance, Licensing, Trade Relations</div>
              </div>
            </div>
            
            <div className="consultant-card">
              <div className="consultant-card__icon">💰</div>
              <div className="consultant-card__content">
                <h4>Financial Advisors</h4>
                <p>Banking and finance professionals with experience in international investment, local banking relationships, and financial structuring.</p>
                <div className="consultant-card__focus">Focus: Investment, Banking, Financial Planning</div>
              </div>
            </div>
            
            <div className="consultant-card">
              <div className="consultant-card__icon">🌐</div>
              <div className="consultant-card__content">
                <h4>Market Development Team</h4>
                <p>Sales and marketing professionals with established networks across Cambodia's business community and international trade connections.</p>
                <div className="consultant-card__focus">Focus: Market Research, Sales, Partnerships</div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-stats">
          <div className="team-stats__content">
            <h3>Collective Experience</h3>
            <p>Our team's combined expertise represents decades of successful business development across Cambodia's most dynamic sectors.</p>
            <div className="team-stats__grid">
              <div className="team-stat">
                <span className="team-stat__number">50+</span>
                <span className="team-stat__label">Combined Years in Cambodia</span>
              </div>
              <div className="team-stat">
                <span className="team-stat__number">200+</span>
                <span className="team-stat__label">Successful Projects</span>
              </div>
              <div className="team-stat">
                <span className="team-stat__number">15+</span>
                <span className="team-stat__label">Industry Specializations</span>
              </div>
              <div className="team-stat">
                <span className="team-stat__number">5</span>
                <span className="team-stat__label">Languages Spoken</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection