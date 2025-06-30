'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/Icon';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const pathNameMap: Record<string, string> = {
  '': 'Home',
  'services': 'Services',
  'about': 'About',
  'contact': 'Contact',
  'style-guide': 'Style Guide'
};

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // Generate breadcrumbs from pathname if items not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);
  
  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs for homepage or single-level pages
  }

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.planetxdevs.com${item.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <nav 
        className={`flex items-center space-x-2 text-sm text-text-primary/70 ${className}`}
        aria-label="Breadcrumb"
        id='breadcrumb'
      >
        <ol className="flex items-center space-x-2">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <Icon 
                  name="double-right" 
                  className="w-1 h-1 mx-1 text-text-primary/50"
                  strokeWidth={.01}
                />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span 
                  className="text-text-primary font-medium"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-nebula-violet transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', href: '/' }
  ];

  let currentPath = '';
  
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = pathNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbs.push({
      name,
      href: currentPath
    });
  });

  return breadcrumbs;
}

// Export the generateBreadcrumbsFromPath function for use in other components
export { generateBreadcrumbsFromPath };