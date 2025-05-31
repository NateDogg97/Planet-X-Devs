import Icon from '../ui/Icon';
import { homePageFeatures } from '@/constants';
import { FeatureCardProps } from '@/types';
import ErrorBoundary from '../ErrorBoundary';

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: typeof homePageFeatures;
  className?: string;
}

export default function FeaturesSection({
  title = "Services Tailored for Marketing Agencies",
  subtitle = "Comprehensive web development solutions designed to elevate your agency's capabilities",
  features = homePageFeatures,
  className = ""
}: FeaturesSectionProps) {
  return (
    <ErrorBoundary
      fallback="inline"
      title="Features Section Error"
      message="Unable to load features section. Please try refreshing the page."
      context={{ component: 'FeaturesSection', featuresCount: features.length }}
    >
      <section className={`py-20 bg-white dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <Icon name={feature.icon as any} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ErrorBoundary>
  );
}