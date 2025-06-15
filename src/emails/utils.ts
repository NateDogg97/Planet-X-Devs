import React from 'react';

interface ContactFormData {
  contact: {
    name: string;
    email: string;
    agency: string;
  };
  project: {
    type: string;
    scope: string;
  };
  timeline: {
    timeline: string;
    budget: string;
  };
}

interface AutoReplyData {
  recipientName: string;
  agencyName: string;
  projectType: string;
}

/**
 * Renders a React email component to an HTML string
 * @param component - React component to render
 * @returns HTML string
 */
export async function renderEmailToHtml(component: React.ReactElement): Promise<string> {
  const ReactDOMServer = (await import('react-dom/server')).default;
  return ReactDOMServer.renderToStaticMarkup(component);
}

/**
 * Converts HTML email to plain text
 * @param html - HTML string to convert
 * @returns Plain text version of the email
 */
export function htmlToPlainText(html: string): string {
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, '');
  
  // Replace common HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');
  
  // Replace multiple spaces with single space
  text = text.replace(/\s+/g, ' ');
  
  // Replace multiple newlines with double newline
  text = text.replace(/\n{3,}/g, '\n\n');
  
  // Trim whitespace
  return text.trim();
}

/**
 * Creates a plain text version from email data
 * @param data - Email data object
 * @returns Formatted plain text email
 */
export function createPlainTextEmail(data: {
  contact?: {
    name: string;
    email: string;
    agency: string;
    phone?: string;
    howHeard?: string;
  };
  project?: {
    type: string;
    scope: string;
    additionalInfo?: string;
    whiteLabel: boolean;
  };
  timeline?: {
    timeline: string;
    budget: string;
  };
  recipientName?: string;
  agencyName?: string;
  projectType?: string;
  isAutoReply?: boolean;
}): string {
  if (data.isAutoReply && data.recipientName && data.agencyName && data.projectType) {
    return `
Hi ${data.recipientName},

Thank you for reaching out to Planet X Devs! I've received your project inquiry and I'm excited to learn more about how I can help ${data.agencyName} with your ${data.projectType.toLowerCase()} needs.

WHAT HAPPENS NEXT?
• I'll review your project details within the next 24 hours
• I'll send you a detailed response with initial thoughts and questions
• We can schedule a call to discuss your project in more detail

In the meantime, feel free to:
• Check out our services page at https://planetxsolutions.com/services
• Reply to this email if you have any additional information to share
• Connect with me on LinkedIn to stay updated

RESPONSE TIME
I typically respond to all inquiries within 24 hours during business days. If your project is urgent, please mention it in your reply.

Looking forward to working with you!

Best regards,
Planet X Devs Team

---
This is an automated response to confirm we've received your inquiry.
Planet X Devs | Building Digital Excellence
    `.trim();
  }
  
  if (data.contact && data.project && data.timeline) {
    const { contact, project, timeline } = data;
    return `
New Project Inquiry from ${contact.agency}

CONTACT INFORMATION
Name: ${contact.name}
Email: ${contact.email}
Agency: ${contact.agency}
${contact.phone ? `Phone: ${contact.phone}` : ''}
${contact.howHeard ? `How They Found You: ${contact.howHeard}` : ''}

PROJECT DETAILS
Project Type: ${project.type}
Project Description: ${project.scope}
${project.additionalInfo ? `Additional Information: ${project.additionalInfo}` : ''}
${project.whiteLabel ? 'White-Label Project: Yes' : ''}

BUDGET & TIMELINE
Timeline: ${timeline.timeline}
Budget Range: ${timeline.budget}

---
This email was sent from the Planet X Devs contact form.
To reply, please email ${contact.email}
    `.trim();
  }
  
  return '';
}

/**
 * Sanitizes email content to prevent injection
 * @param content - Content to sanitize
 * @returns Sanitized content
 */
export function sanitizeEmailContent(content: string): string {
  if (!content || typeof content !== 'string') {
    return '';
  }
  
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/&(?!(amp|lt|gt|quot|#39);)/g, '&amp;');
}

/**
 * Formats email subject line
 * @param template - Template string with placeholders
 * @param data - Data to replace placeholders
 * @returns Formatted subject line
 */
export function formatEmailSubject(template: string, data: Record<string, string>): string {
  let subject = template;
  
  Object.entries(data).forEach(([key, value]) => {
    const placeholder = `{{${key}}}`;
    subject = subject.replace(new RegExp(placeholder, 'g'), value);
  });
  
  return subject;
}

function isContactFormData(data: any): data is ContactFormData {
  return data?.contact?.name && 
         data?.contact?.email && 
         data?.contact?.agency &&
         data?.project?.type && 
         data?.project?.scope &&
         data?.timeline?.timeline && 
         data?.timeline?.budget;
}

function isAutoReplyData(data: any): data is AutoReplyData {
  return data?.recipientName && 
         data?.agencyName && 
         data?.projectType;
}

/**
 * Validates email template data
 * @param data - Data to validate
 * @returns True if data is valid
 */
export function validateEmailData(data: unknown): boolean {
  if (!data || typeof data !== 'object') {
    return false;
  }
  
  return isContactFormData(data) || isAutoReplyData(data);
}