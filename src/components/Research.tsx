import React from 'react';
import { ResearchCard } from './ResearchCard';
import { research } from '../data/research';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-4 content-container">
      <h2 className="mb-2">Research</h2>
      <div className="flex items-center gap-2 mb-6 text-text-secondary">
        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 animate-pulse" />
        <span className="text-sm">= current research</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {research.map((item) => (
          <ResearchCard
            key={item.id}
            title={item.title}
            role={item.role}
            dateRange={item.dateRange}
            description={item.description}
            technologies={item.technologies}
            pdfUrl={item.pdfUrl}
            githubUrl={item.githubUrl}
            link={item.link}
            isPublished={item.isPublished}
          />
        ))}
      </div>
    </section>
  );
};

