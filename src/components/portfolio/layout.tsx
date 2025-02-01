"use client"
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/portfolio/components/header';
import { Projects } from '@/components/portfolio/components/projects';
import { TechnicalSkills } from '@/components/portfolio/components/technicalSkills';
import { AboutMe } from './components/about';
import { Footer } from '@/components/portfolio/components/footer'
const PortfolioLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <Header />
        
        <Tabs defaultValue="projects" className="w-full z-100">
          <TabsList className="mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <Projects />
          </TabsContent>
          
          <TabsContent value="skills">
            <TechnicalSkills />
          </TabsContent>
          <TabsContent value="about">
            <AboutMe />
            </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioLayout;