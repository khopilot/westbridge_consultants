import React, { useState } from 'react'
import './styles/TeamSection.css'

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(0)

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
      accentColor: '#a47864'
    },
    {
      name: 'Hugues Morel',
      role: 'Co-Founder & COO',
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
      accentColor: '#cc5500'
    }
  ]

  const currentMember = teamMembers[selectedMember]

  return (
    <section id="team" className="team-section-revolutionary">

      {/* Main Content */}
      <div className="revolutionary-container">
        {/* Header */}
        <div className="revolutionary-header">
          <h2 className="revolutionary-title">MEET OUR LEADERSHIP</h2>
          <p className="revolutionary-subtitle">
            Building successful companies in Cambodia since 2015
          </p>
        </div>

        {/* Navigation - Profile Selector */}
        <div className="revolutionary-nav">
          {teamMembers.map((member, index) => (
            <button
              key={index}
              className={`nav-card ${selectedMember === index ? 'nav-card-active' : ''}`}
              onClick={() => setSelectedMember(index)}
            >
              <div className="nav-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="nav-info">
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
              {selectedMember === index && <div className="nav-indicator" />}
            </button>
          ))}
        </div>

        {/* Main Split Screen */}
        <div className="revolutionary-split">
          {/* Left Side - Image */}
          <div className="split-image-side">
            <div className="image-container-revolutionary">
              <div className="image-frame">
                <img 
                  src={currentMember.image} 
                  alt={currentMember.name}
                  className="revolutionary-image"
                />
              </div>
              
              {/* Name Card */}
              <div className="floating-name">
                <span className="name-text">{currentMember.name}</span>
                <span className="role-text">{currentMember.role}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="split-content-side">
            <div className="content-revolutionary">
              {/* Title & Description */}
              <div className="content-header">
                <h3 className="member-title">{currentMember.title}</h3>
                <p className="member-description">{currentMember.description}</p>
              </div>

              {/* Scrollable Content Sections */}
              <div className="content-sections">
                {/* About Section */}
                <div className="highlights-section">
                  <h4 className="section-title">About</h4>
                  <div className="highlights-revolutionary">
                    {currentMember.about.map((highlight, index) => (
                      <div key={index} className="highlight-item">
                        <div className="highlight-marker" />
                        <span className="highlight-text">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                  <h4 className="section-title">Skill Set</h4>
                  <div className="skills-revolutionary">
                    {currentMember.skills.map((skill) => (
                      <div key={skill} className="skill-card-revolutionary">
                        <span className="skill-text">{skill}</span>
                      </div>
                    ))}
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