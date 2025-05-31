// Re-export form constants from the new forms.ts file
export { projectTypes, timelines, budgetRanges } from './forms';

// Re-export FAQ items from the new content.ts file
export { faqItems as faqs } from './content';

// Legacy FAQ interface for backward compatibility
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}