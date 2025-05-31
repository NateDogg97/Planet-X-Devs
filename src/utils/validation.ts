// Validation utilities for forms

/**
 * Validates email format using RFC 5322 compatible regex
 * @param email - Email string to validate
 * @returns true if email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }
  
  // RFC 5322 compatible email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return emailRegex.test(email.trim());
}

/**
 * Validates phone number format (US and international)
 * @param phone - Phone string to validate
 * @returns true if phone is valid, false otherwise
 */
export function validatePhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') {
    return false;
  }
  
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  
  // Valid if:
  // - 10 digits (US format)
  // - 11 digits starting with 1 (US with country code)
  // - 7-15 digits (international format)
  return (
    (digitsOnly.length === 10) ||
    (digitsOnly.length === 11 && digitsOnly.startsWith('1')) ||
    (digitsOnly.length >= 7 && digitsOnly.length <= 15)
  );
}

/**
 * Validates that a required field has a value
 * @param value - Value to validate
 * @returns true if value is present and not empty, false otherwise
 */
export function validateRequired(value: string): boolean {
  if (value === null || value === undefined) {
    return false;
  }
  
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Validates minimum length requirement
 * @param value - Value to validate
 * @param minLength - Minimum required length
 * @returns true if value meets minimum length, false otherwise
 */
export function validateMinLength(value: string, minLength: number): boolean {
  if (!value || typeof value !== 'string') {
    return false;
  }
  
  return value.trim().length >= minLength;
}

/**
 * Validates maximum length requirement
 * @param value - Value to validate
 * @param maxLength - Maximum allowed length
 * @returns true if value is within max length, false otherwise
 */
export function validateMaxLength(value: string, maxLength: number): boolean {
  if (!value || typeof value !== 'string') {
    return true; // Empty values are valid for max length check
  }
  
  return value.trim().length <= maxLength;
}

/**
 * Validates URL format
 * @param url - URL string to validate
 * @returns true if URL is valid, false otherwise
 */
export function validateUrl(url: string): boolean {
  if (!url || typeof url !== 'string') {
    return false;
  }
  
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates that value is one of the allowed options
 * @param value - Value to validate
 * @param allowedValues - Array of allowed values
 * @returns true if value is in allowed values, false otherwise
 */
export function validateSelect(value: string, allowedValues: string[]): boolean {
  if (!value || typeof value !== 'string') {
    return false;
  }
  
  return allowedValues.includes(value);
}