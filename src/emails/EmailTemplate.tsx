import * as React from 'react';
import {
  BaseEmailTemplate,
  EmailContainer,
  EmailHeader,
  EmailContent,
  EmailSection,
  EmailField,
  EmailBadge,
  EmailButton,
  EmailFooter,
} from './components/BaseEmailTemplate';

// Email template types
export type EmailType = 'contact-form' | 'auto-reply';

// Base email data interface
interface BaseEmailData {
  contact: {
    name: string;
    email: string;
    agency: string;
    phone?: string;
    howHeard?: string;
  };
  project: {
    type: string;
    scope: string;
    additionalInfo?: string;
    whiteLabel: boolean;
  };
  timeline: {
    timeline: string;
    budget: string;
  };
}

// Email template props
interface EmailTemplateProps {
  type: EmailType;
  data: BaseEmailData;
  customization?: {
    previewText?: string;
    headerTitle?: string;
    headerSubtitle?: string;
    footerText?: string;
  };
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  type,
  data,
  customization = {},
}) => {
  const { contact, project, timeline } = data;

  // Generate content based on email type
  const getEmailContent = () => {
    if (type === 'contact-form') {
      return (
        <>
          <EmailSection title="Contact Information">
            <table cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                <EmailField label="Name" value={contact.name} />
                <EmailField
                  label="Email"
                  value={
                    <a href={`mailto:${contact.email}`} style={{ color: '#2563eb' }}>
                      {contact.email}
                    </a>
                  }
                />
                <EmailField label="Agency" value={contact.agency} />
                {contact.phone && <EmailField label="Phone" value={contact.phone} />}
                {contact.howHeard && <EmailField label="How They Found You" value={contact.howHeard} />}
              </tbody>
            </table>
          </EmailSection>
          
          <EmailSection title="Project Details">
            <table cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                <EmailField
                  label="Project Type"
                  value={<EmailBadge color="blue">{project.type}</EmailBadge>}
                />
                <EmailField label="Project Description" value={project.scope} />
                {project.additionalInfo && (
                  <EmailField label="Additional Information" value={project.additionalInfo} />
                )}
                {project.whiteLabel && (
                  <EmailField
                    label="White-Label Project"
                    value={
                      <span style={{ color: '#059669', fontWeight: 'bold' }}>
                        ✓ Yes - This is a white-label project
                      </span>
                    }
                  />
                )}
              </tbody>
            </table>
          </EmailSection>
          
          <EmailSection title="Budget & Timeline">
            <table cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                <EmailField label="Timeline" value={timeline.timeline} />
                <EmailField label="Budget Range" value={timeline.budget} />
              </tbody>
            </table>
          </EmailSection>
          
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1e40af' }}>
              Quick Actions
            </h3>
            <p style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#3730a3' }}>
              Reply directly to this email to contact {contact.name}
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
              Their email address is set as the reply-to address.
            </p>
          </div>
        </>
      );
    }

    // Auto-reply email content
    return (
      <div style={{ marginBottom: '30px' }}>
        <p style={{ fontSize: '18px', color: '#1f2937', margin: '0 0 20px 0' }}>
          Hi {contact.name},
        </p>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 20px 0', lineHeight: '1.6' }}>
          Thank you for reaching out to Planet X Devs! I&apos;ve received your project inquiry 
          and I&apos;m excited to learn more about how I can help {contact.agency} with 
          your {project.type.toLowerCase()} needs.
        </p>
        
        <div
          style={{
            backgroundColor: '#f0f9ff',
            borderLeft: '4px solid #2563eb',
            padding: '20px',
            marginBottom: '30px',
          }}
        >
          <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', color: '#1e40af' }}>
            What happens next?
          </h3>
          <ul style={{ margin: '0', paddingLeft: '20px', color: '#3730a3' }}>
            <li style={{ marginBottom: '10px' }}>
              I&apos;ll review your project details within the next 24 hours
            </li>
            <li style={{ marginBottom: '10px' }}>
              I&apos;ll send you a detailed response with initial thoughts and questions
            </li>
            <li style={{ marginBottom: '10px' }}>
              We can schedule a call to discuss your project in more detail
            </li>
          </ul>
        </div>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 20px 0', lineHeight: '1.6' }}>
          In the meantime, feel free to:
        </p>
        
        <ul style={{ margin: '0 0 30px 0', paddingLeft: '20px', color: '#4b5563' }}>
          <li style={{ marginBottom: '10px' }}>
            Check out our{' '}
            <a href="https://planetxsolutions.com/services" style={{ color: '#2563eb' }}>
              services page
            </a>{' '}
            for more details on what we offer
          </li>
          <li style={{ marginBottom: '10px' }}>
            Reply to this email if you have any additional information to share
          </li>
          <li style={{ marginBottom: '10px' }}>
            Connect with me on{' '}
            <a href="https://linkedin.com/in/planetxsolutions" style={{ color: '#2563eb' }}>
              LinkedIn
            </a>{' '}
            to stay updated
          </li>
        </ul>
        
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <EmailButton href="https://planetxsolutions.com/services">
            View Our Services
          </EmailButton>
        </div>
        
        <div
          style={{
            backgroundColor: '#fef3c7',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '30px',
          }}
        >
          <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#92400e' }}>
            ⏰ Response Time
          </h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#92400e' }}>
            I typically respond to all inquiries within 24 hours during business days. 
            If your project is urgent, please mention it in your reply.
          </p>
        </div>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 20px 0' }}>
          Looking forward to working with you!
        </p>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0' }}>
          Best regards,<br />
          <strong style={{ color: '#1f2937' }}>Planet X Devs Team</strong>
        </p>
      </div>
    );
  };

  // Generate default values based on email type
  const getDefaults = () => {
    if (type === 'contact-form') {
      return {
        previewText: `New project inquiry from ${contact.agency} - ${project.type}`,
        headerTitle: 'New Project Inquiry',
        headerSubtitle: `You've received a new project request from ${contact.agency}`,
        footerText: 'This email was sent from the Planet X Devs contact form.',
      };
    }

    return {
      previewText: `Thank you for your inquiry about ${project.type}`,
      headerTitle: 'Thank You for Your Inquiry!',
      headerSubtitle: 'I\'ve received your project request',
      footerText: (
        <>
          <p style={{ margin: '0 0 10px 0' }}>
            This is an automated response to confirm we&apos;ve received your inquiry.
          </p>
          <p style={{ margin: '0', fontSize: '12px' }}>
            Planet X Devs | Building Digital Excellence
          </p>
        </>
      ),
    };
  };

  const defaults = getDefaults();
  const config = {
    previewText: customization.previewText || defaults.previewText,
    headerTitle: customization.headerTitle || defaults.headerTitle,
    headerSubtitle: customization.headerSubtitle || defaults.headerSubtitle,
    footerText: customization.footerText || defaults.footerText,
  };

  return (
    <BaseEmailTemplate previewText={config.previewText}>
      <EmailContainer>
        <EmailHeader
          title={config.headerTitle}
          subtitle={config.headerSubtitle}
        />
        
        <EmailContent>
          {getEmailContent()}
        </EmailContent>
        
        <EmailFooter>
          {config.footerText}
        </EmailFooter>
      </EmailContainer>
    </BaseEmailTemplate>
  );
};

// Convenience wrapper components for backward compatibility and ease of use
export const ContactFormEmail: React.FC<{ data: BaseEmailData; customization?: EmailTemplateProps['customization'] }> = ({ 
  data, 
  customization 
}) => (
  <EmailTemplate type="contact-form" data={data} customization={customization} />
);

export const AutoReplyEmail: React.FC<{ data: BaseEmailData; customization?: EmailTemplateProps['customization'] }> = ({ 
  data, 
  customization 
}) => (
  <EmailTemplate type="auto-reply" data={data} customization={customization} />
);

// Export the main template as default
export default EmailTemplate;