import React from 'react'
import './styles/TeamSection.css'

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="team-section py-3">
      <div className="container">
        <div className="team-section__header text-center mb-3">
          <div className="team-section__badge">👥 Our Partners</div>
          <h2>Meet the Team</h2>
          <p className="team-section__description">Two entrepreneurs who learned Cambodia the hard way—and now make it simple for you.</p>
        </div>

        <div className="team-grid">
          <div className="team-member">
            <div className="team-member__photo">
              <div className="team-member__photo-placeholder">
                <img src="/brett.jpg" alt="Brett Goulding" className="team-member__photo-img" />
              </div>
            </div>
            <div className="team-member__info">
              <h3 className="team-member__name">Brett&nbsp;Goulding</h3>
              <div className="team-member__title">Founder</div>
              <div className="team-member__credentials">
                <span className="credential">Operating in Cambodia since 2015</span>
              </div>
              <p className="team-member__bio">
                Experienced in turning complex rural investments into profitable realities, Brett is known for practical problem-solving and hands-on execution across Cambodia.
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
                <img src="/hugo.brett.jpg" alt="Hugo Morel" className="team-member__photo-img" />
              </div>
            </div>
            <div className="team-member__info">
              <h3 className="team-member__name">Hugo&nbsp;Morel</h3>
              <div className="team-member__title">Co-Founder</div>
              <div className="team-member__credentials">
                <span className="credential">Operating in Cambodia since 2016</span>
                <span className="credential">Fluent in Khmer</span>
              </div>
              <p className="team-member__bio">
                Hugo excels at navigating local complexity to achieve strategic objectives. His language skills and network open doors that outsiders rarely see.
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
                <span className="team-stat__number shiny-metric">50+</span>
                <span className="team-stat__label">Combined Years in Cambodia</span>
              </div>
              <div className="team-stat">
                <span className="team-stat__number shiny-metric">200+</span>
                <span className="team-stat__label">Successful Projects</span>
              </div>
              <div className="team-stat">
                <span className="team-stat__number shiny-metric">15+</span>
                <span className="team-stat__label">Industry Specializations</span>
              </div>
              <div className="team-stat">
                <span className="team-stat__number shiny-metric">5</span>
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