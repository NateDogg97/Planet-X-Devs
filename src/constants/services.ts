import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'custom-development',
    title: 'Custom Website Development',
    price: '$5,000 - $15,000',
    description: 'Completely custom websites built from scratch. Perfect for agencies with clients who need unique functionality and distinctive design.',
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
    price: '$3,000 - $8,000',
    description: 'Complete e-commerce solutions built on modern platforms. Perfect for agencies with retail clients looking to sell online or upgrade their existing stores.',
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
    price: '$2,000 - $5,000',
    description: 'Professional WordPress sites that are easy for your clients to manage. From corporate sites to complex membership platforms.',
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
    price: '$1,500 - $3,000',
    description: 'Complete technical SEO overhaul to improve search rankings and organic traffic. Perfect complement to your content marketing services.',
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
    description: 'Comprehensive site speed analysis and optimization. Improve user experience and conversion rates with faster load times.',
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
    price: '$1,500',
    period: '/month',
    features: [
      '20 hours of development',
      '2-3 day turnaround',
      'Perfect for maintenance'
    ],
    highlighted: false
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$3,000',
    period: '/month',
    features: [
      '40 hours of development',
      '24-48 hour turnaround',
      'Priority support'
    ],
    highlighted: true,
    badge: 'MOST POPULAR'
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '$5,000',
    period: '/month',
    features: [
      '80 hours of development',
      'Same-day turnaround',
      'Dedicated developer'
    ],
    highlighted: false
  }
];