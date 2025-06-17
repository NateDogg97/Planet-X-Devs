'use client';

import { createContext, useContext, useEffect, ReactNode } from 'react';
import { performanceMonitor } from '@/utils/performance';
import { usePerformanceMonitoring } from '@/hooks/usePerformanceMonitoring';

interface PerformanceContextType {
  isMonitoring: boolean;
  getPerformanceSummary: () => any;
}

const PerformanceContext = createContext<PerformanceContextType | null>(null);

interface PerformanceProviderProps {
  children: ReactNode;
  enabled?: boolean;
}

export function PerformanceProvider({ children, enabled = true }: PerformanceProviderProps) {
  const { measureFirstInteraction } = usePerformanceMonitoring({
    trackPageView: true,
    trackInteractions: true
  });

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    try {
      // Initialize performance monitoring
      console.log('🚀 Performance monitoring initialized');

      // Track first user interaction
      const cleanup = measureFirstInteraction();

      // Track initial page performance
      const trackInitialPerformance = () => {
        try {
          if ('performance' in window && 'getEntriesByType' in performance) {
            // Track initial bundle size
            try {
              const navigationEntries = performance.getEntriesByType('navigation');
              const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
              
              if (navigationEntry && navigationEntry.transferSize) {
                performanceMonitor.recordMetric({
                  name: 'INITIAL_PAGE_SIZE',
                  value: navigationEntry.transferSize
                });
              }
            } catch (e) {
              console.warn('Error tracking initial page size:', e);
            }

            // Track JavaScript and CSS bundle loading
            try {
              const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
              let totalJSSize = 0;
              let totalCSSSize = 0;

              resources.forEach(resource => {
                try {
                  const size = resource.transferSize || 0;
                  if (resource.name.includes('.js')) {
                    totalJSSize += size;
                  } else if (resource.name.includes('.css')) {
                    totalCSSSize += size;
                  }
                } catch (e) {
                  console.warn('Error processing resource:', e);
                }
              });

              if (totalJSSize > 0) {
                performanceMonitor.recordMetric({
                  name: 'TOTAL_JS_SIZE',
                  value: totalJSSize
                });
              }

              if (totalCSSSize > 0) {
                performanceMonitor.recordMetric({
                  name: 'TOTAL_CSS_SIZE',
                  value: totalCSSSize
                });
              }
            } catch (e) {
              console.warn('Error tracking bundle sizes:', e);
            }
          }
        } catch (e) {
          console.warn('Error in trackInitialPerformance:', e);
        }
      };

      // Track performance after page load
      try {
        if (typeof document !== 'undefined') {
          if (document.readyState === 'complete') {
            trackInitialPerformance();
          } else {
            window.addEventListener('load', trackInitialPerformance);
          }
        }
      } catch (e) {
        console.warn('Error setting up load listener:', e);
      }

      return () => {
        try {
          cleanup?.();
        } catch (e) {
          console.warn('Error during cleanup:', e);
        }
        
        try {
          window.removeEventListener('load', trackInitialPerformance);
        } catch (e) {
          console.warn('Error removing load listener:', e);
        }
      };
    } catch (e) {
      console.warn('Error initializing performance provider:', e);
    }
  }, [enabled, measureFirstInteraction]);

  const contextValue: PerformanceContextType = {
    isMonitoring: enabled,
    getPerformanceSummary: () => performanceMonitor.getPerformanceSummary()
  };

  return (
    <PerformanceContext.Provider value={contextValue}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformanceContext() {
  const context = useContext(PerformanceContext);
  
  if (!context) {
    throw new Error('usePerformanceContext must be used within a PerformanceProvider');
  }
  
  return context;
}