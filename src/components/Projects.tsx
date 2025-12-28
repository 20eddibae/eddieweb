import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-4 content-container">
      <h2 className="mb-2">Projects</h2>
      <div className="flex items-center gap-2 mb-6 text-text-secondary">
        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 animate-pulse" />
        <span className="text-sm">= current project</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            isProduction={project.isProduction}
          />
        ))}
      </div>
    </section>
  );
};
