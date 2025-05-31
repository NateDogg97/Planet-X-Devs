import * as React from 'react';
import {
  BaseEmailTemplate,
  EmailContainer,
  EmailHeader,
  EmailContent,
  EmailSection,
  EmailField,
  EmailBadge,
  EmailFooter,
} from '../components/BaseEmailTemplate';

interface ContactFormEmailProps {
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

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  contact,
  project,
  timeline,
}) => {
  const previewText = `New project inquiry from ${contact.agency} - ${project.type}`;

  return (
    <BaseEmailTemplate previewText={previewText}>
      <EmailContainer>
        <EmailHeader
          title="New Project Inquiry"
          subtitle={`You've received a new project request from ${contact.agency}`}
        />
        
        <EmailContent>
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
        </EmailContent>
        
        <EmailFooter>
          This email was sent from the Planet X Solutions contact form.
        </EmailFooter>
      </EmailContainer>
    </BaseEmailTemplate>
  );
};