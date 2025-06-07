import { theme } from '@/config/theme';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'full' | 'DEFAULT';
}

export default function Container({
  children,
  className = '',
  size = 'DEFAULT'
}: ContainerProps) {
  const containerClass = theme.spacing.container[size] || theme.spacing.container.DEFAULT;
  
  return (
    <div className={`${containerClass} ${className}`}>
      {children}
    </div>
  );
}