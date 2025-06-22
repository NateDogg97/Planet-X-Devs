'use client';

import { useState, useRef, useEffect, ReactNode, KeyboardEvent } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
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
  queryParamName?: string; // Name of the query parameter (default: 'tab')
  updateUrl?: boolean; // Whether to update URL when tab changes (default: false)
}

export default function TabInterface({ 
  tabs, 
  defaultActiveTab, 
  className = '',
  queryParamName = 'tab',
  updateUrl = false // Changed default to false
}: TabInterfaceProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  // Get initial tab from URL or fallback to default
  const getInitialTab = () => {
    try {
      const urlTab = searchParams.get(queryParamName);
      if (urlTab && tabs.some(tab => tab.id === urlTab)) {
        return urlTab;
      }
    } catch {
      // During SSR, searchParams might not be available
      console.warn('SearchParams not available during SSR');
    }
    return defaultActiveTab || tabs[0]?.id;
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [focusedTabIndex, setFocusedTabIndex] = useState(0);
  const [hasInitialized, setHasInitialized] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  // Initialize from URL on mount, then clear the URL parameter
  useEffect(() => {
    if (!hasInitialized) {
      try {
        const urlTab = searchParams.get(queryParamName);
        if (urlTab && tabs.some(tab => tab.id === urlTab)) {
          setActiveTab(urlTab);
        }
      } catch {
        console.warn('Unable to initialize from URL');
      }
      setHasInitialized(true);
    }
  }, [hasInitialized, searchParams, queryParamName, tabs, pathname, router]);

  // Optional: Update URL when tab changes (disabled by default)
  const updateUrlParam = (tabId: string) => {
    if (!updateUrl) return;
    
    const current = new URLSearchParams(searchParams.toString());
    
    // Only update URL if explicitly enabled
    current.set(queryParamName, tabId);
    
    const search = current.toString();
    const query = search ? `?${search}` : '';
    
    // Use replace to avoid adding to browser history for every tab click
    router.replace(`${pathname}${query}`, { scroll: false });
  };

  // Handle tab activation
  const activateTab = (tabId: string, scrollToContent = false) => {
    setActiveTab(tabId);
    updateUrlParam(tabId);
    
    // Scroll to accordion header on mobile when accordion is clicked
    if (scrollToContent) {
      setTimeout(() => {
        const accordionHeader = document.getElementById(`accordion-${tabId}`);
        if (accordionHeader) {
          const headerOffset = 80; // Account for 72px header + 8px padding
          const elementPosition = accordionHeader.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto' // Instant scroll
          });
        }
      }, 100); // Small delay to allow accordion to expand
    }
  };

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
        activateTab(tabs[index].id);
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
          role="tablist"
          aria-label="Contact form types"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el; }}
              onClick={() => activateTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`tab-button group rounded-t-lg ${activeTab === tab.id ? 'tab-button--active' : ''}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : focusedTabIndex === index ? 0 : -1}
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
                ref={(el) => { tabRefs.current[index] = el; }}
                onClick={() => activateTab(tab.id, true)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="accordion-header flex justify-between items-center"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`accordion-panel-${tab.id}`}
                aria-expanded={activeTab === tab.id}
                id={`accordion-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : focusedTabIndex === index ? 0 : -1}
              >
                <div className="accordion-content">
                  <div className="accordion-title">
                    {tab.label}
                  </div>
                  {tab.subtitle && (
                    <div className="accordion-subtitle">
                      {tab.subtitle}
                    </div>
                  )}
                </div>
                {/* Accordion indicator */}
                <div className="accordion-indicator" aria-hidden="true">
                  <svg 
                    className={`w-5 h-5 transform transition-transform ${activeTab === tab.id ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Accordion content */}
              <div 
                className={`accordion-panel ${activeTab === tab.id ? 'accordion-panel--active' : ''}`}
                id={`accordion-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`accordion-${tab.id}`}
                aria-hidden={activeTab !== tab.id}
              >
                <div className="accordion-panel-content">
                  {activeTab === tab.id && activeTabData?.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Tab Panels */}
      <div className="tab-content hidden md:block">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            aria-hidden={activeTab !== tab.id}
            className={`tab-panel ${activeTab === tab.id ? 'tab-panel--active' : ''}`}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}