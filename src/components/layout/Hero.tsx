import Link from 'next/link';
import Icon from '../ui/Icon';
import StarField from '../ui/StarField';
import FloatingPlanet from '../ui/FloatingPlanet';
import { HeroProps } from '@/types';

export default function Hero({
  title,
  subtitle,
  bullets,
  actions,
  centered = true,
  className = '',
  showPlanets = true
}: HeroProps) {
  return (
    <section className={`relative bg-nebula-black min-h-screen flex items-center overflow-hidden ${className}`}>
      <StarField />
      {showPlanets && (
        <>
          <FloatingPlanet size="medium" position={{ top: '20%', right: '10%' }} delay={1} />
          <FloatingPlanet size="large" position={{ bottom: '30%', left: '5%' }} delay={2.5} />
        </>
      )}
      
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nebula-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-nebula-white opacity-90 mb-8">
            {subtitle}
          </p>
          
          {bullets && bullets.length > 0 && (
            <div className={`space-y-3 mb-8 ${centered ? 'text-left max-w-2xl mx-auto' : ''}`}>
              {bullets.map((bullet, index) => (
                <div 
                  key={index} 
                  className="flex items-center text-lg text-nebula-white animate-slide-in-left"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Icon name="check" className="text-nebula-cyan mr-3 flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          )}
          
          {actions && actions.length > 0 && (
            <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
              {actions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={`px-8 py-4 font-semibold rounded-full transition-all duration-300 inline-block ${
                    action.variant === 'primary'
                      ? 'bg-gradient-nebula text-white shadow-glow hover:shadow-nebula-lg hover:scale-105'
                      : 'border-2 border-nebula-white text-nebula-white hover:bg-nebula-purple'
                  }`}
                >
                  {action.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}