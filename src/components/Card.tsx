interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  hover?: boolean;
  shadow?: 'none' | 'small' | 'medium' | 'large';
  rounded?: boolean;
}

export default function Card({
  children,
  className = '',
  padding = 'large',
  hover = false,
  shadow = 'large',
  rounded = true
}: CardProps) {
  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };
  
  const shadows = {
    none: '',
    small: 'shadow',
    medium: 'shadow-md',
    large: 'shadow-lg'
  };
  
  const hoverEffect = hover ? 'hover:shadow-xl transition-shadow' : '';
  const roundedClass = rounded ? 'rounded-2xl' : '';
  
  return (
    <div className={`bg-gray-50 dark:bg-gray-800 ${paddings[padding]} ${shadows[shadow]} ${hoverEffect} ${roundedClass} ${className}`}>
      {children}
    </div>
  );
}