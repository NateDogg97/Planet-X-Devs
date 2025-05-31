import TestimonialCard from '../content/TestimonialCard';
import { testimonials } from '@/constants';

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: typeof testimonials;
  className?: string;
}

export default function TestimonialsSection({
  title = "What Agencies Say About Us",
  subtitle = "Don't just take our word for it",
  testimonials: testimonialsData = testimonials,
  className = ""
}: TestimonialsSectionProps) {
  return (
    <section className={`py-20 bg-white dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.slice(0, 3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}