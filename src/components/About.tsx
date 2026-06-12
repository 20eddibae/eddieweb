import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-4 content-container">
      <h2 className="mb-4">About</h2>
      <div className="space-y-3 text-base leading-relaxed">
        <p>
          Passionate about AI driven research and deep tech. Currently interested in causality, representation learning, interpretability, and agent orchestration. Currently working on mechanistic interpretability for single cell foundation models personally and large speech models at my internship. Happy to discuss more through email!
        </p>
      </div>
    </section>
  );
};
