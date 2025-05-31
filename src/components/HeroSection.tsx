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
    <section className={`bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 ${className}`}>
      <div className="container mx-auto px-6">
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
      </div>
    </section>
  );
}