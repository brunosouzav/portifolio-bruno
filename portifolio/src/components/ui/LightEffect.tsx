import React, { useEffect, useState, useRef } from 'react'
import './LightEffect.css'

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

const LightEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const lastMousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      // Calculate distance moved
      const dx = x - lastMousePosition.current.x
      const dy = y - lastMousePosition.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Create new particles based on movement
      if (distance > 5) {
        const newParticles: Particle[] = Array.from({ length: 3 }, (_, i) => ({
          x: lastMousePosition.current.x + (dx * (i / 3)),
          y: lastMousePosition.current.y + (dy * (i / 3)),
          size: Math.random() * 3 + 2,
          opacity: 1,
          speed: Math.random() * 0.5 + 0.5
        }))
        setParticles(prev => [...prev, ...newParticles])
      }

      lastMousePosition.current = { x, y }
      setMousePosition({ x, y })
    }

    const handleMouseLeave = () => {
      setMousePosition(null)
      setParticles([])
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Update particles animation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            opacity: particle.opacity - 0.02,
            size: particle.size - 0.1
          }))
          .filter(particle => particle.opacity > 0 && particle.size > 0)
      )
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {mousePosition && (
        <>
          <div 
            className="light-effect"
            style={{
              position: 'fixed',
              width: '100%',
              height: '100%',
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 6%, transparent 10%)`,
              pointerEvents: 'none',
              zIndex: 1,
              transition: 'background 0.1s ease-out'
            }}
          />
          <div 
            className="custom-cursor"
            style={{
              left: mousePosition.x,
              top: mousePosition.y
            }}
          />
        </>
      )}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}
        />
      ))}
    </>
  )
}

export default LightEffect 