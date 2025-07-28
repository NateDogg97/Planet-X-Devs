import { Service } from '@/types';
import { IconName } from '@/components/ui/Icon';

export interface QuickWinService {
  title: string;
  price: string;
  description: string;
  icon: IconName;
}

export const quickWinServices: QuickWinService[] = [
  {
    title: 'Performance Audits',
    price: '$299',
    description: 'Comprehensive analysis of your site\'s speed with actionable recommendations',
    icon: 'gauge'
  },
  {
    title: '2-Hour Quick Fixes',
    price: '$199',
    description: 'Fast turnaround on urgent issues or small updates',
    icon: 'wrench'
  },
  {
    title: 'Landing Page Updates',
    price: '$499',
    description: 'Refresh your existing landing pages with modern design and copy',
    icon: 'edit'
  },
  {
    title: 'Mobile Responsiveness Fix',
    price: '$399',
    description: 'Make your site look perfect on all devices',
    icon: 'smartphone'
  }
];

export const services: Service[] = [
  {
    id: 'white-label-development',
    title: 'White-Label Development Partnership',
    price: '$2,000 - $15,000',
    description: 'Complete white-label development partnership that makes your agency unstoppable. From strategy to launch, we work invisibly behind the scenes while you take all the credit.',
    features: [
      'Your agency name on all deliverables',
      'Project management in your style',
      'Custom proposals using your branding',
      'Direct client communication if needed',
      'Ongoing maintenance and support options'
    ],
    timeline: '1-8 weeks depending on scope',
    icon: 'users',
    popular: true
  },
  {
    id: 'wordpress',
    title: 'Custom WordPress Development',
    price: '$1,500 - $8,000',
    description: 'White-label WordPress development that elevates your agency\'s technical reputation. Professional sites your clients can actually manage, from corporate sites to complex membership platforms.',
    features: [
      'Custom theme development',
      'Works with any page builder setup',
      'Advanced Custom Fields (ACF) experts',
      'Plugin development & customization',
      'e-Commerce configuration & management'
    ],
    timeline: '1-4 weeks depending on features',
    icon: 'globe'
  },
  {
    id: 'emergency-support',
    title: 'Emergency Support & Fixes',
    price: '$500 - $2,000',
    description: 'When your client\'s website breaks and they\'re breathing down your neck, we\'ve got you covered. 24-hour response time to save your reputation and their business.',
    features: [
      'Emergency response within 24 hours',
      'Website downtime resolution',
      'Security breach mitigation',
      'Database recovery and restoration',
      'Performance emergency fixes'
    ],
    timeline: '24-48 hours',
    icon: 'shield'
  },
  {
    id: 'custom-development',
    title: 'Custom Website Development',
    price: '$5,000 - $15,000',
    description: 'White-label custom websites that distinguish your agency from the competition. Built from scratch with cutting-edge tech and distinctive design that showcases your commitment to excellence.',
    features: [
      'Hand-coded for perfect performance',
      'Unique designs that stand out',
      'Advanced functionality and integrations',
      'Full ownership of clean, documented code'
    ],
    timeline: '4-8 weeks',
    icon: 'code'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Builds & Migrations',
    price: '$3,000 - $12,000',
    description: 'Professional e-commerce solutions that help your agency win high-value retail clients. Complete white-label builds that position you as the trusted choice for online sales growth.',
    features: [
      'Shopify, WooCommerce, or custom solutions',
      'Payment gateway integration (Stripe, PayPal, etc.)',
      'Inventory management & order tracking',
      'Mobile-responsive checkout optimization',
      'Data migration from existing platforms'
    ],
    timeline: '2-6 weeks depending on complexity',
    icon: 'shopping-cart'
  },
  {
    id: 'performance',
    title: 'Performance Optimization Audit',
    price: '$500 - $1,500',
    description: 'Performance optimization that turns your agency into the client\'s favorite problem-solver. Fix slow websites and deliver dramatic speed improvements that your clients will notice immediately.',
    features: [
      'PageSpeed Insights analysis & fixes',
      'Image optimization & lazy loading',
      'CDN setup & configuration',
      'Caching strategy implementation',
      'Database & code optimization'
    ],
    timeline: '3-5 days',
    icon: 'lightning'
  },
  {
    id: 'platform-consultation',
    title: 'Platform Selection Consultation',
    price: '$500 - $1,000',
    description: 'Expert guidance to help your agency choose the perfect platform for each client project. Avoid costly mistakes and recommend solutions that actually fit the client\'s needs.',
    features: [
      'Comprehensive platform analysis (WordPress, Shopify, custom)',
      'Cost-benefit breakdown for each option',
      'Technical requirements assessment',
      'Scalability and maintenance considerations',
      'Detailed recommendation report'
    ],
    timeline: '3-5 business days',
    icon: 'lightbulb'
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO Implementation',
    price: '$1,000 - $4,000',
    description: 'Technical SEO implementation that amplifies your agency\'s marketing efforts. White-label services that complement your content strategy and deliver measurable ranking improvements.',
    features: [
      'Schema markup implementation',
      'XML sitemap optimization',
      'Core Web Vitals optimization',
      'Mobile-first indexing setup',
      'URL structure & redirect management'
    ],
    timeline: '1-2 weeks',
    icon: 'chart'
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Support',
    price: '$200 - $1,500',
    description: 'Keep your clients\' websites running smoothly with regular updates, security monitoring, and performance optimization. Available through our partnership plans.',
    features: [
      'Regular security updates and monitoring',
      'Performance optimization and monitoring',
      'Backup management and recovery',
      'Plugin and theme updates',
      'Uptime monitoring and alerts'
    ],
    timeline: 'Ongoing monthly service',
    icon: 'settings'
  }
];

