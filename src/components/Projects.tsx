import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-4 content-container">
      <h2 className="mb-6">Projects</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-fr">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            award={project.award}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            caseStudyUrl={project.caseStudyUrl}
          />
        ))}
      </div>
    </section>
  );
};
