import { useRef, useEffect, useState } from 'react'
import p5 from 'p5'

interface HeroAnimationProps {
  className?: string
}

interface Walker {
  n: number
  m: number
  t: number
  hue: number
  trail: { x: number, y: number, alpha: number }[]
}

const HeroAnimation: React.FC<HeroAnimationProps> = ({ className = '' }) => {
  const sketchRef = useRef<HTMLDivElement>(null)
  const [p5Instance, setP5Instance] = useState<p5 | null>(null)
  
  console.log('🎨 HeroAnimation: Component mounting')

  useEffect(() => {
    if (!sketchRef.current) return

    const sketch = (p: p5) => {
      let w: number, s: number
      let walkers: Walker[]
      let gridSize: number
      let animationSpeed: number
      let maxTrailLength: number

      // Device optimization settings
      const optimizeForDevice = () => {
        const width = p.windowWidth || window.innerWidth
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

        if (width < 480) {
          // Small mobile - minimal
          gridSize = 4
          animationSpeed = 1/30
          maxTrailLength = 8
          return { walkerCount: 1, showGrid: false }
        } else if (isMobile || (isTouchDevice && width < 768)) {
          // Mobile - optimized
          gridSize = 5
          animationSpeed = 1/25
          maxTrailLength = 12
          return { walkerCount: 2, showGrid: true }
        } else if (isTouchDevice || width < 1024) {
          // Tablet - balanced
          gridSize = 6
          animationSpeed = 1/20
          maxTrailLength = 15
          return { walkerCount: 3, showGrid: true }
        } else {
          // Desktop - full experience
          gridSize = 7
          animationSpeed = 1/20
          maxTrailLength = 20
          return { walkerCount: 4, showGrid: true }
        }
      }

      const createWalker = (index: number): Walker => ({
        n: Math.floor(Math.random() * gridSize * gridSize),
        m: Math.floor(Math.random() * gridSize * gridSize),
        t: Math.random(),
        hue: (index * 80 + Math.random() * 40) % 360,
        trail: []
      })

      const getNeighbors = (pos: number): number[] => {
        const neighbors: number[] = []
        const x = pos % gridSize
        const y = Math.floor(pos / gridSize)
        
        // Check all 4 adjacent positions
        if (x > 0) neighbors.push(pos - 1) // Left
        if (x < gridSize - 1) neighbors.push(pos + 1) // Right
        if (y > 0) neighbors.push(pos - gridSize) // Up
        if (y < gridSize - 1) neighbors.push(pos + gridSize) // Down
        
        return neighbors
      }

      const updateTrail = (walker: Walker, x: number, y: number) => {
        walker.trail.unshift({ x, y, alpha: 255 })
        if (walker.trail.length > maxTrailLength) {
          walker.trail.pop()
        }
        // Fade trail
        walker.trail.forEach((point, i) => {
          point.alpha = 255 * (1 - i / maxTrailLength)
        })
      }

      p.setup = () => {
        console.log('🎨 HeroAnimation: Setting up enhanced pathfinding animation')
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(sketchRef.current!)
        
        const deviceSettings = optimizeForDevice()
        w = gridSize
        s = Math.min(400, Math.min(p.width, p.height) * 0.8) / w
        
        // Initialize multiple walkers
        walkers = []
        for (let i = 0; i < deviceSettings.walkerCount; i++) {
          walkers.push(createWalker(i))
        }
        
        console.log(`🎨 Enhanced pathfinding: ${deviceSettings.walkerCount} walkers on ${w}×${w} grid`)
      }

      p.draw = () => {
        // Clear background to keep CSS gradient visible
        p.clear()
        
        // Calculate scale and center position
        const maxSize = Math.min(p.width, p.height) * 0.7
        const scaleFactor = maxSize / (w * s)
        const offsetX = (p.width - w * s * scaleFactor) / 2
        const offsetY = (p.height - w * s * scaleFactor) / 2

        // Draw grid background (subtle)
        p.fill(255, 255, 255, 15)
        p.stroke(255, 255, 255, 30)
        p.strokeWeight(0.5)
        
        for (let y = 0; y < w; y++) {
          for (let x = 0; x < w; x++) {
            const rectX = offsetX + x * s * scaleFactor
            const rectY = offsetY + y * s * scaleFactor
            const rectSize = s * scaleFactor
            p.rect(rectX, rectY, rectSize, rectSize, 8 * scaleFactor)
          }
        }

        // Update and draw each walker
        walkers.forEach((walker, index) => {
          // Animation timing
          walker.t = walker.t > 1 ? 0 : walker.t + animationSpeed
          
          // Choose new target when animation completes
          if (walker.t === 0) {
            const neighbors = getNeighbors(walker.n)
            if (neighbors.length > 0) {
              walker.m = walker.n
              walker.n = neighbors[Math.floor(Math.random() * neighbors.length)]
            }
          }

          // Calculate current position with easing
          const fromX = walker.m % w
          const fromY = Math.floor(walker.m / w)
          const toX = walker.n % w
          const toY = Math.floor(walker.n / w)
          
          // Different easing for each walker
          const easing = index % 2 === 0 ? walker.t * walker.t : 1 - (1 - walker.t) * (1 - walker.t)
          const currentX = p.lerp(fromX, toX, easing)
          const currentY = p.lerp(fromY, toY, easing)
          
          // Update trail
          updateTrail(walker, currentX, currentY)

          // Draw trail
          walker.trail.forEach((point, i) => {
            if (i > 0) {
              const alpha = point.alpha * 0.6
              p.stroke(255, 255, 255, alpha)
              p.strokeWeight((3 - i * 0.1) * scaleFactor)
              
              const trailX = offsetX + point.x * s * scaleFactor + s * scaleFactor / 2
              const trailY = offsetY + point.y * s * scaleFactor + s * scaleFactor / 2
              const prevX = offsetX + walker.trail[i-1].x * s * scaleFactor + s * scaleFactor / 2
              const prevY = offsetY + walker.trail[i-1].y * s * scaleFactor + s * scaleFactor / 2
              
              p.line(prevX, prevY, trailX, trailY)
            }
          })
            
          // Draw walker with glow effect
          const walkerX = offsetX + currentX * s * scaleFactor
          const walkerY = offsetY + currentY * s * scaleFactor
          const walkerSize = s * scaleFactor * 0.8
          
          // Glow effect
          for (let r = 4; r > 0; r--) {
            p.fill(255, 255, 255, 50 / r)
            p.noStroke()
            p.ellipse(walkerX + s * scaleFactor / 2, walkerY + s * scaleFactor / 2, walkerSize + r * 4 * scaleFactor)
          }
          
          // Main walker
          p.fill(255, 255, 255, 200)
          p.stroke(255, 255, 255, 255)
          p.strokeWeight(2 * scaleFactor)
          p.ellipse(walkerX + s * scaleFactor / 2, walkerY + s * scaleFactor / 2, walkerSize)
          
          // Inner core
          p.fill(255, 255, 255, 255)
          p.noStroke()
          p.ellipse(walkerX + s * scaleFactor / 2, walkerY + s * scaleFactor / 2, walkerSize * 0.4)
        })

        // Add subtle animated background elements
        const time = p.millis() * 0.001
        for (let i = 0; i < 8; i++) {
          const x = (p.noise(i * 0.1, time * 0.2) * p.width)
          const y = (p.noise(i * 0.1 + 100, time * 0.15) * p.height)
          const size = p.noise(i * 0.1 + 200, time * 0.1) * 20 + 5
          
          p.fill(255, 255, 255, 8)
          p.noStroke()
          p.ellipse(x, y, size)
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
        const deviceSettings = optimizeForDevice()
        s = Math.min(400, Math.min(p.width, p.height) * 0.8) / w
        
        // Adjust walker count if needed
        while (walkers.length < deviceSettings.walkerCount) {
          walkers.push(createWalker(walkers.length))
        }
        while (walkers.length > deviceSettings.walkerCount) {
          walkers.pop()
        }
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