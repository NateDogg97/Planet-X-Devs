'use client';

import { useState, useRef, useEffect, ReactNode, KeyboardEvent } from 'react';
import '../../styles/components/tab-interface.css';

export interface TabItem {
  id: string;
  label: string;
  subtitle?: string;
  content: ReactNode;
}

interface TabInterfaceProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  className?: string;
}

export default function TabInterface({ 
  tabs, 
  defaultActiveTab, 
  className = '' 
}: TabInterfaceProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);
  const [focusedTabIndex, setFocusedTabIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);

  // Handle keyboard navigation
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = index;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = index > 0 ? index - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = index < tabs.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = tabs.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        setActiveTab(tabs[index].id);
        return;
      default:
        return;
    }
    
    setFocusedTabIndex(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  // Set focus on active tab when component mounts
  useEffect(() => {
    const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab);
    setFocusedTabIndex(activeTabIndex);
  }, [activeTab, tabs]);

  return (
    <div className={`tab-interface w-full ${className}`}>
      {/* Desktop Tab Navigation */}
      <div className="tab-nav-desktop hidden md:block">
        <nav 
          className="-mb-px flex space-x-8 overflow-x-auto" 
          aria-label="Contact form types"
          role="tablist"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el; }}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`
                tab-button group
                ${activeTab === tab.id ? 'tab-button--active' : ''}
              `}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
            >
              <div className="accordion-content">
                <div className="tab-label">
                  {tab.label}
                </div>
                {tab.subtitle && (
                  <div className="tab-subtitle">
                    {tab.subtitle}
                  </div>
                )}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Accordion Navigation */}
      <div className="accordion-container block md:hidden">
        <div className="space-y-2">
          {tabs.map((tab, index) => (
            <div key={tab.id} className={`accordion-item ${activeTab === tab.id ? 'accordion-item--active' : ''}`}>
              <button
                onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                className="accordion-header"
                aria-expanded={activeTab === tab.id}
                aria-controls={`mobile-content-${tab.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="accordion-content">
                    <div className="accordion-title">{tab.label}</div>
                    {tab.subtitle && (
                      <div className="accordion-subtitle">
                        {tab.subtitle}
                      </div>
                    )}
                  </div>
                  
                  {/* Chevron icon */}
                  <svg
                    className={`accordion-chevron ${activeTab === tab.id ? 'accordion-chevron--expanded' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Mobile accordion content */}
              <div 
                id={`mobile-content-${tab.id}`}
                className={`accordion-body ${activeTab === tab.id ? 'accordion-body--expanded' : ''}`}
              >
                <div className="accordion-body-content">
                  {tab.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Tab Content */}
      <div className="tab-content hidden md:block">
        {activeTabData && (
          <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className={`tab-panel tab-panel--active focus:outline-none`}
            tabIndex={0}
            key={activeTab} // Force re-render for animation
          >
            {activeTabData.content}
          </div>
        )}
      </div>

      {/* Progress indicator for desktop */}
      <div className="progress-indicator hidden md:flex">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`progress-dot ${activeTab === tab.id ? 'progress-dot--active' : 'progress-dot--inactive'}`}
          />
        ))}
      </div>
    </div>
  );
}