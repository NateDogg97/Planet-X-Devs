/**
 * Performance budget configuration for Planet X Devs
 * Used by tools like bundlesize, webpack-bundle-analyzer, and Lighthouse CI
 */

module.exports = {
  // Bundle size budgets (in bytes)
  budgets: [
    {
      // Main page bundle
      path: "**/*.js",
      maxSize: "160kb", // 160KB total JS
      warnings: {
        maxSize: "140kb" // Warning at 140KB
      }
    },
    {
      // Individual chunks
      path: "**/chunks/*.js",
      maxSize: "50kb", // 50KB per chunk
      warnings: {
        maxSize: "40kb"
      }
    },
    {
      // CSS bundles
      path: "**/*.css",
      maxSize: "20kb", // 20KB total CSS
      warnings: {
        maxSize: "15kb"
      }
    },
    {
      // Images
      path: "**/images/**/*",
      maxSize: "500kb", // 500KB per image
      warnings: {
        maxSize: "300kb"
      }
    }
  ],

  // Lighthouse CI budget configuration
  lighthouseBudgets: {
    "performance": 90,      // Performance score target
    "accessibility": 95,    // Accessibility score target
    "best-practices": 90,   // Best practices score target
    "seo": 95,             // SEO score target
    "pwa": 80              // PWA score target (if applicable)
  },

  // Core Web Vitals targets
  coreWebVitals: {
    // Largest Contentful Paint (LCP)
    lcp: {
      good: 2500,           // <= 2.5s is good
      needsImprovement: 4000 // 2.5s - 4.0s needs improvement
    },
    
    // First Input Delay (FID)
    fid: {
      good: 100,            // <= 100ms is good
      needsImprovement: 300  // 100ms - 300ms needs improvement
    },
    
    // Cumulative Layout Shift (CLS)
    cls: {
      good: 0.1,            // <= 0.1 is good
      needsImprovement: 0.25 // 0.1 - 0.25 needs improvement
    },

    // First Contentful Paint (FCP)
    fcp: {
      good: 1800,           // <= 1.8s is good
      needsImprovement: 3000 // 1.8s - 3.0s needs improvement
    },

    // Time to Interactive (TTI)
    tti: {
      good: 3800,           // <= 3.8s is good
      needsImprovement: 7300 // 3.8s - 7.3s needs improvement
    }
  },

  // Resource count limits
  resourceLimits: {
    totalRequests: 25,      // Maximum HTTP requests
    thirdPartyRequests: 5,  // Maximum third-party requests
    images: 10,             // Maximum images
    scripts: 8,             // Maximum script files
    stylesheets: 3          // Maximum CSS files
  },

  // Custom performance targets for Planet X Devs
  customTargets: {
    // Component-specific targets
    heroRender: 1000,       // Hero section render time (ms)
    ctaInteraction: 16,     // CTA button response time (ms)
    particlesLoad: 500,     // Particles loading time (ms)
    
    // Page-specific targets
    pageLoadComplete: 3000, // Complete page load (ms)
    firstInteraction: 2000, // Time to first user interaction (ms)
    
    // Bundle targets
    mainBundleSize: 160 * 1024,  // 160KB
    chunkSize: 50 * 1024,        // 50KB per chunk
    cssSize: 20 * 1024,          // 20KB CSS
    
    // Network targets
    serverResponse: 200,    // Server response time (ms)
    dnsLookup: 50,         // DNS lookup time (ms)
    tcpConnection: 100     // TCP connection time (ms)
  },

  // Performance regression thresholds
  regressionThresholds: {
    // Percentage increase that triggers an alert
    bundleSize: 10,         // 10% increase in bundle size
    lcp: 15,               // 15% increase in LCP
    fid: 20,               // 20% increase in FID
    cls: 25,               // 25% increase in CLS
    customMetrics: 20      // 20% increase in custom metrics
  },

  // Monitoring configuration
  monitoring: {
    // How often to check performance (for CI/CD)
    checkInterval: "1h",    // Every hour in production
    
    // Retention period for metrics
    retentionPeriod: "30d", // Keep metrics for 30 days
    
    // Alert channels
    alerts: {
      email: ["dev@planetxdevs.com"],
      slack: "#performance-alerts",
      webhook: "https://hooks.planetxdevs.com/performance"
    },

    // Sample rate for performance tracking
    sampleRate: {
      development: 1.0,     // 100% in development
      staging: 1.0,         // 100% in staging
      production: 0.1       // 10% in production
    }
  },

  // Browser support targets
  browserSupport: {
    // Minimum browser versions to optimize for
    chrome: ">=90",
    firefox: ">=88",
    safari: ">=14",
    edge: ">=90",
    
    // Performance targets may be relaxed for older browsers
    legacyBrowserPenalty: {
      lcp: 1.2,             // 20% increase allowed for legacy browsers
      fid: 1.5,             // 50% increase allowed
      bundle: 1.1           // 10% increase allowed
    }
  }
};

// Export for different tools
module.exports.lighthouse = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['http://localhost:3000/', 'http://localhost:3000/services', 'http://localhost:3000/contact']
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }]
      }
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-reports'
    }
  }
};

// Export for webpack-bundle-analyzer
module.exports.bundleAnalyzer = {
  analyzerMode: 'static',
  openAnalyzer: false,
  reportFilename: './bundle-analysis/report.html',
  generateStatsFile: true,
  statsFilename: './bundle-analysis/stats.json'
};