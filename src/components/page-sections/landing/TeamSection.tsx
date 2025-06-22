import React from 'react'
import './styles/TeamSection.css'

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="team-section py-3">
      <div className="container">
        <div className="team-section__header text-center mb-3" data-aos="fade-up">
          <div className="team-section__badge" data-aos="zoom-in" data-aos-delay="100">
            Leadership
          </div>
          <h2 data-aos="fade-up" data-aos-delay="200">Meet the Founders</h2>
          <p className="team-section__description" data-aos="fade-up" data-aos-delay="300">
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

        {/* Leadership Impact Stats */}
        <div className="leadership-impact" data-aos="fade-up" data-aos-delay="700">
          <div className="leadership-impact__content">
            <h3 data-aos="fade-up" data-aos-delay="800">Combined Leadership Impact</h3>
            <p data-aos="fade-up" data-aos-delay="900">
              Two decades of combined expertise driving transformational success across Cambodia's most challenging sectors.
            </p>
            <div className="impact-stats__grid">
              <div className="impact-stat" data-aos="zoom-in" data-aos-delay="1000">
                <span className="impact-stat__number">23</span>
                <span className="impact-stat__label">Combined Years in Cambodia</span>
              </div>
              <div className="impact-stat" data-aos="zoom-in" data-aos-delay="1100">
                <span className="impact-stat__number">30+</span>
                <span className="impact-stat__label">Successful Projects</span>
              </div>
              <div className="impact-stat" data-aos="zoom-in" data-aos-delay="1200">
                <span className="impact-stat__number">15+</span>
                <span className="impact-stat__label">Industry Specializations</span>
              </div>
              <div className="impact-stat" data-aos="zoom-in" data-aos-delay="1300">
                <span className="impact-stat__number">5</span>
                <span className="impact-stat__label">Languages Spoken</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Network */}
        <div className="expert-network" data-aos="fade-up" data-aos-delay="800">
          <div className="expert-network__header">
            <h3 data-aos="fade-up" data-aos-delay="900">Expert Advisory Network</h3>
            <p data-aos="fade-up" data-aos-delay="1000">
              Our founders lead a carefully curated network of Cambodia's most experienced professionals, 
              ensuring comprehensive expertise across every aspect of your business journey.
            </p>
          </div>
          <div className="experts-grid">
            <div className="expert-card" data-aos="fade-up" data-aos-delay="1100">
              <div className="expert-card__content">
                <h4>Manufacturing Excellence</h4>
                <p>Former operations directors from Cambodia's leading manufacturers, specializing in lean processes, quality systems, and export compliance standards.</p>
                <div className="expert-card__specialties">
                  <span>Textile Manufacturing</span>
                  <span>Electronics Assembly</span>
                  <span>Food Processing</span>
                </div>
              </div>
            </div>
            
            <div className="expert-card" data-aos="fade-up" data-aos-delay="1200">
              <div className="expert-card__content">
                <h4>Regulatory Affairs</h4>
                <p>Former government officials and legal professionals with insider knowledge of Cambodia's regulatory landscape and licensing procedures.</p>
                <div className="expert-card__specialties">
                  <span>Compliance Strategy</span>
                  <span>Government Relations</span>
                  <span>Trade Facilitation</span>
                </div>
              </div>
            </div>
            
            <div className="expert-card" data-aos="fade-up" data-aos-delay="1300">
              <div className="expert-card__content">
                <h4>Financial Strategy</h4>
                <p>Banking and finance professionals with deep experience in international investment, local banking relationships, and financial structuring.</p>
                <div className="expert-card__specialties">
                  <span>Investment Strategy</span>
                  <span>Banking Relations</span>
                  <span>Financial Planning</span>
                </div>
              </div>
            </div>
            
            <div className="expert-card" data-aos="fade-up" data-aos-delay="1400">
              <div className="expert-card__content">
                <h4>Market Development</h4>
                <p>Sales and marketing professionals with established networks across Cambodia's business community and international trade connections.</p>
                <div className="expert-card__specialties">
                  <span>Market Research</span>
                  <span>Partnership Development</span>
                  <span>Sales Strategy</span>
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