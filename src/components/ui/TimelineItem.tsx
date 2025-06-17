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
    <div className={`timeline-item relative ${isLast ? 'pb-0' : 'pb-12'} ${className}`}>
      {/* Timeline marker (centered on timeline line) */}
      <div className="timeline-marker absolute transform -translate-x-1/2 md:left-1/2">
        <div className="timeline-dot relative z-10 w-4 h-4 mt-1.5 rounded-full bg-nebula-violet border-4 border-nebula-black animate-glow-pulse shadow-lg shadow-nebula-violet/30" />
      </div>
      
      {/* Content - positioned left or right of timeline */}
      <div className={`timeline-content group w-full md:w-5/12 ${
        isLeft 
          ? 'md:ml-0 md:text-right md:pr-8' 
          : 'md:ml-auto md:text-left md:pl-8'
      } pl-8 md:pl-0`}>
        <div className={`timeline-year text-sm font-semibold text-nebula-cyan mb-2 tracking-wider uppercase ${
          isLeft ? 'md:text-right' : 'md:text-left'
        }`}>
          {year}
        </div>
        <h3 className={`timeline-title text-xl md:text-2xl font-semibold text-nebula-white mb-3 transition-colors duration-300 group-hover:text-nebula-violet ${
          isLeft ? 'md:text-right' : 'md:text-left'
        }`}>
          {title}
        </h3>
        <p className={`timeline-description text-gray-400 leading-relaxed max-w-2xl ${
          isLeft ? 'md:text-right md:ml-auto' : 'md:text-left'
        }`}>
          {description}
        </p>
      </div>
    </div>
  );
}