'use client';

import { useRef, useState, useEffect } from 'react';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  details?: string[];
}

interface VerticalTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export default function VerticalTimeline({ steps, className = '' }: VerticalTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLineHeight(100);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={timelineRef} className={`relative ${className}`}>
      {/* Vertical timeline line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 md:-translate-x-1/2">
        <div 
          className="w-full bg-gradient-to-b from-nebula-blue via-nebula-purple to-nebula-violet transition-all duration-2000 ease-out"
          style={{ height: `${lineHeight}%` }}
        />
      </div>
      
      <div className="space-y-12 relative">
        {steps.map((step, index) => (
          <div 
            key={step.number} 
            className={`relative flex items-center gap-8 opacity-0 animate-fade-in-up will-change-transform motion-reduce:animate-none ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            style={{ animationDelay: `${index * 0.2 + 0.3}s`, animationFillMode: 'forwards' }}
          >
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
              <h3 className="text-xl font-bold text-nebula-white mb-2">{step.title}</h3>
              <p className="text-nebula-white/70 mb-3">{step.description}</p>
              {step.details && (
                <ul className={`text-sm text-nebula-white/60 space-y-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  {step.details.map((detail, i) => (
                    <li key={i} className={index % 2 === 0 ? 'md:mr-0 md:ml-auto' : ''}>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Step number circle */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-nebula-black border-[3px] border-nebula-violet rounded-full flex items-center justify-center text-lg font-bold text-nebula-white hover:bg-nebula-violet hover:border-nebula-white transition-all duration-300 cursor-pointer will-change-transform z-10">
              {step.number}
            </div>
            
            {/* Empty space for desktop alternating layout */}
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}