interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  padding?: 'small' | 'medium' | 'large';
}

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'large'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    gradient: 'bg-gradient-to-r from-blue-600 to-indigo-700',
    dark: 'bg-gray-900 text-white'
  };
  
  const paddings = {
    small: 'py-12',
    medium: 'py-16',
    large: 'py-20'
  };
  
  return (
    <section className={`${paddings[padding]} ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}