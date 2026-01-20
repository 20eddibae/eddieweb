import React, { useState, useRef, useEffect, useMemo } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const sortedTechnologies = useMemo(() => sortTechnologies(technologies), [technologies]);

  useEffect(() => {
    if (descriptionRef.current) {
      const isTextTruncated = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
      setIsTruncated(isTextTruncated);
    }
  }, [description]);

  return (
    <div 
      className={`group bg-white border border-border rounded-xl p-2 sm:p-2.5 md:p-3 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col aspect-square h-full w-full ${
        isHovered && isTruncated ? 'z-50 bg-gray-50 shadow-2xl overflow-visible' : 'z-0 overflow-hidden'
      }`}
      style={{ position: 'relative' }}
    >
      <div className="flex items-center gap-1 mb-1">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-black hover:underline decoration-2 underline-offset-2 transition-all line-clamp-2"
          >
            {title}
          </a>
        ) : (
          <h3 className="text-xs sm:text-sm font-bold text-black line-clamp-2">{title}</h3>
        )}
        
        {isProduction && (
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 animate-pulse" title="Live" aria-label="Production app" />
        )}
      </div>

      <div 
        className="mb-2 flex-grow"
        onMouseEnter={() => isTruncated && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p 
          ref={descriptionRef}
          className={`text-[10px] sm:text-xs text-text-secondary leading-tight transition-all ${
            isHovered && isTruncated ? 'line-clamp-none overflow-visible' : 'line-clamp-2 sm:line-clamp-3 overflow-hidden'
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1 mt-auto">
        {sortedTechnologies.map((tech) => (
          <span
            key={tech}
            className={`text-[9px] sm:text-xs font-mono ${getTechnologyColor(tech)} ${getTechnologyTextColor(tech)} px-1 sm:px-1.5 py-0.5 rounded border border-gray-300`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

