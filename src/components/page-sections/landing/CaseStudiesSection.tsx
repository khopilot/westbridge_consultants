import React from 'react'
import './styles/CaseStudiesSection.css'

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="case-studies-section py-3">
      <div className="container">
        <div className="case-studies-section__header text-center mb-3">
          <div className="case-studies-section__badge">
            📊 Success Stories
          </div>
          <h2>Case&nbsp;Studies</h2>
          <p className="case-studies-section__description">
            One picture is worth a thousand words. We like to keep things simple:
          </p>
        </div>

        <div className="case-studies-grid">
          <div className="case-study-card">
            <div className="case-study-card__header">
              <div className="case-study-card__industry">Client</div>
              <h3 className="case-study-card__title">Client&nbsp;Problem</h3>
            </div>
            <div className="case-study-card__challenge">
              <h4>Challenge</h4>
              <p>
                Local textile manufacturer needed to scale operations and establish international export channels 
                to compete in the global market while meeting international quality standards.
              </p>
            </div>
            <div className="case-study-card__solution">
              <h4>Solution&nbsp;Implemented</h4>
              <ul>
                <li>Implemented lean manufacturing processes</li>
                <li>Facilitated international certifications</li>
                <li>Established partnerships with European buyers</li>
                <li>Optimized supply chain logistics</li>
              </ul>
            </div>
            <div className="case-study-card__results">
              <h4>Real&nbsp;Outcome</h4>
              <div className="results-metrics">
                <div className="result-metric">
                  <span className="metric__number">300%</span>
                  <span className="metric__label">Production Increase</span>
                </div>
                <div className="result-metric">
                  <span className="metric__number">$15M</span>
                  <span className="metric__label">Annual Export Value</span>
                </div>
                <div className="result-metric">
                  <span className="metric__number">500+</span>
                  <span className="metric__label">Jobs Created</span>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study-card">
            <div className="case-study-card__header">
              <div className="case-study-card__industry">Client</div>
              <h3 className="case-study-card__title">Client&nbsp;Problem</h3>
            </div>
            <div className="case-study-card__challenge">
              <h4>Challenge</h4>
              <p>
                International fintech startup needed to navigate Cambodia's regulatory landscape 
                and establish partnerships with local banks to launch their digital payment platform.
              </p>
            </div>
            <div className="case-study-card__solution">
              <h4>Solution&nbsp;Implemented</h4>
              <ul>
                <li>Guided through National Bank licensing process</li>
                <li>Facilitated partnerships with major local banks</li>
                <li>Developed compliance framework</li>
                <li>Executed market entry strategy</li>
              </ul>
            </div>
            <div className="case-study-card__results">
              <h4>Real&nbsp;Outcome</h4>
              <div className="results-metrics">
                <div className="result-metric">
                  <span className="metric__number">6 months</span>
                  <span className="metric__label">Time to Market</span>
                </div>
                <div className="result-metric">
                  <span className="metric__number">100K+</span>
                  <span className="metric__label">Active Users</span>
                </div>
                <div className="result-metric">
                  <span className="metric__number">5</span>
                  <span className="metric__label">Bank Partners</span>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study-card">
            <div className="case-study-card__header">
              <div className="case-study-card__industry">Client</div>
              <h3 className="case-study-card__title">Client&nbsp;Problem</h3>
            </div>
            <div className="case-study-card__challenge">
              <h4>Challenge</h4>
              <p>
                Traditional rice mill needed to modernize operations, improve quality standards, 
                and access premium export markets to increase profitability.
              </p>
            </div>
            <div className="case-study-card__solution">
              <h4>Solution&nbsp;Implemented</h4>
              <ul>
                <li>Upgraded processing equipment and technology</li>
                <li>Implemented quality control systems</li>
                <li>Secured international certifications</li>
                <li>Connected with premium export buyers</li>
              </ul>
            </div>
            <div className="case-study-card__results">
              <h4>Real&nbsp;Outcome</h4>
              <div className="results-metrics">
                <div className="result-metric">
                  <span className="metric__number">250%</span>
                  <span className="metric__label">Revenue Growth</span>
                </div>
                <div className="result-metric">
                  <span className="metric__number">15</span>
                  <span className="metric__label">Export Countries</span>
                </div>
                <div className="result-metric">
                  <span className="metric__number">80%</span>
                  <span className="metric__label">Waste Reduction</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="success-metrics">
          <div className="success-metrics__content">
            <h3>Collective Impact</h3>
            <p>The cumulative results from our client partnerships demonstrate our commitment to driving meaningful business transformation across Cambodia.</p>
            <div className="success-metrics__grid">
              <div className="success-metric">
                <span className="success-metric__number">$150M+</span>
                <span className="success-metric__label">Total Revenue Generated</span>
              </div>
              <div className="success-metric">
                <span className="success-metric__number">2,500+</span>
                <span className="success-metric__label">Jobs Created</span>
              </div>
              <div className="success-metric">
                <span className="success-metric__number">30+</span>
                <span className="success-metric__label">International Markets Entered</span>
              </div>
              <div className="success-metric">
                <span className="success-metric__number">95%</span>
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