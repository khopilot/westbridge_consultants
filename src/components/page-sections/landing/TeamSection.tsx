import React from 'react'
import './styles/TeamSection.css'

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="team-section__header text-center" data-aos="fade-up">
          <h2 data-aos="fade-up" data-aos-delay="100">Meet the Founders</h2>
          <p className="team-section__description" data-aos="fade-up" data-aos-delay="200">
            Two entrepreneurs who learned Cambodia the hard way—and now make it simple for you.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="founders-showcase" data-aos="fade-up" data-aos-delay="400">
          <div className="founder-card founder-card--primary" data-aos="fade-right" data-aos-delay="500">
            <div className="founder-card__content">
              <div className="founder-card__photo-section">
                <div className="founder-card__photo">
                  <img src="/brett.jpg" alt="Brett Goulding" className="founder-card__photo-img" />
                </div>
                <div className="founder-card__badge">Founder & CEO</div>
              </div>
              <div className="founder-card__info">
                <h3 className="founder-card__name">Brett Goulding</h3>
                <div className="founder-card__credentials">
                  <div className="credential credential--premium">
                    <span>Operating in Cambodia since 2015</span>
                  </div>
                  <div className="credential credential--premium">
                    <span>Rural Investment Specialist</span>
                  </div>
                </div>
                <p className="founder-card__bio">
                  Brett specializes in transforming complex rural investments into profitable ventures. 
                  His hands-on approach and deep understanding of Cambodia's business landscape have 
                  consistently delivered results across challenging projects. His methodology forms 
                  the foundation of our strategic framework.
                </p>
                <div className="founder-card__expertise">
                  <h4>Areas of Expertise</h4>
                  <div className="expertise-grid">
                    <div className="expertise-item">
                      <span>Rural Investment Development</span>
                    </div>
                    <div className="expertise-item">
                      <span>Operational Excellence</span>
                    </div>
                    <div className="expertise-item">
                      <span>Strategic Implementation</span>
                    </div>
                    <div className="expertise-item">
                      <span>Project Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="founder-card founder-card--secondary" data-aos="fade-left" data-aos-delay="600">
            <div className="founder-card__content">
              <div className="founder-card__photo-section">
                <div className="founder-card__photo">
                  <img src="/hugo.brett.jpg" alt="Hugo Morel" className="founder-card__photo-img" />
                </div>
                <div className="founder-card__badge">Co-Founder & COO</div>
              </div>
              <div className="founder-card__info">
                <h3 className="founder-card__name">Hugo Morel</h3>
                <div className="founder-card__credentials">
                  <div className="credential credential--premium">
                    <span>Operating in Cambodia since 2016</span>
                  </div>
                  <div className="credential credential--premium">
                    <span>Fluent in Khmer</span>
                  </div>
                </div>
                <p className="founder-card__bio">
                  Hugo brings deep cultural integration and multi-industry experience to our operations. 
                  His fluency in Khmer and extensive local network enable access to opportunities and 
                  partnerships that others often miss. His diverse background spans construction, tourism, 
                  and entertainment sectors.
                </p>
                <div className="founder-card__expertise">
                  <h4>Areas of Expertise</h4>
                  <div className="expertise-grid">
                    <div className="expertise-item">
                      <span>Multi-Industry Experience</span>
                    </div>
                    <div className="expertise-item">
                      <span>Local Network Development</span>
                    </div>
                    <div className="expertise-item">
                      <span>Cultural Integration</span>
                    </div>
                    <div className="expertise-item">
                      <span>Strategic Partnerships</span>
                    </div>
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

export default TeamSection