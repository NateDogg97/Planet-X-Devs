'use client';

import { useState, useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google'
import Section from '@/components/layout/Section';
import Icon from '@/components/ui/Icon';
import Footer from '@/components/navigation/Footer';
import { websiteAuditChecklistData } from '@/constants';

export default function WebsiteAuditChecklistPageClient() {
  const [email, setEmail] = useState('');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [showSuccess, setShowSuccess] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(true);

  const totalItems = websiteAuditChecklistData.reduce((total, category) => total + category.items.length, 0);
  const checkedCount = checkedItems.size;
  const progressPercentage = Math.round((checkedCount / totalItems) * 100);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('auditProgress');
    if (savedProgress) {
      try {
        const checkedIds = JSON.parse(savedProgress);
        setCheckedItems(new Set(checkedIds));
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('auditProgress', JSON.stringify(Array.from(checkedItems)));
  }, [checkedItems]);

  const handleCheckboxChange = (itemId: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Subscribe to ConvertKit
      const response = await fetch('/api/convertkit-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          firstName: '',
          auditScore: checkedCount,
          websiteUrl: window.location.href,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }
  
      // Track email subscription event in GTM
      sendGTMEvent({
        event: 'email_subscription',  // Matches your GTM custom event name
        value: {
          email_list: 'website-audit',
          source: 'audit-checklist',
          audit_score: checkedCount,
        }
      });
  
      // Optionally notify yourself via Resend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     formType: 'website-audit',
      //     email: email,
      //     message: `Website audit completed. Score: ${checkedCount}/50`,
      //     auditScore: checkedCount,
      //   }),
      // });
  
      // Show success message
      setShowSuccess(true);
      setShowEmailForm(false);
  
    } catch (error) {
      console.error('Error submitting email:', error);
      
      // Track the error
      sendGTMEvent({
        event: 'form_error',
        value: {
          error_type: 'email_subscription_error',
          form_type: 'website-audit',
          error_message: error instanceof Error ? error.message : 'Unknown error'
        }
      });
      
      alert('Sorry, there was an error. Please try again.');
    }
  };

  const handleSkipToChecklist = () => {
    document.getElementById('checklist')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
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
              Use our 50-point audit checklist to uncover hidden issues affecting your site's performance, security, and conversions
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

      {/* Email Capture Section */}
      <Section container>
          <div className="glass rounded-xl p-8 max-w-3xl mx-auto relative z-10">
            {showSuccess ? (
              <div className="text-center">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                  Thanks! Check your email for personalized tips based on your audit results.
                </div>
              </div>
            ) : showEmailForm ? (
              <>
                <h3 className="text-2xl font-bold text-text-primary text-center mb-2">
                  Want Personalized Recommendations?
                </h3>
                <p className="text-text-secondary text-center mb-6">
                  Enter your email to get a custom analysis of your results
                </p>
                
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 min-w-0 sm:max-w-xs px-4 py-3 border-2 border-border-primary rounded-lg text-text-primary bg-bg-primary focus:outline-none focus:border-text-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-nebula text-white px-6 py-3 rounded-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-nebula transition-all duration-200"
                  >
                    Get Custom Analysis
                  </button>
                </form>
              </>
            ) : null}
            
            <p className="text-center mt-4 text-text-secondary">
              Or{' '}
              <button
                onClick={handleSkipToChecklist}
                className="text-text-accent hover:underline font-medium"
              >
                skip to the free checklist below
              </button>
              {' '}→
            </p>
          </div>
      </Section>

      {/* Checklist Section */}
      <Section container id="checklist">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Your 50-Point Website Audit
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
                  {checkedCount}
                </div>
                <div className="text-text-secondary">Items Checked</div>
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
                  {category.items.map((item, index) => (
                    <div key={item.id} className={`flex items-start gap-4 pb-6 ${index < category.items.length - 1 ? 'border-b border-border-primary' : ''}`}>
                      <div className="mt-1">
                        <input
                          type="checkbox"
                          id={item.id}
                          checked={checkedItems.has(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                          className="w-5 h-5 text-text-accent bg-bg-primary border-border-secondary rounded focus:ring-text-accent focus:ring-2 cursor-pointer"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-text-primary mb-2">
                          {item.title}
                        </h4>
                        <p className="text-text-secondary mb-2">
                          {item.description}
                        </p>
                        {item.tip && (
                          <div className="bg-nebula-purple/10 border border-nebula-purple/20 text-nebula-purple dark:bg-nebula-cyan/10 dark:border-nebula-cyan/20 dark:text-nebula-white p-3 rounded-lg text-sm">
                            {item.tip}
                          </div>
                        )}
                        {item.links && item.links.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
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
                  ))}
                </div>
              </div>
            ))}
          </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-nebula text-white py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Fixing These Issues?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Most businesses score between 15-25 on their first audit. If that's you, you're leaving money on the table.
            </p>
            <a
              href="mailto:nathaniel@planetxdevs.com"
              className="inline-block bg-white text-text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              Let's Fix Your Site →
            </a>
            <p className="mt-6 text-lg opacity-90">
              Free 15-minute consultation to review your results
            </p>
          </div>
      </Section>

      <Footer />
    </div>
  );
}