import ServiceCard from '../content/ServiceCard';
import Icon from '../ui/Icon';
import { services } from '@/constants';
import ErrorBoundary from '../ErrorBoundary';
import Section from '../layout/Section';
import Container from '../layout/Container';

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
      <Section 
        background="gray"
        className={className}
        aria-labelledby="services-heading"
      >
        <Container>
          <header className="text-center mb-16">
            <h2 
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </header>

          <div 
            className="grid lg:grid-cols-2 gap-8"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <meta itemProp="numberOfItems" content={servicesData.length.toString()} />
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={(index + 1).toString()} />
                <div itemProp="item">
                  <ServiceCard
                    title={service.title}
                    price={service.price}
                    description={service.description}
                    features={service.features.map(feature => ({ text: feature }))}
                    timeline={service.timeline}
                    icon={<Icon name={service.icon as any} className="text-blue-600 dark:text-blue-400" />}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </ErrorBoundary>
  );
}