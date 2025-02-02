// /* eslint-disable @typescript-eslint/no-unused-vars */
// // "use client"
// // import React from 'react';
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // import { Header } from '@/components/portfolio/components/header';
// // import { Projects } from '@/components/portfolio/components/projects';
// // import { TechnicalSkills } from '@/components/portfolio/components/technicalSkills';
// // import { AboutMe } from './components/about';
// // import { Footer } from '@/components/portfolio/components/footer'


// // const PortfolioLayout = () => {
// //   return (
// //     <div className="min-h-screen bg-background">
// //       <main className="container mx-auto py-12">
// //         <Header />
        
// //         <Tabs defaultValue="projects" className="w-full z-100">
// //           <TabsList className="mb-8">
// //             <TabsTrigger value="projects">Projects</TabsTrigger>
// //             <TabsTrigger value="skills">Technical Skills</TabsTrigger>
// //             {/* <TabsTrigger value="about">About</TabsTrigger> */}
// //           </TabsList>
          
// //           <TabsContent value="projects">
// //             <Projects />
// //           </TabsContent>
          
// //           <TabsContent value="skills">
// //             <TechnicalSkills />
// //           </TabsContent>
// //           <TabsContent value="about">
// //             <AboutMe />
// //             </TabsContent>
// //         </Tabs>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default PortfolioLayout;

// // "use client"
// // import React, { useEffect, useRef, useState } from 'react';
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // import { Header } from '@/components/portfolio/components/header';
// // import { Projects } from '@/components/portfolio/components/projects';
// // import { TechnicalSkills } from '@/components/portfolio/components/technicalSkills';
// // import { AboutMe } from './components/about';
// // import { Footer } from '@/components/portfolio/components/footer';
// // import { FileText } from 'lucide-react';
// // import { motion } from 'framer-motion';

// // interface FloatingResumeButtonProps {
// //   visible: boolean;
// // }

// // const FloatingResumeButton: React.FC<FloatingResumeButtonProps> = ({ visible }) => {
// //   return (
// //     <motion.button
// //       initial={{ opacity: 0, scale: 0.5 }}
// //       animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
// //       transition={{ duration: 0.3 }}
// //       className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-accent hover:bg-accent-dark text-white shadow-lg flex items-center justify-center transition-colors duration-300"
// //       onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTf1iIYUDnZgBAcwPDVm12KkgTA_9D35sz6fYqJ5agtQRQ9Tx2QvqxMGC-Gg5gd4TUGzLjwDUps5p0R/pub', '_blank')}
// //       aria-label="View Resume"
// //       style={{ 
// //         pointerEvents: visible ? 'auto' : 'none',
// //         // Ensure button stays above other content
// //         zIndex: 50 
// //       }}
// //     >
// //       <FileText className="h-5 w-5" />
// //     </motion.button>
// //   );
// // };

// // const PortfolioLayout = () => {
// //   const [scrollProgress, setScrollProgress] = useState(0);
// //   const headerRef = useRef(null);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (headerRef.current) {
// //         const headerRect = headerRef.current.getBoundingClientRect();
// //         const headerHeight = headerRect.height;
// //         const scrollPosition = -headerRect.top;
// //         const progress = Math.min(Math.max(scrollPosition / headerHeight, 0), 1);
// //         setScrollProgress(progress);
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     handleScroll(); // Initial check

// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-background">
// //       <div ref={headerRef}>
// //         <div className="container mx-auto py-12">
// //           <Header />
// //         </div>
// //       </div>

// //       <main className="container mx-auto">
// //         <Tabs defaultValue="projects" className="w-full">
// //           <TabsList className="mb-8">
// //             <TabsTrigger value="projects">Projects</TabsTrigger>
// //             <TabsTrigger value="skills">Technical Skills</TabsTrigger>
// //             {/* <TabsTrigger value="about">About</TabsTrigger> */}
// //           </TabsList>
          
// //           <TabsContent value="projects">
// //             <Projects />
// //           </TabsContent>
          
// //           <TabsContent value="skills">
// //             <TechnicalSkills />
// //           </TabsContent>
          
