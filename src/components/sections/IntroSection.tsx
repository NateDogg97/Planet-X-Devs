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
  const backgroundClasses = background === 'white' 
    ? 'bg-white dark:bg-gray-900' 
    : 'bg-gray-50 dark:bg-gray-800';

  return (
    <section className={`py-12 ${backgroundClasses} ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}