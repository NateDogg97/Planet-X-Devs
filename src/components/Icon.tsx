interface IconProps {
  className?: string;
  strokeWidth?: number;
}

const icons = {
  'shopping-cart': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  'globe': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  'lightning': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  'code': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  'chart': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  'mobile': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  'shield': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  'puzzle': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  'support': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  'check': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  'star': (props: IconProps) => (
    <svg className={props.className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  'mail': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  'clock': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'chat': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  'clipboard': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  'refresh': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  'shield-check': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  'users': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  'trending-up': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  'arrow-right': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  ),
  'menu': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  'x': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  'chevron-down': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  'external-link': (props: IconProps) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
};

export type IconName = keyof typeof icons;

interface IconComponentProps {
  name: IconName;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  strokeWidth?: number;
}

export default function Icon({ 
  name, 
  className = '', 
  size = 'medium',
  strokeWidth 
}: IconComponentProps) {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
    xlarge: 'w-10 h-10'
  };
  
  const IconComponent = icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <IconComponent className={`${sizes[size]} ${className}`} strokeWidth={strokeWidth} />;
}

// Export for easy access to icon names
export const iconNames = Object.keys(icons) as IconName[];