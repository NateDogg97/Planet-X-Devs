'use client';

import { useEffect, useState } from 'react';

export default function FloatingParticles() {
  const [isClient, setIsClient] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Server-side: render static particles with CSS animation
  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Static particles that will animate with pure CSS */}
        <div className="particle-container">
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
          <div className="particle particle-5" />
        </div>
        <style jsx>{`
          .particle-container {
            position: absolute;
            inset: 0;
          }
          
          .particle {
            position: absolute;
            width: 8px;
            height: 8px;
            background: rgba(147, 51, 234, 0.5);
            border-radius: 50%;
            animation: floatUp 20s linear infinite;
            will-change: transform;
          }
          
          .particle-1 { left: 10%; animation-delay: 0s; animation-duration: 18s; }
          .particle-2 { left: 30%; animation-delay: 3s; animation-duration: 20s; }
          .particle-3 { left: 50%; animation-delay: 6s; animation-duration: 22s; }
          .particle-4 { left: 70%; animation-delay: 9s; animation-duration: 19s; }
          .particle-5 { left: 90%; animation-delay: 12s; animation-duration: 21s; }
          
          @keyframes floatUp {
            from {
              transform: translateY(100vh) scale(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            to {
              transform: translateY(-100vh) scale(1);
              opacity: 0;
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .particle {
              animation: none;
              opacity: 0.3;
            }
          }
        `}</style>
      </div>
    );
  }

  // Don't animate if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-nebula-violet-30 rounded-full" />
        <div className="absolute top-40 left-[30%] w-2 h-2 bg-nebula-violet-30 rounded-full" />
        <div className="absolute top-60 left-[50%] w-2 h-2 bg-nebula-violet-30 rounded-full" />
        <div className="absolute top-32 left-[70%] w-2 h-2 bg-nebula-violet-30 rounded-full" />
        <div className="absolute top-52 left-[90%] w-2 h-2 bg-nebula-violet-30 rounded-full" />
      </div>
    );
  }

  // Client-side: enhanced particles with better distribution
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${(i * 10) + Math.random() * 10}%`,
    delay: i * 1.5,
    duration: 15 + Math.random() * 10,
    size: Math.random() > 0.5 ? 'w-2 h-2' : 'w-1.5 h-1.5'
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.size} bg-nebula-violet-50 rounded-full animate-float-up will-change-transform`}
          style={{
            left: particle.left,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
}