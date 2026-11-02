
export interface ProcessStep {
  title: string;
  description: string;
}

export interface FlipbookPage {
  imageUrl: string;
  type: 'cover' | 'spread' | 'back';
  alt?: string;
}

export interface CampaignPlatform {
  category: string;
  items: string[];
}

export interface MediaItem {
  type: 'image' | 'video' | 'audio';
  url: string;
  thumbnailUrl?: string; // For videos or audio cover art
  title?: string;
  caption?: string;
}

export interface MediaSection {
  title: string;
  description?: string;
  items: MediaItem[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  details: {
    overview: string;
    problem: string;
    process: string;
    processSteps: ProcessStep[];
    campaignPlatforms?: CampaignPlatform[];
    mediaSections?: MediaSection[];
    outcome: string;
    gallery: string[];
    flipbook?: FlipbookPage[];
    conceptNote?: string;
  };
}

export interface SkillItem {
  name: string;
  tags?: string[]; // Added tags for detailed descriptors
  description?: string; // Added description for soft skills sentences
  level?: number; 
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
  iconName: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  issuer: string;
  courses: string[];
}

export interface AchievementItem {
  title: string;
  description: string;
}