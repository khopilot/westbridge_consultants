import React from 'react'
import Tilt from 'react-parallax-tilt'
import './styles/CaseStudiesSection.css'

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="case-studies-section py-3">
      <div className="container">
        <div className="case-studies-section__header text-center mb-3" data-aos="fade-up">
          <div className="case-studies-section__badge" data-aos="zoom-in" data-aos-delay="100">
            📊 Success Stories
          </div>
          <h2 data-aos="fade-up" data-aos-delay="200">Case&nbsp;Studies</h2>
          <p className="case-studies-section__description" data-aos="fade-up" data-aos-delay="300">
            One picture is worth a thousand words. We like to keep things simple:
          </p>
        </div>

        <div className="case-studies-grid">
          <Tilt
            className="tilt-wrapper"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareBorderRadius="16px"
            scale={1.02}
          >
            <div className="case-study-card" data-aos="fade-up" data-aos-delay="400">
              <div className="case-study-card__header">
                <div className="case-study-card__industry">Client</div>
                <h3 className="case-study-card__title">Client&nbsp;Problem</h3>
              </div>
              <div className="case-study-card__challenge">
                <h4>Challenge</h4>
                <p>
                  A fast-growing local conglomerate was hit hard by the fall in real estate land-values. They asked us to restructure their assets and company to prevent bankruptcy and reestablish positive cash flow.
                </p>
              </div>
              <div className="case-study-card__solution">
                <h4>Solution</h4>
                <p>
                  A quick financial audit revealed very poor internal controls and runaway spending in many departments. OPEX was cut by 50% in less than one month.
                </p>
              </div>
              <div className="case-study-card__outcome">
                <h4>Outcome</h4>
                <p>
                  Client was able to avoid bankruptcy and continue servicing the loans
                </p>
              </div>
            </div>
          </Tilt>

          <Tilt
            className="tilt-wrapper"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareBorderRadius="16px"
            scale={1.02}
          >
            <div className="case-study-card" data-aos="fade-up" data-aos-delay="500">
              <div className="case-study-card__header">
                <div className="case-study-card__industry">Client</div>
                <h3 className="case-study-card__title">Client&nbsp;Problem</h3>
              </div>
              <div className="case-study-card__challenge">
                <h4>Challenge</h4>
                <p>
                  We consulted on a major infrastructure project located in a particularly sensitive zone with many uncoordinated stakeholders who threatened to block the project as they saw it as a threat to their livelihood.
                </p>
              </div>
              <div className="case-study-card__solution">
                <h4>Solution</h4>
                <p>
                  We integrated the stakeholders into the infrastructure project and offered financial help and a value proposition (i.e. a former informer vendor gets a stall)
                </p>
              </div>
              <div className="case-study-card__outcome">
                <h4>Outcome</h4>
                <p>
                  The project was able to continue.
                </p>
              </div>
            </div>
          </Tilt>

          <Tilt
            className="tilt-wrapper"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareBorderRadius="16px"
            scale={1.02}
          >
            <div className="case-study-card" data-aos="fade-up" data-aos-delay="600">
              <div className="case-study-card__header">
                <div className="case-study-card__industry">Client</div>
                <h3 className="case-study-card__title">Client&nbsp;Problem</h3>
              </div>
              <div className="case-study-card__challenge">
                <h4>Challenge</h4>
                <p>
                  A European medium enterprise wanted to explore the Cambodian market but had no idea how to start. They contacted us expressing interest, but apprehension.
                </p>
              </div>
              <div className="case-study-card__solution">
                <h4>Solution</h4>
                <p>
                  We facilitated a local trip and contacts at the ministerial level and in the industry.
                </p>
              </div>
              <div className="case-study-card__outcome">
                <h4>Outcome</h4>
                <p>
                  Client established a Cambodian branch of his business months later.
                </p>
              </div>
            </div>
          </Tilt>
        </div>


        <div className="success-metrics" data-aos="fade-up" data-aos-delay="700">
          <div className="success-metrics__content">
            <h3 data-aos="fade-up" data-aos-delay="800">Collective Impact</h3>
            <p>The cumulative results from our client partnerships demonstrate our commitment to driving meaningful business transformation across Cambodia.</p>
            <div className="success-metrics__grid">
              <div className="success-metric" data-aos="zoom-in" data-aos-delay="900">
                <span className="success-metric__number shiny-metric">$150M+</span>
                <span className="success-metric__label">Total Revenue Generated</span>
              </div>
              <div className="success-metric" data-aos="zoom-in" data-aos-delay="1000">
                <span className="success-metric__number shiny-metric">2,500+</span>
                <span className="success-metric__label">Jobs Created</span>
              </div>
              <div className="success-metric" data-aos="zoom-in" data-aos-delay="1100">
                <span className="success-metric__number shiny-metric">30+</span>
                <span className="success-metric__label">International Markets Entered</span>
              </div>
              <div className="success-metric" data-aos="zoom-in" data-aos-delay="1200">
                <span className="success-metric__number shiny-metric">95%</span>
                <span className="success-metric__label">Client Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection