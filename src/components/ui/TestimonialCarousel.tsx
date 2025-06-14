'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -top-8 -left-4 text-6xl text-nebula-violet-30 animate-pulse-slow">"</div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        className="bg-nebula-violet-10 rounded-3xl p-8 md:p-12"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <blockquote className="text-center">
              <p className="text-xl text-nebula-white mb-6">"{testimonial.quote}"</p>
              <footer className="text-nebula-violet">
                — {testimonial.author}
                {testimonial.role && <span className="text-nebula-white/60">, {testimonial.role}</span>}
              </footer>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}