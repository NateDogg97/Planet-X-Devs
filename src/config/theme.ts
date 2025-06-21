export const theme = {
  // Theme-aware colors that adapt to light/dark mode
  themeColors: {
    // Text colors that automatically adjust
    text: {
      primary: 'text-nebula-black dark:text-nebula-white',
      secondary: 'text-gray-700 dark:text-gray-300',
      tertiary: 'text-gray-600 dark:text-gray-400',
      muted: 'text-gray-500 dark:text-gray-500',
      accent: 'text-nebula-violet dark:text-nebula-cyan',
      inverse: 'text-nebula-white dark:text-nebula-black',
      error: 'text-red-600 dark:text-red-400',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400'
    },
    
    // Background colors that automatically adjust
    background: {
      primary: 'bg-white dark:bg-nebula-black',
      secondary: 'bg-gray-50 dark:bg-gray-900',
      tertiary: 'bg-gray-100 dark:bg-gray-800',
      card: 'bg-white dark:bg-gray-800',
      cardHover: 'bg-gray-50 dark:bg-gray-700',
      inverse: 'bg-nebula-black dark:bg-white',
      overlay: 'bg-black/50 dark:bg-black/70'
    },
    
    // Border colors that automatically adjust
    border: {
      primary: 'border-gray-200 dark:border-gray-700',
      secondary: 'border-gray-300 dark:border-gray-600',
      accent: 'border-nebula-violet dark:border-nebula-cyan',
      subtle: 'border-gray-100 dark:border-gray-800',
      error: 'border-red-300 dark:border-red-700'
    },
    
    // Glass morphism effects
    glass: {
      light: 'bg-white/70 backdrop-blur-md border border-gray-200/50',
      dark: 'bg-gray-800/50 backdrop-blur-md border border-gray-700/50',
      adaptive: 'bg-white/70 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50'
    }
  },
  
  // Original color palette (kept for specific use cases)
  colors: {
    primary: {
      50: 'nebula-violet-10',
      100: 'nebula-violet-20',
      200: 'nebula-violet-30',
      300: 'nebula-violet-40',
      400: 'nebula-violet-50',
      500: 'nebula-violet',
      600: 'nebula-violet',
      700: 'nebula-purple',
      800: 'nebula-purple-dark',
      900: 'nebula-black',
      DEFAULT: 'nebula-violet',
      hover: 'nebula-purple',
      light: 'nebula-violet-20',
      dark: 'nebula-purple-dark'
    },
    secondary: {
      50: 'nebula-cyan-10',
      100: 'nebula-cyan-20',
      200: 'nebula-cyan-30',
      300: 'nebula-cyan-40',
      400: 'nebula-cyan-50',
      500: 'nebula-cyan',
      600: 'nebula-cyan',
      700: 'stellar-blue',
      800: 'stellar-blue',
      900: 'stellar-blue',
      DEFAULT: 'nebula-cyan',
      hover: 'stellar-blue',
      light: 'nebula-cyan-20',
      dark: 'stellar-blue'
    },
    gray: {
      50: 'gray-50',
      100: 'gray-100',
      200: 'gray-200',
      300: 'gray-300',
      400: 'gray-400',
      500: 'gray-500',
      600: 'gray-600',
      700: 'gray-700',
      800: 'gray-800',
      900: 'gray-900',
      DEFAULT: 'gray-700'
    },
    success: {
      light: 'green-50',
      DEFAULT: 'green-600',
      dark: 'green-800',
      text: 'green-800',
      border: 'green-200'
    },
    error: {
      light: 'red-50',
      DEFAULT: 'red-600',
      dark: 'red-800',
      text: 'red-800',
      border: 'red-200'
    },
    warning: {
      light: 'yellow-50',
      DEFAULT: 'yellow-600',
      dark: 'yellow-800',
      text: 'yellow-800',
      border: 'yellow-200'
    },
    info: {
      light: 'nebula-cyan/10',
      DEFAULT: 'nebula-cyan',
      dark: 'stellar-blue',
      text: 'nebula-cyan',
      border: 'nebula-cyan/30'
    }
  },
  
  spacing: {
    section: {
      xsmall: 'py-4',
      small: 'py-12',
      medium: 'py-16',
      large: 'py-20',
      xlarge: 'py-24 lg:py-32'
    },
    container: {
      DEFAULT: 'container mx-auto px-6',
      small: 'max-w-2xl mx-auto px-6',
      medium: 'max-w-4xl mx-auto px-6',
      large: 'max-w-6xl mx-auto px-6',
      full: 'w-full px-6'
    },
    padding: {
      card: {
        small: 'p-4',
        medium: 'p-6',
        large: 'p-8',
        xlarge: 'p-8 md:p-12'
      },
      button: {
        small: 'px-4 py-2',
        medium: 'px-6 py-3',
        large: 'px-8 py-4'
      }
    },
    gap: {
      small: 'gap-4',
      medium: 'gap-8',
      large: 'gap-12'
    },
    margin: {
      element: {
        small: 'mb-2',
        medium: 'mb-4',
        large: 'mb-6',
        xlarge: 'mb-8'
      },
      section: {
        small: 'mb-8',
        medium: 'mb-12',
        large: 'mb-16',
        xlarge: 'mb-20'
      }
    }
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['Monaco', 'Consolas', 'monospace']
    },
    fontSize: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl'
    },
    heading: {
      h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
      h2: 'text-3xl md:text-4xl font-bold',
      h3: 'text-2xl md:text-3xl font-bold',
      h4: 'text-xl md:text-2xl font-semibold',
      h5: 'text-lg md:text-xl font-semibold',
      h6: 'text-base md:text-lg font-semibold'
    },
    paragraph: {
      small: 'text-sm',
      base: 'text-base',
      large: 'text-lg',
      xlarge: 'text-xl'
    }
  },
  
  borderRadius: {
    none: 'rounded-none',
    small: 'rounded',
    medium: 'rounded-lg',
    large: 'rounded-xl',
    xlarge: 'rounded-2xl',
    full: 'rounded-full'
  },
  
  shadow: {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xlarge: 'shadow-xl',
    '2xl': 'shadow-2xl',
    // Theme-aware shadows
    card: 'shadow-md dark:shadow-none dark:border dark:border-gray-700',
    hover: 'hover:shadow-lg dark:hover:shadow-none dark:hover:border-gray-600'
  },
  
  animation: {
    transition: {
      fast: 'transition-all duration-150',
      medium: 'transition-all duration-300',
      slow: 'transition-all duration-500'
    },
    hover: {
      scale: 'hover:scale-105',
      shadow: 'hover:shadow-xl dark:hover:shadow-lg',
      brightness: 'hover:brightness-110 dark:hover:brightness-125'
    }
  },
  
  gradients: {
    hero: 'bg-gradient-to-br from-nebula-black to-nebula-purple-dark',
    primary: 'bg-gradient-to-r from-nebula-cyan to-nebula-violet',
    secondary: 'bg-gradient-to-r from-nebula-violet to-nebula-purple',
    dark: 'bg-gradient-to-br from-nebula-black to-nebula-purple-dark',
    light: 'bg-gradient-to-br from-nebula-violet/10 to-nebula-cyan/10',
    nebula: 'bg-gradient-nebula',
    radial: 'bg-gradient-radial-nebula',
    // Theme-aware gradients
    adaptive: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-nebula-black dark:to-gray-900'
  },
  
  // Updated backgrounds with theme awareness
  backgrounds: {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    dark: 'bg-nebula-black text-nebula-white',
    transparent: 'bg-transparent',
    nebula: 'bg-nebula-black',
    page: 'bg-white dark:bg-nebula-black',
    section: 'bg-gray-50 dark:bg-gray-900',
    card: 'bg-white dark:bg-gray-800',
    overlay: 'bg-black/50 dark:bg-black/70'
  },
  
  // Updated borders with theme awareness
  borders: {
    DEFAULT: 'border border-gray-300 dark:border-gray-700',
    light: 'border border-gray-200 dark:border-gray-800',
    dark: 'border border-gray-400 dark:border-gray-600',
    primary: 'border-2 border-nebula-violet dark:border-nebula-cyan',
    secondary: 'border-2 border-nebula-cyan dark:border-nebula-violet',
    error: 'border border-red-500',
    subtle: 'border border-gray-100 dark:border-gray-800/50'
  },
  
  // Updated forms with proper theme support
  forms: {
    input: {
      base: 'w-full px-4 py-3 rounded-lg focus:outline-none transition-colors bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-nebula-violet dark:focus:border-nebula-cyan',
      error: 'border-red-500 focus:border-red-500',
      disabled: 'opacity-50 cursor-not-allowed'
    },
    label: {
      base: 'block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300',
      required: 'after:content-["*"] after:ml-0.5 after:text-red-500'
    },
    helpText: 'text-sm text-gray-600 dark:text-gray-400',
    errorText: 'text-sm text-red-600 dark:text-red-400'
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  zIndex: {
    dropdown: 'z-10',
    modal: 'z-40',
    header: 'z-50',
    notification: 'z-60'
  }
};

