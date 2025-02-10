"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Menu, X } from 'lucide-react';
import AboutMe from './about';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
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

  const navItems = [
    // { title: 'Portfolio', path: '/' },
    // { title: 'Tech Consulting', path: '/consulting' },
    // { title: 'Contact', path: '/contact' },
    { title: 'About', path: '/'}
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' || pathname === '/portfolio';
    }
    return pathname === path;
  };

  return (
    <>
      {/* Background gradient container */}
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


    <div className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 border-b border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center h-16">
            <Link href="/" className="text-xl font-semibold font-serif text-primary">
              Jacqueline Krieger, Software Developer
            </Link>
            <div className="mx-4 h-16 hidden md:block">
              {/* <div className="h-full w-px bg-gray-900" /> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-gray-900 border-gray-900 border px-3 rounded-md'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 text-sm font-medium ${
                  isActive(item.path)
                    ? 'text-white bg-primary px-3 rounded-md'
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>

      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-16">
        <div className="container mx-auto">
          <motion.header
            variants={container}
            initial="hidden"
            animate="show"
            className="relative pt-8 pb-16"
          >
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