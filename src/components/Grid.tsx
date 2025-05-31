interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  className?: string;
  responsive?: boolean;
}

export default function Grid({
  children,
  cols = 3,
  gap = 'medium',
  className = '',
  responsive = true
}: GridProps) {
  const gapSizes = {
    small: 'gap-4',
    medium: 'gap-8',
    large: 'gap-12'
  };
  
  const colsClasses = {
    1: '',
    2: responsive ? 'md:grid-cols-2' : 'grid-cols-2',
    3: responsive ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    4: responsive ? 'md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-4'
  };
  
  return (
    <div className={`grid ${colsClasses[cols]} ${gapSizes[gap]} ${className}`}>
      {children}
    </div>
  );
}