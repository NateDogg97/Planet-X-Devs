// Export all email templates
export { ContactFormEmail } from './templates/ContactFormEmail';
export { AutoReplyEmail } from './templates/AutoReplyEmail';

// Export email components
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