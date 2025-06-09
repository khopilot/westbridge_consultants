import React from 'react'
import LandingNavigation from '../components/LandingNavigation'
import LandingHero from '../components/page-sections/landing/LandingHero'
import ApproachSection from '../components/page-sections/landing/ApproachSection'
import WhyCambodiaSection from '../components/page-sections/landing/WhyCambodiaSection'
import CaseStudiesSection from '../components/page-sections/landing/CaseStudiesSection'
import TeamSection from '../components/page-sections/landing/TeamSection'
import WhitePaperSection from '../components/page-sections/landing/WhitePaperSection'
import ContactCTA from '../components/page-sections/landing/ContactCTA'

const Landing: React.FC = () => {
  return (
    <>
      <LandingNavigation />
      <main className="landing-page">
        <LandingHero />
        <ApproachSection />
        <WhyCambodiaSection />
        <CaseStudiesSection />
        <TeamSection />
        <WhitePaperSection />
        <ContactCTA />
      </main>
    </>
  )
}

export default Landing