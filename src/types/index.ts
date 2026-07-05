// Shared interfaces and types for the application

import { IconName } from "@/components/ui/Icon";

// Service related types
export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  timeline?: string;
  icon: IconName;
  popular?: boolean;
}

export interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: ServiceFeature[];
  timeline?: string;
  icon: React.ReactNode;
  className?: string;
}

// Testimonial related types
export interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  className?: string;
}

// Form related types
export interface FormData {
  // Contact Info (shared across all forms)
  name: string;
  email: string;
  agency?: string;
  company?: string;
  phone?: string;
  howHeard?: string;
  preferredCommMethod?: string;
  
  // Project Details (project inquiry form)
  projectType?: string;
  projectScope?: string;
  additionalInfo?: string;
  whiteLabel?: boolean;
  
  // Budget & Timeline (project inquiry form)
  timeline?: string;
  budget?: string;
  
  // Quick Consultation fields
  interests?: string;
  challenge?: string;
  preferredContact?: string;
  businessType?: string;
  
  // Support/Maintenance fields
  existingClient?: boolean;
  priority?: string;
  supportType?: string;
  websiteUrl?: string;
  platform?: string;
  currentPlatform?: string;
  issueDescription?: string;
  maintenanceInterest?: boolean;
  
  // Agency Partnership fields
  monthlyHours?: string;
  
  // Form type identifier
  formType?: 'project-inquiry' | 'quick-consultation' | 'support-maintenance' | 'quick-win';
}

// Form submission status
export interface FormSubmissionStatus {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
  successMessage?: string;
}

// Form validation result
export interface FormValidationResult {
  isValid: boolean;
  errors: FormErrors;
  firstErrorField?: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface ProjectTypeOption {
  value: string;
  label: string;
}

export interface TimelineOption {
  value: string;
  label: string;
}

export interface BudgetRangeOption {
  value: string;
  label: string;
}

export interface HowHeardOption {
  value: string;
  label: string;
}

// Pricing related types
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary';
}

// Retainer Plan types
export interface RetainerPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

// Agency Partnership Plan types
export interface AgencyPartnershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  description?: string;
}

// Portfolio related types
export interface PortfolioTestimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface PortfolioImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface PortfolioProject {
  /** URL-safe identifier, also used as the on-page anchor: /portfolio#slug */
  slug: string;
  /** Project / website name */
  title: string;
  /** Client or business the site was built for */
  client: string;
  /** Industry or vertical, e.g. "Law Firm", "E-Commerce Retailer" */
  clientType: string;
  /** Geographic location — helps AI tools tie the work to a place/entity */
  location?: string;
  /** Year the project was completed, e.g. "2025" */
  year: string;
  /** Live site URL, if public — lets AI search verify and cite the work */
  url?: string;
  /** One or two plain-language sentences summarizing the project (used as the AI-facing overview) */
  summary: string;
  /** Services delivered on this project (maps to our service entities) */
  services: string[];
  /** Technologies / platforms used */
  techStack: string[];
  /** The problem the client came with */
  challenge?: string;
  /** How we solved it */
  solution?: string;
  /** Concrete, measurable outcomes — the facts AI summaries surface first */
  results?: string[];
  /** Optional client quote */
  testimonial?: PortfolioTestimonial;
  /** Screenshot / preview image */
  image?: PortfolioImage;
  /** Surface higher on the page and mark as featured in structured data */
  featured?: boolean;
}

// FAQ related types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// Timeline related types
export interface TimelineStep {
  id?: string;
  number: number;
  title: string;
  description: string;
  details?: string[];
  icon?: string;
}

export interface VerticalTimelineProps {
  steps: TimelineStep[];
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

// Content related types
export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

// Navigation related types
export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

// Hero related types
export interface HeroAction {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroProps {
  title: string;
  subtitle: string;
  bullets?: string[];
  actions?: HeroAction[];
  centered?: boolean;
  className?: string;
  showPlanets?: boolean;
}

// Social related types
export interface SocialLink {
  name: string;
  href: string;
  color: string;
}

export interface ContactInfo {
  email: string;
  responseTime: string;
}