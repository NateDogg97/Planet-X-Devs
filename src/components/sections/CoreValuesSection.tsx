import Icon from '../ui/Icon';
import { coreValues } from '@/constants';
import Section from '../layout/Section';
import Container from '../layout/Container';

interface CoreValuesSectionProps {
  title?: string;
  values?: typeof coreValues;
  className?: string;
}

export default function CoreValuesSection({
  title = "Core Values That Drive Our Work",
  values = coreValues,
  className = ""
}: CoreValuesSectionProps) {
  return (
    <Section background="white" className={className}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.id} className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon as any} className="text-blue-600 dark:text-blue-400" size="large" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}