import Icon from '../ui/Icon';
import { TestimonialCardProps } from '@/types';
import ErrorBoundary from '../ErrorBoundary';

export default function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  className = ""
}: TestimonialCardProps) {
  return (
    <ErrorBoundary
      fallback="minimal"
      message="Unable to load testimonial"
      showRetry={false}
      context={{ component: 'TestimonialCard', author }}
    >
      <div className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-xl ${className}`}>
      {rating > 0 && (
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Icon key={i} name="star" className="text-yellow-400" size="small" />
          ))}
        </div>
      )}
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        "{quote}"
      </p>
      <div className="font-semibold text-gray-900 dark:text-white">
        {author}
      </div>
      {role && (
        <div className="text-sm text-gray-500">
          {role}
        </div>
      )}
    </div>
    </ErrorBoundary>
  );
}