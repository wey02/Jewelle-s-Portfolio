export type ProjectCategory = 'all' | 'ai' | 'fullstack' | 'backend';

export interface ProjectScreenshot {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  viewType: 'dashboard' | 'ai-feature' | 'admin-portal' | 'analytics' | 'workflow' | 'output';
}

export interface Project {
  id: string;
  title: string;
  projectType: string; // e.g. 'AI Web Application', 'Internal Business System', 'Full-Stack Application', 'Automation Tool'
  targetAudience?: string; // e.g. 'Enterprise Risk & Compliance Teams', 'Distributed Engineering Teams'
  purpose: string; // Why application was created & problem it solves
  myRole: string; // Developer's specific role and architectural contribution
  outcome: string; // Result or impact delivered by the project
  keyFeatures: string[];
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  screenshots: ProjectScreenshot[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  accessNote?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai';
  tag?: string;
  description?: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
  actionType?: 'link' | 'email' | 'copy';
}

export interface DeveloperProfile {
  name: string;
  title: string;
  headline: string;
  bio: string;
  availability: string;
  location: string;
  email: string;
  yearsOfExperience: string;
  projectsCompleted: string;
  uptimeReliability: string;
  aiPipelinesBuilt: string;
}
