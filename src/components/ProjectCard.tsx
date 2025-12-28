import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isProduction?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  isProduction
}) => {
  const url = liveUrl || githubUrl;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-white border border-border rounded-xl p-3 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full w-full"
      style={{ aspectRatio: isHovered ? 'auto' : '1 / 1' }}
    >
      <div className="flex items-center gap-1 mb-1">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-black hover:underline decoration-2 underline-offset-2 transition-all line-clamp-2"
          >
            {title}
          </a>
        ) : (
          <h3 className="text-sm font-bold text-black line-clamp-2">{title}</h3>
        )}
        
        {isProduction && (
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 animate-pulse" title="Live" aria-label="Production app" />
        )}
      </div>

      <div 
        className="mb-2 flex-grow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className={`text-xs text-text-secondary leading-tight ${isHovered ? '' : 'line-clamp-3 overflow-hidden'}`}>
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono bg-background-primary text-text-secondary px-1.5 py-0.5 rounded border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

