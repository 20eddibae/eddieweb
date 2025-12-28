import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Downtobid (YC S19)',
    role: 'Software Engineer (Contract)',
    logo: '/images/logos/downtobid.png',
    startDate: 'September 2025',
    endDate: 'Present',
    description: 'Building Graph RAG chatbot for semantic search across construction plan blocks.',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'pgvector', 'Supabase', 'Graph RAG', 'GPT-4'],
  },
  {
    id: '2',
    company: 'GENIE AI: Property-Plus Team',
    role: 'AI Software Engineering Intern',
    logo: '/images/logos/genie.png',
    startDate: 'July 2025',
    endDate: 'September 2025',
    description: 'Built full-stack RAG chatbot for property management with vector search capabilities.',
    technologies: ['React', 'TypeScript', 'Flask', 'Python', 'MongoDB Atlas', 'LangChain', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    id: '3',
    company: 'Evergreen AI',
    role: 'Backend Software Developer',
    logo: '/images/logos/evergreen.png',
    startDate: 'May 2025',
    endDate: 'Present',
    description: 'Leading backend development for student-wellness chatbot platform.',
    technologies: ['Node.js', 'TypeScript', 'AdonisJS', 'Dialogflow', 'REST API', 'Microsoft Graph', 'Canvas LMS'],
  },
];
