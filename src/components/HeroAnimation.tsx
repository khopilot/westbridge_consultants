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

      p.setup = () => {
        console.log('🎨 HeroAnimation: Setting up generative art canvas')
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(sketchRef.current!)
        console.log('🎨 HeroAnimation: Generative art initialized')
      }

      // Your new sophisticated generative art algorithm
      const a = (x: number, y: number): [number, number] => {
        const k = x / 8 - 25
        const e = y / 8 - 25
        const mag = Math.sqrt(k * k + e * e)
        const d = Math.cos(mag / 3) * e / 5
        const q = x / 4 + k / Math.cos(y / 9) * Math.sin(d * 9 - t) + 25
        const c = d - t / 8
        
        const px = q * Math.sin(c) + 200
        const py = (q * 2 + x + y / 2 + d * 90) / 4 * Math.cos(c) + 200
        
        return [px, py]
      }

      p.draw = () => {
        // Dark background with subtle transparency
        p.background(6, 36)
        
        // Set stroke color (white with transparency)
        p.stroke(255, 36)
        p.strokeWeight(1)
        
        // Increment time (matching your algorithm)
        t += Math.PI / 60
        
        // Draw the generative art pattern (nested loops like your algorithm)
        for (let y = 99; y < 300; y += 2) {
          for (let x = 99; x < 300; x++) {
            const [px, py] = a(x, y)
            
            // Scale to fit full screen while maintaining aspect ratio
            const scaledX = (px / 400) * p.width
            const scaledY = (py / 400) * p.height
            
            // Ensure points are within screen bounds
            if (scaledX >= 0 && scaledX <= p.width && scaledY >= 0 && scaledY <= p.height) {
              p.point(scaledX, scaledY)
            }
          }
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