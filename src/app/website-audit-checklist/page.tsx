import { Metadata } from 'next';
import WebsiteAuditChecklistPageClient from './WebsiteAuditChecklistPageClient';

export const metadata: Metadata = {
  title: 'Free Website Audit Checklist - Find Hidden Issues Instantly | Planet X Devs',
  description: 'Use our 50-point website audit checklist to find issues affecting your speed, security, SEO, and conversions. Get personalized recommendations.',
  keywords: 'website audit, website analysis, site performance, SEO audit, website security, conversion optimization, web development audit',
  openGraph: {
    title: 'Free Website Audit Checklist - Find Hidden Issues Instantly',
    description: 'Use our 50-point website audit checklist to find issues affecting your speed, security, SEO, and conversions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Audit Checklist - Find Hidden Issues Instantly',
    description: 'Use our 50-point website audit checklist to find issues affecting your speed, security, SEO, and conversions.',
  },
};

export default function WebsiteAuditChecklistPage() {
  return <WebsiteAuditChecklistPageClient />;
}