import { theme } from '@/config/theme';

export function useTheme() {
  return theme;
}

// Specific theme hooks for common use cases
export function useColors() {
  return theme.colors;
}

export function useSpacing() {
  return theme.spacing;
}

export function useTypography() {
  return theme.typography;
}

export function useBreakpoints() {
  return theme.breakpoints;
}