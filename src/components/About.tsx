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
          At Dartmouth, doing ML research in Biomedical Sciences Dpt. and ML/stats research with public health team. 
          Also doing backend systems for Evergreen AI's mental health platform.
        </p>
        <p>
          I'm particularly interested in the intersection of AI and healthcare. 
        </p>
        <p>
          My background is mostly in LLM applications and ML research so please reach out if my experience matches what you are looking for. 
        </p>
      </div>
    </section>
  );
};
