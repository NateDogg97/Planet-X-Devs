import { theme, cn, getSpacingClass } from '@/config/theme';

interface ThemedContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'full' | 'DEFAULT';
}

export default function ThemedContainer({
  children,
  className = '',
  size = 'DEFAULT'
}: ThemedContainerProps) {
  const containerClass = getSpacingClass('container', size);
  
  return (
    <div className={cn(containerClass, className)}>
      {children}
    </div>
  );
}