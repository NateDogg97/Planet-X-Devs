'use client';

import Link from 'next/link';
import Icon from '../ui/Icon';
import StarField from '../ui/StarField';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { HeroProps } from '@/types';

const FloatingPlanet = dynamic(() => import('../ui/FloatingPlanet'), {
  ssr: false,
  loading: () => null
});

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
            {title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-nebula-white opacity-90 mb-8">
            {subtitle}
          </p>
          
          {bullets && bullets.length > 0 && (
            <div className={`space-y-3 mb-8 ${centered ? 'text-left max-w-2xl mx-auto' : ''}`}>
              {bullets.map((bullet, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center text-lg text-nebula-white"
                >
                  <Icon name="check" className="text-nebula-cyan mr-3 flex-shrink-0" />
                  <span>{bullet}</span>
                </motion.div>
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
                      : 'border-2 border-nebula-purple text-nebula-violet hover:bg-nebula-purple hover:text-white'
                  }`}
                >
                  {action.text}
                </Link>
              ))}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 mt-16 pt-16 border-t border-nebula-purple-30">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-purple bg-clip-text text-transparent">
                <CountUp end={50} duration={2.5} suffix="+" />
              </div>
              <p className="text-nebula-white/70 mt-2">Agencies Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-purple bg-clip-text text-transparent">
                <CountUp end={200} duration={2.5} suffix="+" />
              </div>
              <p className="text-nebula-white/70 mt-2">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-purple bg-clip-text text-transparent">
                <CountUp end={10} duration={2.5} suffix="+" />
              </div>
              <p className="text-nebula-white/70 mt-2">Platforms Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}