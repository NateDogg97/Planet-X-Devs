import * as React from 'react';

interface BaseEmailTemplateProps {
  previewText?: string;
  children: React.ReactNode;
}

export const BaseEmailTemplate: React.FC<BaseEmailTemplateProps> = ({
  previewText = '',
  children,
}) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Planet X Devs</title>
        
        {previewText && (
          <>
            <span style={{ display: 'none', fontSize: '1px', color: '#333333', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden' }}>
              {previewText}
            </span>
            <div style={{ display: 'none', fontSize: '1px', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden' }}>
              &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
          </>
        )}
        
        <style type="text/css">{`
          /* Reset styles */
          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
          
          /* Remove default styling */
          body { margin: 0; padding: 0; width: 100% !important; min-width: 100%; }
          
          /* Base styles */
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #333333;
            background-color: #f5f5f5;
          }
          
          /* Link styles */
          a {
            color: #2563eb;
            text-decoration: underline;
          }
          
          /* Mobile styles */
          @media screen and (max-width: 600px) {
            .container {
              width: 100% !important;
              max-width: 100% !important;
            }
            .content {
              padding: 20px !important;
            }
            h1 {
              font-size: 24px !important;
            }
            h2 {
              font-size: 20px !important;
            }
            .button {
              width: 100% !important;
              max-width: 300px !important;
            }
          }
          
          /* Dark mode support */
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #1a1a1a !important;
            }
            .email-container {
              background-color: #2a2a2a !important;
              color: #ffffff !important;
            }
            .content-section {
              background-color: #333333 !important;
              color: #ffffff !important;
            }
            h1, h2, h3, h4, h5, h6, p, td {
              color: #ffffff !important;
            }
            a {
              color: #60a5fa !important;
            }
            .header {
              background-color: #1e40af !important;
            }
            .footer {
              background-color: #2a2a2a !important;
              color: #999999 !important;
            }
          }
        `}</style>
      </head>
      <body>
        <center style={{ width: '100%', backgroundColor: '#f5f5f5' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%" className="container">
              <tbody>
                <tr>
                  <td align="center" valign="top">
                    {children}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </center>
      </body>
    </html>
  );
};

interface EmailContainerProps {
  children: React.ReactNode;
}

export const EmailContainer: React.FC<EmailContainerProps> = ({ children }) => {
  return (
    <table
      align="center"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      className="email-container"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
};

interface EmailHeaderProps {
  title: string;
  subtitle?: string;
}

export const EmailHeader: React.FC<EmailHeaderProps> = ({ title, subtitle }) => {
  return (
    <table
      align="center"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      className="header"
      style={{
        backgroundColor: '#2563eb',
        borderRadius: '8px 8px 0 0',
      }}
    >
      <tbody>
        <tr>
          <td align="center" style={{ padding: '40px 20px' }}>
            <h1
              style={{
                margin: '0',
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#ffffff',
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  margin: '10px 0 0 0',
                  fontSize: '16px',
                  color: '#e0e7ff',
                }}
              >
                {subtitle}
              </p>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

interface EmailContentProps {
  children: React.ReactNode;
}

export const EmailContent: React.FC<EmailContentProps> = ({ children }) => {
  return (
    <table
      align="center"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      className="content"
      style={{ padding: '40px 30px' }}
    >
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
};

interface EmailSectionProps {
  title?: string;
  children: React.ReactNode;
}

export const EmailSection: React.FC<EmailSectionProps> = ({ title, children }) => {
  return (
    <table
      align="center"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      className="content-section"
      style={{
        backgroundColor: '#f9fafb',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
      }}
    >
      <tbody>
        {title && (
          <tr>
            <td>
              <h2
                style={{
                  margin: '0 0 20px 0',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                }}
              >
                {title}
              </h2>
            </td>
          </tr>
        )}
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
};

interface EmailButtonProps {
  href: string;
  children: React.ReactNode;
}

export const EmailButton: React.FC<EmailButtonProps> = ({ href, children }) => {
  return (
    <table align="center" border={0} cellPadding={0} cellSpacing={0}>
      <tbody>
        <tr>
          <td align="center">
            <a
              href={href}
              className="button"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '500',
                fontSize: '16px',
              }}
            >
              {children}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

interface EmailFooterProps {
  children?: React.ReactNode;
}

export const EmailFooter: React.FC<EmailFooterProps> = ({ children }) => {
  return (
    <table
      align="center"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      className="footer"
      style={{
        padding: '30px',
        borderTop: '1px solid #e5e7eb',
      }}
    >
      <tbody>
        <tr>
          <td align="center">
            <p
              style={{
                margin: '0 0 10px 0',
                fontSize: '14px',
                color: '#6b7280',
              }}
            >
              {children || 'This email was sent from Planet X Devs'}
            </p>
            <p
              style={{
                margin: '0',
                fontSize: '12px',
                color: '#9ca3af',
              }}
            >
              © {new Date().getFullYear()} Planet X Devs. All rights reserved.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

interface EmailFieldProps {
  label: string;
  value: string | React.ReactNode;
}

export const EmailField: React.FC<EmailFieldProps> = ({ label, value }) => {
  return (
    <tr>
      <td style={{ paddingBottom: '15px' }}>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#4b5563',
            marginBottom: '5px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: '#1f2937',
          }}
        >
          {value}
        </div>
      </td>
    </tr>
  );
};

interface EmailBadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}

export const EmailBadge: React.FC<EmailBadgeProps> = ({ children, color = 'blue' }) => {
  const colors = {
    blue: { bg: '#dbeafe', text: '#1e40af' },
    green: { bg: '#d1fae5', text: '#065f46' },
    yellow: { bg: '#fef3c7', text: '#92400e' },
    red: { bg: '#fee2e2', text: '#991b1b' },
    gray: { bg: '#f3f4f6', text: '#374151' },
  };

  const { bg, text } = colors[color];

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        backgroundColor: bg,
        color: text,
        borderRadius: '16px',
        fontSize: '14px',
        fontWeight: '500',
      }}
    >
      {children}
    </span>
  );
};