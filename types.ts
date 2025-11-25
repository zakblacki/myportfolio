export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  year?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  year: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  phone2?: string;
  phoneDisplay2?: string;
  github: string;
  linkedin: string;
  about: string;
}