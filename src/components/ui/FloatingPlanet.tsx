'use client';

interface FloatingPlanetProps {
  size: 'small' | 'medium' | 'large';
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
}

export default function FloatingPlanet({ size, position, delay = 0 }: FloatingPlanetProps) {
  const sizes = {
    small: 'w-20 h-20',
    medium: 'w-32 h-32',
    large: 'w-40 h-40'
  };

  return (
    <div
      className={`absolute ${sizes[size]} bg-gradient-planet rounded-full opacity-50 animate-float will-change-transform motion-reduce:animate-none`}
      style={{
        ...position,
        animationDelay: `${delay}s`,
      }}
    />
  );
}