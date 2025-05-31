// Content-related constants for UI components

import { FAQItem, ProcessStep } from '@/types';

// Features for home page services section
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const homePageFeatures: Feature[] = [
  {
    id: 'custom-development',
    title: 'Custom Website Development',
    description: 'Bespoke websites built from scratch to match your agency\'s unique brand and client needs',
    icon: 'code'
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: 'Mobile-first approaches ensuring perfect display across all devices and screen sizes',
    icon: 'mobile'
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and optimized code for better SEO and user experience',
    icon: 'lightning'
  },
  {
    id: 'secure-scalable',
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security and architecture that grows with your agency',
    icon: 'shield'
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Seamless integration with marketing tools, CRMs, and third-party services',
    icon: 'puzzle'
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    description: 'Dedicated maintenance and support to keep your sites running smoothly',
    icon: 'support'
  }
];

// Benefits/Why Choose Us section
export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const benefits: Benefit[] = [
  {
    id: 'easy-to-work-with',
    title: 'Actually Easy to Work With',
    description: 'No ego, no jargon, just clear communication and reliable delivery',
    icon: 'chat'
  },
  {
    id: 'quality-reputation',
    title: 'Quality You Can Stake Your Reputation On',
    description: 'We build websites that make your agency shine',
    icon: 'badge-check'
  },
  {
    id: 'flexible-solutions',
    title: 'Flexible Solutions',
    description: 'Custom development, Elementor, WordPress - we adapt to your project needs',
    icon: 'refresh'
  },
  {
    id: 'white-label',
    title: 'True White-Label Partnership',
    description: 'Your clients never know we exist unless you want them to',
    icon: 'eye-off'
  }
];

// FAQ items
export const faqItems: FAQItem[] = [
  {
    id: 'design-files',
    question: 'Can you work with our existing design files?',
    answer: 'Absolutely! I work with Figma, Adobe XD, Sketch, or even PSD files. I can also collaborate directly with your design team to ensure pixel-perfect implementation.',
    category: 'design'
  },
  {
    id: 'white-label',
    question: 'Do you offer white-label services?',
    answer: 'Yes! All work is delivered under your agency\'s brand. I never contact your clients directly, and all deliverables can be presented as your own work.',
    category: 'business'
  },
  {
    id: 'turnaround',
    question: 'What\'s your typical turnaround time?',
    answer: 'For retainer clients: 24-48 hours for most requests. For project work: I provide detailed timelines with each quote, typically ranging from 1-6 weeks depending on complexity.',
    category: 'timeline'
  },
  {
    id: 'hosting',
    question: 'Do you handle hosting and maintenance?',
    answer: 'I can manage hosting setup and provide maintenance through retainer plans. However, I\'m also happy to hand off completed projects to your team or preferred hosting provider.',
    category: 'technical'
  },
  {
    id: 'post-launch',
    question: 'What if we need changes after project completion?',
    answer: 'All projects include 30 days of post-launch support for bug fixes. For feature additions or ongoing changes, I recommend our retainer plans for the best value and fastest turnaround.',
    category: 'support'
  }
];

// Process steps for how we work section
export const processSteps: ProcessStep[] = [
  {
    id: 'brief-quote',
    step: 1,
    title: 'Brief & Quote',
    description: 'Send your project requirements. Get a detailed quote within 24 hours.',
    icon: 'document-text'
  },
  {
    id: 'development',
    step: 2,
    title: 'Development',
    description: 'I build while keeping you updated with regular progress reports.',
    icon: 'code'
  },
  {
    id: 'review-refine',
    step: 3,
    title: 'Review & Refine',
    description: 'Test on staging environment. Make revisions until perfect.',
    icon: 'eye'
  },
  {
    id: 'launch-support',
    step: 4,
    title: 'Launch & Support',
    description: 'Deploy to production. Ongoing support included for 30 days.',
    icon: 'rocket'
  }
];

// Core values for about page
export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const coreValues: CoreValue[] = [
  {
    id: 'partnership',
    title: 'Partnership First',
    description: 'Your success is our success. We see ourselves as an extension of your team, not just another vendor.',
    icon: 'users'
  },
  {
    id: 'reliability',
    title: 'Reliability Above All',
    description: 'Deadlines are sacred. Quality is non-negotiable. Your reputation depends on it, and we never forget that.',
    icon: 'shield-check'
  },
  {
    id: 'improvement',
    title: 'Continuous Improvement',
    description: 'Web development evolves fast. We stay current so you can offer cutting-edge solutions to your clients.',
    icon: 'trending-up'
  }
];