import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-background-secondary border border-border text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
};

