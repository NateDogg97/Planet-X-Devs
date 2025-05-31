export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'design-files',
    question: 'Can you work with our existing design files?',
    answer: 'Absolutely! I work with Figma, Adobe XD, Sketch, or even PSD files. I can also collaborate directly with your design team to ensure pixel-perfect implementation.'
  },
  {
    id: 'white-label',
    question: 'Do you offer white-label services?',
    answer: 'Yes! All work is delivered under your agency\'s brand. I never contact your clients directly, and all deliverables can be presented as your own work.'
  },
  {
    id: 'turnaround',
    question: 'What\'s your typical turnaround time?',
    answer: 'For retainer clients: 24-48 hours for most requests. For project work: I provide detailed timelines with each quote, typically ranging from 1-6 weeks depending on complexity.'
  },
  {
    id: 'hosting',
    question: 'Do you handle hosting and maintenance?',
    answer: 'I can manage hosting setup and provide maintenance through retainer plans. However, I\'m also happy to hand off completed projects to your team or preferred hosting provider.'
  },
  {
    id: 'post-launch',
    question: 'What if we need changes after project completion?',
    answer: 'All projects include 30 days of post-launch support for bug fixes. For feature additions or ongoing changes, I recommend our retainer plans for the best value and fastest turnaround.'
  }
];

export const projectTypes = [
  { value: 'ecommerce', label: 'E-Commerce Build/Migration' },
  { value: 'wordpress', label: 'Custom WordPress Development' },
  { value: 'seo', label: 'Technical SEO Implementation' },
  { value: 'performance', label: 'Performance Optimization' },
  { value: 'custom', label: 'Custom Web Application' },
  { value: 'retainer', label: 'Ongoing Retainer' },
  { value: 'other', label: 'Other' }
];

export const timelines = [
  { value: 'asap', label: 'ASAP (Rush delivery +25%)' },
  { value: '1-2-weeks', label: '1-2 weeks' },
  { value: '2-4-weeks', label: '2-4 weeks' },
  { value: '1-2-months', label: '1-2 months' },
  { value: '2-3-months', label: '2-3 months' },
  { value: 'flexible', label: 'Flexible' }
];

export const budgetRanges = [
  { value: 'under-1k', label: 'Under $1,000' },
  { value: '1k-3k', label: '$1,000 - $3,000' },
  { value: '3k-5k', label: '$3,000 - $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-20k', label: '$10,000 - $20,000' },
  { value: '20k+', label: '$20,000+' },
  { value: 'retainer', label: 'Monthly Retainer' }
];