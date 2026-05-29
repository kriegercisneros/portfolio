"use client"
import { motion } from 'framer-motion';
import { ProjectCard } from './projectCard';
import { projects } from '../data/projects';
import { Project } from '@/types';

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-primary font-serif mb-2">Engineering Experience</h2>
      <p className="text-base text-gray-600 mb-8 max-w-3xl">
        Prior to WhaleHawk, I architected enterprise platforms in insurance tech — building full-stack
        solutions from database design to cloud deployment, leading development teams, and delivering
        production systems under aggressive timelines.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
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
    </motion.div>
  );
};