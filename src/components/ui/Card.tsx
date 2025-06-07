import { theme } from '@/config/theme';

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
    small: theme.spacing.padding.card.small,
    medium: theme.spacing.padding.card.medium,
    large: theme.spacing.padding.card.large
  };
  
  const shadows = theme.shadow;
  
  const hoverEffect = hover ? `${theme.animation.hover.shadow} ${theme.animation.transition.medium}` : '';
  const roundedClass = rounded ? theme.borderRadius.xlarge : '';
  
  return (
    <div className={`${theme.backgrounds.gray} ${paddings[padding]} ${shadows[shadow]} ${hoverEffect} ${roundedClass} ${className}`}>
      {children}
    </div>
  );
}