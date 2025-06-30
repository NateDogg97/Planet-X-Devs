// Form-related constants for ContactForm and other forms

// Form type enum for different contact forms
export enum ContactFormType {
  PROJECT_INQUIRY = 'project-inquiry',
  QUICK_CONSULTATION = 'quick-consultation',
  SUPPORT_REQUEST = 'support-request'
}

// Form display names
export const FORM_DISPLAY_NAMES: Record<ContactFormType, string> = {
  [ContactFormType.PROJECT_INQUIRY]: 'Project Inquiry',
  [ContactFormType.QUICK_CONSULTATION]: 'Quick Consultation',
  [ContactFormType.SUPPORT_REQUEST]: 'Support Request'
};

// Form-specific field configurations
export const FORM_FIELD_CONFIG: Record<ContactFormType, {
  requiredFields: string[];
  optionalFields: string[];
  hiddenFields: string[];
}> = {
  [ContactFormType.PROJECT_INQUIRY]: {
    requiredFields: ['name', 'email', 'agency', 'projectType', 'projectScope', 'timeline', 'budget'],
    optionalFields: ['phone', 'howHeard', 'additionalInfo'],
    hiddenFields: []
  },
  [ContactFormType.QUICK_CONSULTATION]: {
    requiredFields: ['name', 'email'],
    optionalFields: ['company', 'phone', 'interests', 'challenge', 'preferredContact', 'businessType'],
    hiddenFields: ['budget', 'timeline', 'projectScope']
  },
  [ContactFormType.SUPPORT_REQUEST]: {
    requiredFields: ['name', 'email', 'issueDescription'],
    optionalFields: ['existingClient', 'priority', 'supportType', 'websiteUrl', 'platform', 'maintenanceInterest'],
    hiddenFields: ['budget', 'projectType', 'howHeard']
  }
};

// Conditional field rules
export const CONDITIONAL_FIELD_RULES = {
  // Show maintenance interest only if not existing client
  maintenanceInterest: {
    showWhen: { existingClient: false }
  },
  // Show website URL for support requests
  websiteUrl: {
    showWhen: { formType: ContactFormType.SUPPORT_REQUEST }
  },
  // Show budget details only for project inquiries
  budgetDetails: {
    showWhen: { formType: ContactFormType.PROJECT_INQUIRY }
  }
};

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

// Monthly hours needed options
export interface MonthlyHoursOption {
  value: string;
  label: string;
}

export const monthlyHours: MonthlyHoursOption[] = [
  { value: 'not-applicable', label: 'Not applicable - one-time project' },
  { value: '10-20', label: '10-20 hours/month' },
  { value: '20-40', label: '20-40 hours/month' },
  { value: '40-60', label: '40-60 hours/month' },
  { value: '60-80', label: '60-80 hours/month' },
  { value: '80+', label: '80+ hours/month' }
]

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

// Support-specific options
export const supportTypes = [
  { value: 'bug', label: 'Bug Fix' },
  { value: 'update', label: 'Content Update' },
  { value: 'feature', label: 'New Feature' },
  { value: 'performance', label: 'Performance Issue' },
  { value: 'security', label: 'Security Concern' },
  { value: 'other', label: 'Other' }
];

export const priorityLevels = [
  { value: 'low', label: 'Low - Can wait a few days' },
  { value: 'medium', label: 'Medium - Within 48 hours' },
  { value: 'high', label: 'High - Within 24 hours' },
  { value: 'urgent', label: 'Urgent - ASAP' }
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
  company: 'Company Name',
  phone: 'Phone Number',
  howHeard: 'How did you hear about us?',
  projectType: 'Project Type',
  projectScope: 'Project Description',
  timeline: 'Timeline',
  budget: 'Budget Range',
  additionalInfo: 'Additional Information',
  interests: 'Areas of Interest',
  challenge: 'Current Challenge',
  preferredContact: 'Preferred Contact Method',
  businessType: 'Business Type',
  existingClient: 'I am an existing client',
  priority: 'Priority Level',
  supportType: 'Support Type',
  websiteUrl: 'Website URL',
  platform: 'Platform/CMS',
  issueDescription: 'Issue Description',
  maintenanceInterest: 'Interested in maintenance plan'
};