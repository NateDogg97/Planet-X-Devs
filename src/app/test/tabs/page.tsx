import { Metadata } from 'next';
import TabInterfaceClient from '@/components/ui/TabInterfaceClient';
import { TabItem } from '@/components/ui/TabInterface';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "TabInterface Test Page | Planet X Devs",
  description: "Test page for TabInterface component accessibility and functionality",
  robots: "noindex, nofollow"
};

export default function TabsTestPage() {
  const testTabs: TabItem[] = [
    {
      id: 'tab1',
      label: 'Overview',
      subtitle: 'Component information',
      content: (
        <Card>
          <h3 className="text-xl font-semibold mb-4">TabInterface Component Overview</h3>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              This is the first tab content. It demonstrates the basic functionality of the TabInterface component
              with proper accessibility features and keyboard navigation support.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">✅ Features Tested</h4>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Tab switching with click and keyboard</li>
                <li>ARIA labels and roles for screen readers</li>
                <li>Focus management and visual indicators</li>
                <li>Responsive design (desktop tabs, mobile accordion)</li>
              </ul>
            </div>
            <Button variant="primary">Test Button 1</Button>
          </div>
        </Card>
      )
    },
    {
      id: 'tab2',
      label: 'Keyboard Navigation',
      subtitle: 'Arrow keys and focus management',
      content: (
        <Card>
          <h3 className="text-xl font-semibold mb-4">Keyboard Navigation Test</h3>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              This tab tests keyboard navigation. Use the following keys to navigate:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Desktop Navigation</h4>
                <ul className="text-blue-700 space-y-1">
                  <li><kbd className="bg-blue-200 px-2 py-1 rounded">Tab</kbd> - Focus on tabs</li>
                  <li><kbd className="bg-blue-200 px-2 py-1 rounded">←→</kbd> - Navigate tabs</li>
                  <li><kbd className="bg-blue-200 px-2 py-1 rounded">Enter</kbd> - Activate tab</li>
                  <li><kbd className="bg-blue-200 px-2 py-1 rounded">Home/End</kbd> - First/Last tab</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Mobile Accordion</h4>
                <ul className="text-purple-700 space-y-1">
                  <li><kbd className="bg-purple-200 px-2 py-1 rounded">Tab</kbd> - Focus sections</li>
                  <li><kbd className="bg-purple-200 px-2 py-1 rounded">Enter</kbd> - Toggle section</li>
                  <li><kbd className="bg-purple-200 px-2 py-1 rounded">Space</kbd> - Toggle section</li>
                </ul>
              </div>
            </div>
            <Button variant="secondary">Test Button 2</Button>
          </div>
        </Card>
      )
    },
    {
      id: 'tab3',
      label: 'Accessibility',
      subtitle: 'WCAG compliance and screen readers',
      content: (
        <Card>
          <h3 className="text-xl font-semibold mb-4">Accessibility Features</h3>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              This tab demonstrates the accessibility features built into the TabInterface component.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">🎯 WCAG 2.1 AA Compliance</h4>
              <ul className="list-disc list-inside text-orange-700 space-y-1">
                <li>Proper semantic HTML with role attributes</li>
                <li>Keyboard navigation following ARIA Authoring Practices</li>
                <li>Focus indicators with sufficient contrast</li>
                <li>Screen reader announcements for state changes</li>
                <li>Support for reduced motion preferences</li>
              </ul>
            </div>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🔧 Test Results</h4>
              <p className="text-gray-700">
                Run <code className="bg-gray-200 px-2 py-1 rounded">npx pa11y</code> against this page to verify 
                accessibility compliance. All major accessibility testing tools should pass without errors.
              </p>
            </div>
            <Button variant="primary">Test Button 3</Button>
          </div>
        </Card>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            TabInterface Component Test
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This page tests the TabInterface component for accessibility, keyboard navigation, 
            and responsive behavior. Use Tab, Arrow keys, Enter, and Space to navigate.
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Testing Instructions
          </h2>
          <div className="space-y-2 text-blue-800 dark:text-blue-200">
            <p><strong>Desktop:</strong> Use Tab to focus, Arrow keys to navigate, Enter/Space to activate</p>
            <p><strong>Mobile:</strong> Tap to expand/collapse accordion sections</p>
            <p><strong>Screen Reader:</strong> Use announcement shortcuts to verify ARIA labels</p>
            <p><strong>Keyboard Only:</strong> Ensure all functionality is accessible without mouse</p>
          </div>
        </div>

        {/* Main TabInterface Test */}
        <TabInterfaceClient 
          tabs={testTabs}
          defaultActiveTab="tab1"
          className="max-w-4xl mx-auto"
        />

        {/* Additional Test Content */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Test completed successfully if all interactions work smoothly across devices and input methods.
          </p>
        </div>
      </div>
    </div>
  );
}