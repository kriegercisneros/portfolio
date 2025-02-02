/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/portfolio/components/header';
import { Projects } from '@/components/portfolio/components/projects';
import { TechnicalSkills } from '@/components/portfolio/components/technicalSkills';
// import { AboutMe } from './components/about';
import { Footer } from '@/components/portfolio/components/footer';
import { FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingResumeButton = () => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-accent hover:bg-accent-dark text-white shadow-lg flex items-center justify-center transition-colors duration-300"
      onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTf1iIYUDnZgBAcwPDVm12KkgTA_9D35sz6fYqJ5agtQRQ9Tx2QvqxMGC-Gg5gd4TUGzLjwDUps5p0R/pub', '_blank')}
      aria-label="View Resume"
    >
      <FileText className="h-6 w-6" />
    </motion.button>
  );
};

const PortfolioLayout = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the header is visible
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div ref={headerRef}>
        <main className="container mx-auto py-12">
          <Header />
        </main>
      </div>

      <main className="container mx-auto py-12">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            {/* <TabsTrigger value="about">About</TabsTrigger> */}
          </TabsList>
          
          <TabsContent value="projects">
            <Projects />
          </TabsContent>
          
          <TabsContent value="skills">
            <TechnicalSkills />
          </TabsContent>
          
        </Tabs>
      </main>

      <AnimatePresence>
        {!isHeaderVisible && <FloatingResumeButton />}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PortfolioLayout;