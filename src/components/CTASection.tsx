import Link from 'next/link';

interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

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
    <section className={`py-20 bg-gradient-to-r from-blue-600 to-indigo-700 ${className}`}>
      <div className="container mx-auto px-6 text-center">
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
              <Link
                key={index}
                href={button.href}
                className={`px-8 py-4 font-semibold rounded-lg transition-colors inline-block ${
                  button.variant === 'secondary'
                    ? 'bg-blue-500 text-white hover:bg-blue-400'
                    : 'bg-white text-blue-600 hover:bg-gray-100'
                }`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}