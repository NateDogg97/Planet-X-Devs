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
} from '../components/BaseEmailTemplate';

// Quick consultation email data interface
interface QuickConsultationEmailData {
  contact: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
  };
  consultation: {
    interests: string;
    challenge: string;
    timeline?: string;
  };
}

// Email template types
export type ConsultationEmailType = 'client-inquiry' | 'auto-reply';

interface QuickConsultationEmailProps {
  type: ConsultationEmailType;
  data: QuickConsultationEmailData;
  customization?: {
    previewText?: string;
    headerTitle?: string;
    headerSubtitle?: string;
    footerText?: string;
  };
}

export const QuickConsultationEmail: React.FC<QuickConsultationEmailProps> = ({
  type,
  data,
  customization = {},
}) => {
  const { contact, consultation } = data;

  // Generate content based on email type
  const getEmailContent = () => {
    if (type === 'client-inquiry') {
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
                {contact.company && <EmailField label="Company" value={contact.company} />}
                {contact.phone && <EmailField label="Phone" value={contact.phone} />}
              </tbody>
            </table>
          </EmailSection>
          
          <EmailSection title="Consultation Request">
            <table cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                <EmailField
                  label="Areas of Interest"
                  value={<EmailBadge color="blue">{consultation.interests}</EmailBadge>}
                />
                <EmailField label="Technical Challenge" value={consultation.challenge} />
                {consultation.timeline && (
                  <EmailField label="Timeline" value={consultation.timeline} />
                )}
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
          Thank you for reaching out to Planet X Devs for a quick consultation! I've received 
          your request about {consultation.interests.toLowerCase()} and I'm excited to help 
          you tackle your technical challenge.
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
              I'll review your technical challenge within 4-6 hours
            </li>
            <li style={{ marginBottom: '10px' }}>
              I'll send you initial thoughts and potential solutions
            </li>
            <li style={{ marginBottom: '10px' }}>
              We can schedule a quick call to discuss further if needed
            </li>
          </ul>
        </div>
        
        <div
          style={{
            backgroundColor: '#ecfdf5',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '30px',
          }}
        >
          <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#065f46' }}>
            💡 Quick Tips While You Wait
          </h4>
          <ul style={{ margin: '0', paddingLeft: '20px', color: '#047857' }}>
            <li style={{ marginBottom: '8px' }}>
              Gather any relevant documentation or screenshots
            </li>
            <li style={{ marginBottom: '8px' }}>
              Note any specific constraints or requirements
            </li>
            <li style={{ marginBottom: '8px' }}>
              Consider your timeline and budget expectations
            </li>
          </ul>
        </div>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 20px 0', lineHeight: '1.6' }}>
          Feel free to reply with any additional details or questions. The more context 
          you provide, the better I can help!
        </p>
        
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <EmailButton href="https://www.planetxdevs.com/services">
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
            ⚡ Fast Response Time
          </h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#92400e' }}>
            Quick consultations typically get a response within 4-6 hours during 
            business hours. For urgent matters, please mention it in your reply.
          </p>
        </div>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 20px 0' }}>
          Looking forward to helping you solve this challenge!
        </p>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0' }}>
          Best regards,<br />
          <strong style={{ color: '#1f2937' }}>Nathaniel from Planet X Devs</strong>
        </p>
      </div>
    );
  };

  // Generate default values based on email type
  const getDefaults = () => {
    if (type === 'client-inquiry') {
      return {
        previewText: `Quick consultation request from ${contact.name} - ${consultation.interests}`,
        headerTitle: 'Quick Consultation Request',
        headerSubtitle: `You've received a consultation request from ${contact.name}`,
        footerText: 'This email was sent from the Planet X Devs quick consultation form.',
      };
    }

    return {
      previewText: `Thank you for your consultation request about ${consultation.interests}`,
      headerTitle: 'Quick Consultation Received!',
      headerSubtitle: 'I\'ll help you solve your technical challenge',
      footerText: (
        <>
          <p style={{ margin: '0 0 10px 0' }}>
            This is an automated response to confirm we&apos;ve received your consultation request.
          </p>
          <p style={{ margin: '0', fontSize: '12px' }}>
            Planet X Devs | Your Technical Problem Solver
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

// Convenience wrapper components
export const QuickConsultationClientEmail: React.FC<{ 
  data: QuickConsultationEmailData; 
  customization?: QuickConsultationEmailProps['customization'] 
}> = ({ data, customization }) => (
  <QuickConsultationEmail type="client-inquiry" data={data} customization={customization} />
);

export const QuickConsultationAutoReply: React.FC<{ 
  data: QuickConsultationEmailData; 
  customization?: QuickConsultationEmailProps['customization'] 
}> = ({ data, customization }) => (
  <QuickConsultationEmail type="auto-reply" data={data} customization={customization} />
);

export default QuickConsultationEmail;