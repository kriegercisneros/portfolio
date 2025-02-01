// export interface Project {
//     title: string;
//     description: string;
//     imageUrl?: string;
//     demoUrl: string;
//     techStack: string[];
//     videoUrl?: string;
//   }
// types/index.ts

export interface Project {
    title: string;
    description: string;
    demoUrl: string;
    techStack: string[];
    imageUrl: string;
    // New fields
    learnings?: string[];      // Optional array of learning points
    outcomes?: string[];       // Optional array of project outcomes
    impact?: string;          // Optional impact statement
    collaborators?: Collaborator[]; // Optional array of collaborators
  }
  
  export interface Skill {
    title: string;
    // iconType: React.ElementType;
    iconType:string;
    items: string[];
  }

  export interface Collaborator {
    name: string;
    role: string;
  }