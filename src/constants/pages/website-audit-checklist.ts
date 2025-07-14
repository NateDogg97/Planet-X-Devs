// Website Audit Page Types and Constants

export interface WebsiteAuditChecklistItem {
  id: string;
  title: string;
  description: string;
  tip?: string;
  links?: {
    url: string;
    text: string;
  }[];
}

export interface WebsiteAuditCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: WebsiteAuditChecklistItem[];
}

export const websiteAuditChecklistData: WebsiteAuditCategory[] = [
  {
    id: 'performance',
    title: 'Performance & Speed',
    description: 'Critical factors affecting user experience and SEO rankings',
    icon: 'speedometer',
    items: [
      {
        id: 'perf1',
        title: 'Homepage loads in under 3 seconds',
        description: '53% of mobile users abandon sites that take over 3 seconds to load',
        tip: 'Test your speed at PageSpeed Insights',
        links: [
          {
            url: 'https://pagespeed.web.dev/',
            text: 'PageSpeed Insights'
          },
          {
            url: 'https://gtmetrix.com/',
            text: 'GTmetrix'
          }
        ]
      },
      {
        id: 'perf2',
        title: 'Images are optimized and compressed',
        description: 'Large images are the #1 cause of slow websites',
        tip: 'Use TinyPNG or similar tools to compress images',
        links: [
          {
            url: 'https://tinypng.com/',
            text: 'TinyPNG'
          },
          {
            url: 'https://imageoptim.com/',
            text: 'ImageOptim'
          }
        ]
      },
      {
        id: 'perf3',
        title: 'Browser caching is enabled',
        description: 'Makes return visits significantly faster',
        tip: 'Check your .htaccess file or hosting control panel for cache headers'
      },
      {
        id: 'perf4',
        title: 'JavaScript and CSS files are minified',
        description: 'Reduces file sizes by removing unnecessary characters',
        tip: 'Use build tools like Webpack, Vite, or online minifiers to compress files'
      },
      {
        id: 'perf5',
        title: 'Content Delivery Network (CDN) is used',
        description: 'Serves your site from servers closer to your visitors',
        tip: 'Consider Cloudflare, AWS CloudFront, or your hosting provider&apos;s CDN'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Trust',
    description: 'Essential for protecting your business and building customer confidence',
    icon: 'shield-full',
    items: [
      {
        id: 'sec1',
        title: 'SSL certificate installed (HTTPS)',
        description: 'Google marks non-secure sites and penalizes rankings',
        tip: 'Most hosting providers offer free SSL certificates',
        links: [
          {
            url: 'https://www.ssllabs.com/ssltest/',
            text: 'SSL Labs Test'
          },
          {
            url: 'https://www.whynopadlock.com/',
            text: 'Why No Padlock?'
          }
        ]
      },
      {
        id: 'sec2',
        title: 'Contact forms have spam protection',
        description: 'Prevents bot submissions and maintains inbox sanity',
        tip: 'Add reCAPTCHA, honeypot fields, or rate limiting to your forms'
      },
      {
        id: 'sec3',
        title: 'Regular backups are configured',
        description: 'Your insurance policy against data loss or hacking',
        tip: 'Set up automated daily/weekly backups with your hosting provider or plugin'
      },
      {
        id: 'sec4',
        title: 'Software and plugins are up to date',
        description: 'Outdated software is the #1 security vulnerability',
        tip: 'Check your CMS, plugins, and themes for available updates monthly'
      },
      {
        id: 'sec5',
        title: 'Privacy policy and terms are present',
        description: 'Legal requirements in many jurisdictions',
        tip: 'Use a legal template generator or consult a lawyer for proper coverage'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Experience',
    description: 'Over 60% of web traffic comes from mobile devices',
    icon: 'phone',
    items: [
      {
        id: 'mob1',
        title: 'Site is fully responsive on all devices',
        description: 'Content adapts seamlessly to different screen sizes',
        tip: 'Test on actual devices or use browser dev tools to simulate different screens',
        links: [
          {
            url: 'https://search.google.com/test/mobile-friendly',
            text: 'Google Mobile-Friendly Test'
          },
          {
            url: 'https://www.responsinator.com/',
            text: 'Responsinator'
          }
        ]
      },
      {
        id: 'mob2',
        title: 'Touch targets are at least 48px',
        description: 'Buttons and links are easy to tap with a finger',
        tip: 'Use browser inspector to measure button sizes and add padding if needed'
      },
      {
        id: 'mob3',
        title: 'Text is readable without zooming',
        description: 'Font size is at least 16px on mobile',
        tip: 'Check CSS media queries and ensure body text is 16px+ on small screens'
      },
      {
        id: 'mob4',
        title: 'Mobile menu is easy to use',
        description: 'Navigation is accessible and intuitive on small screens',
        tip: 'Test hamburger menu, dropdown behavior, and ensure clear navigation hierarchy'
      },
      {
        id: 'mob5',
        title: 'Forms are mobile-optimized',
        description: 'Input fields are properly sized and keyboard-friendly',
        tip: 'Use correct input types (email, tel, number) and test on real mobile devices'
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO Fundamentals',
    description: 'Help search engines understand and rank your site',
    icon: 'search',
    items: [
      {
        id: 'seo1',
        title: 'Each page has a unique title tag',
        description: 'The most important on-page SEO element',
        tip: 'Keep titles under 60 characters',
        links: [
          {
            url: 'https://www.seoptimer.com/meta-tag-checker',
            text: 'Meta Tag Checker'
          }
        ]
      },
      {
        id: 'seo2',
        title: 'Meta descriptions are compelling',
        description: 'Your search result "ad copy" - make it count',
        tip: 'Write 150-160 character summaries that encourage clicks and include keywords'
      },
      {
        id: 'seo3',
        title: 'URL structure is clean and descriptive',
        description: 'example.com/services not example.com/page?id=123',
        tip: 'Use hyphens to separate words and keep URLs short and meaningful'
      },
      {
        id: 'seo4',
        title: 'XML sitemap exists and is submitted',
        description: 'Helps search engines find all your pages',
        tip: 'Generate sitemap.xml and submit via Google Search Console and Bing Webmaster Tools',
        links: [
          {
            url: 'https://www.xml-sitemaps.com/',
            text: 'XML Sitemap Generator'
          },
          {
            url: 'https://search.google.com/search-console',
            text: 'Google Search Console'
          }
        ]
      },
      {
        id: 'seo5',
        title: 'Google Analytics or similar installed',
        description: 'Can\'t improve what you don\'t measure',
        tip: 'Install Google Analytics 4 or alternatives like Plausible for privacy-focused tracking'
      }
    ]
  },
  {
    id: 'content',
    title: 'Content & Engagement',
    description: 'Keep visitors on your site and encourage action',
    icon: 'document-text',
    items: [
      {
        id: 'cont1',
        title: 'Clear calls-to-action on every page',
        description: 'Tell visitors exactly what you want them to do next',
        tip: 'Use action verbs like "Get Started", "Download Now", or "Contact Us" in prominent buttons'
      },
      {
        id: 'cont2',
        title: 'Contact information is easy to find',
        description: 'Phone, email, and address visible within 2 clicks',
        tip: 'Add contact info in header/footer and create a dedicated contact page'
      },
      {
        id: 'cont3',
        title: 'Content is up-to-date',
        description: 'No outdated prices, old events, or stale information',
        tip: 'Review all pages quarterly and update dates, prices, and remove expired content'
      },
      {
        id: 'cont4',
        title: 'Social proof is displayed',
        description: 'Testimonials, reviews, or case studies build trust',
        tip: 'Add customer testimonials, Google reviews, or client logos prominently on key pages'
      },
      {
        id: 'cont5',
        title: '404 errors are handled gracefully',
        description: 'Custom 404 page helps lost visitors find their way',
        tip: 'Create a custom 404.html with search box, popular links, and helpful navigation'
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Optimization',
    description: 'Take your website to the next level',
    icon: 'wrench',
    items: [
      {
        id: 'adv1',
        title: 'Schema markup implemented',
        description: 'Helps search engines understand your content better',
        tip: 'Add JSON-LD schema for business info, reviews, and product data to improve rich snippets',
        links: [
          {
            url: 'https://search.google.com/structured-data/testing-tool',
            text: 'Google Structured Data Testing Tool'
          },
          {
            url: 'https://schema.org/',
            text: 'Schema.org'
          }
        ]
      },
      {
        id: 'adv2',
        title: 'Core Web Vitals pass',
        description: 'Google\'s key metrics for user experience',
        tip: 'Focus on LCP (<2.5s), FID (<100ms), and CLS (<0.1) for good user experience scores',
        links: [
          {
            url: 'https://pagespeed.web.dev/',
            text: 'PageSpeed Insights (Core Web Vitals)'
          },
          {
            url: 'https://web.dev/vitals/',
            text: 'Web.dev Core Web Vitals'
          }
        ]
      },
      {
        id: 'adv3',
        title: 'Accessibility standards met',
        description: 'Site is usable by people with disabilities',
        tip: 'Check for alt text on images, proper heading hierarchy, and keyboard navigation support',
        links: [
          {
            url: 'https://wave.webaim.org/',
            text: 'WAVE Web Accessibility Evaluation'
          },
          {
            url: 'https://www.accessibilitychecker.org/',
            text: 'Accessibility Checker'
          }
        ]
      },
      {
        id: 'adv4',
        title: 'A/B testing implemented',
        description: 'Data-driven improvements to conversion rates',
        tip: 'Use Google Optimize, Optimizely, or VWO to test headlines, CTAs, and page layouts'
      },
      {
        id: 'adv5',
        title: 'Progressive Web App features',
        description: 'Offline functionality and app-like experience',
        tip: 'Add service worker for caching, web app manifest, and ensure HTTPS for installability'
      }
    ]
  }
];