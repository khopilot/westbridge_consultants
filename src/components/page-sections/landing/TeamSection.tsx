import React from 'react'
import './styles/TeamSection.css'

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Brett Goulding',
      role: 'Founder & CEO',
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
      image: '/Our-team.jpg',
      accentColor: '#112d4e'
    },
    {
      name: 'Hugues Morel',
      role: 'Senior Consultant',
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
      image: '/hugo.brett.jpg',
      accentColor: '#6b7280'
    }
  ]

  return (
    <section id="team" className="team-section">
      <div className="container">
        {/* Team Grid - 2 Cards */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              {/* Member Header with Image */}
              <div className="member-header">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>

              {/* Title & Description */}
              <div className="member-content">
                <h4 className="member-title">{member.title}</h4>
                <p className="member-description">{member.description}</p>
              </div>

              {/* About Section */}
              <div className="member-section">
                <h5 className="section-title">About</h5>
                <ul className="about-list">
                  {member.about.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Skills Section */}
              <div className="member-section">
                <h5 className="section-title">Skill Set</h5>
                <div className="skills-grid">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag" style={{borderColor: member.accentColor}}>
                      {skill}
                    </span>
                  ))}
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