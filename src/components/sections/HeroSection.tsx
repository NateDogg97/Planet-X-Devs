import Section from '../layout/Section';
import Container from '../layout/Container';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  children,
  className = ""
}: HeroSectionProps) {
  return (
    <Section background="gradient" className={className}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </Container>
    </Section>
  );
}