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
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
              <div>
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
              <p className="text-base text-text-secondary md:text-right">{exp.startDate} - {exp.endDate}</p>
            </div>
            <p className="text-base leading-relaxed">{exp.description}</p>
            {exp.technologies && exp.technologies.length > 0 && (
              <p className="text-base text-text-secondary mt-1">
                {exp.technologies.join(', ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
