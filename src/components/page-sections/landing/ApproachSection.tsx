import React, { useState, useEffect, useRef } from 'react'
import './styles/ApproachSection.css'

// ---------------------------------------------
// New dynamic data for the 5-step methodology
// ---------------------------------------------
const phases = [
  {
    id: 0,
    title: 'Initial Consultation',
    icon: '🤝',
    color: 'var(--color-accent)',
    number: 'Step 01',
    timeline: 'Step 01',
    subtitle:
      '60-minute session (in-person or virtual) to clarify goals, budget & timelines.',
    features: [
      {
        title: 'Goal, Budget & Timeline Alignment',
        description: 'Crystal-clear understanding of your objectives in 60 minutes.'
      },
      {
        title: 'Flexible Format',
        description: 'Meet in-person in Phnom Penh or via secure video conference.'
      },
      {
        title: 'Operational Footprint Decision',
        description: 'Determine if you will run operations locally or remotely.'
      }
    ],
    metrics: [
      { number: '60min', label: 'Consultation' },
      { number: '100%', label: 'Alignment' },
      { number: '0', label: 'Obligations' }
    ]
  },
  {
    id: 1,
    title: 'Stakeholder & Obstacle Mapping',
    icon: '🗺️',
    color: 'var(--color-secondary)',
    number: 'Step 02',
    subtitle:
      'We flag regulatory hurdles, landlords and which ministry signs off — complete stakeholder map.',
    features: [
      {
        title: 'Regulatory Radar',
        description: 'Full permitting and compliance checklist tailored to your industry.'
      },
      {
        title: 'Stakeholder Matrix',
        description: 'Identify key decision-makers, influencers and potential allies.'
      },
      {
        title: 'Risk Snapshot',
        description: 'Immediate visibility on hurdles that could delay your launch.'
      }
    ],
    metrics: [
      { number: '3+', label: 'Stakeholder Tiers' },
      { number: '1 wk', label: 'Turn-around' },
      { number: 'Full', label: 'Visibility' }
    ]
  },
  {
    id: 2,
    title: 'Solution Roadmap',
    icon: '📑',
    color: 'var(--color-primary)',
    number: 'Step 03',
    subtitle:
      'Clear strategy highlighting everything you need, who is responsible and practical timelines.',
    features: [
      {
        title: 'Step-by-Step Plan',
        description: 'From permits to partnerships, each action is timestamped.'
      },
      {
        title: 'Ownership Grid',
        description: 'Everyone knows exactly who does what and when.'
      },
      {
        title: 'Success Definition',
        description: 'Shared KPIs so you know precisely what success looks like.'
      }
    ],
    metrics: [
      { number: '100%', label: 'Transparency' },
      { number: '1', label: 'Unified Roadmap' },
      { number: '0', label: 'Guesswork' }
    ]
  },
  {
    id: 3,
    title: 'On-Site Execution',
    icon: '🚀',
    color: 'var(--color-accent)',
    number: 'Step 04',
    subtitle:
      'Implementation happens swiftly under our watch; we track progress weekly.',
    features: [
      {
        title: 'Local Presence',
        description: 'Our bilingual team executes directly on-site in Cambodia.'
      },
      {
        title: 'Weekly Progress Reviews',
        description: 'Dashboard updates keep you informed in real-time.'
      },
      {
        title: 'Speed & Precision',
        description: 'Swift execution without compromising on quality.'
      }
    ],
    metrics: [
      { number: '7 days', label: 'Review Cycle' },
      { number: '24/7', label: 'Oversight' },
      { number: 'Swift', label: 'Implementation' }
    ]
  },
  {
    id: 4,
    title: 'Rapid Course Corrections',
    icon: '🔄',
    color: 'var(--color-secondary)',
    number: 'Step 05',
    subtitle:
      'Immediate corrections if outcomes slip — priority is to keep your goals on track.',
    features: [
      {
        title: 'Live KPI Monitoring',
        description: 'Detect deviations before they become problems.'
      },
      {
        title: 'Contingency Protocols',
        description: 'Pre-approved corrective actions for zero downtime.'
      },
      {
        title: 'Outcome Guardianship',
        description: 'Your objectives remain our north-star throughout the engagement.'
      }
    ],
    metrics: [
      { number: '<24h', label: 'Response Time' },
      { number: '0', label: 'Tolerance for Drift' },
      { number: '100%', label: 'Goal Focus' }
    ]
  }
] as const

