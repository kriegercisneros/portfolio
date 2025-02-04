"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import AboutMe from './about';

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
    <>
      {/* Background gradient container - now absolute instead of fixed */}
      <div className="absolute top-0 left-0 w-full pointer-events-none -z-8" style={{ height: '100vh' }}>
        <div 
          className="absolute top-0 left-0 w-full h-full animate-gradient"
          style={{
            background: 'linear-gradient(-45deg, #E07A5F,rgb(192, 86, 67),rgb(255, 255, 254))',
            backgroundSize: '400% 400%',
            opacity: 0.5,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      {/* Content with original positioning */}
      {/* Content with original positioning */}
<div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  <div className="container mx-auto">
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="relative pt-8 pb-16"
    >
      {/* <motion.div variants={item}>
        <h1 className="text-5xl font-bold text-primary tracking-tight mb-6">
          Jacqueline Krieger
        </h1>
        <AboutMe />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <p className="text-lg md:text-xl text-primary-light max-w-2xl">
          High-velocity Full-Stack Developer driving resilient, scalable solutions
          </p>
          <Button
            onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTf1iIYUDnZgBAcwPDVm12KkgTA_9D35sz6fYqJ5agtQRQ9Tx2QvqxMGC-Gg5gd4TUGzLjwDUps5p0R/pub', '_blank')}
            variant="secondary"
            className="w-full md:w-auto bg-accent hover:bg-accent-dark text-white md:ml-8 whitespace-nowrap transition-colors duration-300"
          >
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>
      </motion.div> */}
      <motion.div variants={item}>
        <div className="flex items-center">
          <h1 className="text-5xl font-bold text-primary tracking-tight mb-6">
            Jacqueline Krieger
          </h1>
          <AboutMe />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <p className="text-lg md:text-xl text-primary-light max-w-2xl">
            High-velocity Full-Stack Developer driving resilient, scalable solutions
          </p>
          <Button
            onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTf1iIYUDnZgBAcwPDVm12KkgTA_9D35sz6fYqJ5agtQRQ9Tx2QvqxMGC-Gg5gd4TUGzLjwDUps5p0R/pub', '_blank')}
            variant="secondary"
            className="w-full md:w-auto bg-accent hover:bg-accent-dark text-white md:ml-8 whitespace-nowrap transition-colors duration-300"
          >
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>
      </motion.div>
    </motion.header>
  </div>
</div>
    </>
  );
};

export default Header;