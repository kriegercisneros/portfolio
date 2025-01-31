/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database, Server} from 'lucide-react';
import type {Project} from '@/types/index'

const ProjectCard = ({ title, description, demoUrl, techStack }:Project) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden">
            <img 
              src="/api/placeholder/400/320" 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.open(demoUrl, '_blank')}
          >
            View Project
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6" />
            <CardTitle>Database Architecture</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complex schema design and optimization</li>
            <li>Data relationship modeling</li>
            <li>Query optimization and performance tuning</li>
            <li>Integration with modern ORMs</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6" />
            <CardTitle>Backend Development</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>RESTful API design and implementation</li>
            <li>Microservices architecture</li>
            <li>AWS service integration</li>
            <li>Docker containerization</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Resin Mobile App",
      description: "Comprehensive mobile driver onboarding application with AWS integration",
      demoUrl: "#",
      techStack: ["React Native", "AWS", "Node.js", "TypeScript"]
    },
    {
      title: "Program Submission",
      description: "Enterprise-scale program management platform",
      demoUrl: "#",
      techStack: ["Next.js", "React", "TypeScript", "Node.js"]
    },
    {
      title: "Program Analytics",
      description: "Advanced analytics and reporting platform",
      demoUrl: "#",
      techStack: ["Next.js", "React", "TypeScript", "Data Visualization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">Jacqueline Krieger-Cisneros</h1>
          <p className="text-xl text-gray-600 mb-8">Full-Stack Engineer specializing in enterprise solutions</p>
        </motion.div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="skills">
            <SkillsSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Portfolio;