import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'R', 'Java', 'C', 'JavaScript/TypeScript', 'HTML', 'SQL', 'Bash'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['FastAPI', 'Flask', 'NestJS', 'Express.js', 'AdonisJS', 'React', 'LangChain', 'TensorFlow', 'PyTorch', 'OpenAI SDK'],
  },
  {
    category: 'Databases & Search',
    items: ['MongoDB', 'PostgreSQL', 'ChromaDB', 'SingleStore', 'MongoDB Atlas', 'Supabase (PostgreSQL hosting & auth)'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'CI/CD (GitHub Actions)'],
  },
];
