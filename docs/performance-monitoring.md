# Performance Monitoring Guide

This document outlines the performance monitoring strategy, targets, and implementation for Planet X Devs website.

## Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: ≤ 2.5s
- **FID (First Input Delay)**: ≤ 100ms
- **CLS (Cumulative Layout Shift)**: ≤ 0.1

### Additional Metrics
- **FCP (First Contentful Paint)**: ≤ 1.8s
- **TTI (Time to Interactive)**: ≤ 3.8s
- **TBT (Total Blocking Time)**: ≤ 200ms

### Custom Metrics
- **Hero Render Time**: ≤ 1000ms
- **CTA Interaction Response**: ≤ 16ms
- **Particles Load Time**: ≤ 500ms

## Performance Budgets

### Bundle Sizes
- **Main Bundle**: ≤ 160KB
- **Individual Chunks**: ≤ 50KB
- **CSS Bundle**: ≤ 20KB
- **Images**: ≤ 500KB per image

### Resource Limits
- **Total HTTP Requests**: ≤ 25
- **Third-party Requests**: ≤ 5
- **JavaScript Files**: ≤ 8
- **CSS Files**: ≤ 3

## Monitoring Implementation

### 1. Core Web Vitals Tracking

```typescript
// Safe dynamic import with error handling
try {
  const webVitals = await import('web-vitals') as any;
  
  if (webVitals.onCLS && typeof webVitals.onCLS === 'function') {
    webVitals.onCLS(metric => sendToAnalytics(metric));
  }
  if (webVitals.onFID && typeof webVitals.onFID === 'function') {
    webVitals.onFID(metric => sendToAnalytics(metric));
  }
  // ... other metrics
} catch (error) {
  console.warn('Web Vitals not available, using fallback');
  setupManualWebVitals();
}
```

### 2. Custom Performance Marks

```typescript
import { markStart, markEnd } from '@/utils/performance';

// Safe performance marking with browser checks
const markStart = (name: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(`${name}-start`);
    }
  } catch (e) {
    console.warn(`Failed to mark start for ${name}:`, e);
  }
};

// Track CTA interactions with error handling
const handleCTAClick = () => {
  try {
    trackCTAClick('main-cta');
  } catch (e) {
    console.warn('Error tracking CTA click:', e);
  }
};
```

### 3. Component Performance Tracking

```typescript
import { usePerformanceMonitoring } from '@/hooks/usePerformanceMonitoring';

function MyComponent() {
  const { trackInteraction } = usePerformanceMonitoring({
    trackComponentRender: true,
    componentName: 'MyComponent'
  });
  
  // Component will automatically track render performance
}
```

## Performance Alerts

### Regression Thresholds
- **Bundle Size**: +10% increase triggers warning
- **LCP**: +15% increase triggers alert
- **FID**: +20% increase triggers alert
- **Custom Metrics**: +20% increase triggers alert

### Alert Channels
- **Development**: Console warnings
- **Production**: Analytics service + monitoring dashboard

## Monitoring Tools

### 1. Web Vitals Library
Tracks Core Web Vitals automatically:
```bash
npm install web-vitals
```

### 2. Performance Observer API
Monitors resource loading and navigation timing:
```typescript
const observer = new PerformanceObserver((list) => {
  // Process performance entries
});
observer.observe({ entryTypes: ['navigation', 'resource'] });
```

### 3. Lighthouse CI
Automated performance testing in CI/CD:
```json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "url": ["http://localhost:3000/"]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", { "minScore": 0.9 }]
      }
    }
  }
}
```

## Performance Optimization Strategies

### 1. Bundle Optimization
- **Dynamic imports** for non-critical components
- **Code splitting** at route level
- **Tree shaking** to eliminate dead code
- **Compression** (gzip/brotli)

### 2. Critical Rendering Path
- **Inline critical CSS** for above-the-fold content
- **Defer non-critical JavaScript**
- **Preload key resources**
- **Lazy load** below-the-fold content

### 3. Image Optimization
- **WebP format** with fallbacks
- **Responsive images** with srcset
- **Lazy loading** for images
- **Image compression** and resizing

