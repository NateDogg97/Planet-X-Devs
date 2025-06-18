'use client';

import TabInterfaceClient from '../../ui/TabInterfaceClient';
import { TabItem } from '../../ui/TabInterface';
import ProjectInquiryForm from './ProjectInquiryForm';
import QuickConsultationForm from './QuickConsultationForm';
import SupportMaintenanceForm from './SupportMaintenanceForm';

export default function ContactForm() {
  const tabs: TabItem[] = [
    {
      id: 'project-inquiry',
      label: 'Start a Project',
      subtitle: 'Full project proposal & timeline',
      content: <ProjectInquiryForm />
    },
    {
      id: 'quick-consultation',
      label: 'Quick Consultation',
      subtitle: 'Technical advice & planning',
      content: <QuickConsultationForm />
    },
    {
      id: 'support-maintenance',
      label: 'Support & Maintenance',
      subtitle: 'Existing website help',
      content: <SupportMaintenanceForm />
    }
  ];

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          How Can I Help You?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose the option that best fits your needs. I'll get back to you with personalized next steps.
        </p>
      </div>
      
      <TabInterfaceClient 
        tabs={tabs} 
        defaultActiveTab="project-inquiry"
        className="max-w-4xl mx-auto"
        queryParamName="form"
        updateUrl={true}
      />
    </div>
  );
}