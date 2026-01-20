export type TechnologyCategory = 
  | 'language'
  | 'framework'
  | 'tool'
  | 'math-ml'
  | 'domain';

export interface TechnologyInfo {
  name: string;
  category: TechnologyCategory;
  order: number;
}

// Programming languages - lightest grey
const languages = [
  'Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 
  'R', 'HTML', 'SQL', 'Bash', 'Shell'
];

// Frameworks and libraries - medium-light grey
const frameworks = [
  'Next.js', 'React', 'PyTorch', 'TensorFlow', 'LangChain',
  'OpenAI', 'GPT-4', 'Redux', 'MONAI', 'FastAPI', 'Flask',
  'NestJS', 'Express', 'AdonisJS', 'OpenAI GPT-4'
];

// Tools and infrastructure - medium grey
const tools = [
  'Makefile', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
  'GitHub Actions', 'CI/CD'
];

// Math and ML concepts - medium-light grey (methodologies/techniques)
const mathMl = [
  'Linear Regression', 'Logistic Regression', 'Statistical Analysis',
  'Deep Learning', 'Machine Learning', 'CNN', '3D CNNs', 'GNNs'
];

// Domain-specific concepts - darkest grey (specialized concepts)
const domain = [
  'TCR', 'Statistical Modeling', 'Meta-analysis', 'Literature Review',
  'Knowledge Graphs'
];

// Order: Languages always first, then frameworks, then methodologies, then tools, then domain
const categoryOrder: Record<TechnologyCategory, number> = {
  language: 1,      // Always first - foundational
  framework: 2,     // Built on languages
  'math-ml': 3,    // Methodologies/techniques
  tool: 4,         // Infrastructure/supporting tools
  domain: 5,       // Specialized domain concepts
};

// Color scheme: Progressive darkening from foundational to specialized
const categoryColors: Record<TechnologyCategory, string> = {
  language: 'bg-gray-100',    // Lightest grey - foundational
  framework: 'bg-gray-200',    // Light grey - built on languages
  'math-ml': 'bg-gray-300',   // Medium-light grey - methodologies
  tool: 'bg-gray-400',         // Medium-dark grey - infrastructure
  domain: 'bg-gray-500',       // Darkest grey - specialized
};

const categoryTextColors: Record<TechnologyCategory, string> = {
  language: 'text-gray-800',   // Dark text on light background
  framework: 'text-gray-800',  // Dark text on light background
  'math-ml': 'text-gray-800', // Dark text on medium-light background
  tool: 'text-white',          // White text on medium-dark background
  domain: 'text-white',        // White text on dark background
};

// Helper function to escape special regex characters
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function getTechnologyCategory(tech: string): TechnologyCategory {
  if (!tech || typeof tech !== 'string') {
    return 'framework'; // Default fallback
  }
  
  const normalized = tech.toLowerCase().trim();
  
  if (normalized.length === 0) {
    return 'framework'; // Default fallback
  }
  
  // Check languages first (most specific - must match exactly or be standalone)
  // This ensures languages are always identified correctly
  for (const lang of languages) {
    const langLower = lang.toLowerCase();
    // Exact match
    if (normalized === langLower) {
      return 'language';
    }
    // Starts with language name (e.g., "Python 3.9" -> "python")
    if (normalized.startsWith(langLower + ' ') || normalized.startsWith(langLower + '.')) {
      return 'language';
    }
    // Contains language as standalone word (handles "TypeScript" in "TypeScript/JavaScript")
    // Escape special regex characters to handle cases like "C++"
    const escapedLang = escapeRegex(langLower);
    const regex = new RegExp(`\\b${escapedLang}\\b`);
    if (regex.test(normalized)) {
      return 'language';
    }
  }
  
  // Check frameworks (after languages to avoid false positives)
  for (const fw of frameworks) {
    const fwLower = fw.toLowerCase();
    if (normalized.includes(fwLower)) {
      return 'framework';
    }
  }
  
  // Check math/ML concepts (before tools to catch ML frameworks)
  for (const math of mathMl) {
    if (normalized.includes(math.toLowerCase())) {
      return 'math-ml';
    }
  }
  
  // Check domain-specific (before tools)
  for (const d of domain) {
    if (normalized.includes(d.toLowerCase())) {
      return 'domain';
    }
  }
  
  // Check tools
  for (const tool of tools) {
    if (normalized.includes(tool.toLowerCase())) {
      return 'tool';
    }
  }
  
  // Default classification based on keywords (fallback)
  if (normalized.includes('regression') || 
      (normalized.includes('statistical') && !normalized.includes('modeling')) ||
      normalized.includes('analysis')) {
    return 'math-ml';
  }
  if (normalized.includes('knowledge graph') || normalized.includes('graph network')) {
    return 'domain';
  }
  if (normalized.includes('machine learning') || normalized.includes('deep learning')) {
    return 'math-ml';
  }
  if (normalized.includes('modeling') || normalized.includes('meta-analysis') || 
      normalized.includes('literature review')) {
    return 'domain';
  }
  
  // Default to framework if unclear (most common case)
  return 'framework';
}

export function getTechnologyColor(tech: string): string {
  try {
    const category = getTechnologyCategory(tech);
    return categoryColors[category] || 'bg-gray-200';
  } catch (error) {
    return 'bg-gray-200'; // Default fallback
  }
}

export function getTechnologyTextColor(tech: string): string {
  try {
    const category = getTechnologyCategory(tech);
    return categoryTextColors[category] || 'text-gray-800';
  } catch (error) {
    return 'text-gray-800'; // Default fallback
  }
}

export function getTechnologyOrder(tech: string): number {
  try {
    const category = getTechnologyCategory(tech);
    return categoryOrder[category] || 2; // Default to framework order
  } catch (error) {
    return 2; // Default fallback
  }
}

/**
 * Sorts technologies ensuring languages always come first, followed by:
 * 1. Languages (order 1) - Always first
 * 2. Frameworks (order 2)
 * 3. Math/ML Concepts (order 3)
 * 4. Tools (order 4)
 * 5. Domain-specific (order 5)
 * 
 * Within each category, technologies are sorted alphabetically.
 */
export function sortTechnologies(technologies: string[]): string[] {
  if (!technologies || technologies.length === 0) {
    return [];
  }
  
  return [...technologies].filter(tech => tech && tech.trim()).sort((a, b) => {
    const orderA = getTechnologyOrder(a);
    const orderB = getTechnologyOrder(b);
    
    // Primary sort: by category order (ensures languages always first)
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    
    // Secondary sort: alphabetically within same category
    return a.localeCompare(b);
  });
}