const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [contentH, setContentH] = useState<number | undefined>(undefined)
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // ---------------------------------------------
  // Resize helper → calc active panel height
  // ---------------------------------------------
  const updateHeight = () => {
    const panel = contentRef.current?.querySelector(
      '.methodology-phase--active'
    ) as HTMLElement | null
    if (panel) setContentH(panel.offsetHeight)
  }

  // ― run on mount / step change / window resize
  useEffect(() => { if (isVisible) updateHeight() }, [activeStep, isVisible])
  useEffect(() => {
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  // ---------------------------------------------
  // IntersectionObserver to trigger animations
  // ---------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // ---------------------------------------------
  // Auto-advance carousel when section is visible
  // ---------------------------------------------
  useEffect(() => {
    if (!isVisible) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % phases.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isVisible])

  // ---------------------------------------------
  // JSX
  // ---------------------------------------------
  return (
    <section
      ref={sectionRef}
      id="approach"
      className={`approach-section ${isVisible ? 'approach-section--visible' : ''}`}
    >


      <div className="container">
        {/* Section header */}
        <div className="approach-section__header">
          <div className="approach-section__badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Our Proven Methodology
          </div>
          <h2>
            <span className="text-gradient">Operate with Confidence</span>
            <br /> in Cambodia's Complex Market
          </h2>
          <p className="approach-section__description">
            Tackling a complicated business environment isn't difficult when you
            have the right guide. Our 5-step framework turns complexity into
            certainty — fast.
          </p>
        </div>

        {/* ------------------------ */}
        {/* Methodology carousel      */}
        {/* ------------------------ */}
        <div className="methodology-showcase">
          {/* Tabs / navigation */}
          <div className="methodology-nav">
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                className={`methodology-nav__item ${
                  activeStep === index ? 'methodology-nav__item--active' : ''
                }`}
                onClick={() => setActiveStep(index)}
                style={{ '--phase-color': phase.color } as React.CSSProperties}
              >
                <div className="methodology-nav__icon">{phase.icon}</div>
                <div className="methodology-nav__title">{phase.title}</div>
                <div className="methodology-nav__progress">
                  <div className="methodology-nav__progress-bar" />
                </div>
              </button>
            ))}
          </div>

          {/* Content panes */}
          <div
            ref={contentRef}
            className="methodology-content"
            style={contentH ? { height: contentH } : undefined}
          >
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`methodology-phase ${
                  activeStep === index ? 'methodology-phase--active' : ''
                }`}
              >
                {/* Phase header */}
                <div className="methodology-phase__header">
                  <div className="methodology-phase__meta">
                    <span className="methodology-phase__number">
                      {phase.number}
                    </span>
                  </div>
                  <h3 className="methodology-phase__title">{phase.title}</h3>
                  <p className="methodology-phase__subtitle">{phase.subtitle}</p>
                </div>

                {/* Phase body */}
                <div className="methodology-phase__content">
                  <div className="phase-features">
                    {phase.features.map((feature) => (
                      <div key={feature.title} className="phase-feature">
                        <div className="phase-feature__icon">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="phase-feature__content">
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="phase-metrics">
                    {phase.metrics.map((metric) => (
                      <div key={metric.label} className="phase-metric">
                        <span className="phase-metric__number shiny-metric">{metric.number}</span>
                        <span className="phase-metric__label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default ApproachSection