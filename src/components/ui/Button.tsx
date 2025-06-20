import Link from 'next/link';
import { theme } from '@/config/theme';

interface ButtonProps {
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

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false
}: ButtonProps) {
  const baseStyles = `font-semibold ${theme.borderRadius.medium} ${theme.animation.transition.medium} text-center ${fullWidth ? 'block' : 'inline-block'}`;
  
  const variantStyles = {
    primary: `bg-nebula-violet text-white hover:bg-nebula-purple`,
    secondary: `bg-white text-nebula-violet hover:bg-gray-100`,
    outline: `bg-white text-nebula-violet border-2 border-nebula-violet hover:bg-nebula-violet-10`
  };
  
  const sizeStyles = {
    small: theme.spacing.padding.button.small + ' text-sm',
    medium: theme.spacing.padding.button.medium,
    large: theme.spacing.padding.button.large
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;
  
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