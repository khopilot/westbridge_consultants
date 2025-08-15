import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/TeamSection.css'

interface TeamMember {
  name: string
  role: string
  title: string
  description: string
  about: string[]
  skills: string[]
  image: string
  quote?: string
}

const TeamSection: React.FC = () => {
  const [expandedAbout, setExpandedAbout] = useState<number | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  
  const teamMembers: TeamMember[] = [
    {
      name: 'Brett Goulding',
      role: 'Founder & CEO',
      title: 'Building successful companies in Cambodia since 2020.',
      description: 'Brett Goulding is a dynamic entrepreneur and regional connector who has built successful ventures across Southeast Asia, driven by deep cultural insight and strategic vision.',
      quote: "Success in Cambodia requires more than capital—it demands cultural fluency, strategic patience, and genuine partnership.",
      about: [
        'Deep knowledge of Cambodian social, political, and religious context',
        'On-the-ground experience in Cambodia since 2020',
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
        'Real Estate',
        'Legal',
        'Strategy',
        'Investment',
        'Networking',
        'Market Entry',
        'Leadership',
        'Operations',
        'Social Impact'
      ],
      image: '/brett2.jpg'
    },
    {
      name: 'Hugues Morel',
      role: 'Senior Consultant',
      title: 'Rural & urban deal experience.',
      description: 'Hugues Morel is a results-driven entrepreneur and strategic operator who has led and launched high-impact ventures across Cambodia, combining sharp business acumen with relentless execution and creative problem-solving.',
      quote: "In Cambodia's dynamic market, execution excellence and local relationships are the foundations of sustainable success.",
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
        'Strategy',
        'Project Mgmt',
        'Biz Dev',
        'Financial Modeling',
        'Leadership',
        'Entrepreneurship',
        'Construction',
        'Communication',
        'Operations',
        'Problem Solving'
      ],
      image: '/hugo.brett.jpg'
    }
  ]

  return (
    <section id="team" className="team-section">
      {/* Section Header */}
      <motion.div 
        className="team-header-main"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="team-main-title">Leadership</h2>
        <div className="team-main-divider"></div>
        <p className="team-main-subtitle">
          Decades of combined experience. Deep local knowledge. Global perspective.
        </p>
      </motion.div>

      {/* Team Members - Individual Full Sections */}
      {teamMembers.map((member, memberIndex) => (
        <div key={memberIndex} className={`team-member-section ${memberIndex % 2 === 0 ? 'layout-normal' : 'layout-reverse'}`}>
          
          {/* Left Side - Image */}
          <div 
            className="member-image-section"
          >
            <div className="member-image-wrapper">
              <img src={member.image} alt={member.name} />
              <div className="member-image-overlay">
                <motion.div 
                  className="overlay-number"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  0{memberIndex + 1}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="member-content-section">
            {/* Header */}
            <motion.div 
              className="member-content-header"
              initial={{ opacity: 0, x: memberIndex % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="member-role-label">{member.role}</span>
              <h3 className="member-name-large">{member.name}</h3>
              <div className="member-accent-line"></div>
              <p className="member-title-text">{member.title}</p>
              <p className="member-description-text">{member.description}</p>
              
              {member.quote && (
                <blockquote className="member-quote">
                  <span className="quote-mark">"</span>
                  {member.quote}
                </blockquote>
              )}
            </motion.div>

            {/* Experience Grid - Collapsible */}
            <motion.div 
              className="member-experience"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="section-header">
                <h4 className="section-title">Experience & Expertise</h4>
                <button 
                  className="expand-btn"
                  onClick={() => setExpandedAbout(expandedAbout === memberIndex ? null : memberIndex)}
                >
                  <span>{expandedAbout === memberIndex ? 'Show Less' : `View All ${member.about.length} Points`}</span>
                  <svg 
                    className={expandedAbout === memberIndex ? 'rotated' : ''}
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 7L10 12L15 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </button>
              </div>
              
              <div className={`experience-grid ${expandedAbout === memberIndex ? 'expanded' : ''}`}>
                {member.about.slice(0, expandedAbout === memberIndex ? undefined : 3).map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="experience-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="item-indicator"></span>
                    <span className="item-text">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <AnimatePresence>
                {expandedAbout === memberIndex && (
                  <motion.div
                    className="experience-grid-extra"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.about.slice(3).map((item, idx) => (
                      <motion.div
                        key={idx + 3}
                        className="experience-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ x: 10 }}
                      >
                        <span className="item-indicator"></span>
                        <span className="item-text">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Skills Matrix */}
            <motion.div 
              className="member-skills"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="section-title">Core Competencies</h4>
              <div className="skills-matrix">
                {member.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className={`skill-card ${hoveredSkill === idx + memberIndex * 100 ? 'hovered' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    onMouseEnter={() => setHoveredSkill(idx + memberIndex * 100)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="skill-number">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="skill-name">{skill}</span>
                    <div className="skill-progress">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.05, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      ))}
    </section>
  )
}

export default TeamSection