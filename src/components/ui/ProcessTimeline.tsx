'use client';

import { useRef, useState, useEffect } from 'react';

const steps = [
  { number: 1, title: 'Discovery', description: 'Mission briefing' },
  { number: 2, title: 'Development', description: 'Building phase' },
  { number: 3, title: 'Testing', description: 'Quality check' },
  { number: 4, title: 'Launch', description: 'Go live!' }
];

export default function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLineWidth(100);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline line */}
      <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-nebula-blue via-nebula-purple to-nebula-violet transition-all duration-2000 ease-out"
          style={{ width: `${lineWidth}%` }}
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={step.number} 
            className="relative text-center opacity-0 animate-fade-in-up will-change-transform motion-reduce:animate-none"
            style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
          >
            <div className="w-20 h-20 mx-auto bg-nebula-black border-[3px] border-nebula-violet rounded-full flex items-center justify-center text-2xl font-bold text-nebula-white hover:bg-nebula-violet hover:border-nebula-white transition-all duration-300 cursor-pointer will-change-transform">
              {step.number}
            </div>
            <h4 className="mt-4 text-lg font-semibold text-nebula-white">{step.title}</h4>
            <p className="text-sm text-nebula-white/60">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}