import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Projects: React.FC = () => {
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

  const projects = [
    {
      id: 1,
      title: 'Global Manufacturing Digital Transformation',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: '40% efficiency improvement and $2.3M annual savings through comprehensive digital modernization.',
      challenge: 'Legacy systems and manual processes were limiting growth and efficiency.',
      solution: 'Implemented integrated ERP system, automated workflows, and comprehensive staff training.',
      results: ['40% efficiency improvement', '$2.3M annual cost savings', '3-month implementation', '150+ employees trained']
    },
    {
      id: 2,
      title: 'Retail Chain Strategic Expansion',
      category: 'Strategic Planning',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Successfully expanded retail operations across 15 new markets with optimized supply chain.',
      challenge: 'Needed strategic guidance for multi-market expansion while maintaining quality standards.',
      solution: 'Developed market entry strategies, optimized supply chain, and established quality control systems.',
      results: ['15 new markets entered', '300% revenue growth', '95% customer satisfaction', '200 new jobs created']
    },
    {
      id: 3,
      title: 'Healthcare System Process Optimization',
      category: 'Process Optimization',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      description: 'Streamlined patient care processes resulting in 50% reduction in wait times and improved outcomes.',
      challenge: 'Long patient wait times and inefficient care coordination affecting patient satisfaction.',
      solution: 'Redesigned patient flow, implemented digital scheduling, and improved staff coordination.',
      results: ['50% reduction in wait times', '25% increase in patient satisfaction', '30% improved efficiency', '20% cost reduction']
    },
    {
      id: 4,
      title: 'Tech Startup Scaling Strategy',
      category: 'Change Management',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Guided rapid scaling from 20 to 200 employees while maintaining company culture and performance.',
      challenge: 'Rapid growth was straining company culture and operational efficiency.',
      solution: 'Implemented scalable processes, leadership development, and cultural integration programs.',
      results: ['10x team growth', '150% productivity increase', '90% employee retention', '5x revenue growth']
    },
    {
      id: 5,
      title: 'Financial Services Risk Assessment',
      category: 'Risk Management',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Comprehensive risk assessment and mitigation strategy reducing operational risk by 60%.',
      challenge: 'Regulatory compliance requirements and increasing operational risks.',
      solution: 'Developed comprehensive risk framework, implemented monitoring systems, and staff training.',
      results: ['60% risk reduction', '100% regulatory compliance', '35% cost savings', '99.9% system uptime']
    },
    {
      id: 6,
      title: 'Energy Company Market Analysis',
      category: 'Market Research',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'In-depth market analysis enabling successful entry into renewable energy sector.',
      challenge: 'Needed comprehensive market intelligence for renewable energy sector entry.',
      solution: 'Conducted extensive market research, competitive analysis, and opportunity assessment.',
      results: ['3 new market opportunities identified', '$50M investment secured', '25% market share achieved', '500 MW capacity']
    }
  ]

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="hero" style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(rgba(17, 45, 78, 0.8), rgba(17, 45, 78, 0.8)), url(https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center">
          <div className="fade-up">
            <h1 style={{ color: '#ffffff', marginBottom: '1rem' }}>Our Success Stories</h1>
            <p style={{ color: 'var(--color-bg-light)', fontSize: '1.2rem' }}>
              Discover how we've helped businesses achieve remarkable results
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-3">
        <div className="container">
          <div className="text-center mb-3 fade-up">
            <h2>Featured Projects</h2>
            <p>Real results from real clients across diverse industries</p>
          </div>
          
          <div className="grid grid--3-col">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-card__image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <div className="project-card__overlay">
                    <span className="project-card__category">{project.category}</span>
                  </div>
                </div>
                <div className="project-card__content" style={{ padding: 'var(--spacing-unit)' }}>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study */}
      <section className="py-3" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="text-center mb-3 fade-up">
            <h2>Case Study Spotlight</h2>
            <p>A deep dive into one of our most impactful transformations</p>
          </div>
          
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col col-6">
              <div className="fade-up">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>
            </div>
            <div className="col col-6">
              <div className="fade-up">
                <h3>Digital Transformation Success Story</h3>
                
                <div className="case-study-section" style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>The Challenge</h4>
                  <p>{projects[0].challenge}</p>
                </div>

                <div className="case-study-section" style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Our Solution</h4>
                  <p>{projects[0].solution}</p>
                </div>

                <div className="case-study-section">
                  <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Results Achieved</h4>
                  <div className="grid grid--2-col" style={{ gap: '1rem' }}>
                    {projects[0].results.map((result, index) => (
                      <div key={index} className="result-item" style={{ 
                        background: '#ffffff', 
                        padding: '1rem', 
                        borderRadius: '0.5rem',
                        textAlign: 'center',
                        border: '2px solid var(--color-accent)'
                      }}>
                        <strong style={{ color: 'var(--color-primary)' }}>{result}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3" style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}>
        <div className="container text-center">
          <div className="fade-up">
            <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Ready to Create Your Success Story?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Join the ranks of our satisfied clients and transform your business with proven strategies.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn--primary">
                Start Your Project
              </Link>
              <Link to="/services" className="btn btn--secondary" style={{ backgroundColor: 'transparent', borderColor: '#ffffff', color: '#ffffff' }}>
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects 