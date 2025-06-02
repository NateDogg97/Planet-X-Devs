'use client';

import Link from 'next/link';
import { useState } from 'react';
import Icon from '../ui/Icon';
import { mainNavigation } from '@/constants';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav 
        className="container mx-auto px-6 py-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center"
            aria-label="Planet X Devs Home"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3" aria-hidden="true">
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Planet X Devs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 list-none">
            {mainNavigation.filter(item => !item.isButton).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <Icon 
              name={isMobileMenuOpen ? 'x' : 'menu'} 
              className="text-gray-700 dark:text-gray-300" 
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav 
            className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col space-y-4 mt-4 list-none">
              {mainNavigation.filter(item => !item.isButton).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
}