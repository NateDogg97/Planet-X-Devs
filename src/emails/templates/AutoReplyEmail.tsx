import * as React from 'react';
import {
  BaseEmailTemplate,
  EmailContainer,
  EmailHeader,
  EmailContent,
  EmailButton,
  EmailFooter,
} from '../components/BaseEmailTemplate';

interface AutoReplyEmailProps {
  recipientName: string;
  agencyName: string;
  projectType: string;
}

export const AutoReplyEmail: React.FC<AutoReplyEmailProps> = ({
  recipientName,
  agencyName,
  projectType,
}) => {
  const previewText = `Thank you for your inquiry about ${projectType}`;

  return (
    <BaseEmailTemplate previewText={previewText}>
      <EmailContainer>
        <EmailHeader
          title="Thank You for Your Inquiry!"
          subtitle="I've received your project request"
        />
        
        <EmailContent>
          <div style={{ marginBottom: '30px' }}>
            <p style={{ fontSize: '18px', color: '#1f2937', margin: '0 0 20px 0' }}>
              Hi {recipientName},
            </p>
            
            <p style={{ fontSize: '16px', color: '#4b5563', margin: '0 0 20px 0', lineHeight: '1.6' }}>
              Thank you for reaching out to Planet X Solutions! I&apos;ve received your project inquiry 
              and I&apos;m excited to learn more about how I can help {agencyName} with 
              your {projectType.toLowerCase()} needs.
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
              <strong style={{ color: '#1f2937' }}>Planet X Solutions Team</strong>
            </p>
          </div>
        </EmailContent>
        
        <EmailFooter>
          <p style={{ margin: '0 0 10px 0' }}>
            This is an automated response to confirm we&apos;ve received your inquiry.
          </p>
          <p style={{ margin: '0', fontSize: '12px' }}>
            Planet X Solutions | Building Digital Excellence
          </p>
        </EmailFooter>
      </EmailContainer>
    </BaseEmailTemplate>
  );
};