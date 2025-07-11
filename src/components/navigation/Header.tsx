'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Icon from '../ui/Icon';
import { mainNavigation } from '@/constants';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-nebula-black border-b border-nebula-purple-30 backdrop-blur-sm shadow-md z-50">
      <nav 
        className="container mx-auto px-6 py-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-nebula-violet opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Link 
                href="/" 
                className="flex items-center"
                aria-label="Planet X Devs Home"
              >
                <Image
                  alt="Planet X Devs"
                  src="/images/brand/horizontal/2000x500_white_black planet_2.png"
                  width={320}
                  height={80}
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 list-none">
            {mainNavigation.filter(item => !item.isButton).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-nebula-white hover:text-nebula-violet transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-nebula-cyan to-nebula-violet text-white rounded-lg hover:shadow-nebula-lg hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-nebula-purple-20"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <Icon 
              name={isMobileMenuOpen ? 'x-close' : 'menu'} 
              className="text-nebula-white" 
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav 
            className="md:hidden mt-4 pb-4 border-t border-nebula-purple-30"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col space-y-4 mt-4 list-none">
              {mainNavigation.filter(item => !item.isButton).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-nebula-white hover:text-nebula-violet transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="px-6 py-2 bg-gradient-to-r from-nebula-cyan to-nebula-violet text-white rounded-lg hover:shadow-nebula-lg hover:scale-105 transition-all duration-300 text-center block"
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