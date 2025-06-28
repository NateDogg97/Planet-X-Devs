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

// Pre-calculated initial particles for server-side rendering
const INITIAL_PARTICLES = [
  { id: 'static-1', x: 55, y: 45, size: 1.5, opacity: 0.3 },
  { id: 'static-2', x: 45, y: 55, size: 2, opacity: 0.5 },
  { id: 'static-3', x: 60, y: 50, size: 1.8, opacity: 0.7 },
  { id: 'static-4', x: 40, y: 48, size: 1.2, opacity: 0.4 },
  { id: 'static-5', x: 52, y: 62, size: 1.6, opacity: 0.6 },
  { id: 'static-6', x: 48, y: 38, size: 1.4, opacity: 0.8 },
  { id: 'static-7', x: 65, y: 45, size: 1.7, opacity: 0.9 },
  { id: 'static-8', x: 35, y: 55, size: 1.3, opacity: 0.5 },
];

export default function FloatingParticles() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastSpawnTimeRef = useRef<number>(0);
  const particleCounterRef = useRef<number>(0);
  const hasInitialized = useRef<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Check for reduced motion or mobile
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (prefersReducedMotion) return;

    const spawnInterval = 400; // Spawn a new particle every 400ms

    // Initialize with some particles already in motion
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      
      const initialAnimatedParticles: Particle[] = [];
      const now = Date.now();
      
      // Create particles at various stages of their journey
      for (let i = 0; i < 8; i++) {
        const progress = (i / 8) * 0.8; // 0 to 0.8 progress
        const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.5; // Evenly distributed with some randomness
        const distance = progress * 50; // How far from center
        
        initialAnimatedParticles.push({
          id: `initial-${i}`,
          x: 50 + Math.cos(angle) * distance,
          y: 50 + Math.sin(angle) * distance,
          size: Math.random() * 2 + 1,
          speed: 0.02,
          angle: angle,
          opacity: Math.min(1, distance / 40),
          birthTime: now - (progress * 10000) // Simulate being born in the past
        });
      }
      
      setParticles(initialAnimatedParticles);
    }

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
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient]);

  // Server-side render with static particles
  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-1" aria-hidden="true">
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at center, rgba(107, 70, 193, 0.1) 0%, transparent 50%)'
          }}
        />
        
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
        
        {/* Static particles for immediate visual feedback */}
        {INITIAL_PARTICLES.map((particle) => (
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