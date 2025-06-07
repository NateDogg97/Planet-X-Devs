import { theme } from '@/config/theme';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'white' | 'primary';
  centered?: boolean;
}

export default function Heading({
  as = 'h2',
  children,
  className = '',
  color = 'default',
  centered = false
}: HeadingProps) {
  const Component = as;
  
  const headingClass = theme.typography.heading[as];
  
  const colorClasses = {
    default: 'text-gray-900 dark:text-white',
    white: 'text-white',
    primary: `text-${theme.colors.primary.DEFAULT}`
  };
  
  const alignmentClass = centered ? 'text-center' : '';
  
  return (
    <Component className={`${headingClass} ${colorClasses[color]} ${alignmentClass} ${className}`}>
      {children}
    </Component>
  );
}