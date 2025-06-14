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
      let w: number

      p.setup = () => {
        console.log('🎨 HeroAnimation: Setting up generative art canvas')
        w = 400 // Base canvas size for the algorithm
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(sketchRef.current!)
        console.log('🎨 HeroAnimation: Generative art initialized')
      }

      // Your beautiful generative art algorithm (adapted)
      const a = (x: number, y: number) => {
        const k = x / 8 - 12
        const e = y / 8 - 12
        const mag = Math.sqrt(k * k + e * e)
        const o = 2 - mag / 3
        const d = -5 * Math.abs(Math.sin(k / 2) * Math.cos(e * 0.8))
        
        const px = (x - d * k * 4 + d * k * Math.sin(d + t)) * 0.7 + k * o * 2 + 130
        const py = (y - d * y / 5 + d * e * Math.cos(d + t + o) * Math.sin(t + d)) * 0.7 + e * o + 70
        
        // Scale to fit full screen
        const scaledX = (px / 400) * p.width
        const scaledY = (py / 400) * p.height
        
        // Ensure points are within screen bounds
        if (scaledX >= 0 && scaledX <= p.width && scaledY >= 0 && scaledY <= p.height) {
          p.point(scaledX, scaledY)
        }
      }

      p.draw = () => {
        // Dark background (matching your algorithm)
        p.background(6, 96)
        
        // Set stroke color (white with transparency)
        p.stroke(w, 46)
        p.strokeWeight(1)
        
        // Increment time (matching your algorithm)
        t += Math.PI / 90
        
        // Draw the generative art pattern (40000 points like your algorithm)
        for (let i = 0; i < 40000; i++) {
          const x = i % 200
          const y = Math.floor(i / 200)
          a(x, y)
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
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
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  )
}

export default HeroAnimation 