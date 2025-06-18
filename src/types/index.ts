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
  issueDescription?: string;
  maintenanceInterest?: boolean;
  
  // Form type identifier
  formType?: 'project_inquiry' | 'quick_consultation' | 'support_maintenance';
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

// FAQ related types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// Process related types
export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon?: string;
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