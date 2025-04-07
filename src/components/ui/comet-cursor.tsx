import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  life: number;
}

export function CometCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [opacity, setOpacity] = useState(0.5);
  const lastPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrame = useRef<number | undefined>(undefined);
  const isClickable = useRef<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isClickable.current = target.closest('a, button, [role="button"], [onclick]') !== null;
      
      if (isClickable.current) {
        setParticles([]);
        return;
      }

      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 5) { // Só cria partículas se o mouse se moveu o suficiente
        const angle = Math.atan2(dy, dx);
        const speed = Math.min(distance * 0.5, 10);
        
        const newParticles: Particle[] = [];
        for (let i = 0; i < 3; i++) {
          const size = Math.random() * 3 + 1;
          newParticles.push({
            x: e.clientX,
            y: e.clientY,
            size,
            opacity: 1,
            speedX: Math.cos(angle) * speed * (Math.random() * 0.5 + 0.5),
            speedY: Math.sin(angle) * speed * (Math.random() * 0.5 + 0.5),
            life: 1
          });
        }
        
        setParticles(prev => [...prev, ...newParticles]);
      }
      
      lastPosition.current = { x: e.clientX, y: e.clientY };
    };

    const updateParticles = () => {
      setParticles(prev => {
        return prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            opacity: particle.opacity - 0.02,
            life: particle.life - 0.02,
            speedX: particle.speedX * 0.95,
            speedY: particle.speedY * 0.95
          }))
          .filter(particle => particle.life > 0);
      });

      animationFrame.current = requestAnimationFrame(updateParticles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame.current = requestAnimationFrame(updateParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}
        />
      ))}
    </div>
  );
} 