import React from 'react'
import HeroSection from '../components/page-sections/home/HeroSection'
import ValuePropositionSection from '../components/page-sections/home/ValuePropositionSection'
import CaseStudySection from '../components/page-sections/home/CaseStudySection'
import TestimonialsSection from '../components/page-sections/home/TestimonialsSection'
import CTASection from '../components/page-sections/home/CTASection'

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSection />
      <ValuePropositionSection />
      <CaseStudySection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home 