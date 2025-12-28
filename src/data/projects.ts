import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'drug-identification',
    title: 'Drug Identification Platform',
    description: 'ML platform for computational drug discovery using KG embeddings and GNNs. Processes PrimeKG to predict drug-target interactions.',
    image: '/images/projects/drug-identification.jpg',
    technologies: ['PyTorch', 'Knowledge Graphs'],
    githubUrl: 'https://github.com/20eddibae',
    featured: true,
    isProduction: true,
  },
  {
    id: 'lab-copilot',
    title: 'LabCopilot – AI Laboratory Assistant',
    description: 'Full-stack AI Lab Assistant with LangChain and GPT-4 integration.',
    image: '/images/projects/labcopilot.jpg',
    technologies: ['Next.js 15', 'TypeScript', 'OpenAI GPT-4', 'LangChain', 'Redux'],
    liveUrl: 'https://lab-copilot-zeta.vercel.app',
    githubUrl: 'https://github.com/20eddibae',
    featured: true,
    isProduction: false,
  },
];
