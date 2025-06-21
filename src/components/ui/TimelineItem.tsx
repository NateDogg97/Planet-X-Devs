import { cn } from '@/config/theme';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isFirst?: boolean;
  isLast?: boolean;
  position?: 'left' | 'right';
  className?: string;
}

export default function TimelineItem({
  year,
  title,
  description,
  isFirst = false,
  isLast = false,
  position = 'right',
  className = ''
}: TimelineItemProps) {
  const isLeft = position === 'left';
  
  return (
    <div className={cn(
      'timeline-item relative',
      isLast ? 'pb-0' : 'pb-12',
      className
    )}>
      {/* Timeline marker - uses existing CSS animations */}
      <div className={cn("timeline-marker absolute transform -translate-x-1/2 md:left-1/2",
        isLast ? 'bottom-8' : ''
      )}>
        <div className={cn(
          'timeline-dot relative z-10 w-4 h-4 rounded-full',
          isFirst ? 'mt-1.5' : '',
          'bg-text-accent dark:bg-nebula-violet',
          'border-4 border-bg-primary dark:border-nebula-black',
          'animate-glow-pulse',
          'shadow-lg shadow-text-accent/30 dark:shadow-nebula-violet/30'
        )} />
      </div>
      
      {/* Content - uses existing timeline-content styles */}
      <div className={cn(
        'timeline-content group w-full md:w-5/12',
        isLeft 
          ? 'md:ml-0 md:text-right md:pr-8' 
          : 'md:ml-auto md:text-left md:pl-8',
        'pl-8 md:pl-0'
      )}>
        {/* Year badge */}
        <div className={cn(
          'timeline-year text-sm font-semibold mb-2 tracking-wider uppercase',
          'text-text-accent dark:text-nebula-cyan',
          isLeft ? 'md:text-right' : 'md:text-left'
        )}>
          {year}
        </div>
        
        {/* Title */}
        <h3 className={cn(
          'timeline-title text-xl md:text-2xl font-semibold mb-3',
          'text-text-primary',
          'transition-colors duration-300',
          'group-hover:text-text-accent dark:group-hover:text-nebula-violet',
          isLeft ? 'md:text-right' : 'md:text-left'
        )}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={cn(
          'timeline-description leading-relaxed max-w-2xl',
          'text-text-secondary',
          isLeft ? 'md:text-right md:ml-auto' : 'md:text-left'
        )}>
          {description}
        </p>
      </div>
    </div>
  );
}