import { useRef, useEffect, useState } from 'react'
import p5 from 'p5'

interface HeroAnimationProps {
  className?: string
}

const HeroAnimation: React.FC<HeroAnimationProps> = ({ className = '' }) => {
  const sketchRef = useRef<HTMLDivElement>(null)
  const [p5Instance, setP5Instance] = useState<p5 | null>(null)
  
  console.log('🎨 HeroAnimation: Component mounting')

  useEffect(() => {
    if (!sketchRef.current) return

    const sketch = (p: p5) => {
      let t = 0
      let animationSettings = {
        pointCount: 20000,
        timeStep: p.PI / 90,
        strokeAlpha: 92,
        enabled: true
      }

      // Detect device capabilities and optimize accordingly
      const optimizeForDevice = () => {
        const width = p.windowWidth || window.innerWidth
        const height = p.windowHeight || window.innerHeight
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        const pixelRatio = window.devicePixelRatio || 1
        const totalPixels = width * height * pixelRatio

        console.log(`🎨 Device Detection: ${width}x${height}, Mobile: ${isMobile}, Touch: ${isTouchDevice}, Ratio: ${pixelRatio}`)

        // Very small screens or low-end devices
        if (width < 480 || totalPixels < 500000) {
          animationSettings = {
            pointCount: 2500,
            timeStep: p.PI / 120,
            strokeAlpha: 80,
            enabled: true
          }
          console.log('🎨 Performance Mode: Very Low (2.5K points)')
        }
        // Mobile phones
        else if (isMobile || (isTouchDevice && width < 768)) {
          animationSettings = {
            pointCount: 5000,
            timeStep: p.PI / 100,
            strokeAlpha: 85,
            enabled: true
          }
          console.log('🎨 Performance Mode: Mobile (5K points)')
        }
        // Tablets
        else if (isTouchDevice || width < 1024) {
          animationSettings = {
            pointCount: 10000,
            timeStep: p.PI / 95,
            strokeAlpha: 88,
            enabled: true
          }
          console.log('🎨 Performance Mode: Tablet (10K points)')
        }
        // Desktop - full quality
        else {
          animationSettings = {
            pointCount: 20000,
            timeStep: p.PI / 90,
            strokeAlpha: 92,
            enabled: true
          }
          console.log('🎨 Performance Mode: Desktop (20K points)')
        }
      }

      // The original elegant mathematical function from your algorithm
      const a = (x: number, y: number) => {
        const k = x / 4 - 12.5
        const e = y / 9
        const o = p.mag(k, e) / 9
        const q = x / 3 + 99 + 3 / k * p.sin(y) + k * (1 + p.cos(y) / 3 + p.sin(e + o * 4 - t * 2))
        const c = o / 5 + e / 4 - t / 8
        
        const px = q * p.cos(c) + 200
        const py = (q + 49) * p.sin(c) * p.cos(c) - q / 3 + 30 * o + 220
        
        // Scale to fit the screen while maintaining proportions
        const scaledX = (px / 400) * p.width
        const scaledY = (py / 400) * p.height
        
        p.point(scaledX, scaledY)
      }

      p.setup = () => {
        console.log('🎨 HeroAnimation: Setting up responsive curve animation')
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(sketchRef.current!)
        
        // Optimize settings based on device
        optimizeForDevice()
        
        console.log('🎨 HeroAnimation: Responsive animation initialized')
      }

      p.draw = () => {
        // Skip animation if disabled
        if (!animationSettings.enabled) {
          return
        }

        // Clear background to keep CSS gradient visible
        p.clear()
        
        // Set stroke properties with adaptive alpha
        p.stroke(255, 255, 255, animationSettings.strokeAlpha)
        p.strokeWeight(1)
        
        // Increment time with adaptive speed
        t += animationSettings.timeStep
        
        // Draw adaptive number of points
        for (let i = animationSettings.pointCount; i > 0; i--) {
          a(i % 100, i / 350)
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
        // Re-optimize when window is resized (orientation change, etc.)
        optimizeForDevice()
        console.log('🎨 Animation re-optimized for new window size')
      }
    }

    const p5Instance = new p5(sketch)
    setP5Instance(p5Instance)

    return () => {
      p5Instance.remove()
    }
  }, [])

  // Handle cleanup on unmount
  useEffect(() => {
    return () => {
      if (p5Instance) {
        p5Instance.remove()
      }
    }
  }, [p5Instance])

  return (
    <div 
      ref={sketchRef} 
      className={className}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1a2e4e 0%, #6b7280 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  )
}

export default HeroAnimation 