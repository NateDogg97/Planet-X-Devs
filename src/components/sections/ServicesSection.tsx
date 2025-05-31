import ServiceCard from '../content/ServiceCard';
import Icon from '../ui/Icon';
import { services } from '@/constants';
import ErrorBoundary from '../ErrorBoundary';

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: typeof services;
  className?: string;
}

export default function ServicesSection({
  title = "Core Development Services",
  subtitle = "Transparent pricing with no hidden fees. All services include white-label delivery and ongoing support.",
  services: servicesData = services,
  className = ""
}: ServicesSectionProps) {
  return (
    <ErrorBoundary
      fallback="inline"
      title="Services Section Error"
      message="Unable to load services section. Please try refreshing the page."
      context={{ component: 'ServicesSection', servicesCount: servicesData.length }}
    >
      <section className={`py-20 bg-gray-50 dark:bg-gray-800 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              price={service.price}
              description={service.description}
              features={service.features.map(feature => ({ text: feature }))}
              timeline={service.timeline}
              icon={<Icon name={service.icon as any} className="text-blue-600 dark:text-blue-400" />}
            />
          ))}
        </div>
      </div>
    </section>
    </ErrorBoundary>
  );
}