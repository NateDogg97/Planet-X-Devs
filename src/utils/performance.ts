/**
 * Performance monitoring utilities for Core Web Vitals and custom metrics
 */

// Performance targets based on project requirements
export const PERFORMANCE_TARGETS = {
  // Core Web Vitals thresholds (Google's "Good" thresholds)
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift (score)
  
  // Additional metrics
  FCP: 1800, // First Contentful Paint (ms)
  TTI: 3800, // Time to Interactive (ms)
  TBT: 200,  // Total Blocking Time (ms)
  
  // Custom metrics
  PARTICLES_LOAD: 500, // Time to load particles (ms)
  CTA_INTERACTION: 16,  // CTA button response time (ms)
  HERO_RENDER: 1000,    // Hero section render time (ms)
} as const;

// Performance budget limits
export const PERFORMANCE_BUDGETS = {
  // Bundle sizes (bytes)
  MAIN_BUNDLE: 160 * 1024,     // 160KB
  CHUNK_SIZE: 50 * 1024,       // 50KB per chunk
  CSS_SIZE: 20 * 1024,         // 20KB CSS
  
  // Request counts
  HTTP_REQUESTS: 25,           // Max HTTP requests
  THIRD_PARTY_REQUESTS: 5,     // Max 3rd party requests
  
  // Timing budgets
  DOM_CONTENT_LOADED: 1500,    // DOMContentLoaded (ms)
  LOAD_EVENT: 3000,            // Window load event (ms)
} as const;

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  url: string;
  userAgent: string;
}

