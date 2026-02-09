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
      className={`group bg-white border border-border rounded-xl p-2 sm:p-2.5 md:p-3 flex flex-col h-full w-full ${
        isHovered && isTruncated ? 'z-50 bg-gray-50 shadow-2xl overflow-visible aspect-auto min-h-[200px] sm:min-h-[220px]' : 'z-0 overflow-hidden aspect-square transition-[box-shadow,transform] duration-200 hover:shadow-lg hover:-translate-y-1'
      }`}
      style={{ position: 'relative' }}
      onMouseEnter={() => isTruncated && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-1 mb-1">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-[#000000] hover:underline decoration-2 underline-offset-2 transition-all line-clamp-2 hover:opacity-100"
            style={{ color: '#000000' }}
          >
            {title}
          </a>
        ) : (
          <h3 className="text-xs sm:text-sm font-bold text-[#000000] line-clamp-2" style={{ color: '#000000' }}>{title}</h3>
        )}
        
        {isProduction && (
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 animate-pulse" title="Live" aria-label="Production app" />
        )}
      </div>

      <div className={`mb-2 flex-grow min-h-0 ${isHovered && isTruncated ? 'min-h-fit' : ''}`}>
        <p 
          ref={descriptionRef}
          className={`text-[10px] sm:text-xs text-text-secondary leading-tight ${
            isHovered && isTruncated ? 'line-clamp-6 overflow-visible' : 'line-clamp-2 sm:line-clamp-3 overflow-hidden'
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

