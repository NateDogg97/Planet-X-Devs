'use client';

import { useState, ReactNode } from 'react';

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
  
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
        <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Contact form types">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200
                ${activeTab === tab.id
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }
              `}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
            >
              <div className="text-left">
                <div className="font-semibold">{tab.label}</div>
                {tab.subtitle && (
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {tab.subtitle}
                  </div>
                )}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTabData && (
          <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="focus:outline-none"
          >
            {activeTabData.content}
          </div>
        )}
      </div>
    </div>
  );
}