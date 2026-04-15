import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-4 content-container">
      <h2 className="mb-4">About</h2>
      <div className="space-y-3 text-base leading-relaxed">
        <p>
          AI SWE and Research @ Downtobid (YC 19) working on Graph RAG chatbots and context window research. 
        </p>
        <p>
          Passionate about AI driven research and deep tech. Currently interested in causality, representation learning, and agent orchestration. Happy to discuss more through email!
        </p>
      </div>
    </section>
  );
};
