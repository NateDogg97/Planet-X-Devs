// Form submission utilities

import { FormData } from '@/types';

// Analytics types
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters?: Record<string, any>
    ) => void;
  }
}

/**
 * Submits form data to the server/service with form type tracking
 * @param formData - Form data to submit
 * @returns Promise that resolves on successful submission
 */
export async function submitContactForm(formData: FormData): Promise<void> {
  try {
    // Track form submission analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_type: formData.formType || 'unknown',
        form_id: `contact_${formData.formType || 'generic'}`,
      });
    }
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      // Track form errors
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_error', {
          form_type: formData.formType || 'unknown',
          error_type: 'validation',
        });
      }
      
      // If validation errors, throw them
      if (data.errors) {
        throw new Error(JSON.stringify(data.errors));
      }
      // Otherwise throw the error message
      throw new Error(data.message || 'Failed to submit form');
    }
    
    // Track successful submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_success', {
        form_type: formData.formType || 'unknown',
        form_id: `contact_${formData.formType || 'generic'}`,
      });
    }
    
    // Success - form submitted
    console.log('Form submitted successfully:', data);
  } catch (error) {
    // Track submission errors
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_error', {
        form_type: formData.formType || 'unknown',
        error_type: 'submission',
      });
    }
    
    // Re-throw the error for the form component to handle
    console.error('Form submission error:', error);
    throw error;
  }
}

/**
 * Resets form to initial state based on form type
 * @param formType - Type of form to initialize
 * @returns Initial form data object
 */
export function getInitialFormData(formType?: string): FormData {
  const baseData: FormData = {
    name: '',
    email: '',
    formType: formType || 'project-inquiry'
  };

  // Add fields based on form type
  switch (formType) {
    case 'project-inquiry':
      return {
        ...baseData,
        agency: '',
        phone: '',
        howHeard: '',
        projectType: '',
        projectScope: '',
        additionalInfo: '',
        whiteLabel: false,
        timeline: '',
        budget: ''
      };
      
    case 'quick-consultation':
      return {
        ...baseData,
        company: '',
        phone: '',
        interests: '',
        challenge: '',
        preferredContact: '',
        businessType: ''
      };
      
    case 'support-maintenance':
      return {
        ...baseData,
        existingClient: false,
        priority: '',
        supportType: '',
        websiteUrl: '',
        platform: '',
        issueDescription: '',
        maintenanceInterest: false
      };
      
    default:
      return {
        ...baseData,
        agency: '',
        phone: '',
        howHeard: '',
        projectType: '',
        projectScope: '',
        additionalInfo: '',
        whiteLabel: false,
        timeline: '',
        budget: ''
      };
  }
}

/**
 * Scrolls to the first form error on the page
 */
export function scrollToFirstError(): void {
  const firstError = document.querySelector('[data-error="true"]');
  if (firstError) {
    firstError.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }
}

/**
 * Handles form field changes and error clearing
 * @param field - Field name that changed
 * @param value - New field value
 * @param setFormData - Form data setter function
 * @param errors - Current errors object
 * @param setErrors - Errors setter function
 */
export function handleFieldChange(
  field: string,
  value: string | boolean,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>,
  errors: Record<string, string>,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
): void {
  // Update form data
  setFormData(prev => ({ ...prev, [field]: value }));
  
  // Clear error for this field if it exists
  if (errors[field]) {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }
}