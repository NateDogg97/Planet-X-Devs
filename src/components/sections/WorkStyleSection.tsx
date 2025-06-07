import Icon from '../ui/Icon';
import Section from '../layout/Section';
import Container from '../layout/Container';

interface WorkStyleItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface WorkStyleSectionProps {
  title?: string;
  items?: WorkStyleItem[];
  className?: string;
}

const defaultWorkStyleItems: WorkStyleItem[] = [
  {
    id: 'communication',
    title: 'Clear communication without the tech jargon',
    description: 'I speak your language. No confusing technical terms or overcomplicated explanations. Just straightforward updates you can share with your clients.',
    icon: 'chat'
  },
  {
    id: 'updates',
    title: 'Regular updates so you\'re never left wondering',
    description: 'Proactive communication is my default. You\'ll get progress updates before you have to ask, keeping you informed and your clients happy.',
    icon: 'check-circle'
  },
  {
    id: 'flexibility',
    title: 'Flexible approach - your process or mine',
    description: 'Whether you have established workflows or need guidance, I adapt to your needs. Use your project management tools or let me handle the process.',
    icon: 'refresh'
  },
  {
    id: 'quality',
    title: 'Quality that protects your reputation',
    description: 'Your reputation is on the line with every project. That\'s why I deliver work that not only meets specifications but exceeds client expectations.',
    icon: 'badge-check'
  }
];

export default function WorkStyleSection({
  title = "How I Work With Agencies",
  items = defaultWorkStyleItems,
  className = ""
}: WorkStyleSectionProps) {
  return (
    <Section background="white" className={className}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item) => (
              <div key={item.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mr-4">
                    <Icon name={item.icon as any} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}