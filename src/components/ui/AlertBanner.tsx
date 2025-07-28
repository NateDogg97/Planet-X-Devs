'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { ALERT_BANNER_CONFIG, getDefaultMessage } from '@/config/alertBanner';

interface AlertBannerProps {
  enabled?: boolean;
  message?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  className?: string;
}

export default function AlertBanner({
  enabled = ALERT_BANNER_CONFIG.enabled,
  message = ALERT_BANNER_CONFIG.message,
  ctaText = ALERT_BANNER_CONFIG.ctaText,
  ctaLink = ALERT_BANNER_CONFIG.ctaLink,
  dismissible = ALERT_BANNER_CONFIG.dismissible,
  className = ALERT_BANNER_CONFIG.className
}: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  const defaultMessage = getDefaultMessage();
  
  // Don't render if disabled or dismissed
  if (!enabled || !isVisible) {
    return null;
  }
  
  const handleDismiss = () => {
    setIsVisible(false);
  };
  
  return (
    <div className={`fixed top-24 left-0 right-0 bg-gradient-to-r from-nebula-cyan to-nebula-violet text-white py-3 px-4 z-40 ${className}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 md:gap-4 text-sm md:text-base">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Icon name="check-circle" className="w-5 h-5" />
          </div>
          
          {/* Message */}
          <div className="flex-1 text-center md:text-left min-w-0">
            <span className="font-medium text-xs sm:text-sm md:text-base">
              {message || defaultMessage}
            </span>
          </div>
          
          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-1 md:gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full px-3 md:px-4 py-1.5 text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="hidden sm:inline">{ctaText}</span>
              <span className="sm:hidden">Start</span>
              <Icon name="arrow-right" className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </div>
          
          {/* Dismiss Button */}
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="Dismiss banner"
            >
              <Icon name="x-close" className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
      
      {/* Subtle animation effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none" />
    </div>
  );
}