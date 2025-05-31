'use client';

import { useState } from 'react';
import ContactInfoSection from './ContactInfoSection';
import ProjectDetailsSection from './ProjectDetailsSection';
import BudgetTimelineSection from './BudgetTimelineSection';
import Button from '../Button';
import Card from '../Card';

interface FormData {
  // Contact Info
  name: string;
  email: string;
  agency: string;
  phone: string;
  howHeard: string;
  
  // Project Details
  projectType: string;
  projectScope: string;
  additionalInfo: string;
  whiteLabel: boolean;
  
  // Budget & Timeline
  timeline: string;
  budget: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    agency: '',
    phone: '',
    howHeard: '',
    projectType: '',
    projectScope: '',
    additionalInfo: '',
    whiteLabel: false,
    timeline: '',
    budget: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.agency.trim()) newErrors.agency = 'Agency name is required';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.projectScope.trim()) newErrors.projectScope = 'Project scope is required';
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('[data-error="true"]');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        agency: '',
        phone: '',
        howHeard: '',
        projectType: '',
        projectScope: '',
        additionalInfo: '',
        whiteLabel: false,
        timeline: '',
        budget: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Project Intake Form
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <ContactInfoSection
          formData={{
            name: formData.name,
            email: formData.email,
            agency: formData.agency,
            phone: formData.phone,
            howHeard: formData.howHeard
          }}
          onChange={handleChange}
          errors={errors}
        />
        
        <div className="border-t dark:border-gray-700 pt-8">
          <ProjectDetailsSection
            formData={{
              projectType: formData.projectType,
              projectScope: formData.projectScope,
              additionalInfo: formData.additionalInfo,
              whiteLabel: formData.whiteLabel
            }}
            onChange={handleChange}
            errors={errors}
          />
        </div>
        
        <div className="border-t dark:border-gray-700 pt-8">
          <BudgetTimelineSection
            formData={{
              timeline: formData.timeline,
              budget: formData.budget
            }}
            onChange={handleChange}
            errors={errors}
          />
        </div>
        
        {submitStatus === 'success' && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-800 dark:text-green-300">
              Thank you for your submission! I'll get back to you within 24 hours.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-800 dark:text-red-300">
              There was an error submitting your form. Please try again or email directly.
            </p>
          </div>
        )}
        
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            variant="primary"
            size="large"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
          </Button>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            * Required fields. I typically respond within 24 hours.
          </p>
        </div>
      </form>
    </Card>
  );
}