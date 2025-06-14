import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Excellence',
      description: 'Commitment to delivering outstanding results'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Collaboration',
      description: 'Building partnerships for mutual success'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Innovation',
      description: 'Embracing cutting-edge solutions'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Integrity',
      description: 'Transparent and ethical practices'
    }
  ]

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Chief Executive Officer',
      bio: 'With over 15 years of consulting experience across Fortune 500 companies.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'David Chen',
      role: 'Director of Strategy',
      bio: 'Strategic planning expert with a track record of successful transformations.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Digital Innovation',
      bio: 'Technology leader specializing in digital transformation initiatives.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    }
  ]

  const clients = [
    { name: 'TechFlow Solutions', logo: '🏢' },
    { name: 'Global Manufacturing', logo: '🏭' },
    { name: 'Healthcare Partners', logo: '🏥' },
    { name: 'Financial Dynamics', logo: '🏦' },
    { name: 'Energy Systems', logo: '⚡' },
    { name: 'Retail Connect', logo: '🛒' }
  ]

  return (
    <div className="about">
      {/* Hero + Mission */}
      <section className="py-3 mt-3">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="fade-up">
              <h1 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>About Goulding & Co Strategic Advisory</h1>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Founded on the principle that every business has untapped potential, Goulding & Co Strategic Advisory 
                has been transforming organizations for over a decade. We believe in the power of strategic 
                thinking, innovative solutions, and collaborative partnerships to drive meaningful change.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Our mission is to bridge the gap between where your business is today and where it could be tomorrow. 
                Through our proven methodologies and deep industry expertise, we help organizations navigate 
                complex challenges and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Process */}
      <section className="py-3" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="text-center mb-3 fade-up">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid--3-col">
            {values.map((value, index) => (
              <div key={index} className="card fade-up" style={{ animationDelay: `${index * 0.1}s`, textAlign: 'center' }}>
                <div className="card__icon" style={{ margin: '0 auto var(--spacing-unit)' }}>
                  {value.icon}
                </div>
                <h3 className="card__title">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-3">
        <div className="container">
          <div className="text-center mb-3 fade-up">
            <h2>Meet Our Leadership Team</h2>
            <p>Experienced professionals dedicated to your success</p>
          </div>
          
          <div className="grid grid--3-col">
            {team.map((member, index) => (
              <div key={index} className="team-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="team-card__image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{ 
                      width: '150px', 
                      height: '150px', 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      margin: '0 auto 1rem',
                      display: 'block'
                    }}
                  />
                </div>
                <div className="team-card__content" style={{ textAlign: 'center' }}>
                  <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{member.name}</h3>
                  <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontWeight: '600' }}>{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Client Logos */}
      <section className="py-3" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="text-center mb-3 fade-up">
            <h2>Trusted by Industry Leaders</h2>
            <p>We're proud to work with these amazing organizations</p>
          </div>
          
          <div className="grid grid--3-col">
            {clients.map((client, index) => (
              <div key={index} className="client-logo fade-up" style={{ 
                animationDelay: `${index * 0.1}s`,
                textAlign: 'center',
                padding: '2rem 1rem',
                background: '#ffffff',
                borderRadius: '0.5rem',
                transition: 'var(--transition-standard)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{client.logo}</div>
                <h4 style={{ color: 'var(--color-text)', fontWeight: '600' }}>{client.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-3">
        <div className="container">
          <div className="grid grid--3-col">
            <div className="stat-card fade-up" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                200+
              </div>
              <h3>Projects Completed</h3>
              <p>Successfully delivered across various industries</p>
            </div>

            <div className="stat-card fade-up" style={{ textAlign: 'center', animationDelay: '0.1s' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                10+
              </div>
              <h3>Years of Experience</h3>
              <p>Proven track record of business transformation</p>
            </div>

            <div className="stat-card fade-up" style={{ textAlign: 'center', animationDelay: '0.2s' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                95%
              </div>
              <h3>Client Satisfaction</h3>
              <p>Consistently exceeding expectations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-3" style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}>
        <div className="container text-center">
          <div className="fade-up">
            <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Ready to Partner with Us?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Join our growing family of successful clients and let's build something extraordinary together.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn--primary">
                Start a Conversation
              </Link>
              <Link to="/projects" className="btn btn--secondary-light">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 