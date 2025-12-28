import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 content-container border-t border-border">
      <div className="text-sm text-text-secondary space-y-2">
        <p>© {new Date().getFullYear()} Eddie Bae. All rights reserved.</p>
        <p>Built with React, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  );
};