// Enhanced helper functions

// Get theme-aware color classes
export const getThemeColor = (type: 'text' | 'background' | 'border', variant: string = 'primary') => {
  const themeColorMap = theme.themeColors as any;
  const colorGroup = themeColorMap[type];
  
  if (!colorGroup) return '';
  
  return colorGroup[variant] || colorGroup.primary || '';
};

// Get glass effect classes
export const getGlassEffect = (variant: 'light' | 'dark' | 'adaptive' = 'adaptive') => {
  return theme.themeColors.glass[variant] || theme.themeColors.glass.adaptive;
};

// Original helper functions (kept for backward compatibility)
export const getColorClass = (color: string, shade: number | string = 'DEFAULT') => {
  const colorMap = theme.colors as any;
  const colorGroup = colorMap[color];
  
  if (!colorGroup) return '';
  
  if (typeof colorGroup === 'string') return colorGroup;
  
  return colorGroup[shade] || colorGroup.DEFAULT || '';
};

export const getSpacingClass = (type: 'section' | 'container' | 'padding' | 'gap' | 'margin', size: string = 'DEFAULT') => {
  const spacingMap = theme.spacing as any;
  const spacingGroup = spacingMap[type];
  
  if (!spacingGroup) return '';
  
  if (typeof spacingGroup === 'string') return spacingGroup;
  
  return spacingGroup[size] || spacingGroup.DEFAULT || '';
};

