import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import './styles/TeamSection.css'

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]))

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -50])

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return
    
    const rect = sectionRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    
    mouseX.set(x)
    mouseY.set(y)
    setMousePosition({ x, y })
  }

  const currentMember = teamMembers[selectedMember]

  return (
    <section 
      ref={sectionRef}
      id="team" 
      className="team-section-revolutionary"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Dynamic Background */}
      <div className="revolutionary-bg">
        <motion.div 
          className="bg-gradient-1"
          style={{ y: parallaxY }}
        />
        <motion.div 
          className="bg-gradient-2"
          style={{ y: parallaxY2 }}
        />
        <div className="bg-grid" />
        <div className="bg-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="revolutionary-container">
        {/* Header */}
        <motion.div 
          className="revolutionary-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.320, 1] }}
        >
          <h2 className="revolutionary-title">
            <span className="title-line">THE</span>
            <span className="title-line title-main">VISIONARIES</span>
          </h2>
          <p className="revolutionary-subtitle">
            Architects of Cambodia's Business Future
          </p>
        </motion.div>

        {/* Main Split Screen */}
        <div className="revolutionary-split">
          {/* Left Side - Image */}
          <motion.div 
            className="split-image-side"
            style={{ 
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember}
                className="image-container-revolutionary"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1] }}
              >
                <div className="image-frame">
                  <img 
                    src={currentMember.image} 
                    alt={currentMember.name}
                    className="revolutionary-image"
                  />
                  <div className="image-overlay-revolutionary">
                    <div className="overlay-gradient" />
                    <div className="overlay-scanlines" />
                  </div>
                </div>
                
                {/* Floating Name */}
                <motion.div 
                  className="floating-name"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="name-text">{currentMember.name}</span>
                  <span className="role-text">{currentMember.role}</span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="split-content-side"
            style={{ 
              rotateX: useTransform(rotateX, x => x * -0.5),
              rotateY: useTransform(rotateY, y => y * -0.5)
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember}
                className="content-revolutionary"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.320, 1] }}
              >
                {/* Title & Description */}
                <div className="content-header">
                  <motion.h3 
                    className="member-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentMember.title}
                  </motion.h3>
                  <motion.p 
                    className="member-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentMember.description}
                  </motion.p>
                </div>

                {/* Skills - Tinder Style */}
                <div className="skills-section">
                  <motion.h4 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Core Expertise
                  </motion.h4>
                  <motion.div 
                    className="skills-revolutionary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentMember.skills.slice(0, 8).map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="skill-card-revolutionary"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          delay: 0.6 + index * 0.1,
                          duration: 0.5,
                          ease: [0.23, 1, 0.320, 1]
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          rotateY: 5,
                          rotateX: 5,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                        }}
                        style={{ 
                          transformStyle: "preserve-3d",
                          borderColor: currentMember.accentColor
                        }}
                      >
                        <span className="skill-text">{skill}</span>
                        <div className="skill-shine" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Key Highlights */}
                <div className="highlights-section">
                  <motion.h4 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Key Highlights
                  </motion.h4>
                  <motion.div 
                    className="highlights-revolutionary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    {currentMember.about.slice(0, 5).map((highlight, index) => (
                      <motion.div
                        key={index}
                        className="highlight-item"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 1 + index * 0.1,
                          duration: 0.6
                        }}
                      >
                        <div className="highlight-marker" style={{ backgroundColor: currentMember.accentColor }} />
                        <span className="highlight-text">{highlight}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Revolutionary Navigation */}
        <motion.div 
          className="revolutionary-nav"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {teamMembers.map((member, index) => (
            <motion.button
              key={index}
              className={`nav-card ${selectedMember === index ? 'nav-card-active' : ''}`}
              onClick={() => setSelectedMember(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                borderColor: selectedMember === index ? member.accentColor : 'transparent',
                boxShadow: selectedMember === index ? `0 10px 30px ${member.accentColor}30` : 'none'
              }}
            >
              <div className="nav-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="nav-info">
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
              <motion.div 
                className="nav-indicator"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: selectedMember === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ backgroundColor: member.accentColor }}
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection