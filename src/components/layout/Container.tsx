interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
}

export default function Container({
  children,
  className = '',
  size = 'large'
}: ContainerProps) {
  const sizes = {
    small: 'max-w-2xl',
    medium: 'max-w-4xl',
    large: 'max-w-6xl',
    full: 'max-w-full'
  };
  
  return (
    <div className={`container mx-auto px-6 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}