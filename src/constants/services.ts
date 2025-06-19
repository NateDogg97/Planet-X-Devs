import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'white-label-development',
    title: 'White-Label Development Partnership',
    price: '$2,000 - $15,000',
    description: 'Complete white-label development partnership that makes your agency unstoppable. From strategy to launch, we work invisibly behind the scenes while you take all the credit.',
    features: [
      'Your agency name on all deliverables',
      'Direct client communication if needed',
      'Project management in your style',
      'Custom proposals using your branding',
      'Ongoing maintenance and support options'
    ],
    timeline: '1-8 weeks depending on scope',
    icon: 'users'
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
    description: 'White-label custom websites that elevate your agency\'s portfolio. Built from scratch with unique functionality and distinctive design that makes your clients think you\'re a development powerhouse.',
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
    description: 'Professional e-commerce solutions that help your agency win high-value retail clients. Complete white-label builds that make you the go-to agency for online sales growth.',
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
    id: 'wordpress',
    title: 'Custom WordPress Development',
    price: '$1,500 - $8,000',
    description: 'White-label WordPress development that makes your agency look like WordPress experts. Professional sites your clients can actually manage, from corporate sites to complex membership platforms.',
    features: [
      'Custom theme development from your designs',
      'Advanced Custom Fields (ACF) implementation',
      'Page builder setup (Elementor, Gutenberg)',
      'Plugin development & customization',
      'Multisite configuration & management'
    ],
    timeline: '1-4 weeks depending on features',
    icon: 'globe'
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
    id: 'performance',
    title: 'Performance Optimization Audit',
    price: '$500 - $1,500',
    description: 'Performance optimization that makes your agency the hero. Fix slow websites and deliver dramatic speed improvements that your clients will notice immediately.',
    features: [
      'PageSpeed Insights analysis & fixes',
      'Image optimization & lazy loading',
      'CDN setup & configuration',
      'Caching strategy implementation',
      'Database & code optimization'
    ],
    timeline: '3-5 days',
    icon: 'lightning'
  }
];

export const retainerPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$900-1,100',
    period: '/month',
    features: [
      '20 hours of development',
      '$45-55/hour effective rate',
      'Basic maintenance, updates, small changes'
    ],
    highlighted: false
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$1,600-2,000',
    period: '/month',
    features: [
      '40 hours of development',
      '$40-50/hour effective rate',
      'Ongoing development, regular features'
    ],
    highlighted: true,
    badge: 'MOST POPULAR'
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '$2,800-3,600',
    period: '/month',
    features: [
      '80 hours of development',
      '$35-45/hour effective rate',
      'Major projects, dedicated support'
    ],
    highlighted: false
  }
];

export const agencyPartnershipPlans = [
  {
    id: 'partner-essential',
    name: 'Essential Partnership',
    price: '$1,200-1,500',
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
    price: '$2,200-2,800',
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
    price: '$4,000-5,500',
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