import Icon from '../ui/Icon';
import { benefits } from '@/constants';
import ErrorBoundary from '../ErrorBoundary';

interface BenefitsSectionProps {
  title?: string;
  benefits?: typeof benefits;
  includeStats?: boolean;
  className?: string;
}

export default function BenefitsSection({
  title = "Why Agencies Choose Us",
  benefits: benefitsData = benefits,
  includeStats = true,
  className = ""
}: BenefitsSectionProps) {
  return (
    <ErrorBoundary
      fallback="inline"
      title="Benefits Section Error"
      message="Unable to load benefits section. Please try refreshing the page."
      context={{ component: 'BenefitsSection', benefitsCount: benefitsData.length }}
    >
      <section className={`py-20 bg-gray-50 dark:bg-gray-800 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {title}
            </h2>
            <div className="space-y-6">
              {benefitsData.map((benefit) => (
                <div key={benefit.id} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                    <Icon name="check" className="text-white" size="small" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {includeStats && (
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Client Satisfaction Rate</p>
                
                <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Projects Delivered</p>
                
                <div className="text-5xl font-bold text-blue-600 mb-2">48hrs</div>
                <p className="text-gray-600 dark:text-gray-300">Average Response Time</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </ErrorBoundary>
  );
}