import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const email = 'eddie.j.bae.28@dartmouth.edu';

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      copyable: true,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/20eddibae',
      href: 'https://github.com/20eddibae',
      copyable: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/eddie-bae-850179324',
      href: 'https://linkedin.com/in/eddie-bae-850179324',
      copyable: false,
    },
  ];

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
    }
  };

  return (
    <section id="contact" className="py-4 content-container">
      <h2 className="mb-4">Contact</h2>
      <div className="space-y-3 text-base leading-relaxed mb-6">
        <p>
          I'm always open to discussing new opportunities, interesting projects, or just having a chat.
        </p>
        <p className="text-text-secondary">
          Open to opportunities
        </p>
      </div>
      <div className="space-y-2">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <div key={method.label} className="flex items-center gap-3">
              <Icon size={20} className="text-black" />
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-base underline"
              >
                {method.value}
              </a>
              {method.copyable && (
                <button
                  onClick={() => handleCopy(method.value, method.label)}
                  className="text-sm text-text-secondary underline hover:opacity-80"
                  aria-label={`Copy ${method.label}`}
                >
                  {copied === method.label ? (
                    <span className="flex items-center gap-1">
                      <Check size={14} />
                      <span>Copied</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy size={14} />
                      <span>Copy</span>
                    </span>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
