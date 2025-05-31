// Form utility functions for formatting and data manipulation

import { projectTypes, timelines, budgetRanges, howHeardOptions } from '@/constants';

/**
 * Formats phone number with standard US formatting
 * @param phone - Raw phone number string
 * @returns Formatted phone number or original if invalid
 */
export function formatPhoneNumber(phone: string): string {
  if (!phone || typeof phone !== 'string') {
    return phone;
  }
  
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  
  // Format based on digit count
  if (digitsOnly.length === 10) {
    // Format: (555) 123-4567
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
    // Format: +1 (555) 123-4567
    return `+1 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7)}`;
  }
  
  // Return original if doesn't match expected formats
  return phone;
}

/**
 * Gets the display label for a project type value
 * @param type - Project type value
 * @returns Display label or the original value if not found
 */
export function getProjectTypeLabel(type: string): string {
  if (!type || typeof type !== 'string') {
    return type;
  }
  
  const projectType = projectTypes.find(pt => pt.value === type);
  return projectType ? projectType.label : type;
}

/**
 * Gets the display label for a timeline value
 * @param timeline - Timeline value
 * @returns Display label or the original value if not found
 */
export function getTimelineLabel(timeline: string): string {
  if (!timeline || typeof timeline !== 'string') {
    return timeline;
  }
  
  const timelineOption = timelines.find(t => t.value === timeline);
  return timelineOption ? timelineOption.label : timeline;
}

/**
 * Gets the display label for a budget range value
 * @param budget - Budget range value
 * @returns Display label or the original value if not found
 */
export function getBudgetLabel(budget: string): string {
  if (!budget || typeof budget !== 'string') {
    return budget;
  }
  
  const budgetOption = budgetRanges.find(b => b.value === budget);
  return budgetOption ? budgetOption.label : budget;
}

/**
 * Gets the display label for how heard option value
 * @param howHeard - How heard value
 * @returns Display label or the original value if not found
 */
export function getHowHeardLabel(howHeard: string): string {
  if (!howHeard || typeof howHeard !== 'string') {
    return howHeard;
  }
  
  const option = howHeardOptions.find(h => h.value === howHeard);
  return option ? option.label : howHeard;
}

/**
 * Capitalizes the first letter of each word
 * @param text - Text to capitalize
 * @returns Capitalized text
 */
export function capitalizeWords(text: string): string {
  if (!text || typeof text !== 'string') {
    return text;
  }
  
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Sanitizes text input by trimming and removing extra whitespace
 * @param text - Text to sanitize
 * @returns Sanitized text
 */
export function sanitizeText(text: string): string {
  if (!text || typeof text !== 'string') {
    return text;
  }
  
  return text.trim().replace(/\s+/g, ' ');
}

/**
 * Formats form data for submission by sanitizing text fields and formatting phone
 * @param formData - Raw form data
 * @returns Formatted form data
 */
export function formatFormData(formData: Record<string, unknown>): Record<string, unknown> {
  const formatted = { ...formData };
  
  // Sanitize text fields
  const textFields = ['name', 'email', 'agency', 'projectScope', 'additionalInfo'];
  textFields.forEach(field => {
    if (formatted[field] && typeof formatted[field] === 'string') {
      formatted[field] = sanitizeText(formatted[field] as string);
    }
  });
  
  // Format phone number
  if (formatted.phone && typeof formatted.phone === 'string') {
    formatted.phone = formatPhoneNumber(formatted.phone as string);
  }
  
  return formatted;
}

/**
 * Creates a summary object from form data for display purposes
 * @param formData - Form data to summarize
 * @returns Summary object with formatted labels
 */
export function createFormSummary(formData: Record<string, unknown>) {
  return {
    contact: {
      name: String(formData.name || ''),
      email: String(formData.email || ''),
      agency: String(formData.agency || ''),
      phone: formData.phone ? formatPhoneNumber(String(formData.phone)) : '',
      howHeard: getHowHeardLabel(String(formData.howHeard || ''))
    },
    project: {
      type: getProjectTypeLabel(String(formData.projectType || '')),
      scope: String(formData.projectScope || ''),
      additionalInfo: String(formData.additionalInfo || ''),
      whiteLabel: Boolean(formData.whiteLabel)
    },
    timeline: {
      timeline: getTimelineLabel(String(formData.timeline || '')),
      budget: getBudgetLabel(String(formData.budget || ''))
    }
  };
}