import React from 'react';
import { education } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-4 content-container">
      <h2 className="mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="space-y-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
              <div>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-base font-normal">
                  {edu.degree} in {edu.major}
                  {edu.minor && `, Minor in ${edu.minor}`}
                </p>
              </div>
              <div className="text-base text-text-secondary md:text-right">
                <p>{edu.endDate}</p>
                {edu.gpa && <p>GPA: {edu.gpa.toFixed(2)}</p>}
              </div>
            </div>
            {edu.honors && edu.honors.length > 0 && (
              <p className="text-base text-text-secondary">
                Honors: {edu.honors.join(', ')}
              </p>
            )}
            {edu.coursework && edu.coursework.length > 0 && (
              <p className="text-base text-text-secondary">
                Relevant Coursework: {edu.coursework.join(', ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
