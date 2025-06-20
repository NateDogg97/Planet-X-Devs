export const theme = {
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
      small: 'text-sm text-gray-600 dark:text-gray-400',
      base: 'text-base text-gray-600 dark:text-gray-300',
      large: 'text-lg text-gray-600 dark:text-gray-300',
      xlarge: 'text-xl text-gray-600 dark:text-gray-300'
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
    small: 'shadow',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xlarge: 'shadow-xl',
    '2xl': 'shadow-2xl'
  },
  
  animation: {
    transition: {
      fast: 'transition-all duration-150',
      medium: 'transition-all duration-300',
      slow: 'transition-all duration-500'
    },
    hover: {
      scale: 'hover:scale-105',
      shadow: 'hover:shadow-xl',
      brightness: 'hover:brightness-110'
    }
  },
  
  gradients: {
    hero: 'bg-gradient-to-br from-nebula-black to-nebula-purple-dark',
    primary: 'bg-gradient-to-r from-nebula-cyan to-nebula-violet',
    secondary: 'bg-gradient-to-r from-nebula-violet to-nebula-purple',
    dark: 'bg-gradient-to-br from-nebula-black to-nebula-purple-dark',
    light: 'bg-gradient-to-br from-nebula-violet/10 to-nebula-cyan/10',
    nebula: 'bg-gradient-nebula',
    radial: 'bg-gradient-radial-nebula'
  },
  
  backgrounds: {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    dark: 'bg-nebula-black text-nebula-white',
    transparent: 'bg-transparent',
    nebula: 'bg-nebula-black'
  },
  
  borders: {
    DEFAULT: 'border border-gray-300 dark:border-nebula-purple/30',
    light: 'border border-gray-200 dark:border-nebula-violet/20',
    dark: 'border border-gray-400 dark:border-nebula-purple/30',
    primary: 'border-2 border-nebula-violet',
    secondary: 'border-2 border-nebula-cyan',
    error: 'border border-red-500'
  },
  
  forms: {
    input: {
      base: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-nebula-violet dark:bg-nebula-black dark:border-nebula-purple/30 dark:text-nebula-white',
      error: 'border-red-500 focus:border-red-500',
      disabled: 'opacity-50 cursor-not-allowed'
    },
    label: {
      base: 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2',
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

// Helper functions
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

// Tailwind CSS class builders
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};