export const getTypographyClass = (type: 'heading' | 'paragraph', size: string) => {
  const typographyMap = theme.typography as any;
  const typographyGroup = typographyMap[type];
  
  if (!typographyGroup) return '';
  
  return typographyGroup[size] || '';
};

// Enhanced class builder with theme support
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// New utility for building theme-aware components
export const themeClasses = {
  // Text utilities
  text: (variant: keyof typeof theme.themeColors.text = 'primary') => theme.themeColors.text[variant],
  
  // Background utilities
  bg: (variant: keyof typeof theme.themeColors.background = 'primary') => theme.themeColors.background[variant],
  
  // Border utilities
  border: (variant: keyof typeof theme.themeColors.border = 'primary') => theme.themeColors.border[variant],
  
  // Card styles
  card: (variant: 'default' | 'glass' | 'solid' = 'default') => {
    const baseClasses = cn(
      theme.borderRadius.large,
      theme.animation.transition.medium
    );
    
    switch (variant) {
      case 'glass':
        return cn(baseClasses, theme.themeColors.glass.adaptive);
      case 'solid':
        return cn(baseClasses, theme.themeColors.background.card, theme.themeColors.border.primary);
      default:
        return cn(baseClasses, theme.themeColors.background.card, theme.shadow.card);
    }
  },
  
  // Button styles
  button: (variant: 'primary' | 'secondary' | 'ghost' = 'primary', size: 'small' | 'medium' | 'large' = 'medium') => {
    const baseClasses = cn(
      theme.spacing.padding.button[size],
      theme.borderRadius.medium,
      theme.animation.transition.fast,
      'font-medium',
      'cursor-pointer',
      'inline-flex items-center justify-center'
    );
    
    switch (variant) {
      case 'primary':
        return cn(
          baseClasses,
          'bg-nebula-violet hover:bg-nebula-purple text-white',
          'dark:bg-nebula-cyan dark:hover:bg-stellar-blue dark:text-nebula-black'
        );
      case 'secondary':
        return cn(
          baseClasses,
          'bg-gray-200 hover:bg-gray-300 text-gray-800',
          'dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'
        );
      case 'ghost':
        return cn(
          baseClasses,
          'bg-transparent hover:bg-gray-100',
          'dark:hover:bg-gray-800',
          theme.themeColors.text.primary
        );
      default:
        return baseClasses;
    }
  }
};

// Component presets for common patterns
export const componentStyles = {
  // Page layouts
  page: cn(theme.themeColors.background.primary, theme.themeColors.text.primary, 'min-h-screen'),
  
  // Section styles
  section: {
    default: cn(theme.spacing.section.medium, theme.spacing.container.DEFAULT),
    alternate: cn(theme.spacing.section.medium, theme.spacing.container.DEFAULT, theme.themeColors.background.secondary),
    hero: cn(theme.spacing.section.xlarge, theme.spacing.container.DEFAULT)
  },
  
  // Card variations
  card: {
    default: cn(themeClasses.card('default'), theme.spacing.padding.card.medium),
    glass: cn(themeClasses.card('glass'), theme.spacing.padding.card.medium),
    solid: cn(themeClasses.card('solid'), theme.spacing.padding.card.medium),
    hover: cn(
      themeClasses.card('default'),
      theme.spacing.padding.card.medium,
      theme.animation.hover.scale,
      theme.animation.hover.shadow,
      'cursor-pointer'
    )
  },
  
  // Typography with theme colors
  heading: {
    h1: cn(theme.typography.heading.h1, theme.themeColors.text.primary),
    h2: cn(theme.typography.heading.h2, theme.themeColors.text.primary),
    h3: cn(theme.typography.heading.h3, theme.themeColors.text.primary),
    h4: cn(theme.typography.heading.h4, theme.themeColors.text.primary),
    h5: cn(theme.typography.heading.h5, theme.themeColors.text.primary),
    h6: cn(theme.typography.heading.h6, theme.themeColors.text.primary)
  },
  
  paragraph: {
    small: cn(theme.typography.paragraph.small, theme.themeColors.text.secondary),
    base: cn(theme.typography.paragraph.base, theme.themeColors.text.secondary),
    large: cn(theme.typography.paragraph.large, theme.themeColors.text.secondary),
    xlarge: cn(theme.typography.paragraph.xlarge, theme.themeColors.text.secondary)
  }
};

// Export type definitions for TypeScript
export type ThemeTextVariant = keyof typeof theme.themeColors.text;
export type ThemeBackgroundVariant = keyof typeof theme.themeColors.background;
export type ThemeBorderVariant = keyof typeof theme.themeColors.border;
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';
export type CardVariant = 'default' | 'glass' | 'solid';