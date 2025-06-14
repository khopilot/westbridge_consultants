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
        console.log('🎨 HeroAnimation: Setting up original curve animation with gradient')
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(sketchRef.current!)
        console.log('🎨 HeroAnimation: Original curve animation initialized')
      }

      p.draw = () => {
        // Clear background to keep CSS gradient visible (instead of background(6))
        p.clear()
        
        // Set stroke properties (white with transparency for visibility on gradient)
        p.stroke(255, 255, 255, 92)
        p.strokeWeight(1)
        
        // Increment time (original speed)
        t += p.PI / 90
        
        // Draw 20,000 points in elegant curves (original parameters)
        for (let i = 20000; i > 0; i--) {
          a(i % 100, i / 350)
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
        background: 'linear-gradient(135deg, #1a2e4e 0%, #6b7280 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  )
}

export default HeroAnimation 