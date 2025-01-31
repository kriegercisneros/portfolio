"use client"
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Server } from 'lucide-react';

export const TechnicalSkills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-medium hover:shadow-large transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-6 w-6 text-secondary" />
              <CardTitle className="text-primary">Database Architecture</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-primary-light">
              <li>Complex schema design and optimization</li>
              <li>Data relationship modeling</li>
              <li>Query optimization and performance tuning</li>
              <li>Integration with modern ORMs</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-medium hover:shadow-large transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Server className="h-6 w-6 text-secondary" />
              <CardTitle className="text-primary">Backend Development</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-primary-light">
              <li>RESTful API design and implementation</li>
              <li>Microservices architecture</li>
              <li>AWS service integration</li>
              <li>Docker containerization</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};