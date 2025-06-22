import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './styles/LandingHero.css'

const LandingHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const playerRef = useRef<any>(null)
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const [isMobilePortrait, setIsMobilePortrait] = useState(false)
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Check for mobile portrait mode
  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 767
      const isPortrait = window.innerHeight > window.innerWidth
      setIsMobilePortrait(isMobile && isPortrait)
    }

    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)

    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [])

  // Initialize YouTube Player
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      // Check if API is already loaded
      if ((window as any).YT && (window as any).YT.Player) {
        initializePlayer()
      } else {
        // Load YouTube IFrame API
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

        // YouTube API callback
        ;(window as any).onYouTubeIframeAPIReady = () => {
          initializePlayer()
        }
      }
    }, 100)

    function initializePlayer() {
      // Use different video ID based on orientation
      const videoId = isMobilePortrait ? 'aHvFHRzfT9I' : 'lm5-iFxneBQ'
      
      playerRef.current = new (window as any).YT.Player('hero-youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 0, // We'll handle loop manually
          origin: window.location.origin,
          vq: 'hd2160', // Request 4K quality
          quality: 'highres' // Highest available quality
        },
        events: {
          onReady: (event: any) => {
            setIsPlayerReady(true)
            event.target.mute()
            // Set to highest quality
            const qualityLevels = event.target.getAvailableQualityLevels()
            if (qualityLevels && qualityLevels.length > 0) {
              event.target.setPlaybackQuality(qualityLevels[0])
            }
            event.target.playVideo()
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.PLAYING) {
              const duration = event.target.getDuration()
              const restartTime = (duration - 4) * 1000 // Convert to milliseconds
              
              // Clear any existing timeout
              if ((window as any).videoLoopTimeout) {
                clearTimeout((window as any).videoLoopTimeout)
              }
              
              // Set timeout to restart video 4 seconds before end
              ;(window as any).videoLoopTimeout = setTimeout(() => {
                if (playerRef.current && playerRef.current.seekTo) {
                  playerRef.current.seekTo(0)
                  playerRef.current.playVideo()
                }
              }, restartTime)
            }
          }
        }
      })
    }

    return () => {
      clearTimeout(initTimeout)
      if ((window as any).videoLoopTimeout) {
        clearTimeout((window as any).videoLoopTimeout)
      }
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy()
      }
    }
  }, [isMobilePortrait]) // Reinitialize when orientation changes

  // Floating animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  // Text animation variants
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number]
      }
    })
  }

  return (
    <section id="hero" className="landing-hero" ref={heroRef}>
      {/* Animated Background with Parallax */}
      <motion.div 
        className="landing-hero__bg-pattern"
        style={{ opacity }}
      >
        {/* Cambodia SVG Background */}
        <motion.div 
          className="cambodia-bg"
          style={{ y: y2 }}
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <img 
            src="/cambodia.svg" 
            alt="Cambodia Map Background" 
            className="cambodia-svg"
          />
        </motion.div>
        
        <motion.div 
          className="bg-shape bg-shape--1"
          style={{ x: mousePosition.x, y: mousePosition.y }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-shape bg-shape--2"
          style={{ x: -mousePosition.x, y: -mousePosition.y }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" as const }}
        />
        <motion.div 
          className="bg-shape bg-shape--3"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        />
      </motion.div>
      
      <div className="container">
        <motion.div 
          className="landing-hero__content"
          style={{ y: y1 }}
        >

          
          {/* Main Title with Split Text Animation */}
          <motion.h1 
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textAnimation}
          >
            <span>Cambodia&nbsp;</span>
            <span className="text-gradient-animated">
              Made&nbsp;Simple
            </span>
          </motion.h1>
          
          {/* Subtitle with Typewriter Effect */}
          <motion.h2
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textAnimation}
          >
            Cambodia rewards bold investors, but only if you master its rules. We shorten the learning curve, cut the risk, and get you moving fast.
          </motion.h2>
          
          <motion.p 
            className="landing-hero__subtitle"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={textAnimation}
          >
            We have spent ten years in Cambodia learning the hard way. With us, you start on day one with that decade of knowledge in your pocket.
          </motion.p>
          
          {/* CTA Buttons with Magnetic Effect */}
          <motion.div 
            className="landing-hero__cta"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={textAnimation}
          >
            <motion.button 
              className="hero-cta hero-cta--primary" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 8px 24px rgba(26, 46, 78, 0.4)",
                  "0 12px 32px rgba(26, 46, 78, 0.6)",
                  "0 8px 24px rgba(26, 46, 78, 0.4)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span>Request&nbsp;a&nbsp;Call</span>
              <motion.svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </motion.button>
            
            <motion.button 
              className="hero-cta hero-cta--secondary" 
              onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>See&nbsp;Our&nbsp;Approach</span>
            </motion.button>
          </motion.div>
          
          {/* Animated Highlight Cards */}
          <motion.div 
            className="landing-hero__highlights"
            style={{ y: y2 }}
          >
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Strategic Market Entry",
                description: "Navigate regulations and establish your presence"
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21L21 12L3 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Operational Excellence",
                description: "Optimize processes for maximum efficiency"
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Partnership Development",
                description: "Build strategic local and international alliances"
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: "Innovation Strategy",
                description: "Leverage technology for competitive advantage"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="landing-hero__highlight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                }}
              >
                <motion.div 
                  className="highlight__icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <div className="highlight__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="landing-hero__scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* YouTube Video Background */}
      <div className={`hero-video-container ${isMobilePortrait ? 'hero-video-container--mobile' : ''}`}>
        <div className="hero-video-wrapper">
          <div id="hero-youtube-player">
            {/* Fallback iframe if YT API fails */}
            {!isPlayerReady && (
              <iframe
                src={`https://www.youtube.com/embed/${isMobilePortrait ? 'aHvFHRzfT9I' : 'lm5-iFxneBQ'}?autoplay=1&mute=1&controls=0&loop=1&playlist=${isMobilePortrait ? 'aHvFHRzfT9I' : 'lm5-iFxneBQ'}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&vq=hd2160&quality=highres`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="hero-youtube-iframe"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingHero