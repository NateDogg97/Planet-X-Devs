// Centralized exports for all constants

// Content-related exports
export {
  homePageFeatures,
  benefits,
  faqItems,
  processSteps,
  coreValues,
  type Feature,
  type Benefit,
  type CoreValue
} from './content';

// FAQ-related exports
export {
  whiteLabelFAQs
} from './faq';

// Form-related exports
export {
  projectTypes,
  timelines,
  budgetRanges,
  monthlyHours,
  howHeardOptions,
  formValidationMessages,
  formLabels,
  type ProjectTypeOption,
  type TimelineOption,
  type BudgetRangeOption,
  type MonthlyHoursOption,
  type HowHeardOption
} from './forms';

// Navigation-related exports
export {
  mainNavigation,
  footerNavigation,
  ctaButtons,
  type NavItem
} from './navigation';

// Service-related exports
export {
  services,
  quickWinServices,
  type QuickWinService
} from './services';

// Portfolio-related exports
export {
  portfolioProjects,
  portfolioPageContent
} from './portfolio';

// Social/Contact-related exports
export {
  socialLinks,
  contactInfo,
  type SocialLink
} from './social';

// Testimonial-related exports
export {
  testimonials,
  type Testimonial
} from './testimonials';

// Page-specific exports
// Note: whiteLabelFAQs is re-exported above via the './faq' block.
export {
  whiteLabelFeatures,
  type WhiteLabelFeature,
  type WhiteLabelFAQ
} from './pages/white-label-web-development';

export {
  websiteAuditChecklistData,
  type WebsiteAuditChecklistItem,
  type WebsiteAuditCategory
} from './pages/website-audit-checklist';