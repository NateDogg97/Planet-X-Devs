import { NextRequest, NextResponse } from 'next/server';
import React from 'react';
import { resend } from '@/lib/resend';
import { validateContactForm } from '@/utils/contactFormValidation';
import { formatFormData, createFormSummary } from '@/utils/forms';
import { FormData } from '@/types';
import {
  ContactFormEmail,
  AutoReplyEmail,
  renderEmailToHtml,
  createPlainTextEmail,
  formatEmailSubject,
} from '@/emails';

// Email configuration
const FROM_EMAIL = `Planet X Devs <${process.env.RESEND_FROM_EMAIL}>`;
const TO_EMAIL = process.env.RESEND_TO_EMAIL || 'nathaniel@planetxdevs.com';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const formType = body.formType || 'project-inquiry';
    
    // Validate the form data
    const validationErrors = validateContactForm(body as FormData);
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          errors: validationErrors,
          message: 'Please correct the errors and try again.' 
        },
        { status: 400 }
      );
    }
    
    // Format the form data
    const formattedData = formatFormData(body);
    const summary = createFormSummary(formattedData);
    
    // Create email HTML content using React template
    const emailHtml = await renderEmailToHtml(
      React.createElement(ContactFormEmail, {
        data: {
          contact: summary.contact,
          project: summary.project,
          timeline: summary.timeline,
        }
      })
    );
    
    // Create plain text version
    const emailText = createPlainTextEmail({
      contact: summary.contact,
      project: summary.project,
      timeline: summary.timeline,
    });
    
    // Format email subject based on form type
    const getEmailSubject = (formType: string, summary: any) => {
      switch (formType) {
        case 'project-inquiry':
          return formatEmailSubject(
            'New Project Inquiry: {{projectType}} - {{agency}}',
            {
              projectType: summary.project?.type || 'General Project',
              agency: summary.contact.agency || summary.contact.company || 'Unknown Agency',
            }
          );
        case 'quick-consultation':
          return formatEmailSubject(
            'Quick Consultation Request - {{name}} ({{company}})',
            {
              name: summary.contact.name,
              company: summary.contact.company || 'No Company',
            }
          );
        case 'support-maintenance':
          const priority = body.priority || 'medium';
          const priorityPrefix = priority === 'urgent' ? '[URGENT] ' : priority === 'high' ? '[HIGH] ' : '';
          return formatEmailSubject(
            '{{priority}}Support Request: {{supportType}} - {{name}}',
            {
              priority: priorityPrefix,
              supportType: body.supportType || 'General Support',
              name: summary.contact.name,
            }
          );
        default:
          return 'New Contact Form Submission';
      }
    };
    
    const subject = getEmailSubject(formType, summary);
    
    // Send email using Resend
    const emailData = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html: emailHtml,
      text: emailText,
      reply_to: summary.contact.email as string,
      headers: {
        'X-Entity-Ref-ID': `contact-form-${Date.now()}`,
      },
      tags: [
        {
          name: 'category',
          value: 'contact-form',
        },
        {
          name: 'form-type',
          value: formType,
        },
        {
          name: 'priority',
          value: body.priority || 'medium',
        },
        ...(formattedData.projectType ? [{
          name: 'project-type',
          value: String(formattedData.projectType),
        }] : []),
        ...(body.supportType ? [{
          name: 'support-type',
          value: String(body.supportType),
        }] : []),
      ],
    };
    
    const { data, error } = await resend.emails.send(emailData);
    
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email. Please try again later.',
          error: process.env.NODE_ENV === 'development' ? error : undefined
        },
        { status: 500 }
      );
    }
    
    // Send auto-reply to the user (optional)
    if (process.env.SEND_AUTO_REPLY === 'true') {
      const autoReplyHtml = await renderEmailToHtml(
        React.createElement(AutoReplyEmail, {
          data: {
            contact: summary.contact,
            project: summary.project,
            timeline: summary.timeline,
          }
        })
      );
      
      const autoReplyText = createPlainTextEmail({
        recipientName: summary.contact.name,
        agencyName: summary.contact.agency,
        projectType: summary.project.type,
        isAutoReply: true,
      });
      
      await resend.emails.send({
        from: FROM_EMAIL,
        to: summary.contact.email as string,
        subject: 'Thank you for your inquiry - Planet X Devs',
        html: autoReplyHtml,
        text: autoReplyText,
        headers: {
          'X-Entity-Ref-ID': `auto-reply-${Date.now()}`,
        },
        tags: [
          {
            name: 'category',
            value: 'auto-reply',
          },
        ],
      });
    }
    
    // Get success message based on form type
    const getSuccessMessage = (formType: string) => {
      switch (formType) {
        case 'project-inquiry':
          return 'Thank you for your project inquiry! I\'ll get back to you within 24 hours with a detailed proposal.';
        case 'quick-consultation':
          return 'Thank you for your consultation request! I\'ll reach out within 4-6 hours to schedule our call.';
        case 'support-maintenance':
          const priority = body.priority || 'medium';
          if (priority === 'urgent') {
            return 'Your urgent support request has been received! I\'ll respond within 2-4 hours.';
          } else if (priority === 'high') {
            return 'Your support request has been received! I\'ll respond within 24 hours.';
          } else {
            return 'Your support request has been received! I\'ll respond within 48 hours.';
          }
        default:
          return 'Thank you for your submission! I\'ll get back to you soon.';
      }
    };

    return NextResponse.json(
      { 
        success: true, 
        message: getSuccessMessage(formType),
        formType,
        id: data?.id
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}