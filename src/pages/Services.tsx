import React from 'react'
import ServicesHero from '../components/page-sections/services/ServicesHero'
import ServicesGrid from '../components/page-sections/services/ServicesGrid'
import ProcessSection from '../components/page-sections/services/ProcessSection'
import IndustriesSection from '../components/page-sections/services/IndustriesSection'
import ServicesCTA from '../components/page-sections/services/ServicesCTA'

const Services: React.FC = () => {
  return (
    <div className="services">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <IndustriesSection />
      <ServicesCTA />
    </div>
  )
}

export default Services 