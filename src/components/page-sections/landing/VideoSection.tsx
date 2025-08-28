import React, { useEffect, useRef, useState } from 'react'
import './styles/VideoSection.css'

const VideoSection: React.FC = () => {
  const playerRef = useRef<YT.Player | null>(null)
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const [isMobilePortrait, setIsMobilePortrait] = useState(false)
  const playerContainerRef = useRef<HTMLDivElement>(null)

  // Check for mobile portrait mode
  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 768
      setIsMobilePortrait(isMobile)
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
      if ((window as Window & { YT?: typeof YT }).YT && (window as Window & { YT?: typeof YT }).YT?.Player) {
        initializePlayer()
      } else {
        // Load YouTube IFrame API
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

        // YouTube API callback
        ;(window as Window & { onYouTubeIframeAPIReady?: () => void }).onYouTubeIframeAPIReady = () => {
          initializePlayer()
        }
      }
    }, 100)

    function initializePlayer() {
      // Only initialize if container exists
      if (!playerContainerRef.current || !document.getElementById('video-youtube-player')) {
        return
      }
      
      // Use different video ID based on orientation
      const videoId = isMobilePortrait ? 'aHvFHRzfT9I' : 'lm5-iFxneBQ'
      
      try {
        playerRef.current = new (window as Window & { YT?: typeof YT }).YT!.Player('video-youtube-player', {
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
          onReady: (event: YT.PlayerEvent) => {
            setIsPlayerReady(true)
            event.target.mute()
            // Set to highest quality
            const qualityLevels = event.target.getAvailableQualityLevels()
            if (qualityLevels && qualityLevels.length > 0) {
              event.target.setPlaybackQuality(qualityLevels[0])
            }
            event.target.playVideo()
          },
          onStateChange: (event: YT.OnStateChangeEvent) => {
            if (event.data === (window as Window & { YT?: typeof YT }).YT!.PlayerState.PLAYING) {
              const duration = event.target.getDuration()
              const restartTime = (duration - 4) * 1000 // Convert to milliseconds
              
              // Clear any existing timeout
              if ((window as Window & { videoLoopTimeout?: ReturnType<typeof setTimeout> }).videoLoopTimeout) {
                clearTimeout((window as Window & { videoLoopTimeout?: ReturnType<typeof setTimeout> }).videoLoopTimeout!)
              }
              
              // Set timeout to restart video 4 seconds before end
              ;(window as Window & { videoLoopTimeout?: ReturnType<typeof setTimeout> }).videoLoopTimeout = setTimeout(() => {
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
      if ((window as Window & { videoLoopTimeout?: ReturnType<typeof setTimeout> }).videoLoopTimeout) {
        clearTimeout((window as Window & { videoLoopTimeout?: ReturnType<typeof setTimeout> }).videoLoopTimeout!)
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
  }, [isMobilePortrait])

  return (
    <section id="video" className="video-section">
      <div className="video-section__container">
        <div 
          className={`video-container ${isMobilePortrait ? 'video-container--mobile' : ''}`}
        >
          <div className="video-frame" />
          <div className="video-blue-filter" />
          <div className="video-wrapper" ref={playerContainerRef}>
            <div id="video-youtube-player">
              {/* Fallback iframe if YT API fails */}
              {!isPlayerReady && (
                <iframe
                  src={`https://www.youtube.com/embed/${isMobilePortrait ? 'aHvFHRzfT9I' : 'lm5-iFxneBQ'}?autoplay=1&mute=1&controls=0&loop=1&playlist=${isMobilePortrait ? 'aHvFHRzfT9I' : 'lm5-iFxneBQ'}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&vq=hd2160&quality=highres`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-youtube-iframe"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection