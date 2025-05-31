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

export const whyChooseUs = [
  {
    id: 'easy-to-work-with',
    title: 'Actually Easy to Work With',
    description: 'No ego, no jargon, just clear communication and reliable delivery'
  },
  {
    id: 'quality-reputation',
    title: 'Quality You Can Stake Your Reputation On',
    description: 'We build websites that make your agency shine'
  },
  {
    id: 'flexible-solutions',
    title: 'Flexible Solutions',
    description: 'Custom development, Elementor, WordPress - we adapt to your project needs'
  },
  {
    id: 'white-label',
    title: 'True White-Label Partnership',
    description: 'Your clients never know we exist unless you want them to'
  }
];

export const workProcess = [
  {
    step: 1,
    title: 'Brief & Quote',
    description: 'Send your project requirements. Get a detailed quote within 24 hours.'
  },
  {
    step: 2,
    title: 'Development',
    description: 'I build while keeping you updated with regular progress reports.'
  },
  {
    step: 3,
    title: 'Review & Refine',
    description: 'Test on staging environment. Make revisions until perfect.'
  },
  {
    step: 4,
    title: 'Launch & Support',
    description: 'Deploy to production. Ongoing support included for 30 days.'
  }
];

export const coreValues = [
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