### 4. Particle System Optimization
- **Intersection observer** for lazy loading
- **Performance budget** for particle count
- **Motion reduction** for accessibility
- **Frame rate throttling** (30fps instead of 60fps)

## Measurement and Analysis

### Development Workflow
1. **Local testing** with React DevTools Profiler
2. **Bundle analysis** with webpack-bundle-analyzer
3. **Lighthouse audits** on key pages
4. **Performance monitoring** in staging environment

### Production Monitoring
1. **Real User Monitoring (RUM)** via web-vitals
2. **Synthetic monitoring** with Lighthouse CI
3. **Performance dashboards** for trending
4. **Automated alerts** for regressions

## Key Performance Indicators (KPIs)

### Primary KPIs
- **Core Web Vitals scores** (LCP, FID, CLS)
- **Page load time** (complete)
- **Time to interactive**
- **Bundle size** trends

### Secondary KPIs
- **First contentful paint**
- **Cumulative layout shift**
- **Resource loading times**
- **User interaction response times**

### Business Impact KPIs
- **Bounce rate** correlation with performance
- **Conversion rate** on CTA interactions
- **User engagement** metrics
- **SEO ranking** impact

## Error Handling and Debugging

### Browser Compatibility
All performance monitoring code includes comprehensive error handling for:
- **SSR environments** - Checks for `typeof window !== 'undefined'`
- **Missing APIs** - Fallback implementations for unsupported browsers
- **Web Vitals library** - Graceful degradation if library fails to load
- **Performance API** - Safe access to `performance.mark()` and related methods

### Common Error Patterns and Solutions

```typescript
// ❌ Unsafe performance API usage
performance.mark('start'); // Can throw in some browsers

// ✅ Safe performance API usage
try {
  if ('performance' in window && 'mark' in performance) {
    performance.mark('start');
  }
} catch (e) {
  console.warn('Performance marking failed:', e);
}

// ❌ Unsafe web-vitals import
import { onLCP } from 'web-vitals'; // Can fail in build

// ✅ Safe web-vitals import
try {
  const webVitals = await import('web-vitals') as any;
  if (webVitals.onLCP && typeof webVitals.onLCP === 'function') {
    webVitals.onLCP(handleMetric);
  }
} catch (e) {
  console.warn('Web Vitals not available:', e);
  setupFallbackMetrics();
}
```

## Troubleshooting Common Issues

### High LCP
- Check for large images without optimization
- Review server response times
- Analyze critical resource loading
- Consider preloading key resources

### High FID
- Audit JavaScript execution time
- Check for long tasks blocking main thread
- Review third-party script impact
- Consider code splitting strategies

### High CLS
- Add explicit dimensions to images
- Reserve space for dynamic content
- Avoid inserting content above existing content
- Use CSS transforms instead of changing layout properties

### Large Bundle Size
- Analyze bundle composition with webpack-bundle-analyzer
- Implement code splitting for routes and components
- Remove unused dependencies
- Use dynamic imports for optional features

## Continuous Improvement

### Monthly Reviews
- Analyze performance trends
- Review budget compliance
- Update performance targets
- Optimize underperforming areas

### Quarterly Assessments
- Benchmark against competitors
- Update monitoring tools
- Review browser support targets
- Plan performance initiatives

### Performance Culture
- Include performance in code reviews
- Set performance goals for new features
- Regular team training on performance best practices
- Celebrate performance improvements

---

## Quick Reference

### Commands
```bash
# Run performance audit
npm run lighthouse

# Analyze bundle size
npm run analyze

# Build with performance monitoring
npm run build

# Start development with monitoring
npm run dev
```

### Key Files
- `/src/utils/performance.ts` - Performance monitoring utilities
- `/src/hooks/usePerformanceMonitoring.ts` - React performance hooks
- `/performance.budget.js` - Performance budget configuration
- `/docs/performance-monitoring.md` - This documentation

### Monitoring URLs
- Development: Console logs
- Staging: Analytics dashboard
- Production: Monitoring service