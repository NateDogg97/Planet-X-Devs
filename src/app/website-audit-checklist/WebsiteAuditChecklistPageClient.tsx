'use client';

import { useState, useEffect } from 'react';
import Section from '@/components/layout/Section';
import Icon from '@/components/ui/Icon';
import EmailSignupForm from '@/components/forms/EmailSignupForm';
import { websiteAuditChecklistData } from '@/constants';
import Link from 'next/link';

type AuditItemStatus = 'passed' | 'failed' | 'unknown';

export default function WebsiteAuditChecklistPageClient() {
  const [itemStatuses, setItemStatuses] = useState<Map<string, AuditItemStatus>>(new Map());

  const totalItems = websiteAuditChecklistData.reduce((total, category) => total + category.items.length, 0);
  const completedCount = Array.from(itemStatuses.values()).length;
  const passedCount = Array.from(itemStatuses.values()).filter(status => status === 'passed').length;
  const progressPercentage = Math.round((completedCount / totalItems) * 100);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('auditProgress');
    if (savedProgress) {
      try {
        const statusData = JSON.parse(savedProgress);
        setItemStatuses(new Map(Object.entries(statusData)));
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    const statusObject = Object.fromEntries(itemStatuses);
    localStorage.setItem('auditProgress', JSON.stringify(statusObject));
  }, [itemStatuses]);

  const handleStatusChange = (itemId: string, status: AuditItemStatus) => {
    setItemStatuses(prev => {
      const newMap = new Map(prev);
      newMap.set(itemId, status);
      return newMap;
    });
  };

  const handleClearChecklist = () => {
    if (window.confirm('Are you sure you want to clear all responses? This action cannot be undone.')) {
      setItemStatuses(new Map());
    }
  };

  const getChecklistResults = (): { score: string; results: string } => {
    const passedByCategory: { [key: string]: string[] } = {};
    const failedByCategory: { [key: string]: string[] } = {};
    const unknownByCategory: { [key: string]: string[] } = {};
    let totalItems = 0;
    
    websiteAuditChecklistData.forEach((category) => {
      category.items.forEach((item) => {
        totalItems++;
        const status = itemStatuses.get(item.id);
        
        if (status === 'passed') {
          if (!passedByCategory[category.title]) {
            passedByCategory[category.title] = [];
          }
          passedByCategory[category.title].push(`✓ ${item.title}`);
        } else if (status === 'failed') {
          if (!failedByCategory[category.title]) {
            failedByCategory[category.title] = [];
          }
          failedByCategory[category.title].push(`✗ ${item.title}`);
        } else {
          if (!unknownByCategory[category.title]) {
            unknownByCategory[category.title] = [];
          }
          unknownByCategory[category.title].push(`? ${item.title}`);
        }
      });
    });
    
    const formatCategorySections = (categoryData: { [key: string]: string[] }, sectionTitle: string) => {
      const sections: string[] = [];
      
      Object.entries(categoryData).forEach(([categoryTitle, items]) => {
        if (items.length > 0) {
          sections.push(`${categoryTitle}:\n${items.join('\n')}`);
        }
      });
      
      return sections.length > 0 ? `${sectionTitle} (${Object.values(categoryData).flat().length}):\n\n${sections.join('\n\n')}` : '';
    };
    
    const passedSection = formatCategorySections(passedByCategory, 'Passed items');
    const failedSection = formatCategorySections(failedByCategory, 'Failed items');
    const unknownSection = formatCategorySections(unknownByCategory, 'Unknown/Not checked items');
    
    const score = `${passedCount}/${totalItems}`;
    const results = [passedSection, failedSection, unknownSection].filter(section => section).join('\n\n');
    
    return { score, results };
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section container className="bg-gradient-nebula text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Is Your Website Costing You Customers?
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto">
              Use our 30-point audit checklist to uncover hidden issues affecting your site's performance, security, and conversions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                'Find speed issues killing conversions',
                'Discover security vulnerabilities', 
                'Identify SEO problems',
                'Fix mobile experience issues'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="check-small" className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
      </Section>

      {/* Checklist Section */}
      <Section container id="checklist">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Your 30-Point Website Audit
            </h2>
            <p className="text-xl text-text-secondary">
              Check off items as you review your site. Most businesses score between 15-25 on their first audit.
            </p>
          </div>

          {/* Progress Tracking */}
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-text-accent mb-2">
                  {passedCount}
                </div>
                <div className="text-text-secondary">Items Passed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-text-accent mb-2">
                  {totalItems}
                </div>
                <div className="text-text-secondary">Total Items</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-text-accent mb-2">
                  {progressPercentage}%
                </div>
                <div className="text-text-secondary">Your Score</div>
              </div>
            </div>
            
            <div className="w-full bg-border-primary rounded-full h-5 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-nebula-cyan to-text-accent rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            {completedCount > 0 && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleClearChecklist}
                  className="text-sm text-text-secondary hover:text-text-primary border border-border-secondary hover:border-border-primary px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Clear All Responses
                </button>
              </div>
            )}
          </div>

          {/* Checklist Categories */}
          <div className="max-w-4xl mx-auto space-y-8">
            {websiteAuditChecklistData.map((category) => (
              <div key={category.id} className="glass rounded-xl overflow-hidden">
                <div className="bg-bg-secondary border-b border-border-primary p-6">
                  <h3 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                    <Icon name={category.icon as any} className="w-6 h-6 text-text-accent" />
                    {category.title}
                  </h3>
                  <p className="text-text-secondary mt-2">{category.description}</p>
                </div>
                
                <div className="p-6 space-y-6">
                  {category.items.map((item, index) => {
                    const currentStatus = itemStatuses.get(item.id);
                    return (
                      <div key={item.id} className={`pb-6 ${index < category.items.length - 1 ? 'border-b border-border-primary' : ''}`}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-text-primary mb-2">
                              {item.title}
                            </h4>
                            <p className="text-text-secondary mb-3">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-6 mb-3">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name={item.id}
                              value="passed"
                              checked={currentStatus === 'passed'}
                              onChange={() => handleStatusChange(item.id, 'passed')}
                              className="w-4 h-4 text-green-600 bg-bg-primary border-border-secondary focus:ring-green-500 focus:ring-2"
                            />
                            <span className="text-sm font-medium text-green-600">Passed</span>
                          </label>
                          
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name={item.id}
                              value="failed"
                              checked={currentStatus === 'failed'}
                              onChange={() => handleStatusChange(item.id, 'failed')}
                              className="w-4 h-4 text-red-600 bg-bg-primary border-border-secondary focus:ring-red-500 focus:ring-2"
                            />
                            <span className="text-sm font-medium text-red-600">Failed</span>
                          </label>
                          
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name={item.id}
                              value="unknown"
                              checked={currentStatus === 'unknown'}
                              onChange={() => handleStatusChange(item.id, 'unknown')}
                              className="w-4 h-4 text-text-secondary bg-bg-primary border-border-secondary focus:ring-text-accent focus:ring-2"
                            />
                            <span className="text-sm font-medium text-text-secondary">I don't know</span>
                          </label>
                        </div>
                        
                        <div>
                          {item.tip && (
                            <div className="bg-nebula-purple/10 border border-nebula-purple/20 text-nebula-purple dark:bg-nebula-cyan/10 dark:border-nebula-cyan/20 dark:text-nebula-white p-3 rounded-lg text-sm mb-3">
                              {item.tip}
                            </div>
                          )}
                          {item.links && item.links.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {item.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-sm text-text-accent hover:text-text-accent-alt font-medium hover:underline transition-colors"
                                >
                                  {link.text}
                                  <Icon name="external-link" className="w-3 h-3" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
      </Section>

      {/* Combined CTA Section - Email + Consultation */}
      <Section container className="bg-gradient-nebula text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your Score: {passedCount}/30 - Now What?
        </h2>
        
        <p className="text-xl mb-8 opacity-95">
          Most agencies struggle with the same technical issues. Let me help you fix them.
        </p>

        {/* Two-column layout for options */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 text-text-primary">
          {/* Option 1: Email */}
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Option 1: Get Free Advice
            </h3>
            <p className="mb-6 opacity-90">
              I'll review your results and send you specific tips for your situation
            </p>
            <EmailSignupForm
              formId="website-audit"
              submitButtonText="Send My Results →"
              successMessage="Thanks! I'll review your audit and reach out within 24 hours with some quick tips."
              
              // GTM tracking
              gtmEventData={{
                email_list: 'website-audit',
                source: 'audit-checklist',
                audit_score: passedCount,
              }}
              
              sendResendNotification={true}
              resendFormType="website-audit-results"
              resendMessage={`Audit completed - Score: ${getChecklistResults().score}\n\n${getChecklistResults().results}`}
              
              // Optional: Add tags for ConvertKit segmentation
              tags={[
                'website-audit'
              ]}
            />
          </div>

          {/* Option 2: Consultation */}
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Option 2: Let's Talk Now
            </h3>
            <p className="mb-6 opacity-90">
              Skip the wait - book a free 15-minute call to discuss your specific needs
            </p>
            <Link
              href="/contact?form=quick-consultation"
              className="inline-block bg-white text-nebula-black px-8 py-4 rounded-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              Book Free Consultation →
            </Link>
          </div>
        </div>

        <p className="text-sm opacity-75">
          No spam, no automated emails. I personally review every audit submission.
        </p>
      </Section>

    </div>
  );
}