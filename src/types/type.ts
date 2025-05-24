// src/types.ts
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  website?: string;
}

export interface AcademicItem {
  institution: string;
  degree: string;
  year: string;
  description: string;
  icon?: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  logo?: string;
}

export interface Skills {
  languages: { name: string; level: number }[];
  frameworks: { name: string; level: number }[];
  tools: { name: string; level: number }[];
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  contact: ContactInfo;
  academics: AcademicItem[];
  experience: ExperienceItem[];
  skills: Skills;
}