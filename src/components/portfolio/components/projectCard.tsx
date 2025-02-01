// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client"
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import type { Project } from '@/types/index';
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// import { Eye } from 'lucide-react';

// export const ProjectCard: React.FC<Project> = ({ title, description, demoUrl, techStack, imageUrl }) => {
//     const isViewable = demoUrl && demoUrl !== "#";
//     return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full"
//     >
//       <Card className="h-full shadow-medium hover:shadow-large transition-all duration-300">
//         <CardHeader className="flex flex-row justify-between items-start space-y-0">
//           <div>
//             <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
//             <CardDescription className="text-primary-light">{description}</CardDescription>
//           </div>
//           {isViewable && (
//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="rounded-full hover:bg-accent hover:text-white transition-colors"
//                     onClick={() => window.open(demoUrl, '_blank')}
//                   >
//                     <Eye className="h-5 w-5" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>View Project</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>
//           )}
//         </CardHeader>
//         <CardContent>
//           <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden">
//             <img 
//               src={imageUrl}
//               alt={title} 
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {techStack.map((tech: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
//               <span 
//                 key={index}
//                 className="px-2 py-1 bg-secondary/10 text-secondary-dark rounded-full text-sm"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button 
//             variant="outline" 
//             className="w-full bg-accent text-white hover:bg-accent-dark"
//             onClick={() => window.open(demoUrl, '_blank')}
//           >
//             Learn More
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// };

/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types/index';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Eye } from 'lucide-react';

export const ProjectCard: React.FC<Project> = ({ title, description, demoUrl, techStack, imageUrl }) => {
    const isViewable = demoUrl && demoUrl !== "#";
    return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="h-full shadow-medium hover:shadow-large transition-all duration-300 flex flex-col">
        <CardHeader className="flex flex-row justify-between items-start space-y-0">
          <div>
            <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
            <CardDescription className="text-primary-light">{description}</CardDescription>
          </div>
          {isViewable && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-accent hover:text-white transition-colors"
                    onClick={() => window.open(demoUrl, '_blank')}
                  >
                    <Eye className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden">
            <img 
              src={imageUrl}
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
              <span 
                key={index}
                className="px-2 py-1 bg-secondary/10 text-secondary-dark rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto pt-4">
          <Button 
            variant="outline" 
            className="w-full bg-white text-primary hover:bg-white"
            onClick={() => window.open(demoUrl, '_blank')}
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};