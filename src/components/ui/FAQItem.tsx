'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
}

export default function FAQItem({ 
  question, 
  answer, 
  defaultOpen = false,
  className = '' 
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current;
      if (contentEl) {
        setHeight(contentEl.scrollHeight);
      }
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleOpen();
    }
  };

  return (
    <div 
      className={`
        group relative overflow-hidden
        
        /* Light mode styles */
        bg-white
        border border-gray-200
        hover:border-nebula-violet/50
        shadow-sm
        hover:shadow-md
        hover:shadow-nebula-violet/10
        
        /* Dark mode styles */
        dark:bg-gray-800/50
        dark:border-gray-700
        dark:hover:border-nebula-cyan/50
        dark:shadow-none
        dark:hover:shadow-lg
        dark:hover:shadow-nebula-cyan/10
        
        /* Shared styles */
        rounded-xl
        transition-all duration-300
        ${className}
      `}
    >
      {/* Gradient background on hover - subtle in light, stronger in dark */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
        bg-gradient-to-br from-nebula-violet/5 to-nebula-cyan/5
        dark:from-nebula-violet/10 dark:to-nebula-cyan/10
        ${isOpen ? 'opacity-100' : ''}
      `} />
      
      <button
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className={`
          relative w-full px-6 py-5 text-left 
          flex items-center justify-between 
          
          /* Light mode button styles */
          hover:bg-gray-50/50
          focus:bg-gray-50
          
          /* Dark mode button styles */
          dark:hover:bg-white/5
          dark:focus:bg-white/5
          
          /* Shared button styles */
          transition-all duration-200 
          rounded-xl
          focus:outline-none 
          focus-visible:outline-none
        `}
      >
        <h3 className={`
          text-lg font-semibold pr-8 text-text-reverse
          
          /* Hover effect */
          transition-colors duration-200
          group-hover:text-nebula-violet
          dark:group-hover:text-nebula-cyan
        `}>
          {question}
        </h3>
        
        {/* Plus/Minus indicator with smooth animation */}
        <span 
          className={`
            flex-shrink-0 relative w-6 h-6
            transition-all duration-300 ease-out
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
          aria-hidden="true"
        >
          {/* Horizontal line */}
          <span className={`
            absolute top-1/2 left-0 w-full h-0.5 
            bg-nebula-violet
            dark:bg-nebula-cyan
            transform -translate-y-1/2
            transition-all duration-300
            ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}
          `} />
          
          {/* Vertical line */}
          <span className={`
            absolute top-0 left-1/2 w-0.5 h-full
            bg-nebula-violet
            dark:bg-nebula-cyan
            transform -translate-x-1/2
          `} />
        </span>
      </button>
      
      <div
        id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: height }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="relative px-6 pb-5 pt-0">
          {/* Answer text with fade-in animation */}
          <p className={`
            text-base leading-relaxed
            
            /* Light mode text */
            text-gray-600
            
            /* Dark mode text */
            dark:text-gray-300
            
            /* Animation */
            transition-all duration-300 delay-100
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          `}>
            {answer}
          </p>
          
        </div>
      </div>
    </div>
  );
}