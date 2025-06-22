'use client';

import { Suspense } from 'react';
import TabInterface, { TabItem } from './TabInterface';

interface TabInterfaceClientProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  className?: string;
  queryParamName?: string;
  updateUrl?: boolean;
}

function TabInterfaceWithSuspense(props: TabInterfaceClientProps) {
  return (
    <Suspense fallback={<TabInterfaceFallback tabs={props.tabs} defaultActiveTab={props.defaultActiveTab} className={props.className} />}>
      <TabInterface {...props} />
    </Suspense>
  );
}

function TabInterfaceFallback({ tabs, defaultActiveTab, className }: Pick<TabInterfaceClientProps, 'tabs' | 'defaultActiveTab' | 'className'>) {
  // Render the default tab without URL integration during SSR
  const activeTab = defaultActiveTab || tabs[0]?.id;
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  
  return (
    <div className={`tab-interface w-full ${className || ''}`}>
      {/* Desktop Tab Navigation */}
      <div className="tab-nav-desktop hidden md:block">
        <nav 
          role="tablist"
          aria-label="Contact form types"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                tab-button group
                ${activeTab === tab.id ? 'tab-button--active' : ''}
              `}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              disabled
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
          {tabs.map((tab) => (
            <div key={tab.id} className={`accordion-item ${activeTab === tab.id ? 'accordion-item--active' : ''}`}>
              <button
                className="accordion-header"
                aria-expanded={activeTab === tab.id}
                aria-controls={`mobile-content-${tab.id}`}
                disabled
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
              
              <div 
                id={`accordion-panel-${tab.id}`}
                className={`accordion-body ${activeTab === tab.id ? 'accordion-body--expanded' : ''}`}
              >
                <div className="accordion-body-content">
                  {activeTab === tab.id && tab.content}
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
          >
            {activeTabData.content}
          </div>
        )}
      </div>

      {/* Progress indicator for desktop */}
      <div className="progress-indicator hidden md:flex">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`progress-dot ${activeTab === tab.id ? 'progress-dot--active' : 'progress-dot--inactive'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TabInterfaceWithSuspense;