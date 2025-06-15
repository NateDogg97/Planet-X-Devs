'use client';

import { useEffect, useState } from 'react';

export default function FloatingParticles() {
  const [isClient, setIsClient] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Check for mobile devices
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mobileQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMotionChange);
    mobileQuery.addEventListener('change', handleMobileChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      mobileQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);

  // Server-side: render static particles with CSS animation (desktop only)
  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
        {/* Static particles that will animate with pure CSS - reduced count */}
        <div className="particle-container">
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
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
          
          .particle-1 { left: 20%; animation-delay: 0s; animation-duration: 25s; }
          .particle-2 { left: 50%; animation-delay: 8s; animation-duration: 30s; }
          .particle-3 { left: 80%; animation-delay: 16s; animation-duration: 28s; }
          
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

  // Don't render on mobile or if user prefers reduced motion
  if (prefersReducedMotion || isMobile) {
    return null;
  }

  // Client-side: limited particles for desktop only
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: `${20 + (i * 15)}%`,
    delay: i * 3,
    duration: 25 + (i * 2),
    size: i % 2 === 0 ? 'w-2 h-2' : 'w-1.5 h-1.5'
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.size} bg-nebula-violet-30 rounded-full opacity-60`}
          style={{
            left: particle.left,
            animation: `floatUp ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes floatUp {
          from {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          to {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}