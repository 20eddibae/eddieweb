import React, { useState, useRef, useEffect } from 'react';

interface ResearchCardProps {
  title: string;
  role: string;
  dateRange: string;
  description: string;
  technologies: string[];
  pdfUrl?: string;
  githubUrl?: string;
  link?: string;
  isPublished?: boolean;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  role,
  dateRange,
  description,
  technologies,
  pdfUrl,
  githubUrl,
  link
}) => {
  const url = link || pdfUrl || githubUrl;
  const [isHovered, setIsHovered] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const isTextTruncated = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
      setIsTruncated(isTextTruncated);
    }
  }, [description]);

  return (
    <div 
      className={`group bg-white border border-border rounded-xl p-3 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col aspect-square h-full w-full ${
        isHovered && isTruncated ? 'z-50 bg-gray-50 shadow-2xl overflow-visible' : 'z-0 overflow-hidden'
      }`}
      style={{ position: 'relative' }}
    >
      <div className="flex items-center gap-2 mb-1">
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
        {dateRange.includes('Present') && (
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 animate-pulse" title="Current research" aria-label="Current research" />
        )}
      </div>

      <div className="text-xs text-text-secondary italic mb-1">
        <p>{role}</p>
        <p>{dateRange}</p>
      </div>

      <div 
        className="mb-2 flex-grow"
        onMouseEnter={() => isTruncated && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p 
          ref={descriptionRef}
          className={`text-xs text-text-secondary leading-tight transition-all ${
            isHovered && isTruncated ? 'line-clamp-none overflow-visible' : 'line-clamp-3 overflow-hidden'
          }`}
        >
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

