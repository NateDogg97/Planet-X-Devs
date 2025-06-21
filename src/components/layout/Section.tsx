import { theme, cn, type ThemeBackgroundVariant } from '@/config/theme';

// Define types for better type safety
type SectionSpacing = keyof typeof theme.spacing.section;
type SectionBackground = ThemeBackgroundVariant | 'gradient' | 'dark' | 
'transparent' | 'gradient-adaptive' | 'gradient-radial';
type ContainerSize = keyof typeof theme.spacing.container;

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: SectionBackground;
  spacing?: SectionSpacing;
  container?: boolean | ContainerSize;
  id?: string;
  as?: 'section' | 'div' | 'article' | 'aside';
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export default function Section({
  children,
  className = '',
  background = 'primary',
  spacing = 'large',
  container = false,
  id,
  as: Component = 'section',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy
}: SectionProps) {
  // Get background classes based on type
  const getBackgroundClass = (): string => {
    switch (background) {
      case 'gradient':
        return theme.gradients.hero;
      case 'gradient-adaptive':
        return theme.gradients.adaptive;
      case 'gradient-radial':
        return theme.gradients.radial;
      case 'dark':
        return theme.backgrounds.dark;
      case 'transparent':
        return theme.backgrounds.transparent;
      default:
        // Use theme background colors
        return theme.themeColors.background[background as ThemeBackgroundVariant] || '';
    }
  };
  
  // Get container classes if needed
  const getContainerClass = (): string => {
    if (!container) return '';
    
    if (container === true) {
      return theme.spacing.container.DEFAULT;
    }
    
    return theme.spacing.container[container] || theme.spacing.container.DEFAULT;
  };
  
  // Build final classes
  const spacingClass = theme.spacing.section[spacing];
  const backgroundClass = getBackgroundClass();
  const containerClass = getContainerClass();
  
  // Combine all classes using the cn utility
  const sectionClasses = cn(
    spacingClass,
    backgroundClass,
    className
  );
  
  // Wrap children in container if needed
  const content = container ? (
    <div className={containerClass}>
      {children}
    </div>
  ) : children;
  
  return (
    <Component 
      id={id} 
      className={sectionClasses}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {content}
    </Component>
  );
}

// Export types for use in other components
export type { SectionProps, SectionSpacing, SectionBackground, ContainerSize };