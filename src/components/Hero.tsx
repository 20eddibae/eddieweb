import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:eddie.j.bae.28@dartmouth.edu', label: 'Email' },
    { icon: Github, href: 'https://github.com/20eddibae', label: 'GitHub', external: true },
    { icon: Linkedin, href: 'https://linkedin.com/in/eddie-bae-850179324', label: 'LinkedIn', external: true },
  ];

  return (
    <section className="pt-12 pb-4 content-container">
      <div className="flex flex-col md:flex-row items-start gap-6 mb-0">
        <div className="flex-1 order-2 md:order-1">
          <h1 className="mb-2">Eddie Bae</h1>
          <p className="text-base mb-3">Software Engineer & ML Researcher</p>
          <div className="flex items-center gap-2 text-text-secondary mb-4">
            <MapPin size={16} />
            <span>Los Angeles, CA</span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-black no-underline hover:opacity-80"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0 order-1 md:order-2">
          <img 
            src="/images/profile.png" 
            alt="Eddie Bae" 
            className="w-32 h-32 object-cover rounded"
            style={{ maxWidth: '128px', maxHeight: '128px' }}
          />
        </div>
      </div>
    </section>
  );
};
