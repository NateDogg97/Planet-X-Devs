'use client';

import TabInterfaceClient from '../../ui/TabInterfaceClient';
import { TabItem } from '../../ui/TabInterface';
import ProjectInquiryForm from './ProjectInquiryForm';
import QuickConsultationForm from './QuickConsultationForm';
import SupportMaintenanceForm from './SupportMaintenanceForm';
import QuickWinContactForm from './QuickWinContactForm';

export default function ContactForm() {
  const tabs: TabItem[] = [
    {
      id: 'agency-partnership',
      label: 'Partnership',
      content: <ProjectInquiryForm />
    },
    {
      id: 'quick-consultation',
      label: 'Consultation',
      content: <QuickConsultationForm />
    },
    {
      id: 'support-maintenance',
      label: 'Support',
      content: <SupportMaintenanceForm />
    },
    {
      id: 'quick-win',
      label: 'Quick Win',
      content: <QuickWinContactForm />
    }
  ];

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          How Can I Help Your Agency?
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Choose the option that best fits your needs. I&apos;ll get back to you with personalized next steps.
        </p>
      </div>
      
      <TabInterfaceClient 
        tabs={tabs} 
        defaultActiveTab="agency-partnership"
        className="max-w-4xl mx-auto"
        queryParamName="form"
        updateUrl={false}
      />
    </div>
  );
}