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

// Support request email data interface
interface SupportRequestEmailData {
  contact: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
  };
  support: {
    websiteUrl: string;
    supportType: string;
    priority: string;
    issueDescription: string;
    platform?: string;
  };
}

// Email template types
export type SupportEmailType = 'client-inquiry' | 'auto-reply';

interface SupportRequestEmailProps {
  type: SupportEmailType;
  data: SupportRequestEmailData;
  customization?: {
    previewText?: string;
    headerTitle?: string;
    headerSubtitle?: string;
    footerText?: string;
  };
}

export const SupportRequestEmail: React.FC<SupportRequestEmailProps> = ({
  type,
  data,
  customization = {},
}) => {
  const { contact, support } = data;

  // Generate content based on email type
  const getEmailContent = () => {
    if (type === 'client-inquiry') {
      // Get priority color and emoji
      const getPriorityDisplay = (priority: string) => {
        switch (priority) {
          case 'urgent':
            return { color: 'red', emoji: '🚨', label: 'URGENT - Site Down/Critical' };
          case 'high':
            return { color: 'yellow', emoji: '⚠️', label: 'HIGH - Affects Business' };
          case 'medium':
            return { color: 'blue', emoji: '📋', label: 'MEDIUM - Needs Attention' };
          case 'low':
            return { color: 'gray', emoji: '📝', label: 'LOW - When Convenient' };
          default:
            return { color: 'gray', emoji: '📝', label: priority };
        }
      };

      const priorityDisplay = getPriorityDisplay(support.priority);

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
          
          <EmailSection title="Support Request Details">
            <table cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                <EmailField
                  label="Website"
                  value={
                    <a href={support.websiteUrl} style={{ color: '#2563eb' }}>
                      {support.websiteUrl}
                    </a>
                  }
                />
                <EmailField
                  label="Priority Level"
                  value={
                    <EmailBadge color={priorityDisplay.color as any}>
                      {priorityDisplay.emoji} {priorityDisplay.label}
                    </EmailBadge>
                  }
                />
                <EmailField
                  label="Issue Type"
                  value={<EmailBadge color="blue">{support.supportType}</EmailBadge>}
                />
                {support.platform && (
                  <EmailField label="Platform/CMS" value={support.platform} />
                )}
                <EmailField label="Issue Description" value={support.issueDescription} />
              </tbody>
            </table>
          </EmailSection>
          
          {support.priority === 'urgent' && (
            <div 
              style={{ 
                marginTop: '30px', 
                padding: '20px', 
                backgroundColor: '#fef2f2', 
                borderRadius: '8px',
                border: '2px solid #fca5a5'
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#dc2626' }}>
                🚨 URGENT SUPPORT REQUEST
              </h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#b91c1c' }}>
                This is marked as urgent. Client expects response within 2-4 hours.
              </p>
            </div>
          )}
          
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
    const getResponseTime = (priority: string) => {
      switch (priority) {
        case 'urgent':
          return '2-4 hours';
        case 'high':
          return '24 hours';
        case 'medium':
          return '48 hours';
        case 'low':
          return '3-5 business days';
        default:
          return '48 hours';
      }
    };

    const responseTime = getResponseTime(support.priority);

    return (
      <div style={{ marginBottom: '30px' }}>
        <p style={{ fontSize: '18px', color: '#1f2937', margin: '0 0 20px 0' }}>
          Hi {contact.name},
        </p>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 20px 0', lineHeight: '1.6' }}>
          Thank you for submitting a support request to Planet X Devs. I've received 
          your {support.supportType.toLowerCase()} request for {support.websiteUrl} 
          and I'm ready to help resolve this issue.
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
            Your Request Details
          </h3>
          <ul style={{ margin: '0', paddingLeft: '20px', color: '#3730a3' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>Priority:</strong> {support.priority.toUpperCase()}
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Issue Type:</strong> {support.supportType}
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Expected Response:</strong> Within {responseTime}
            </li>
            {support.platform && (
              <li style={{ marginBottom: '8px' }}>
                <strong>Platform:</strong> {support.platform}
              </li>
            )}
          </ul>
        </div>
        
        {support.priority === 'urgent' && (
          <div
            style={{
              backgroundColor: '#fef2f2',
              border: '2px solid #fca5a5',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '30px',
            }}
          >
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#dc2626' }}>
              🚨 Urgent Request Acknowledged
            </h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#b91c1c' }}>
              I understand this is urgent and will prioritize your request. 
              You can expect an initial response within 2-4 hours.
            </p>
          </div>
        )}
        
        <div
          style={{
            backgroundColor: '#ecfdf5',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '30px',
          }}
        >
          <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#065f46' }}>
            🔧 What Happens Next?
          </h4>
          <ol style={{ margin: '0', paddingLeft: '20px', color: '#047857' }}>
            <li style={{ marginBottom: '8px' }}>
              I'll investigate the issue and gather any necessary information
            </li>
            <li style={{ marginBottom: '8px' }}>
              I'll provide an initial assessment and proposed solution
            </li>
            <li style={{ marginBottom: '8px' }}>
              If approved, I'll implement the fix and test thoroughly
            </li>
            <li style={{ marginBottom: '8px' }}>
              I'll confirm the resolution and provide any follow-up notes
            </li>
          </ol>
        </div>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 20px 0', lineHeight: '1.6' }}>
          If you have any additional information, screenshots, or urgent concerns, 
          please reply to this email immediately.
        </p>
        
        {support.priority === 'urgent' && (
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <p style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#dc2626', fontWeight: 'bold' }}>
              For URGENT issues, you can also reach me at:
            </p>
            <p style={{ margin: '0', fontSize: '16px', color: '#1f2937' }}>
              📞 Emergency Line: <strong>(555) 123-4567</strong>
            </p>
          </div>
        )}
        
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <EmailButton href={`mailto:nathaniel@planetxdevs.com?subject=Re: Support Request - ${support.supportType}`}>
            Reply to This Request
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
            ⏰ Response Time Commitment
          </h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#92400e' }}>
            Based on your {support.priority} priority level, I commit to responding 
            within {responseTime} during business hours. Thank you for your patience!
          </p>
        </div>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 20px 0' }}>
          I'll get this resolved quickly for you!
        </p>
        
        <p style={{ fontSize: '16px', color: '#4b5563', margin: '0' }}>
          Best regards,<br />
          <strong style={{ color: '#1f2937' }}>Nathaniel from Planet X Devs</strong><br />
          <span style={{ fontSize: '14px', color: '#6b7280' }}>Your Technical Support Specialist</span>
        </p>
      </div>
    );
  };

  // Generate default values based on email type
  const getDefaults = () => {
    if (type === 'client-inquiry') {
      const priorityPrefix = support.priority === 'urgent' ? '[URGENT] ' : 
                            support.priority === 'high' ? '[HIGH] ' : '';
      
      return {
        previewText: `${priorityPrefix}Support request from ${contact.name} - ${support.supportType}`,
        headerTitle: `${priorityPrefix}Support Request`,
        headerSubtitle: `${support.supportType} issue reported by ${contact.name}`,
        footerText: 'This email was sent from the Planet X Devs support form.',
      };
    }

    return {
      previewText: `Support request received - We'll respond within ${support.priority === 'urgent' ? '2-4 hours' : '48 hours'}`,
      headerTitle: 'Support Request Received',
      headerSubtitle: 'Your issue is being prioritized and addressed',
      footerText: (
        <>
          <p style={{ margin: '0 0 10px 0' }}>
            This is an automated response to confirm we&apos;ve received your support request.
          </p>
          <p style={{ margin: '0', fontSize: '12px' }}>
            Planet X Devs | Reliable Technical Support
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
export const SupportRequestClientEmail: React.FC<{ 
  data: SupportRequestEmailData; 
  customization?: SupportRequestEmailProps['customization'] 
}> = ({ data, customization }) => (
  <SupportRequestEmail type="client-inquiry" data={data} customization={customization} />
);

export const SupportRequestAutoReply: React.FC<{ 
  data: SupportRequestEmailData; 
  customization?: SupportRequestEmailProps['customization'] 
}> = ({ data, customization }) => (
  <SupportRequestEmail type="auto-reply" data={data} customization={customization} />
);

export default SupportRequestEmail;