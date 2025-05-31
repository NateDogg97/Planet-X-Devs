// Form-related constants for ContactForm and other forms

// Project type options for contact form
export interface ProjectTypeOption {
  value: string;
  label: string;
}

export const projectTypes: ProjectTypeOption[] = [
  { value: 'custom', label: 'Custom Website Development' },
  { value: 'ecommerce', label: 'E-Commerce Build/Migration' },
  { value: 'wordpress', label: 'Custom WordPress Development' },
  { value: 'seo', label: 'Technical SEO Implementation' },
  { value: 'performance', label: 'Performance Optimization' },
  { value: 'retainer', label: 'Ongoing Retainer' },
  { value: 'other', label: 'Other (please specify)' }
];

// Timeline options for project delivery
export interface TimelineOption {
  value: string;
  label: string;
}

export const timelines: TimelineOption[] = [
  { value: 'asap', label: 'ASAP (Rush delivery +25%)' },
  { value: '1-2-weeks', label: '1-2 weeks' },
  { value: '2-4-weeks', label: '2-4 weeks' },
  { value: '1-2-months', label: '1-2 months' },
  { value: '2-3-months', label: '2-3 months' },
  { value: 'flexible', label: 'Flexible' }
];

// Budget range options
export interface BudgetRangeOption {
  value: string;
  label: string;
}

export const budgetRanges: BudgetRangeOption[] = [
  { value: 'under-1k', label: 'Under $1,000' },
  { value: '1k-3k', label: '$1,000 - $3,000' },
  { value: '3k-5k', label: '$3,000 - $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-20k', label: '$10,000 - $20,000' },
  { value: '20k+', label: '$20,000+' },
  { value: 'retainer', label: 'Monthly Retainer' }
];

// How did you hear about us options
export interface HowHeardOption {
  value: string;
  label: string;
}

export const howHeardOptions: HowHeardOption[] = [
  { value: 'google', label: 'Google Search' },
  { value: 'referral', label: 'Referral from another agency' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'conference', label: 'Conference/Event' },
  { value: 'directory', label: 'Agency Directory' },
  { value: 'other', label: 'Other' }
];

// Form validation messages
export const formValidationMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  minLength: (length: number) => `Must be at least ${length} characters`,
  maxLength: (length: number) => `Must be no more than ${length} characters`
};

// Form field labels and help text
export const formLabels = {
  name: 'Full Name',
  email: 'Email Address',
  agency: 'Agency Name',
  phone: 'Phone Number',
  howHeard: 'How did you hear about us?',
  projectType: 'Project Type',
  projectScope: 'Project Description',
  additionalInfo: 'Additional Information',
  whiteLabel: 'This is a white-label project',
  timeline: 'Desired Timeline',
  budget: 'Project Budget'
};

export const formHelpText = {
  phone: 'Optional - for urgent project discussions',
  projectScope: 'Brief description of what you need built',
  additionalInfo: 'Any specific requirements, integrations, or constraints',
  whiteLabel: 'Check if you want completely white-label service',
  timeline: 'When do you need this completed?',
  budget: 'What\'s your budget range for this project?'
};