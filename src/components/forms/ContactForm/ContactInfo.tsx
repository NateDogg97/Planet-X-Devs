import Link from 'next/link';
import Card from '../../ui/Card';
import Icon from '../../ui/Icon';
import { contactInfo } from '@/constants';

export default function ContactInfo() {
  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Quick Contact
      </h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <Icon name="mail" className="text-nebula-violet mr-3 mt-0.5" />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Email</p>
            <p className="text-gray-600 dark:text-gray-300">{contactInfo.email}</p>
          </div>
        </div>
        <div className="flex items-start">
          <Icon name="clock" className="text-nebula-violet mr-3 mt-0.5" />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Response Time</p>
            <p className="text-gray-600 dark:text-gray-300">{contactInfo.responseTime}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}