'use client';

import { useRef, useState, useEffect } from 'react';
import { VerticalTimelineProps } from '@/types';

export default function VerticalTimeline({ steps, layout = 'vertical', className = '' }: VerticalTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const isHorizontal = layout === 'horizontal';
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger line animation
            if (entry.target === timelineRef.current) {
              setLineProgress(100);
            }
            // Trigger step animations
            const stepNumber = parseInt(entry.target.getAttribute('data-step') || '0');
            if (stepNumber > 0) {
              setVisibleSteps(prev => new Set(prev).add(stepNumber));
            }
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px 0px' 
      }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
      
      // Observe each step
      const stepElements = timelineRef.current.querySelectorAll('[data-step]');
      stepElements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);
  
  if (isHorizontal) {
    // Horizontal layout for desktop, vertical for mobile
    return (
      <div ref={timelineRef} className={`relative ${className}`}>
        {/* Background gradient glow */}
        <div className="absolute inset-0 bg-gradient-radial-nebula opacity-10 blur-3xl pointer-events-none" />
        
        {/* Mobile: Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 md:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border-primary to-transparent opacity-30" />
          <div 
            className={`w-full h-full bg-gradient-to-b from-transparent via-nebula-purple through-nebula-violet to-transparent transition-all duration-[2500ms] ease-out origin-top ${
              lineProgress > 0 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            }`}
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          />
        </div>
        
        {/* Desktop: Horizontal timeline line */}
        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border-primary to-transparent opacity-30" />
          <div 
            className={`h-full bg-gradient-to-r from-transparent via-nebula-purple through-nebula-violet to-transparent transition-all duration-[2500ms] ease-out origin-left ${
              lineProgress > 0 ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
            style={{
              width: `${lineProgress}%`,
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          />
        </div>
        
        {/* Mobile: Vertical layout */}
        <div className="md:hidden space-y-12 relative">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              data-step={step.number}
              className={`relative flex items-start gap-8 transition-all duration-700 ease-out ${
                visibleSteps.has(step.number) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Mobile step circle */}
              <div className={`
                w-12 h-12 flex items-center justify-center font-bold text-lg rounded-full 
                transition-all duration-500
                ${visibleSteps.has(step.number) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
              `}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-nebula-purple to-nebula-violet animate-pulse-slow blur-md opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-br from-nebula-purple to-nebula-violet rounded-full flex items-center justify-center text-white shadow-lg shadow-nebula-purple/30 border-2 border-white/20">
                  {step.number}
                </div>
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-nebula-purple/50 to-transparent transition-all duration-500" 
                  style={{ transform: visibleSteps.has(step.number) ? 'scaleX(1)' : 'scaleX(0)' }} />
              </div>
              
              {/* Mobile content */}
              <div className="flex-1">
                <div className={`glass p-6 rounded-2xl transition-all duration-500 ${
                  visibleSteps.has(step.number) ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop: Horizontal layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              data-step={step.number}
              className={`relative text-center transition-all duration-700 ease-out ${
                visibleSteps.has(step.number) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200 + 500}ms`
              }}
            >
              {/* Desktop step circle */}
              <div className={`
                w-16 h-16 mx-auto mb-6 flex items-center justify-center font-bold text-xl rounded-full 
                transition-all duration-500
                ${visibleSteps.has(step.number) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
              `}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-nebula-purple to-nebula-violet animate-pulse-slow blur-md opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-br from-nebula-purple to-nebula-violet rounded-full flex items-center justify-center text-white shadow-lg shadow-nebula-purple/30 border-2 border-white/20 hover:scale-110 hover:shadow-xl hover:shadow-nebula-violet/40 transition-all duration-300">
                  {step.number}
                </div>
              </div>
              
              {/* Desktop content */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-text-primary/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Vertical layout (original)
  return (
    <div ref={timelineRef} className={`relative ${className}`}>
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial-nebula opacity-10 blur-3xl pointer-events-none" />
      
      {/* Vertical timeline line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2">
        {/* Static background line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border-primary to-transparent opacity-30" />
        
        {/* Animated line */}
        <div 
          className={`w-full h-full bg-gradient-to-b from-transparent via-nebula-purple through-nebula-violet to-transparent transition-all duration-[2500ms] ease-out origin-top ${
            lineProgress > 0 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        />
      </div>
      
      <div className="space-y-12 md:space-y-16 relative">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            data-step={step.number}
            className={`relative flex items-start md:items-center gap-8 md:gap-12 transition-all duration-700 ease-out ${
              visibleSteps.has(step.number) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            style={{ 
              transitionDelay: visibleSteps.has(step.number) ? '0ms' : '0ms'
            }}
          >
            {/* Content Card */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
              <div className={`
                glass p-6 rounded-2xl transition-all duration-500 
                ${visibleSteps.has(step.number) 
                  ? 'transform-gpu scale-100 opacity-100' 
                  : 'transform-gpu scale-95 opacity-0'
                }
                hover:shadow-lg hover:shadow-nebula-purple/20
                dark:hover:shadow-nebula-violet/20
              `}
              style={{
                transitionDelay: visibleSteps.has(step.number) ? `${index * 100}ms` : '0ms'
              }}>
                <h3 className="text-xl font-bold text-text-primary mb-2 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-text-secondary mb-3">
                  {step.description}
                </p>
                {step.details && (
                  <ul className={`text-sm text-text-muted space-y-1 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    {step.details.map((detail, i) => (
                      <li 
                        key={i} 
                        className={`
                          transition-all duration-300 
                          ${visibleSteps.has(step.number) 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 ' + (index % 2 === 0 ? 'translate-x-4' : '-translate-x-4')
                          }
                        `}
                        style={{
                          transitionDelay: visibleSteps.has(step.number) ? `${(index * 100) + (i * 50) + 200}ms` : '0ms'
                        }}
                      >
                        <span className={`inline-block ${index % 2 === 0 ? 'md:mr-0 md:ml-auto' : ''}`}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            {/* Step number circle */}
            <div className={`
              absolute left-0 md:static
              w-12 h-12 
              flex items-center justify-center 
              font-bold text-lg
              rounded-full 
              transition-all duration-500
              ${visibleSteps.has(step.number) 
                ? 'scale-100 rotate-0' 
                : 'scale-0 rotate-180'
              }
            `}>
              {/* Glow effect */}
              <div className={`
                absolute inset-0 rounded-full 
                bg-gradient-to-r from-nebula-purple to-nebula-violet 
                animate-pulse-slow blur-md opacity-50
              `} />
              
              {/* Main circle */}
              <div className={`
                relative w-full h-full
                bg-gradient-to-br from-nebula-purple to-nebula-violet
                rounded-full 
                flex items-center justify-center
                text-white
                shadow-lg shadow-nebula-purple/30
                border-2 border-white/20
                dark:border-white/10
                transition-all duration-300
                hover:scale-110 hover:shadow-xl hover:shadow-nebula-violet/40
              `}>
                {step.number}
              </div>
              
              {/* Connection line to content (mobile only) */}
              <div className={`
                absolute left-full top-1/2 -translate-y-1/2
                w-8 h-0.5 md:hidden
                bg-gradient-to-r from-nebula-purple/50 to-transparent
                transition-all duration-500
                ${visibleSteps.has(step.number) 
                  ? 'scale-x-100 opacity-100' 
                  : 'scale-x-0 opacity-0'
                }
              `}
              style={{
                transitionDelay: visibleSteps.has(step.number) ? `${index * 100 + 100}ms` : '0ms'
              }} />
            </div>
            
            {/* Empty space for desktop alternating layout */}
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}