/**
 * React hook for performance monitoring and Web Vitals tracking
 */

import { useEffect, useCallback, useRef } from 'react';
import { performanceMonitor, markStart, markEnd, recordMetric } from '@/utils/performance';

interface UsePerformanceMonitoringOptions {
  trackPageView?: boolean;
  trackInteractions?: boolean;
  trackComponentRender?: boolean;
  componentName?: string;
}

export function usePerformanceMonitoring(options: UsePerformanceMonitoringOptions = {}) {
  const {
    trackPageView = true,
    trackInteractions = true,
    trackComponentRender = false,
    componentName = 'Unknown'
  } = options;

  const renderStartTime = useRef<number | undefined>(undefined);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Track component render performance
  useEffect(() => {
    if (trackComponentRender) {
      renderStartTime.current = performance.now();
      
      return () => {
        if (renderStartTime.current) {
          const renderTime = performance.now() - renderStartTime.current;
          recordMetric({
            name: `COMPONENT_RENDER_${componentName.toUpperCase()}`,
            value: renderTime
          });
        }
      };
    }
  }, [trackComponentRender, componentName]);

  // Track page view performance
  useEffect(() => {
    if (!trackPageView || typeof window === 'undefined') return;
    
    try {
      markStart('page-load');
      
      const handleLoad = () => {
        try {
          markEnd('page-load');
          
          // Track additional page metrics
          if ('performance' in window && 'getEntriesByType' in performance) {
            try {
              const navigationEntries = performance.getEntriesByType('navigation');
              const navigation = navigationEntries[0] as PerformanceNavigationTiming;
              
              if (navigation && navigation.loadEventEnd && navigation.fetchStart) {
                const duration = navigation.loadEventEnd - navigation.fetchStart;
                if (isFinite(duration) && duration > 0) {
                  recordMetric({
                    name: 'PAGE_LOAD_COMPLETE',
                    value: duration
                  });
                }
              }
            } catch (e) {
              console.warn('Error recording page load metrics:', e);
            }
          }
        } catch (e) {
          console.warn('Error in page load handler:', e);
        }
      };

      if (typeof document !== 'undefined') {
        if (document.readyState === 'complete') {
          handleLoad();
        } else {
          window.addEventListener('load', handleLoad);
          return () => window.removeEventListener('load', handleLoad);
        }
      }
    } catch (e) {
      console.warn('Error setting up page view tracking:', e);
    }
  }, [trackPageView]);

  // Utility functions for manual performance tracking
  const trackInteraction = useCallback((name: string, callback?: () => void) => {
    if (!trackInteractions || typeof window === 'undefined') return callback?.();

    try {
      const startTime = 'performance' in window ? performance.now() : Date.now();
      markStart(`interaction-${name}`);

      // Clear any existing timeout
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }

      const endInteraction = () => {
        try {
          const duration = ('performance' in window ? performance.now() : Date.now()) - startTime;
          markEnd(`interaction-${name}`);
          
          if (isFinite(duration) && duration >= 0) {
            recordMetric({
              name: `INTERACTION_${name.toUpperCase()}`,
              value: duration
            });
          }
        } catch (e) {
          console.warn(`Error ending interaction tracking for ${name}:`, e);
        }
      };

      // Execute callback if provided
      let result;
      try {
        result = callback?.();
      } catch (e) {
        console.warn(`Error executing callback for ${name}:`, e);
        endInteraction();
        throw e;
      }

      // Handle both sync and async callbacks
      if (result && typeof result === 'object' && 'then' in result) {
        (result as Promise<any>).finally(endInteraction);
      } else {
        // For sync operations, measure immediately
        endInteraction();
      }

      return result;
    } catch (e) {
      console.warn(`Error tracking interaction ${name}:`, e);
      return callback?.();
    }
  }, [trackInteractions]);

  const trackAsyncOperation = useCallback(async <T>(
    name: string,
    operation: () => Promise<T>
  ): Promise<T> => {
    const startTime = performance.now();
    markStart(`async-${name}`);

    try {
      const result = await operation();
      const duration = performance.now() - startTime;
      
      markEnd(`async-${name}`);
      recordMetric({
        name: `ASYNC_${name.toUpperCase()}`,
        value: duration
      });

      return result;
    } catch (error) {
      const duration = performance.now() - startTime;
      
      recordMetric({
        name: `ASYNC_${name.toUpperCase()}_ERROR`,
        value: duration
      });
      
      throw error;
    }
  }, []);

  const trackResourceLoad = useCallback((resourceName: string, resourceUrl: string) => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        try {
          const entries = list.getEntries();
          const resourceEntry = entries.find(entry => entry.name === resourceUrl);

          if (resourceEntry) {
            const resourceTiming = resourceEntry as PerformanceResourceTiming;
            const duration = resourceTiming.responseEnd - resourceTiming.startTime;
            const size = resourceTiming.transferSize || 0;

            if (isFinite(duration) && duration > 0) {
              recordMetric({
                name: `RESOURCE_${resourceName.toUpperCase()}`,
                value: duration
              });
            }

            if (isFinite(size) && size > 0) {
              recordMetric({
                name: `RESOURCE_SIZE_${resourceName.toUpperCase()}`,
                value: size
              });
            }

            observer.disconnect();
          }
        } catch (e) {
          console.warn(`Error processing resource entry for ${resourceName}:`, e);
        }
      });

      observer.observe({ entryTypes: ['resource'] });
    } catch (e) {
      console.warn(`Failed to observe resource ${resourceName}:`, e);
    }
  }, []);

  const measureFirstInteraction = useCallback(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return () => {}; // Return empty cleanup function
    }

    let firstInteractionTime: number | null = null;

    const recordFirstInteraction = (event: Event) => {
      try {
        if (firstInteractionTime === null) {
          firstInteractionTime = 'performance' in window ? performance.now() : Date.now();
          
          if (isFinite(firstInteractionTime) && firstInteractionTime > 0) {
            recordMetric({
              name: 'FIRST_INTERACTION',
              value: firstInteractionTime
            });
          }

          // Remove listeners after first interaction
          cleanupListeners();
        }
      } catch (e) {
        console.warn('Error recording first interaction:', e);
      }
    };

    const cleanupListeners = () => {
      try {
        document.removeEventListener('click', recordFirstInteraction);
        document.removeEventListener('keydown', recordFirstInteraction);
        document.removeEventListener('touchstart', recordFirstInteraction);
      } catch (e) {
        console.warn('Error removing interaction listeners:', e);
      }
    };

    try {
      document.addEventListener('click', recordFirstInteraction);
      document.addEventListener('keydown', recordFirstInteraction);
      document.addEventListener('touchstart', recordFirstInteraction);
    } catch (e) {
      console.warn('Error adding interaction listeners:', e);
    }

    return cleanupListeners;
  }, []);

  return {
    trackInteraction,
    trackAsyncOperation,
    trackResourceLoad,
    measureFirstInteraction,
    recordMetric,
    markStart,
    markEnd,
    performanceMonitor
  };
}

// Hook specifically for tracking CTA interactions
export function useCTAPerformanceTracking() {
  const { trackInteraction } = usePerformanceMonitoring({ trackInteractions: true });

  const trackCTAClick = useCallback((ctaName: string) => {
    trackInteraction(`cta-${ctaName}`, () => {
      // Additional CTA-specific tracking
      recordMetric({
        name: 'CTA_CLICKED',
        value: performance.now()
      });
    });
  }, [trackInteraction]);

  return { trackCTAClick };
}

// Hook for tracking particle loading performance
export function useParticlePerformanceTracking() {
  const { trackAsyncOperation, recordMetric } = usePerformanceMonitoring();

  const trackParticleLoad = useCallback(() => {
    markStart('particles-load');
    
    return () => {
      markEnd('particles-load');
    };
  }, []);

  const trackParticleRender = useCallback((particleCount: number) => {
    recordMetric({
      name: 'PARTICLES_COUNT',
      value: particleCount
    });
  }, []);

  return {
    trackParticleLoad,
    trackParticleRender,
    trackAsyncOperation
  };
}