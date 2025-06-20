import Link from 'next/link';
import Card from '../../ui/Card';
import Icon from '../../ui/Icon';
import { socialLinks } from '@/constants';

export default function SocialLinks() {
  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Connect on Social
      </h3>
      <div className="space-y-4">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <Icon 
              name={social.name.toLowerCase() as any} 
              className={social.color} 
            />
            <span className="font-medium text-gray-900 dark:text-white ml-3">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-nebula-cyan/10 border border-nebula-cyan/30 rounded-lg">
        <p className="text-sm text-nebula-cyan">
          <strong>Pro tip:</strong> Follow me on social for web dev tips and agency growth strategies!
        </p>
      </div>
    </Card>
  );
}