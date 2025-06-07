import Button from '../ui/Button';
import { CTAButton } from '@/types';
import ErrorBoundary from '../ErrorBoundary';
import Section from '../layout/Section';
import Container from '../layout/Container';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttons?: CTAButton[];
  className?: string;
}

export default function CTASection({
  title,
  subtitle,
  buttons = [],
  className = ""
}: CTASectionProps) {
  return (
    <ErrorBoundary
      fallback="inline"
      title="CTA Section Error"
      message="Unable to load call-to-action section. Please try refreshing the page."
      context={{ component: 'CTASection', buttonsCount: buttons.length }}
    >
      <Section background="gradient" className={className}>
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button
                key={index}
                href={button.href}
                variant={button.variant === 'secondary' ? 'secondary' : 'primary'}
                size="large"
                className={button.variant === 'secondary' ? 'bg-blue-500 hover:bg-blue-400' : ''}
              >
                {button.text}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </Section>
    </ErrorBoundary>
  );
}