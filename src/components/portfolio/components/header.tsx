// "use client";
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { FileText } from 'lucide-react';

// export const Header = () => {
//   const container = {
//     hidden: { opacity: 0, y: 20 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <motion.header
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="relative mb-8 p-8 overflow-hidden rounded-lg bg-transparent"
//     >
//       <div className="absolute inset-0">
//         <div 
//           className="absolute inset-0 animate-gradient -z-8 pointer-events-none"
//           style={{
//             background: 'linear-gradient(-45deg, #E07A5F, #D8604C,rgb(251, 223, 217))',
//             backgroundSize: '400% 400%',
//             opacity: 0.4
//           }}
//         />
//       </div>

//       <motion.div variants={item}>
//         <h1 className="text-3xl font-bold text-primary tracking-tight mb-6">
//           Jacqueline Krieger
//         </h1>
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
//           <p className="hidden md:block text-xl text-primary-light max-w-2xl">
//             Full-Stack Software Engineer specializing in enterprise solutions, 
//             with expertise in React, Node.js, and cloud architecture
//           </p>
//           <Button
//             onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTf1iIYUDnZgBAcwPDVm12KkgTA_9D35sz6fYqJ5agtQRQ9Tx2QvqxMGC-Gg5gd4TUGzLjwDUps5p0R/pub', '_blank')}
//             className="bg-accent hover:bg-accent-dark text-white md:ml-8 whitespace-nowrap transition-colors duration-300 z-0"
//           >
//             <FileText className="mr-2 h-4 w-4" />
//             View Resume
//           </Button>
//         </div>
//       </motion.div>
//     </motion.header>
//   );
// };

// export default Header;

"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

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
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="relative mb-8 p-8 overflow-hidden rounded-lg bg-transparent"
    >
      {/* Updated gradient container with proper z-indexing */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full animate-gradient"
          style={{
            background: 'linear-gradient(-45deg, #E07A5F, #D8604C,rgb(254, 223, 216))',
            backgroundSize: '400% 400%',
            opacity: 0.4
          }}
        />
      </div>

      {/* Added z-10 to ensure content stays above gradient */}
      <motion.div variants={item} className="relative z-10">
        <h1 className="text-3xl font-bold text-primary tracking-tight mb-6">
          Jacqueline Krieger
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <p className="hidden md:block text-xl text-primary-light max-w-2xl">
            Full-Stack Software Engineer specializing in enterprise solutions, 
            with expertise in React, Node.js, and cloud architecture
          </p>
          <Button
            onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vTf1iIYUDnZgBAcwPDVm12KkgTA_9D35sz6fYqJ5agtQRQ9Tx2QvqxMGC-Gg5gd4TUGzLjwDUps5p0R/pub', '_blank')}
            className="bg-accent hover:bg-accent-dark text-white md:ml-8 whitespace-nowrap transition-colors duration-300"
          >
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;