export const agencyPartnershipPlans = [
  {
    id: 'partner-essential',
    name: 'Essential Partnership',
    price: '$900-1,100',
    period: '/month',
    features: [
      '25 hours of white-label development',
      'Priority support (same-day response)',
      'Your branding on all deliverables',
      'Client communication support',
      'Monthly strategy consultation'
    ],
    highlighted: false,
    description: 'Perfect for agencies handling 2-3 client projects per month'
  },
  {
    id: 'partner-professional',
    name: 'Professional Partnership',
    price: '$1,600-2,000',
    period: '/month',
    features: [
      '50 hours of white-label development',
      'Dedicated project manager',
      'Emergency support included',
      'Platform consultation included',
      'Bi-weekly partnership calls',
      'Custom proposal templates'
    ],
    highlighted: true,
    badge: 'RECOMMENDED',
    description: 'Ideal for growing agencies with consistent development needs'
  },
  {
    id: 'partner-enterprise',
    name: 'Enterprise Partnership',
    price: '$2,800-3,600',
    period: '/month',
    features: [
      '100 hours of white-label development', 
      'Dedicated development team',
      '24-hour emergency response',
      'Unlimited consultations',
      'Weekly partnership meetings',
      'Custom development workflows',
      'Co-branded marketing materials'
    ],
    highlighted: false,
    description: 'For established agencies with high-volume development needs'
  }
];

export const developmentProcessSteps = [
  {
    number: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your client's needs, brand, and goals.",
    details: [
      "Requirements gathering session",
      "Technical architecture planning",
      "Timeline and milestone setup",
      "Initial wireframes and mockups"
    ]
  },
  {
    number: 2,
    title: "Design & Development",
    description: "Our development team brings your vision to life with clean, efficient code.",
    details: [
      "Custom design implementation",
      "Responsive development",
      "Content management system setup",
      "Third-party integrations"
    ]
  },
  {
    number: 3,
    title: "Testing & Optimization",
    description: "Rigorous testing ensures everything works perfectly before launch.",
    details: [
      "Cross-browser compatibility testing",
      "Mobile responsiveness verification",
      "Performance optimization",
      "SEO foundation setup"
    ]
  },
  {
    number: 4,
    title: "Launch & Support",
    description: "We handle the technical deployment and provide ongoing support.",
    details: [
      "Domain and hosting setup",
      "SSL certificate installation",
      "Analytics and tracking setup",
      "Client training and documentation"
    ]
  }
];