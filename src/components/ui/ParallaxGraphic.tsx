import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface MousePosition {
  x: number;
  y: number;
}

interface ParallaxLayer {
  id: string;
  depth: number;
  scale: number;
  image: string;
  opacity: number;
}

export default function ParallaxGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isHovered) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to center (-1 to 1)
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      
      // Clamp values to prevent extreme movement
      setMousePosition({ 
        x: Math.max(-1, Math.min(1, x)), 
        y: Math.max(-1, Math.min(1, y))
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  const layers: ParallaxLayer[] = [
    {
      id: 'background',
      depth: 0.1,
      scale: 1,
      image: '/images/galaxy_3@2x.png',
      opacity: 1,
    },
    {
      id: 'midground',
      depth: 0.6,
      scale: 1,
      image: '/images/galaxy_2@2x.png',
      opacity: 1,
    },
    {
      id: 'foreground',
      depth: 1.1,
      scale: 1,
      image: '/images/galaxy_1@2x.png',
      opacity: 1,
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full mx-auto aspect-square overflow-hidden cursor-pointer"
      style={{
        perspective: '800px',
        transformStyle: 'preserve-3d',
      }}
    >
      {layers.map((layer) => {
        const rotateX = mousePosition.y * 8 * layer.depth;
        const rotateY = mousePosition.x * 8 * layer.depth;
        const translateX = mousePosition.x * 20 * layer.depth;
        const translateY = mousePosition.y * 20 * layer.depth;
        
        return (
          <div
            key={layer.id}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `
                translateX(${translateX}px)
                translateY(${translateY}px)
                rotateX(${-rotateX}deg)
                rotateY(${rotateY}deg)
                scale(${layer.scale})
              `,
              opacity: layer.opacity,
              transformStyle: 'preserve-3d',
              willChange: isHovered ? 'transform' : 'auto',
            }}
          >
            <Image
              src={layer.image}
              alt={`Galaxy layer ${layer.id}`}
              width={400}
              height={400}
              className="rounded-full w-full h-full object-cover"
              draggable={false}
              priority={layer.id === 'foreground'}
            />
          </div>
        );
      })}
    </div>
  );
}