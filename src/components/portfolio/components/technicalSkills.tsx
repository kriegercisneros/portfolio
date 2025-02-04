
"use client"
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Server, Code, Cloud, Layout, Palette, Smartphone, LucideIcon, Users, Layers} from 'lucide-react';
import { skills } from '../data/skills';
// import type { Skill } from '@/types/index';

const iconMap: Record<string, LucideIcon> = {
  database: Database,
  server: Server,
  code:Code, 
  cloud:Cloud,
  layout:Layout, 
  palette:Palette,
  smartphone:Smartphone, 
  users:Users, 
  layers:Layers
};

export const TechnicalSkills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {skills.map((skill, index) => {
        const Icon = iconMap[skill.iconType];
        
        return (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-6 w-6 text-secondary" />}
                  <CardTitle className="text-primary">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-primary-light">
                  {skill.items.map((item, itemIndex) => (
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