import { theme, cn, getTypographyClass } from '@/config/theme';

interface ThemedHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'white' | 'primary';
  centered?: boolean;
}

export default function ThemedHeading({
  as = 'h2',
  children,
  className = '',
  color = 'default',
  centered = false
}: ThemedHeadingProps) {
  const Component = as;
  
  const headingClass = getTypographyClass('heading', as);
  
  const colorClasses = {
    default: 'text-gray-900 dark:text-white',
    white: 'text-white',
    primary: `text-${theme.colors.primary.DEFAULT}`
  };
  
  const alignmentClass = centered ? 'text-center' : '';
  
  return (
    <Component className={cn(
      headingClass,
      colorClasses[color],
      alignmentClass,
      className
    )}>
      {children}
    </Component>
  );
}