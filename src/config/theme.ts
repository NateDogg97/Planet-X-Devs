/**
 * theme.ts — Semantic Tailwind-class presets
 * ------------------------------------------------------------------
 * SOURCE OF TRUTH: The canonical design tokens (raw color values, the
 * `nebula-*` palette, semantic CSS variables, glass/gradient/shadow
 * utilities and animations) live in `src/app/globals.css` under the
 * Tailwind v4 `@theme` block and `@layer utilities`.
 *
 * This file does NOT define raw values. It maps design decisions
 * (spacing scale, container widths, type scale, component tokens) onto
 * reusable Tailwind utility strings that reference those canonical
 * tokens by class name (e.g. `text-nebula-violet`, `bg-nebula-black`).
 *
 * If you need a color, gradient, glass or shadow value, use the
 * matching utility from globals.css directly. See DESIGN_SYSTEM.md for
 * the full reference.
 * ------------------------------------------------------------------
 */

export const theme = {
  // Theme-aware semantic colors. These resolve to light/dark Tailwind
  // utilities that map onto the canonical nebula palette in globals.css.
  themeColors: {
    text: {
      primary: 'text-nebula-black dark:text-nebula-white',
      secondary: 'text-gray-700 dark:text-gray-300',
      tertiary: 'text-gray-600 dark:text-gray-400',
      muted: 'text-gray-500 dark:text-gray-500',
      accent: 'text-nebula-violet dark:text-nebula-cyan',
      inverse: 'text-nebula-white dark:text-nebula-black',
      error: 'text-red-600 dark:text-red-400',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
    },
    background: {
      primary: 'bg-white dark:bg-nebula-black',
      secondary: 'bg-gray-50 dark:bg-gray-900',
      tertiary: 'bg-gray-100 dark:bg-gray-800',
      card: 'bg-white dark:bg-gray-800',
      cardHover: 'bg-gray-50 dark:bg-gray-700',
      inverse: 'bg-nebula-black dark:bg-white',
      overlay: 'bg-black/50 dark:bg-black/70',
    },
    border: {
      primary: 'border-gray-200 dark:border-gray-700',
      secondary: 'border-gray-300 dark:border-gray-600',
      accent: 'border-nebula-violet dark:border-nebula-cyan',
      subtle: 'border-gray-100 dark:border-gray-800',
      error: 'border-red-300 dark:border-red-700',
    },
  },

  spacing: {
    section: {
      xsmall: 'py-4',
      small: 'py-12',
      medium: 'py-16',
      large: 'py-20',
      xlarge: 'py-24 lg:py-32',
    },
    container: {
      DEFAULT: 'container mx-auto px-6',
      small: 'max-w-2xl mx-auto px-6',
      medium: 'max-w-4xl mx-auto px-6',
      large: 'max-w-6xl mx-auto px-6',
      full: 'w-full px-6',
    },
    padding: {
      card: {
        small: 'p-4',
        medium: 'p-6',
        large: 'p-8',
        xlarge: 'p-8 md:p-12',
      },
      button: {
        small: 'px-4 py-2',
        medium: 'px-6 py-3',
        large: 'px-8 py-4',
      },
    },
    gap: {
      small: 'gap-4',
      medium: 'gap-8',
      large: 'gap-12',
    },
  },

  typography: {
    heading: {
      h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
      h2: 'text-3xl md:text-4xl font-bold',
      h3: 'text-2xl md:text-3xl font-bold',
      h4: 'text-xl md:text-2xl font-semibold',
      h5: 'text-lg md:text-xl font-semibold',
      h6: 'text-base md:text-lg font-semibold',
    },
    paragraph: {
      small: 'text-sm',
      base: 'text-base',
      large: 'text-lg',
      xlarge: 'text-xl',
    },
  },

  borderRadius: {
    none: 'rounded-none',
    small: 'rounded',
    medium: 'rounded-lg',
    large: 'rounded-xl',
    xlarge: 'rounded-2xl',
    full: 'rounded-full',
  },

  shadow: {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xlarge: 'shadow-xl',
    '2xl': 'shadow-2xl',
    // Theme-aware card shadow (swaps to a border in dark mode)
    card: 'shadow-md dark:shadow-none dark:border dark:border-gray-700',
    hover: 'hover:shadow-lg dark:hover:shadow-none dark:hover:border-gray-600',
  },

  animation: {
    transition: {
      fast: 'transition-all duration-150',
      medium: 'transition-all duration-300',
      slow: 'transition-all duration-500',
    },
    hover: {
      scale: 'hover:scale-105',
      shadow: 'hover:shadow-xl dark:hover:shadow-lg',
      brightness: 'hover:brightness-110 dark:hover:brightness-125',
    },
  },

  // Gradients map onto the canonical gradient utilities / nebula tokens
  // defined in globals.css.
  gradients: {
    hero: 'bg-gradient-to-br from-nebula-black to-nebula-purple-dark',
    primary: 'bg-gradient-to-r from-nebula-cyan to-nebula-violet',
    secondary: 'bg-gradient-to-r from-nebula-violet to-nebula-purple',
    dark: 'bg-gradient-to-br from-nebula-black to-nebula-purple-dark',
    light: 'bg-gradient-to-br from-nebula-violet/10 to-nebula-cyan/10',
    nebula: 'bg-gradient-nebula',
    radial: 'bg-gradient-radial-nebula',
    // Theme-aware page/section gradient
    adaptive: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-nebula-black dark:to-gray-900',
  },

  backgrounds: {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    dark: 'bg-nebula-black text-nebula-white',
    transparent: 'bg-transparent',
    nebula: 'bg-nebula-black',
    page: 'bg-nebula-white dark:bg-nebula-black',
    section: 'bg-gray-50 dark:bg-gray-900',
    card: 'bg-white dark:bg-gray-800',
    overlay: 'bg-black/50 dark:bg-black/70',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

/**
 * cn — tiny classnames joiner. Filters out falsy values.
 */
export const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ');

// Type helpers consumed by components
export type ThemeTextVariant = keyof typeof theme.themeColors.text;
export type ThemeBackgroundVariant = keyof typeof theme.themeColors.background;
export type ThemeBorderVariant = keyof typeof theme.themeColors.border;
