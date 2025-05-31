import Link from 'next/link';

interface HeroAction {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroProps {
  title: string;
  subtitle: string;
  bullets?: string[];
  actions?: HeroAction[];
  centered?: boolean;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  bullets,
  actions,
  centered = true,
  className = ''
}: HeroProps) {
  return (
    <section className={`relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 ${className}`}>
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {subtitle}
          </p>
          
          {bullets && bullets.length > 0 && (
            <div className={`space-y-3 mb-8 ${centered ? 'text-left max-w-2xl mx-auto' : ''}`}>
              {bullets.map((bullet, index) => (
                <div key={index} className="flex items-center text-lg text-gray-700 dark:text-gray-200">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          )}
          
          {actions && actions.length > 0 && (
            <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
              {actions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={`px-8 py-4 font-semibold rounded-lg transition-colors inline-block ${
                    action.variant === 'primary'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {action.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}