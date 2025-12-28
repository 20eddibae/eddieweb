export interface Experience {
  id: string;
  company: string;
  role: string;
  logo: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  highlights?: string[];
  technologies: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  isProduction?: boolean;
}

export interface Research {
  id: string;
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

export interface Education {
  id: string;
  institution: string;
  degree: string;
  major: string;
  minor?: string;
  gpa?: number;
  startDate: string;
  endDate: string;
  coursework?: string[];
  honors?: string[];
  logo: string;
}

export interface Skill {
  category: string;
  items: string[];
}

