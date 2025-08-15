import React, { useEffect } from 'react'
import LandingNavigation from '../components/LandingNavigation'
import LandingHero from '../components/page-sections/landing/LandingHero'
import VideoSection from '../components/page-sections/landing/VideoSection'
import SolutionsSection from '../components/page-sections/landing/SolutionsSection'
import OpportunitiesSection from '../components/page-sections/landing/OpportunitiesSection'
import StrugglesSection from '../components/page-sections/landing/StrugglesSection'
import CaseStudiesSection from '../components/page-sections/landing/CaseStudiesSection'
import TeamSection from '../components/page-sections/landing/TeamSection'
import ContactCTA from '../components/page-sections/landing/ContactCTA'
import ChatBubble from '../components/ChatBubble'

const Landing: React.FC = () => {
  // Add landing-specific body class immediately
  if (typeof document !== 'undefined') {
    document.body.classList.add('landing-body')
  }
  
  useEffect(() => {
    // Ensure class is added
    document.body.classList.add('landing-body')
    
    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('landing-body')
    }
  }, [])

  return (
    <>
      <LandingNavigation />
      <main className="landing-page">
        <LandingHero />
        <VideoSection />
        <OpportunitiesSection />
        <StrugglesSection />
        <SolutionsSection />
        <CaseStudiesSection />
        <TeamSection />
        <ContactCTA />
      </main>
      <ChatBubble />
    </>
  )
}

export default Landing