import { processSteps } from '@/constants';
import ErrorBoundary from '../ErrorBoundary';

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: typeof processSteps;
  className?: string;
}

export default function ProcessSection({
  title = "How We Work Together",
  subtitle = "A streamlined process designed for busy agencies",
  steps = processSteps,
  className = ""
}: ProcessSectionProps) {
  return (
    <ErrorBoundary
      fallback="inline"
      title="Process Section Error"
      message="Unable to load process section. Please try refreshing the page."
      context={{ component: 'ProcessSection', stepsCount: steps.length }}
    >
      <section className={`py-20 bg-gray-50 dark:bg-gray-800 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{step.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ErrorBoundary>
  );
}