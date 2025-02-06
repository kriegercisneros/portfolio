"use client";
import { motion } from 'framer-motion';
import { Timer, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

const ComingSoon = ({ 
  title = "Coming Soon", 
  subtitle = "We're working hard to bring you something amazing." 
}: ComingSoonProps) => {
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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div variants={item} className="flex justify-center mb-8">
          <Timer className="h-16 w-16 text-primary" />
        </motion.div>
        
        <motion.h1 
          variants={item}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-lg text-gray-600 mb-8"
        >
          {subtitle}
        </motion.p>
        
        <motion.div variants={item}>
          <Button
            onClick={() => window.location.href = 'mailto:contact@adiantum.ai'}
            className="bg-primary hover:bg-primary/90 text-white transition-colors"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get Notified
          </Button>
        </motion.div>

        {/* Optional decorative elements */}
        <motion.div 
          variants={item}
          className="mt-12 flex justify-center space-x-2"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/30"
              style={{
                animationName: 'pulse',
                animationDuration: '1.5s',
                animationDelay: `${i * 0.2}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;