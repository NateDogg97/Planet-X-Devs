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
  formType?: 'project-inquiry' | 'quick-consultation' | 'support-maintenance';
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