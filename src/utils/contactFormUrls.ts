/**
 * Utility functions for generating contact form URLs with query parameters
 */

export type ContactFormType = 'project-inquiry' | 'quick-consultation' | 'support-maintenance';

/**
 * Generate a contact page URL with the specified form active
 * @param formType - The type of form to activate
 * @param baseUrl - Optional base URL (useful for absolute URLs)
 * @returns URL string with query parameter
 */
export function getContactFormUrl(formType: ContactFormType, baseUrl?: string): string {
  const path = '/contact';
  const queryParam = formType === 'project-inquiry' ? '' : `?form=${formType}`;
  
  if (baseUrl) {
    return `${baseUrl}${path}${queryParam}`;
  }
  
  return `${path}${queryParam}`;
}

/**
 * All available contact form URLs for easy reference
 */
export const CONTACT_FORM_URLS = {
  PROJECT_INQUIRY: getContactFormUrl('project-inquiry'),
  QUICK_CONSULTATION: getContactFormUrl('quick-consultation'),
  SUPPORT_MAINTENANCE: getContactFormUrl('support-maintenance'),
} as const;

/**
 * Validate if a form type is valid
 * @param formType - The form type to validate
 * @returns boolean indicating if the form type is valid
 */
export function isValidFormType(formType: string): formType is ContactFormType {
  return ['project-inquiry', 'quick-consultation', 'support-maintenance'].includes(formType);
}

/**
 * Get display name for a form type
 * @param formType - The form type
 * @returns Human-readable form name
 */
export function getFormDisplayName(formType: ContactFormType): string {
  const displayNames = {
    'project-inquiry': 'Start a Project',
    'quick-consultation': 'Quick Consultation',
    'support-maintenance': 'Support & Maintenance',
  };
  
  return displayNames[formType];
}

/**
 * Example usage:
 * 
 * // Basic URLs
 * getContactFormUrl('project-inquiry')      // '/contact'
 * getContactFormUrl('quick-consultation')   // '/contact?form=quick-consultation'
 * getContactFormUrl('support-maintenance')  // '/contact?form=support-maintenance'
 * 
 * // Absolute URLs
 * getContactFormUrl('quick-consultation', 'https://planetxdevs.com')
 * // 'https://planetxdevs.com/contact?form=quick-consultation'
 * 
 * // Use predefined constants
 * <Link href={CONTACT_FORM_URLS.QUICK_CONSULTATION}>Get Consultation</Link>
 * 
 * // Validation
 * if (isValidFormType(queryParam)) {
 *   // Safe to use
 * }
 */