// Example usage of the consolidated EmailTemplate component

import React from 'react';
import EmailTemplate, { ContactFormEmail, AutoReplyEmail } from './EmailTemplate';

// Sample email data
const sampleEmailData = {
  contact: {
    name: 'John Smith',
    email: 'john@example-agency.com',
    agency: 'Example Marketing Agency',
    phone: '(555) 123-4567',
    howHeard: 'Google Search'
  },
  project: {
    type: 'E-commerce Development',
    scope: 'We need a custom e-commerce platform with advanced inventory management and multi-location support.',
    additionalInfo: 'The client prefers Shopify Plus but is open to custom solutions if they provide better value.',
    whiteLabel: true
  },
  timeline: {
    timeline: '3-4 months',
    budget: '$25,000 - $50,000'
  }
};

// Example 1: Using the main EmailTemplate component with type prop
export function ExampleContactFormEmail() {
  return (
    <EmailTemplate 
      type="contact-form" 
      data={sampleEmailData}
      customization={{
        previewText: 'Urgent: New high-value project inquiry',
        headerTitle: 'Priority Project Inquiry',
        footerText: 'This high-priority email was sent from the Planet X Devs contact form.'
      }}
    />
  );
}

export function ExampleAutoReplyEmail() {
  return (
    <EmailTemplate 
      type="auto-reply" 
      data={sampleEmailData}
      customization={{
        previewText: 'Welcome to Planet X Devs - Your inquiry is confirmed',
        headerTitle: 'Welcome to Planet X Devs!',
        headerSubtitle: 'Thanks for choosing us for your e-commerce project'
      }}
    />
  );
}

// Example 2: Using the convenience wrapper components (backward compatible)
export function BackwardCompatibleContactForm() {
  return (
    <ContactFormEmail 
      data={sampleEmailData}
      customization={{
        headerTitle: 'New Client Inquiry',
        headerSubtitle: `Priority request from ${sampleEmailData.contact.agency}`
      }}
    />
  );
}

export function BackwardCompatibleAutoReply() {
  return (
    <AutoReplyEmail 
      data={sampleEmailData}
      customization={{
        previewText: 'Your project inquiry has been received'
      }}
    />
  );
}

// Example 3: Usage in email sending function
export async function sendProjectInquiryEmails(formData: typeof sampleEmailData) {
  const { renderEmailToHtml } = await import('./utils');
  
  // Send notification email to admin
  const contactFormHtml = await renderEmailToHtml(
    <EmailTemplate type="contact-form" data={formData} />
  );
  
  // Send auto-reply to client
  const autoReplyHtml = await renderEmailToHtml(
    <EmailTemplate type="auto-reply" data={formData} />
  );
  
  // Send emails using your email service
  console.log('Contact form email HTML:', contactFormHtml);
  console.log('Auto-reply email HTML:', autoReplyHtml);
  
  return {
    contactFormHtml,
    autoReplyHtml
  };
}

// Example 4: Custom email configurations for different scenarios
export function UrgentProjectEmail() {
  return (
    <EmailTemplate
      type="contact-form"
      data={{
        ...sampleEmailData,
        project: {
          ...sampleEmailData.project,
          scope: '🚨 URGENT: ' + sampleEmailData.project.scope
        }
      }}
      customization={{
        previewText: '🚨 URGENT: High-priority project inquiry requires immediate attention',
        headerTitle: '🚨 Urgent Project Inquiry',
        headerSubtitle: 'This client has requested expedited service',
        footerText: 'URGENT: Please respond within 2 hours during business hours.'
      }}
    />
  );
}

export function RetainerClientEmail() {
  return (
    <EmailTemplate
      type="auto-reply"
      data={sampleEmailData}
      customization={{
        previewText: 'Thank you for considering our retainer services',
        headerTitle: 'Retainer Services Inquiry',
        headerSubtitle: 'Let\'s discuss ongoing partnership opportunities',
        footerText: (
          <>
            <p style={{ margin: '0 0 10px 0' }}>
              This inquiry is about our retainer services.
            </p>
            <p style={{ margin: '0', fontSize: '12px' }}>
              Planet X Devs | Your Partner in Digital Growth
            </p>
          </>
        )
      }}
    />
  );
}

// Export all examples for documentation
export default {
  ExampleContactFormEmail,
  ExampleAutoReplyEmail,
  BackwardCompatibleContactForm,
  BackwardCompatibleAutoReply,
  sendProjectInquiryEmails,
  UrgentProjectEmail,
  RetainerClientEmail
};