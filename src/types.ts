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

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  status: 'Active' | 'Verified';
  badgeColor?: string;
  description: string;
  skillsCovered: string[];
  imageUrl?: string;
  type?: 'certification' | 'seminar';
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
