import Link from 'next/link';
import { theme, cn, getColorClass, getSpacingClass } from '@/config/theme';

interface ThemedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function ThemedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false
}: ThemedButtonProps) {
  const baseStyles = cn(
    'font-semibold',
    theme.borderRadius.medium,
    theme.animation.transition.medium,
    'inline-block text-center'
  );
  
  const variantStyles = {
    primary: cn(
      `bg-${theme.colors.primary.DEFAULT}`,
      'text-white',
      `hover:bg-${theme.colors.primary.hover}`,
      disabled && 'opacity-50 cursor-not-allowed'
    ),
    secondary: cn(
      'bg-white',
      `text-${theme.colors.primary.DEFAULT}`,
      'hover:bg-gray-100',
      disabled && 'opacity-50 cursor-not-allowed'
    ),
    outline: cn(
      'bg-white',
      `text-${theme.colors.primary.DEFAULT}`,
      theme.borders.primary,
      'hover:bg-blue-50',
      disabled && 'opacity-50 cursor-not-allowed'
    )
  };
  
  const sizeStyles = getSpacingClass('padding', size);
  const widthStyle = fullWidth ? 'w-full' : '';
  
  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles,
    widthStyle,
    className
  );
  
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}