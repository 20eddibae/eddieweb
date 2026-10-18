import React from 'react';
import { ExternalLink } from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-4 content-container">
      <h2 className="mb-4">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="space-y-1">
            <div className="mb-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    aria-label={`Visit ${exp.company} website`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="text-base font-normal">{exp.role}</p>
            </div>
            <p className="text-base leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
