import React, { useMemo } from 'react';
import { Github } from 'lucide-react';
import { sortTechnologies, getTechnologyColor, getTechnologyTextColor } from '../utils/technologyColors';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  isProduction?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  caseStudyUrl,
  isProduction
}) => {
  const url = caseStudyUrl || liveUrl || githubUrl;

  const MAX_TECH = 4;
  const sortedTechnologies = useMemo(
    () => sortTechnologies(technologies).slice(0, MAX_TECH),
    [technologies]
  );
  const extraTech = technologies.length - sortedTechnologies.length;

  return (
    <div className="group bg-white border border-border rounded-xl p-2 sm:p-2.5 md:p-3 flex flex-col h-full w-full overflow-hidden aspect-square transition-shadow duration-200 hover:shadow-lg">
      <div className="mb-1">
        <span className="text-xs sm:text-sm font-bold leading-tight">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:underline decoration-2 underline-offset-2 transition-all"
              style={{ color: '#000000' }}
            >
              {title}
            </a>
          ) : (
            <span className="text-[#000000]" style={{ color: '#000000' }}>{title}</span>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex align-middle ml-1 text-black hover:opacity-60 transition-opacity" aria-label="GitHub repository">
              <Github size={16} />
            </a>
          )}
          {isProduction && (
            <span className="inline-block align-middle ml-1 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" title="Live" aria-label="Production app" />
          )}
        </span>
      </div>

      <div className="mb-2 flex-1 min-h-0 overflow-hidden">
        <p className="text-[10px] sm:text-xs text-text-secondary leading-snug line-clamp-5 sm:line-clamp-6">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1 mt-auto flex-shrink-0">
        {sortedTechnologies.map((tech) => (
          <span
            key={tech}
            className={`text-[8px] sm:text-[10px] font-mono ${getTechnologyColor(tech)} ${getTechnologyTextColor(tech)} px-1 py-0.5 rounded border border-gray-300`}
          >
            {tech}
          </span>
        ))}
        {extraTech > 0 && (
          <span className="text-[8px] sm:text-[10px] font-mono text-text-secondary px-1 py-0.5">
            +{extraTech}
          </span>
        )}
      </div>
    </div>
  );
};
