import Link from 'next/link';
import Image from 'next/image';
import { footerNavigation, socialLinks } from '@/constants';
import Icon from '../ui/Icon';

export default function Footer() {
  return (
    <footer className="bg-nebula-black text-white py-12 border-t border-nebula-purple-30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-nebula-violet opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Image
                    src="/images/brand/horizontal/2000x500_white_black planet_2.png"
                    alt="Planet X Devs"
                    width={320}
                    height={80}
                    className="h-16 w-auto"
                  />
                </div>
              </div>
            </Link>
            <p className="text-nebula-white/70">
              Premium white-label web development for agencies who refuse to compromise on quality
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-nebula-white">Services</h4>
            <ul className="space-y-2 text-nebula-white/70">
              {footerNavigation.services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-nebula-violet transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-nebula-white">Quick Links</h4>
            <ul className="space-y-2 text-nebula-white/70">
              {footerNavigation.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-nebula-violet transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-nebula-white">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-nebula-white/70 hover:text-nebula-violet transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <Icon name={social.name.toLowerCase() as any} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-nebula-purple-30 mt-8 pt-8 text-center text-nebula-white/70">
          <p>&copy; 2025 Planet X Devs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}