import { theme, cn, getSpacingClass } from '@/config/theme';

interface ThemedSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  padding?: 'small' | 'medium' | 'large';
}

export default function ThemedSection({
  children,
  className = '',
  background = 'white',
  padding = 'large'
}: ThemedSectionProps) {
  const backgrounds = {
    white: theme.backgrounds.white,
    gray: theme.backgrounds.gray,
    gradient: theme.gradients.hero,
    dark: theme.backgrounds.dark
  };
  
  const paddingClass = getSpacingClass('section', padding);
  
  return (
    <section className={cn(paddingClass, backgrounds[background], className)}>
      {children}
    </section>
  );
}