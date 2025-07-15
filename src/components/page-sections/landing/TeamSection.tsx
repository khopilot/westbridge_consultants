import React from 'react'
import './styles/TeamSection.css'

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Brett Goulding',
      title: 'Building successful companies in Cambodia since 2015.',
      description: 'Brett Goulding is a dynamic entrepreneur and regional connector who has built successful ventures across Southeast Asia, driven by deep cultural insight and strategic vision.',
      about: [
        'Deep knowledge of Cambodian social, political, and religious context',
        '5+ years of on-the-ground experience in Southeast Asia',
        'Founder of multiple companies in real estate, finance, investment, and consulting',
        'Strong regional business network',
        'Strategic thinker with a long-term development vision',
        'Entrepreneurial and opportunity-driven',
        'Passionate about social impact and youth development',
        'Skilled in cross-cultural leadership and community engagement',
        'Committed to sports development and grassroots initiatives',
        'Adaptive, resourceful, and resilient in emerging markets'
      ],
      skills: [
        'Entrepreneurship',
        'Real Estate Development',
        'Legal & Regulatory',
        'Strategic Vision',
        'Investment Structuring',
        'Business Networking',
        'Market Entry',
        'Cross-Cultural Leadership',
        'Operations Oversight',
        'Social Impact Orientation'
      ],
      image: '/brett.jpg'
    },
    {
      name: 'Hugues Morel',
      title: 'Rural & urban deal experience.',
      description: 'Hugues Morel is a results-driven entrepreneur and strategic operator who has led and launched high-impact ventures across Cambodia, combining sharp business acumen with relentless execution and creative problem-solving.',
      about: [
        'In-depth understanding of Cambodian business, legal, and social environment',
        '10+ years of experience in real estate, construction, media, and consumer products',
        'Founder and director of multiple companies across property, media, and retail',
        'Expert in financial modeling, forecasting, and investment planning',
        'Proven track record in business development and market entry strategies',
        'Hands-on leadership with strong operational and project management skills',
        'Creative thinker with a builder\'s mindset and executional discipline',
        'Passionate about entrepreneurship, innovation, and purposeful ventures',
        'Driven by impact, efficiency, and long-term value creation',
        'Adaptable, structured, and resilient in fast-changing environments'
      ],
      skills: [
        'Strategic Planning',
        'Project Management',
        'Business Development',
        'Financial Modeling & Forecasting',
        'Leadership',
        'Entrepreneurship',
        'Construction & Engineering',
        'Cross-Cultural Communication',
        'Operations Management',
        'Creative Problem-Solving'
      ],
      image: '/hugo.brett.jpg'
    }
  ]

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="team-section__header text-center" data-aos="fade-up">
          <h2 data-aos="fade-up" data-aos-delay="100">TEAM</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member" data-aos="fade-up" data-aos-delay={200 + index * 100}>
              <div className="team-member__image">
                <img src={member.image} alt={member.name} />
              </div>
              
              <div className="team-member__content">
                <h3 className="team-member__name">{member.name}</h3>
                <p className="team-member__title">{member.title}</p>
                
                <div className="team-member__description">
                  <p>{member.description}</p>
                </div>

                <div className="team-member__about">
                  <h4>About:</h4>
                  <ul>
                    {member.about.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="team-member__skills">
                  <h4>Skill set:</h4>
                  <div className="skills-grid">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection