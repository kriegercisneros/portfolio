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
import ProjectDetailsDialog from './modal';
import React from 'react';

export const ProjectCard: React.FC<Project> = ({ title, description, demoUrl, overview, techStack, imageUrl, timeline, learnings = [], outcomes = [], impact = "", collaborators = [], technicalConsiderations=[] }) => {
    const isViewable = demoUrl && demoUrl !== "#";
    const [showDetails, setShowDetails] = React.useState(false);
    return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="h-full shadow-medium hover:shadow-large transition-all duration-300 flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
              <CardDescription className="text-primary-light">{description}</CardDescription>
              <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <h2 className="text-xs text-accent hover:text-primary uppercase tracking-wider cursor-pointer transition-colors">
                    {timeline}
                    </h2>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Concept to completion timeline</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            
          </div>
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
        {/* <CardFooter className="mt-auto pt-4 flex flex-col gap-3">
        {isViewable && (
              <div className="flex-shrink-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-10 h-10 hover:text-accent rounded-full flex items-center justify-center p-0"
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
              </div>
            )}
  <Button
    variant="outline"
    className="w-full"
    onClick={() => setShowDetails(true)}
  >
    Learn More
  </Button>
  
  <ProjectDetailsDialog
    isOpen={showDetails}
    onClose={() => setShowDetails(false)}
    project={{
      title,
      description,
      tools: techStack,
      collaborators,
      learnings,
      outcomes,
      impact,
      imageUrl
    }}
  />
</CardFooter> */}
<CardFooter className="mt-auto pt-4 flex flex-col gap-3">
  <div className="w-full flex justify-between items-center">
    <Button
      variant="outline"
      className="flex-1 mr-2"
      onClick={() => setShowDetails(true)}
    >
      Learn More
    </Button>
    
    {isViewable && (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 hover:text-accent rounded-full flex items-center justify-center p-0"
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
  </div>

  <ProjectDetailsDialog
    isOpen={showDetails}
    onClose={() => setShowDetails(false)}
    project={{
      title,
      description,
      tools: techStack,
      collaborators,
      learnings,
      outcomes,
      impact,
      imageUrl, 
      overview, 
      technicalConsiderations
    }}
  />
</CardFooter>
      </Card>
    </motion.div>
  );
};