import { theme } from '@/config/theme';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  padding?: 'small' | 'medium' | 'large';
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'large',
  id
}: SectionProps) {
  const backgrounds = {
    white: theme.backgrounds.white,
    gray: theme.backgrounds.gray,
    gradient: theme.gradients.hero,
    dark: theme.backgrounds.dark
  };
  
  const paddingClass = theme.spacing.section[padding];
  
  return (
    <section id={id} className={`${paddingClass} ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}