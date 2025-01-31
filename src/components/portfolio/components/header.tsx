"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export const Header = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="mb-16"
    >
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold text-primary tracking-tight mb-6">
          Jacqueline Krieger
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-xl text-primary-light max-w-2xl">
            Full-Stack Software Engineer specializing in enterprise solutions, 
            with expertise in React, Node.js, and cloud architecture
          </p>
          <Button
            onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTf1iIYUDnZgBAcwPDVm12KkgTA_9D35sz6fYqJ5agtQRQ9Tx2QvqxMGC-Gg5gd4TUGzLjwDUps5p0R/pub', '_blank')}
            className="bg-primary hover:bg-primary/90 text-white ml-8 whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
};