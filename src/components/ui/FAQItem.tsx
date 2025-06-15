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
      className={`group bg-nebula-white/5 rounded-lg border border-nebula-white/10 hover:border-yellow-400/40 transition-colors duration-300 ${className}`}
    >
      <button
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-nebula-white/10 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-nebula-black"
      >
        <h3 className="text-lg font-medium text-nebula-white pr-8">
          {question}
        </h3>
        <span 
          className={`text-yellow-400 transition-transform duration-200 text-2xl ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      
      <div
        id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: height }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="px-6 pb-5 pt-2">
          <p className="text-nebula-white/70">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}