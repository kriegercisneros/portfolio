"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ProjectCard } from './projectCard';
import { projects } from '../data/projects';
import { Project } from '@/types';

export const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between group cursor-pointer"
      >
        <div className="text-left">
          <h2 className="text-3xl font-bold text-primary font-serif mb-1">Engineering Experience</h2>
          <p className="text-sm text-gray-500">
            Enterprise platform architecture in insurance tech
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 group-hover:text-primary transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-base text-gray-600 mb-8 mt-6 max-w-3xl">
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
        )}
      </AnimatePresence>
    </div>
  );
};
