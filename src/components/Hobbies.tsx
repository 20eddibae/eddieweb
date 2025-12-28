import React from 'react';

export const Hobbies: React.FC = () => {
  const hobbies = ['cello', 'jiu jitsu', 'hiking', 'food', 'traveling'];

  return (
    <section id="hobbies" className="py-4 content-container">
      <h2 className="mb-4">Hobbies</h2>
      <div className="flex flex-wrap gap-2">
        {hobbies.map((hobby) => (
          <span
            key={hobby}
            className="text-xs font-mono bg-gray-200 text-text-secondary px-1.5 py-0.5 rounded border border-border"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
};

