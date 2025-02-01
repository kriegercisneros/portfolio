// import React from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/seperator";
// import { ScrollArea } from "@/components/ui/scrollArea";

// interface ProjectDetailsProps {
//   isOpen: boolean;
//   onClose: () => void;
//   project: {
//     title: string;
//     description: string;
//     tools: string[];
//     collaborators?: { name: string; role: string; }[];
//     learnings: string[];
//     outcomes: string[];
//     impact: string;
//     imageUrl: string;
//   };
// }

// const ProjectDetailsDialog: React.FC<ProjectDetailsProps> = ({
//   isOpen,
//   onClose,
//   project
// }) => {
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-3xl max-h-[90vh]">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
//           <DialogDescription className="text-lg mt-2">
//             {project.description}
//           </DialogDescription>
//         </DialogHeader>
//         <ScrollArea className="mt-6">
//           <div className="space-y-8 pr-6">
//             {/* Project Image */}
//             {/* <div className="w-full h-64 rounded-lg overflow-hidden">
//               <img
//                 src={project.imageUrl}
//                 alt={project.title}
//                 className="w-full h-full object-cover"
//               />
//             </div> */}

//             {/* Tools Used */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3">Tools & Technologies</h3>
//               <div className="flex flex-wrap gap-2">
//                 {project.tools.map((tool, index) => (
//                   <Badge key={index} variant="secondary">
//                     {tool}
//                   </Badge>
//                 ))}
//               </div>
//             </div>

//             <Separator />

//             {/* Collaborators */}
//             {project.collaborators && project.collaborators.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold mb-3">Team & Collaborators</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {project.collaborators.map((person, index) => (
//                     <div key={index} className="flex flex-col">
//                       <span className="font-medium">{person.name}</span>
//                       <span className="text-sm text-muted-foreground">{person.role}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <Separator className="my-6" />
//               </div>
//             )}

//             {/* Key Learnings */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3">Key Learnings</h3>
//               <ul className="space-y-2">
//                 {project.learnings.map((learning, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="text-accent mr-2">•</span>
//                     <span>{learning}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <Separator />

//             {/* Outcomes & Impact */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3">Outcomes & Impact</h3>
//               <p className="text-muted-foreground mb-4">{project.impact}</p>
//               <ul className="space-y-2">
//                 {project.outcomes.map((outcome, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="text-accent mr-2">•</span>
//                     <span>{outcome}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </ScrollArea>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ProjectDetailsDialog;

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/seperator";
import { ScrollArea } from "@/components/ui/scrollArea";

interface ProjectDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tools: string[];
    collaborators?: { name: string; role: string; }[];
    learnings: string[];
    outcomes: string[];
    impact: string;
    imageUrl: string;
  };
}

const ProjectDetailsDialog: React.FC<ProjectDetailsProps> = ({
  isOpen,
  onClose,
  project
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-lg mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-1 p-6 pt-0">
          <div className="space-y-8 pr-4">
            {/* Project Image */}
            {/* <div className="w-full h-64 rounded-lg overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* Tools Used */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <Badge key={index} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Collaborators */}
            {project.collaborators && project.collaborators.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Team & Collaborators</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.collaborators.map((person, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="font-medium">{person.name}</span>
                      <span className="text-sm text-muted-foreground">{person.role}</span>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
              </div>
            )}

            {/* Key Learnings */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Learnings</h3>
              <ul className="space-y-2">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Outcomes & Impact */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Outcomes & Impact</h3>
              <p className="text-muted-foreground mb-4">{project.impact}</p>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;