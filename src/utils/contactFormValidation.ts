// Contact form specific validation

import { FormData, FormErrors } from '@/types';
import { validateEmail, validateRequired, validatePhone, validateSelect } from './validation';
import { projectTypes, timelines, budgetRanges } from '@/constants';

/**
 * Validates the entire contact form
 * @param formData - Form data to validate
 * @returns Object containing validation errors
 */
export function validateContactForm(formData: FormData): FormErrors {
  const errors: FormErrors = {};
  
  // Contact Information Validation
  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required';
  }
  
  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!validateRequired(formData.agency)) {
    errors.agency = 'Agency name is required';
  }
  
  // Phone is optional, but if provided, must be valid
  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  // Project Details Validation
  if (!validateRequired(formData.projectType)) {
    errors.projectType = 'Please select a project type';
  } else {
    const projectTypeValues = projectTypes.map(pt => pt.value);
    if (!validateSelect(formData.projectType, projectTypeValues)) {
      errors.projectType = 'Please select a valid project type';
    }
  }
  
  if (!validateRequired(formData.projectScope)) {
    errors.projectScope = 'Project description is required';
  }
  
  // Budget & Timeline Validation
  if (!validateRequired(formData.timeline)) {
    errors.timeline = 'Please select a timeline';
  } else {
    const timelineValues = timelines.map(t => t.value);
    if (!validateSelect(formData.timeline, timelineValues)) {
      errors.timeline = 'Please select a valid timeline';
    }
  }
  
  if (!validateRequired(formData.budget)) {
    errors.budget = 'Please select a budget range';
  } else {
    const budgetValues = budgetRanges.map(b => b.value);
    if (!validateSelect(formData.budget, budgetValues)) {
      errors.budget = 'Please select a valid budget range';
    }
  }
  
  return errors;
}

/**
 * Checks if the form has any validation errors
 * @param errors - Errors object from validation
 * @returns true if form is valid (no errors), false otherwise
 */
export function isFormValid(errors: FormErrors): boolean {
  return Object.keys(errors).length === 0;
}

/**
 * Gets validation error message for a specific field
 * @param field - Field name
 * @param errors - Errors object
 * @returns Error message or empty string if no error
 */
export function getFieldError(field: string, errors: FormErrors): string {
  return errors[field] || '';
}

/**
 * Validates a single field
 * @param field - Field name
 * @param value - Field value
 * @param formData - Complete form data (for context)
 * @returns Error message or empty string if valid
 */
export function validateField(field: string, value: string | boolean, formData: FormData): string {
  // Create temporary form data with the new value
  const tempFormData = { ...formData, [field]: value };
  
  // Validate the entire form and return error for specific field
  const errors = validateContactForm(tempFormData);
  return getFieldError(field, errors);
}

/**
 * Gets user-friendly validation messages
 */
export const validationMessages = {
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
  invalidPhone: 'Please enter a valid phone number',
  selectRequired: 'Please make a selection',
  minLength: (length: number) => `Must be at least ${length} characters`,
  maxLength: (length: number) => `Must be no more than ${length} characters`
} as const;