"use client"
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="mt-16 pb-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary text-center mb-6">Connect With Me</h2>
        <div className="flex justify-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-secondary/10"
            onClick={() => window.open('https://github.com/kriegercisneros', '_blank')}
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-secondary/10"
            onClick={() => window.open('https://www.linkedin.com/in/jacqueline-krieger-cisneros/', '_blank')}
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-secondary/10"
            onClick={() => window.location.href = 'mailto:jackie@adiantum.ai'}
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};