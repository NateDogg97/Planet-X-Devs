'use client';

import { useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isClient, isAutoPlaying, testimonials.length]);

  // Server-side: render first testimonial statically
  if (!isClient) {
    return (
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -top-8 -left-4 text-6xl text-nebula-violet-30 animate-pulse-slow">"</div>
        <div className="bg-nebula-violet-10 rounded-3xl p-8 md:p-12">
          <blockquote className="text-center">
            <p className="text-xl text-nebula-white mb-6">"{testimonials[0].quote}"</p>
            <footer className="text-nebula-violet">
              — {testimonials[0].author}
              {testimonials[0].role && <span className="text-nebula-white/60">, {testimonials[0].role}</span>}
            </footer>
          </blockquote>
        </div>
      </div>
    );
  }

  // Client-side: enhanced carousel with native animations
  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute -top-8 -left-4 text-6xl text-nebula-violet-30 animate-pulse-slow">"</div>
      
      <div className="bg-nebula-violet-10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="relative h-[200px] md:h-[150px]">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className={`absolute inset-0 text-center transition-all duration-500 ${
                index === currentIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              aria-hidden={index !== currentIndex}
            >
              <p className="text-xl text-text-primary mb-6">"{testimonial.quote}"</p>
              <footer className="text-nebula-violet">
                — {testimonial.author}
                {testimonial.role && <span className="text-text-primary/60">, {testimonial.role}</span>}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-nebula-violet w-8' 
                  : 'bg-nebula-violet-30 hover:bg-nebula-violet-50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 opacity-0 hover:opacity-100 focus:opacity-100 transition-all duration-300 p-2 bg-nebula-violet-30 rounded-full hover:bg-nebula-violet-50"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6 text-nebula-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-0 hover:opacity-100 focus:opacity-100 transition-all duration-300 p-2 bg-nebula-violet-30 rounded-full hover:bg-nebula-violet-50"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6 text-nebula-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}