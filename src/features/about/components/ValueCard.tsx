import { cn } from '@/config/theme';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: 'default' | 'elevated' | 'colored';
}

export default function ValueCard({
  icon,
  title,
  description,
  className = '',
  variant = 'elevated'
}: ValueCardProps) {
  // Determine which glass effect to use
  const glassClass = variant === 'colored' ? 'glass-violet' : 
                     variant === 'elevated' ? 'glass-elevated' : 
                     'glass';

  return (
    <div 
      className={cn(
        // Base classes
        'value-card group relative p-8 rounded-2xl',
        
        // Glass effect (handles background, border, and blur)
        glassClass,
        
        // Transitions
        'transition-all duration-300',
        
        // Hover effects
        'hover:border-border-accent hover:scale-105',
        'hover:shadow-nebula dark:hover:shadow-nebula-lg',
        
        // Custom classes
        className
      )}
    >
      <div className="relative z-10">
        {/* Icon container */}
        <div 
          className={cn(
            'value-card-icon',
            'w-16 h-16 mb-6 rounded-full',
            'bg-bg-tertiary dark:bg-nebula-purple/20',
            'flex items-center justify-center',
            'text-text-accent',
            'transition-all duration-300',
            'group-hover:bg-text-accent/10 group-hover:scale-110'
          )}
        >
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-text-primary mb-3">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Hover gradient overlay */}
      <div 
        className={cn(
          'absolute inset-0 rounded-2xl',
          'bg-gradient-to-br from-text-accent/5 to-text-accent-alt/5',
          'opacity-0 transition-opacity duration-300',
          'group-hover:opacity-100 pointer-events-none'
        )}
      />
    </div>
  );
}