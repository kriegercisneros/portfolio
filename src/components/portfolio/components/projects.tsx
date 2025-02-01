// "use client"
// import { ProjectCard } from './projectCard';
// import { projects } from '../data/projects';

// export const Projects = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {projects.map((project, index) => (
//         <ProjectCard key={index} {...project} />
//       ))}
//     </div>
//   );
// };

"use client"
import { ProjectCard } from './projectCard';
import { projects } from '../data/projects';
import { Project } from '@/types';

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => {
        // Ensure all required fields have default values if missing
        const defaultedProject: Project = {
          ...project,
          imageUrl: project.imageUrl || '/placeholder-image.jpg',
          learnings: project.learnings || [],
          outcomes: project.outcomes || [],
          impact: project.impact || '',
          collaborators: project.collaborators || []
        };
        
        return <ProjectCard key={index} {...defaultedProject} />;
      })}
    </div>
  );
};