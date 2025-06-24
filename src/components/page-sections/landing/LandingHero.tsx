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
  const playerContainerRef = useRef<HTMLDivElement>(null)
  
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
    // Only initialize on desktop
    if (window.innerWidth < 1024) {
      return
    }
    
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
      // Only initialize if container exists
      if (!playerContainerRef.current || !document.getElementById('hero-youtube-player')) {
        return
      }
      
      // Use different video ID based on orientation
      const videoId = isMobilePortrait ? 'aHvFHRzfT9I' : 'lm5-iFxneBQ'
      
      try {
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
      } catch (error) {
        console.error('Failed to initialize YouTube player:', error)
      }
    }

    return () => {
      clearTimeout(initTimeout)
      if ((window as any).videoLoopTimeout) {
        clearTimeout((window as any).videoLoopTimeout)
      }
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy()
          playerRef.current = null
        } catch (error) {
          console.error('Error destroying YouTube player:', error)
        }
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
    <section id="hero" className="landing-hero" ref={heroRef} style={{ position: 'relative' }}>
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
          
          {/* YouTube Video 21:9 Frame - Desktop Only */}
          <motion.div 
            className={`hero-video-container ${isMobilePortrait ? 'hero-video-container--mobile' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="hero-video-frame" />
            <div className="hero-video-wrapper" ref={playerContainerRef}>
              <div id="hero-youtube-player">
                {/* Fallback iframe if YT API fails - Desktop only */}
                {!isPlayerReady && window.innerWidth >= 1024 && (
                  <iframe
                    src={`https://www.youtube.com/embed/lm5-iFxneBQ?autoplay=1&mute=1&controls=0&loop=1&playlist=lm5-iFxneBQ&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&vq=hd2160&quality=highres`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="hero-youtube-iframe"
                  />
                )}
              </div>
            </div>
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
    </section>
  )
}

export default LandingHero