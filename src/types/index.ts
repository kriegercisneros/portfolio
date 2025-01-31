export interface Project {
    title: string;
    description: string;
    imageUrl?: string;
    demoUrl: string;
    techStack: string[];
    videoUrl?: string;
  }
  
  export interface Skill {
    title: string;
    icon: React.ElementType;
    items: string[];
  }