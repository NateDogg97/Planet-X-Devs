'use client';

import { useState } from 'react';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Icon from '../../ui/Icon';
import FormField from '../FormField';

interface SupportFormData {
  name: string;
  email: string;
  company: string;
  website: string;
  issueType: string;
  priority: string;
  description: string;
  currentProvider: string;
}

interface SupportFormErrors {
  [key: string]: string;
}

export default function SupportMaintenanceForm() {
  const [formData, setFormData] = useState<SupportFormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    issueType: '',
    priority: '',
    description: '',
    currentProvider: ''
  });
  
  const [errors, setErrors] = useState<SupportFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');
  
  const issueTypes = [
    { value: '', label: 'Select issue type...' },
    { value: 'bug-fix', label: 'Bug Fix' },
    { value: 'performance', label: 'Performance Issue' },
    { value: 'security', label: 'Security Concern' },
    { value: 'content-update', label: 'Content Update' },
    { value: 'feature-request', label: 'Feature Request' },
    { value: 'hosting', label: 'Hosting/Server Issue' },
    { value: 'seo', label: 'SEO Optimization' },
    { value: 'other', label: 'Other' }
  ];
  
  const priorities = [
    { value: '', label: 'Select priority...' },
    { value: 'urgent', label: 'Urgent (Site Down/Critical)' },
    { value: 'high', label: 'High (Affects Business)' },
    { value: 'medium', label: 'Medium (Needs Attention)' },
    { value: 'low', label: 'Low (When Convenient)' }
  ];
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: SupportFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.website.trim()) {
      newErrors.website = 'Website URL is required';
    } else if (!formData.website.includes('.')) {
      newErrors.website = 'Please enter a valid website URL';
    }
    
    if (!formData.issueType) {
      newErrors.issueType = 'Please select an issue type';
    }
    
    if (!formData.priority) {
      newErrors.priority = 'Please select a priority level';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe the issue or request';
    } else if (formData.description.length < 20) {
      newErrors.description = 'Please provide more details (at least 20 characters)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const submissionData = {
        ...formData,
        formType: 'support-maintenance'
      };
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setSubmitStatus('success');
      
      const responseTime = formData.priority === 'urgent' ? '1-2 hours' : 
                          formData.priority === 'high' ? '4-6 hours' : '24 hours';
      
      setSubmitMessage(`Support request received! I'll respond within ${responseTime} based on the priority level.`);
      
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        issueType: '',
        priority: '',
        description: '',
        currentProvider: ''
      });
      setErrors({});
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('There was an error submitting your support request. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card rounded={false} className={"md:rounded-2xl"}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Support & Maintenance
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Need help with an existing website? Report issues, request updates, or get ongoing support.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="support-name"
            type="text"
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
            required
          />
          
          <FormField
            name="support-email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={errors.email}
            required
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="support-company"
            type="text"
            label="Company/Agency"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
          />
          
          <FormField
            name="support-website"
            type="text"
            label="Website URL"
            value={formData.website}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="https://example.com"
            error={errors.website}
            required
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="support-issue-type"
            type="select"
            label="Issue Type"
            value={formData.issueType}
            onChange={(e) => handleChange('issueType', e.target.value)}
            options={issueTypes}
            error={errors.issueType}
            required
          />
          
          <FormField
            name="support-priority"
            type="select"
            label="Priority Level"
            value={formData.priority}
            onChange={(e) => handleChange('priority', e.target.value)}
            options={priorities}
            error={errors.priority}
            required
          />
        </div>
        
        <FormField
          name="support-current-provider"
          type="text"
          label="Current Developer/Agency (Optional)"
          value={formData.currentProvider}
          onChange={(e) => handleChange('currentProvider', e.target.value)}
          placeholder="Who currently maintains this site?"
        />
        
        <FormField
          name="support-description"
          type="textarea"
          label="Describe the issue or request"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          rows={5}
          placeholder="Please provide as much detail as possible, including:
• What's not working correctly?
• When did you first notice the issue?
• What steps have you already tried?
• Any error messages you've seen?"
          error={errors.description}
          required
        />
        
        {submitStatus === 'success' && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4" role="alert">
            <div className="flex">
              <Icon name="check-circle" className="h-5 w-5 text-green-400 mt-0.5" />
              <p className="ml-3 text-green-800 dark:text-green-300">
                {submitMessage}
              </p>
            </div>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4" role="alert">
            <div className="flex">
              <Icon name="x-circle" className="h-5 w-5 text-red-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-red-800 dark:text-red-300">
                  {submitMessage}
                </p>
                <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                  For urgent issues, call or text: <span className="font-semibold">(555) 123-4567</span><br />
                  Email: <a href="mailto:nathaniel@planetxdevs.com" className="underline">nathaniel@planetxdevs.com</a>
                </p>
              </div>
            </div>
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
            {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
          </Button>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            * Required fields. Response time varies by priority level.
          </p>
        </div>
      </form>
    </Card>
  );
}