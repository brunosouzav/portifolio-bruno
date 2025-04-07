import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${fill} 0%, transparent 20%)`,
          opacity: 0.3,
          transform: 'translateZ(0)',
          willChange: 'background-position',
        }}
      />
    </div>
  )
} 