// Centralized exports for all utilities

// Validation utilities
export {
  validateEmail,
  validatePhone,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateUrl,
  validateSelect
} from './validation';

// Form utilities
export {
  formatPhoneNumber,
  getProjectTypeLabel,
  getTimelineLabel,
  getBudgetLabel,
  getHowHeardLabel,
  capitalizeWords,
  sanitizeText,
  formatFormData,
  createFormSummary
} from './forms';

// Contact form specific validation
export {
  validateContactForm,
  isFormValid,
  getFieldError,
  validateField,
  validationMessages
} from './contactFormValidation';

// Form submission utilities
export {
  submitContactForm,
  getInitialFormData,
  scrollToFirstError,
  handleFieldChange
} from './formSubmission';