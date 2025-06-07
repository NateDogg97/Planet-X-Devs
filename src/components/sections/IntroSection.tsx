import Section from '../layout/Section';
import Container from '../layout/Container';

interface IntroSectionProps {
  content: string;
  className?: string;
  background?: 'white' | 'gray';
}

export default function IntroSection({
  content,
  className = "",
  background = 'white'
}: IntroSectionProps) {
  return (
    <Section background={background} padding="medium" className={className}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {content}
          </p>
        </div>
      </Container>
    </Section>
  );
}