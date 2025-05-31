// Export the consolidated email template
export { 
  default as EmailTemplate,
  ContactFormEmail,
  AutoReplyEmail,
  type EmailType 
} from './EmailTemplate';

// Export email components (for advanced usage)
export {
  BaseEmailTemplate,
  EmailContainer,
  EmailHeader,
  EmailContent,
  EmailSection,
  EmailButton,
  EmailFooter,
  EmailField,
  EmailBadge,
} from './components/BaseEmailTemplate';

// Export email utilities
export {
  renderEmailToHtml,
  htmlToPlainText,
  createPlainTextEmail,
  validateEmailData,
  sanitizeEmailContent,
  formatEmailSubject,
} from './utils';