// //           <TabsContent value="about">
// //             <AboutMe />
// //           </TabsContent>
// //         </Tabs>
// //       </main>

// //       <FloatingResumeButton visible={scrollProgress > 0.8} />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default PortfolioLayout;

// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Header } from '@/components/portfolio/components/header';
// import { Projects } from '@/components/portfolio/components/projects';
// import { TechnicalSkills } from '@/components/portfolio/components/technicalSkills';
// import { AboutMe } from './components/about';
// import { Footer } from '@/components/portfolio/components/footer';
// import { FileText } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface FloatingResumeButtonProps {
//   visible: boolean;
// }

// const FloatingResumeButton: React.FC<FloatingResumeButtonProps> = ({ visible }) => {
//   return (
//     <motion.button
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
//       transition={{ duration: 0.3 }}
//       className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-accent hover:bg-accent-dark text-white shadow-lg flex items-center justify-center transition-colors duration-300"
//       onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTf1iIYUDnZgBAcwPDVm12KkgTA_9D35sz6fYqJ5agtQRQ9Tx2QvqxMGC-Gg5gd4TUGzLjwDUps5p0R/pub', '_blank')}
//       aria-label="View Resume"
//       style={{ 
//         pointerEvents: visible ? 'auto' : 'none',
//         zIndex: 50 
//       }}
//     >
//       <FileText className="h-5 w-5" />
//     </motion.button>
//   );
// };

// const PortfolioLayout: React.FC = () => {
//   const [scrollProgress, setScrollProgress] = useState<number>(0);
//   const headerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleScroll = (): void => {
//       const element = headerRef.current;
//       if (element instanceof HTMLElement) {
//         const headerRect = element.getBoundingClientRect();
//         const headerHeight = headerRect.height;
//         const scrollPosition = -headerRect.top;
//         const progress = Math.min(Math.max(scrollPosition / headerHeight, 0), 1);
//         setScrollProgress(progress);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll(); // Initial check

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-background">
//       <div ref={headerRef}>
//         <div className="container mx-auto py-12">
//           <Header />
//         </div>
//       </div>

//       <main className="container mx-auto">
//         <Tabs defaultValue="projects" className="w-full">
//           <TabsList className="mb-8">
//             <TabsTrigger value="projects">Projects</TabsTrigger>
//             <TabsTrigger value="skills">Technical Skills</TabsTrigger>
//             {/* <TabsTrigger value="about">About</TabsTrigger> */}
//           </TabsList>
          
//           <TabsContent value="projects">
//             <Projects />
//           </TabsContent>
          
//           <TabsContent value="skills">
//             <TechnicalSkills />
//           </TabsContent>
          
//           <TabsContent value="about">
//             <AboutMe />
//           </TabsContent>
//         </Tabs>
//       </main>

//       <FloatingResumeButton visible={scrollProgress > 0.8} />
//       <Footer />
//     </div>
//   );
// };

// export default PortfolioLayout;

"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/portfolio/components/header';
import { Projects } from '@/components/portfolio/components/projects';
import { TechnicalSkills } from '@/components/portfolio/components/technicalSkills';
import { AboutMe } from './components/about';
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
      {/* Name text */}
      {/* <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
        transition={{ duration: 0.3, delay: visible ? 0.1 : 0 }}
        className="text-lg font-semibold text-accent rounded-lg border bg-white border p-3 hidden md:block"
      >
        Jacqueline Krieger
      </motion.div> */}

      {/* Resume button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
        className="w-14 h-14 rounded-full bg-accent hover:bg-accent-dark text-white shadow-lg flex items-center justify-center transition-colors duration-300"
        onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTf1iIYUDnZgBAcwPDVm12KkgTA_9D35sz6fYqJ5agtQRQ9Tx2QvqxMGC-Gg5gd4TUGzLjwDUps5p0R/pub', '_blank')}
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
    handleScroll(); // Initial check

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
          
          <TabsContent value="about">
            <AboutMe />
          </TabsContent>
        </Tabs>
      </main>

      <FloatingResumeButton visible={scrollProgress > 0.8} />
      <Footer />
    </div>
  );
};

export default PortfolioLayout;