import { theme, cn, getSpacingClass } from '@/config/theme';

interface ThemedCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'small' | 'medium' | 'large';
  hover?: boolean;
  shadow?: 'none' | 'small' | 'medium' | 'large';
}

export default function ThemedCard({
  children,
  className = '',
  padding = 'large',
  hover = false,
  shadow = 'large'
}: ThemedCardProps) {
  const paddingClass = getSpacingClass('padding', `card.${padding}`);
  const shadowClass = theme.shadow[shadow];
  const hoverEffect = hover ? cn(theme.animation.hover.shadow, theme.animation.transition.medium) : '';
  
  return (
    <div className={cn(
      theme.backgrounds.gray,
      paddingClass,
      shadowClass,
      theme.borderRadius.xlarge,
      hoverEffect,
      className
    )}>
      {children}
    </div>
  );
}