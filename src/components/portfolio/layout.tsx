"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Header } from '@/components/portfolio/components/header';
import { Projects } from '@/components/portfolio/components/projects';
import { About } from '@/components/portfolio/components/about';
import { WhaleHawkCaseStudy } from '@/components/portfolio/components/whaleHawkCaseStudy';
import { Footer } from '@/components/portfolio/components/footer';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingResumeButtonProps {
  visible: boolean;
}

const FloatingResumeButton: React.FC<FloatingResumeButtonProps> = ({ visible }) => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 flex items-center gap-4"
      style={{ zIndex: 50 }}
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
        className="w-14 h-14 rounded-full bg-accent hover:bg-accent-dark text-white shadow-lg flex items-center justify-center transition-colors duration-300"
        onClick={() => window.open('/resume.pdf', '_blank')}
        aria-label="View Resume"
        style={{
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <FileText className="h-5 w-5" />
      </motion.button>
    </motion.div>
  );
};

const PortfolioLayout: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      const element = headerRef.current;
      if (element instanceof HTMLElement) {
        const headerRect = element.getBoundingClientRect();
        const headerHeight = headerRect.height;
        const scrollPosition = -headerRect.top;
        const progress = Math.min(Math.max(scrollPosition / headerHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div ref={headerRef}>
        <div className="container mx-auto py-12">
          <Header />
        </div>
      </div>

      <main className="container mx-auto">
        <section id="about" className="mb-16">
          <About />
        </section>

        <section id="whalehawk" className="mb-16">
          <WhaleHawkCaseStudy />
        </section>

        <section id="experience" className="mb-16">
          <Projects />
        </section>

      </main>

      <FloatingResumeButton visible={scrollProgress > 0.8} />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioLayout;
