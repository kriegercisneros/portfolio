"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Briefcase, Heart, BookOpen, Code2, LucideIcon } from 'lucide-react';

// First, let's define our about sections data structure
const aboutSections = [
  {
    title: 'Professional Summary',
    iconType: 'user',
    content: [
      'Full-Stack Developer with advanced ability in enterprise solutions',
      'Specialized in React, Node.js, and cloud architecture',
      'Fast, efficient creating scalable, user-friendly applications'
    ]
  },
  {
    title: 'Current Focus',
    iconType: 'code',
    content: [
      'Building scalable microservices architectures',
      'Designing agentic AI systems across enterprise verticals',
      'Exploring cloud-native solutions for applied AI'
    ]
  },
  {
    title: 'Experience',
    iconType: 'briefcase',
    content: [
        'Hrrmm...'
    //   'Led development of enterprise-scale applications',
    //   'Implemented complex AWS integrations for various projects',
    //   'Developed and deployed microservices architecture solutions'
    ]
  },
  {
    title: 'Interests & Learning',
    iconType: 'heart',
    content: [
      'Creating space and home for my family',
      'Predicting the outcome of industry and political trends',
      'Yoga, breathwork and generally enjoying my time', 
     
    ]
  }
];

const iconMap: Record<string, LucideIcon> = {
  user: User,
  briefcase: Briefcase,
  heart: Heart,
  code: Code2,
  book: BookOpen
};

export const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {aboutSections.map((section, index) => {
        const Icon = iconMap[section.iconType];
        
        return (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-6 w-6 text-secondary" />}
                  <CardTitle className="text-primary">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-primary-light">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};