interface WebVitalsMetric extends PerformanceMetric {
  id: string;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private vitals: WebVitalsMetric[] = [];
  private readonly isProduction = process.env.NODE_ENV === 'production';
  
  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeWebVitals();
      this.setupPerformanceObserver();
      this.addPageVisibilityListener();
    }
  }

  /**
   * Initialize Core Web Vitals tracking using web-vitals library pattern
   */
  private async initializeWebVitals() {
    if (typeof window === 'undefined') return;
    
    try {
      // Use dynamic import to avoid SSR issues
      const webVitals = await import('web-vitals') as any;
      
      // Wrap each metric collection in try-catch
      try {
        if (webVitals.onCLS && typeof webVitals.onCLS === 'function') {
          webVitals.onCLS(this.handleWebVital.bind(this));
        }
      } catch (e) {
        console.warn('CLS measurement failed:', e);
      }
      
      try {
        if (webVitals.onFID && typeof webVitals.onFID === 'function') {
          webVitals.onFID(this.handleWebVital.bind(this));
        } else if (webVitals.onINP && typeof webVitals.onINP === 'function') {
          webVitals.onINP(this.handleWebVital.bind(this));
        }
      } catch (e) {
        console.warn('FID/INP measurement failed:', e);
      }
      
      try {
        if (webVitals.onFCP && typeof webVitals.onFCP === 'function') {
          webVitals.onFCP(this.handleWebVital.bind(this));
        }
      } catch (e) {
        console.warn('FCP measurement failed:', e);
      }
      
      try {
        if (webVitals.onLCP && typeof webVitals.onLCP === 'function') {
          webVitals.onLCP(this.handleWebVital.bind(this));
        }
      } catch (e) {
        console.warn('LCP measurement failed:', e);
      }
      
      try {
        if (webVitals.onTTFB && typeof webVitals.onTTFB === 'function') {
          webVitals.onTTFB(this.handleWebVital.bind(this));
        }
      } catch (e) {
        console.warn('TTFB measurement failed:', e);
      }
    } catch (error) {
      console.warn('Web Vitals library not available, using fallback measurement:', error);
      // Fallback to manual measurement if web-vitals is not available
      this.setupManualWebVitals();
    }
  }

  /**
   * Fallback manual Web Vitals measurement
   */
  private setupManualWebVitals() {
    if (typeof window === 'undefined') return;
    
    // Manual LCP measurement
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          try {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            if (lastEntry && lastEntry.startTime) {
              this.recordMetric({
                name: 'LCP',
                value: lastEntry.startTime
              });
            }
          } catch (e) {
            console.warn('Error processing LCP entry:', e);
          }
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observation not supported:', e);
      }
    }

    // Manual FCP measurement
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          try {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            
            if (fcpEntry && fcpEntry.startTime) {
              this.recordMetric({
                name: 'FCP',
                value: fcpEntry.startTime
              });
            }
          } catch (e) {
            console.warn('Error processing FCP entry:', e);
          }
        });
        
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP observation not supported:', e);
      }
    }
  }

  /**
   * Handle Web Vitals metrics
   */
  private handleWebVital(metric: any) {
    const webVitalMetric: WebVitalsMetric = {
      name: metric.name,
      value: metric.value,
      id: metric.id,
      delta: metric.delta,
      rating: metric.rating,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    this.vitals.push(webVitalMetric);
    this.checkPerformanceThresholds(webVitalMetric);
    
    if (this.isProduction) {
      this.sendToAnalytics(webVitalMetric);
    } else {
      console.log('📊 Web Vital:', webVitalMetric);
    }
  }

  /**
   * Set up performance observer for custom metrics
   */
  private setupPerformanceObserver() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        try {
          list.getEntries().forEach((entry) => {
            try {
              if (entry.entryType === 'navigation') {
                this.recordNavigationMetrics(entry as PerformanceNavigationTiming);
              } else if (entry.entryType === 'resource') {
                this.recordResourceMetrics(entry as PerformanceResourceTiming);
              }
            } catch (entryError) {
              console.warn('Error processing performance entry:', entryError);
            }
          });
        } catch (listError) {
          console.warn('Error processing performance entries list:', listError);
        }
      });

      observer.observe({ entryTypes: ['navigation', 'resource'] });
    } catch (e) {
      console.warn('Performance observer setup failed:', e);
    }
  }

  /**
   * Record navigation timing metrics
   */
  private recordNavigationMetrics(entry: PerformanceNavigationTiming) {
    try {
      const metrics = [
        { name: 'DOM_CONTENT_LOADED', value: entry.domContentLoadedEventEnd - entry.fetchStart },
        { name: 'LOAD_EVENT', value: entry.loadEventEnd - entry.fetchStart },
        { name: 'DNS_LOOKUP', value: entry.domainLookupEnd - entry.domainLookupStart },
        { name: 'TCP_CONNECTION', value: entry.connectEnd - entry.connectStart },
        { name: 'SERVER_RESPONSE', value: entry.responseEnd - entry.requestStart },
      ];

      metrics.forEach(metric => {
        try {
          if (metric.value > 0 && isFinite(metric.value)) {
            this.recordMetric({
              name: metric.name,
              value: metric.value
            });
          }
        } catch (e) {
          console.warn(`Error recording navigation metric ${metric.name}:`, e);
        }
      });
    } catch (e) {
      console.warn('Error processing navigation metrics:', e);
    }
  }

  /**
   * Record resource loading metrics
   */
  private recordResourceMetrics(entry: PerformanceResourceTiming) {
    try {
      // Track large resources that might impact performance
      const size = entry.transferSize || 0;
      const duration = entry.responseEnd - entry.requestStart;

      if (isFinite(duration) && isFinite(size) && (size > 100 * 1024 || duration > 1000)) {
        this.recordMetric({
          name: 'LARGE_RESOURCE',
          value: duration
        });
      }
    } catch (e) {
      console.warn('Error processing resource metrics:', e);
    }
  }

  /**
   * Add page visibility listener to track when metrics should be sent
   */
  private addPageVisibilityListener() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    try {
      const handleVisibilityChange = () => {
        try {
          if (document.visibilityState === 'hidden') {
            this.flushMetrics();
          }
        } catch (e) {
          console.warn('Error handling visibility change:', e);
        }
      };

      const handleBeforeUnload = () => {
        try {
          this.flushMetrics();
        } catch (e) {
          console.warn('Error flushing metrics on unload:', e);
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('beforeunload', handleBeforeUnload);
    } catch (e) {
      console.warn('Error setting up page visibility listeners:', e);
    }
  }

  /**
   * Record a custom performance metric
   */
  recordMetric(metric: Omit<PerformanceMetric, 'timestamp' | 'url' | 'userAgent'>) {
    const fullMetric: PerformanceMetric = {
      ...metric,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    this.metrics.push(fullMetric);
    this.checkCustomThresholds(fullMetric);

    if (!this.isProduction) {
      console.log('📈 Performance metric:', fullMetric);
    }
  }

  /**
   * Mark the start of a performance measurement
   */
  markStart(name: string) {
    if (typeof window === 'undefined') return;
    
    try {
      if ('performance' in window && 'mark' in performance) {
        performance.mark(`${name}-start`);
      }
    } catch (e) {
      console.warn(`Failed to mark start for ${name}:`, e);
    }
  }

  /**
   * Mark the end of a performance measurement and calculate duration
   */
  markEnd(name: string) {
    if (typeof window === 'undefined') return;
    
    try {
      if ('performance' in window && 'mark' in performance && 'measure' in performance) {
        const endMark = `${name}-end`;
        const measureName = `${name}-duration`;
        
        performance.mark(endMark);
        
        try {
          performance.measure(measureName, `${name}-start`, endMark);
          const measures = performance.getEntriesByName(measureName);
          
          if (measures.length > 0) {
            const measure = measures[0];
            this.recordMetric({
              name: name.toUpperCase(),
              value: measure.duration
            });
          }
          
          // Clean up marks safely
          if ('clearMarks' in performance) {
            performance.clearMarks(`${name}-start`);
            performance.clearMarks(endMark);
          }
          
          if ('clearMeasures' in performance) {
            performance.clearMeasures(measureName);
          }
          
        } catch (measureError) {
          console.warn(`Failed to measure ${name}:`, measureError);
        }
      }
    } catch (e) {
      console.warn(`Failed to mark end for ${name}:`, e);
    }
  }

  /**
   * Check if metrics exceed performance thresholds
   */
  private checkPerformanceThresholds(metric: WebVitalsMetric) {
    const target = PERFORMANCE_TARGETS[metric.name as keyof typeof PERFORMANCE_TARGETS];
    
    if (target && metric.value > target) {
      this.alertPerformanceRegression(metric, target);
    }
  }

  /**
   * Check custom metric thresholds
   */
  private checkCustomThresholds(metric: PerformanceMetric) {
    const target = PERFORMANCE_TARGETS[metric.name as keyof typeof PERFORMANCE_TARGETS];
    
    if (target && metric.value > target) {
      this.alertPerformanceRegression(metric, target);
    }
  }

  /**
   * Alert on performance regressions
   */
  private alertPerformanceRegression(metric: PerformanceMetric | WebVitalsMetric, target: number) {
    const message = `⚠️ Performance regression detected: ${metric.name} (${Math.round(metric.value)}ms) exceeds target (${target}ms)`;
    
    if (this.isProduction) {
      // In production, send to monitoring service
      this.sendAlert(message, metric);
    } else {
      // In development, log to console
      console.warn(message, metric);
    }
  }

  /**
   * Send alert to monitoring service
   */
  private sendAlert(message: string, metric: PerformanceMetric | WebVitalsMetric) {
    // This would integrate with your monitoring service (e.g., Sentry, DataDog, etc.)
    console.error(message, metric);
    
    // Example: Send to analytics or monitoring service
    // fetch('/api/performance-alert', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message, metric })
    // });
  }

  /**
   * Send metrics to analytics service
   */
  private sendToAnalytics(metric: WebVitalsMetric) {
    // Example: Send to Google Analytics 4
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        metric_rating: metric.rating,
        custom_parameter_url: metric.url
      });
    }

    // Example: Send to custom analytics endpoint
    // fetch('/api/analytics/web-vitals', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(metric)
    // });
  }

  /**
   * Flush all collected metrics
   */
  private flushMetrics() {
    if (typeof window === 'undefined') return;
    
    try {
      if (this.metrics.length > 0 || this.vitals.length > 0) {
        const payload = {
          metrics: this.metrics,
          vitals: this.vitals,
          timestamp: Date.now(),
          url: window.location.href
        };

        if (this.isProduction && 'navigator' in window && 'sendBeacon' in navigator) {
          try {
            // Send to analytics service using sendBeacon
            navigator.sendBeacon('/api/analytics/performance', JSON.stringify(payload));
          } catch (e) {
            console.warn('Failed to send performance metrics via beacon:', e);
            
            // Fallback to fetch if beacon fails
            if ('fetch' in window) {
              fetch('/api/analytics/performance', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true
              }).catch(fetchError => {
                console.warn('Failed to send performance metrics via fetch:', fetchError);
              });
            }
          }
        }

        // Clear metrics after sending
        this.metrics = [];
        this.vitals = [];
      }
    } catch (e) {
      console.warn('Error flushing performance metrics:', e);
    }
  }

  /**
   * Get current performance summary
   */
  getPerformanceSummary() {
    return {
      metrics: this.metrics,
      vitals: this.vitals,
      targets: PERFORMANCE_TARGETS,
      budgets: PERFORMANCE_BUDGETS
    };
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export utility functions
export const {
  recordMetric,
  markStart,
  markEnd,
  getPerformanceSummary
} = performanceMonitor;