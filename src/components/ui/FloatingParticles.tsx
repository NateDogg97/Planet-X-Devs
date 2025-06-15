'use client';

import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  opacity: number;
  birthTime: number;
}

export default function FloatingParticles() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();
  const lastSpawnTimeRef = useRef<number>(0);
  const particleCounterRef = useRef<number>(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Check for reduced motion or mobile
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (prefersReducedMotion || isMobile) return;

    const spawnInterval = 400; // Spawn a new particle every 400ms (25 particles over 10 seconds)

    // Animation loop
    const animate = (timestamp: number) => {
      // Initialize lastSpawnTime on first frame
      if (lastSpawnTimeRef.current === 0) {
        lastSpawnTimeRef.current = timestamp;
      }

      // Spawn new particle if enough time has passed
      if (timestamp - lastSpawnTimeRef.current >= spawnInterval) {
        lastSpawnTimeRef.current = timestamp;
        
        const newParticle: Particle = {
          id: `particle-${particleCounterRef.current++}`,
          x: 50,
          y: 50,
          size: Math.random() * 2 + 1,
          speed: 0.02,
          angle: Math.random() * Math.PI * 2,
          opacity: 0,
          birthTime: timestamp
        };

        setParticles(prev => [...prev, newParticle]);
      }

      // Update all particles
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // Calculate current position
          const dx = particle.x - 50;
          const dy = particle.y - 50;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Exponential acceleration
          const acceleration = Math.pow(1.06, distance);
          const velocity = particle.speed * acceleration;
          
          // Update position
          const newX = particle.x + Math.cos(particle.angle) * velocity;
          const newY = particle.y + Math.sin(particle.angle) * velocity;
          
          // Calculate opacity (0 at center, 1 at edge)
          const newOpacity = Math.min(1, distance / 40);
          
          return {
            ...particle,
            x: newX,
            y: newY,
            opacity: newOpacity
          };
        }).filter(particle => {
          // Remove particles that are off screen
          return particle.x > -5 && particle.x < 105 && particle.y > -5 && particle.y < 105;
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate(0);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient]);

  // Server-side render
  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at center, rgba(107, 70, 193, 0.1) 0%, transparent 50%)'
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Center glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
      
      {/* Render particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: 'white',
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${particle.size * 3}px rgba(255, 255, 255, ${particle.opacity * 0.5})`
          }}
        />
      ))}
    </div>
  );
}