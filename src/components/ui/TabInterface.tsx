'use client';

import { useState, useRef, useEffect, ReactNode, KeyboardEvent } from 'react';

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
    <div className={`w-full ${className}`}>
      {/* Desktop Tab Navigation */}
      <div className="hidden md:block border-b border-gray-200 dark:border-gray-700 mb-8">
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
                group relative whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm 
                transition-all duration-300 ease-in-out transform
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
                ${activeTab === tab.id
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400 scale-105'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 hover:scale-102'
                }
              `}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
            >
              <div className="text-left">
                <div className="font-semibold transition-colors duration-200">
                  {tab.label}
                </div>
                {tab.subtitle && (
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 transition-colors duration-200 group-hover:text-gray-500 dark:group-hover:text-gray-400">
                    {tab.subtitle}
                  </div>
                )}
              </div>
              
              {/* Active indicator line with animation */}
              <div 
                className={`
                  absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ease-in-out
                  ${activeTab === tab.id ? 'w-full opacity-100' : 'w-0 opacity-0'}
                `}
              />
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Accordion Navigation */}
      <div className="block md:hidden mb-8">
        <div className="space-y-2">
          {tabs.map((tab, index) => (
            <div key={tab.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                className={`
                  w-full px-4 py-4 text-left transition-all duration-300 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset
                  ${activeTab === tab.id
                    ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }
                `}
                aria-expanded={activeTab === tab.id}
                aria-controls={`mobile-content-${tab.id}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-base">{tab.label}</div>
                    {tab.subtitle && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {tab.subtitle}
                      </div>
                    )}
                  </div>
                  
                  {/* Chevron icon */}
                  <svg
                    className={`
                      w-5 h-5 transition-transform duration-300 ease-in-out
                      ${activeTab === tab.id ? 'rotate-180' : 'rotate-0'}
                    `}
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
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${activeTab === tab.id 
                    ? 'max-h-screen opacity-100' 
                    : 'max-h-0 opacity-0'
                  }
                `}
              >
                <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="pt-4">
                    {tab.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Tab Content */}
      <div className="hidden md:block">
        {activeTabData && (
          <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="focus:outline-none"
            tabIndex={0}
          >
            {/* Content container with fade-in animation */}
            <div 
              className={`
                transition-all duration-500 ease-in-out transform
                ${activeTabData ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}
              key={activeTab} // Force re-render for animation
            >
              {activeTabData.content}
            </div>
          </div>
        )}
      </div>

      {/* Progress indicator for desktop */}
      <div className="hidden md:flex justify-center mt-8 space-x-2">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`
              h-1 rounded-full transition-all duration-300 ease-in-out
              ${activeTab === tab.id 
                ? 'w-8 bg-purple-500' 
                : 'w-2 bg-gray-300 dark:bg-gray-600'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}