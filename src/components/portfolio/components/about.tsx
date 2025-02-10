// // "use client"

// // import { motion } from 'framer-motion';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { User, Briefcase, Heart, BookOpen, Code2, LucideIcon } from 'lucide-react';

// // // First, let's define our about sections data structure
// // const aboutSections = [
// //   {
// //     title: 'Professional Summary',
// //     iconType: 'user',
// //     content: [
// //       'Full-Stack Developer with advanced ability in enterprise solutions',
// //       'Specialized in React, Node.js, and cloud architecture',
// //       'Fast, efficient creating scalable, user-friendly applications'
// //     ]
// //   },
// //   {
// //     title: 'Current Focus',
// //     iconType: 'code',
// //     content: [
// //       'Building scalable microservices architectures',
// //       'Designing agentic AI systems across enterprise verticals',
// //       'Exploring cloud-native solutions for applied AI'
// //     ]
// //   },
// //   {
// //     title: 'Experience',
// //     iconType: 'briefcase',
// //     content: [
// //         'Hrrmm...'
// //     //   'Led development of enterprise-scale applications',
// //     //   'Implemented complex AWS integrations for various projects',
// //     //   'Developed and deployed microservices architecture solutions'
// //     ]
// //   },
// //   {
// //     title: 'Interests & Learning',
// //     iconType: 'heart',
// //     content: [
// //       'Creating space and home for my family',
// //       'Predicting the outcome of industry and political trends',
// //       'Yoga, breathwork and generally enjoying my time', 
     
// //     ]
// //   }
// // ];

// // const iconMap: Record<string, LucideIcon> = {
// //   user: User,
// //   briefcase: Briefcase,
// //   heart: Heart,
// //   code: Code2,
// //   book: BookOpen
// // };

// // export const AboutMe = () => {
// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
// //       {aboutSections.map((section, index) => {
// //         const Icon = iconMap[section.iconType];
        
// //         return (
// //           <motion.div
// //             key={section.title}
// //             initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.5, delay: index * 0.2 }}
// //           >
// //             <Card className="shadow-medium hover:shadow-large transition-all duration-300">
// //               <CardHeader>
// //                 <div className="flex items-center gap-2">
// //                   {Icon && <Icon className="h-6 w-6 text-secondary" />}
// //                   <CardTitle className="text-primary">{section.title}</CardTitle>
// //                 </div>
// //               </CardHeader>
// //               <CardContent>
// //                 <ul className="list-disc pl-6 space-y-2 text-primary-light">
// //                   {section.content.map((item, itemIndex) => (
// //                     <li key={itemIndex}>{item}</li>
// //                   ))}
// //                 </ul>
// //               </CardContent>
// //             </Card>
// //           </motion.div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Gem } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from '@/components/ui/sheet';

// const AboutMe = () => {
//   const personalItems = [
//     {
//       icon: "🧘‍♀️",
//       title: "Movement Practice",
//       description: "Finding balance and strength through yoga and meditation"
//     },
//     {
//       icon: "🌬️",
//       title: "Breathwork",
//       description: "Exploring the power of breath as a tool for grounding"
//     },
//     {
//       icon: "💃",
//       title: "Dancing",
//       description: "Expressing joy through dance and free movement"
//     },
//     {
//       icon: "🏃‍♀️",
//       title: "Outdoor Adventures",
//       description: "Seeking inspiration on hiking trails and in nature"
//     },
//     {
//       icon: "👨‍👧‍👦",
//       title: "Family First",
//       description: "Creating meaningful spaces for family connection"
//     },
//     // {
//     //   icon: "🍳",
//     //   title: "Culinary Explorer",
//     //   description: "Finding joy in cooking and sharing good food"
//     // }
//   ];

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 ml-4 mb-12"
//         >
//           <Gem className="h-4 w-4" />
//           {/* <span className="text-sm font-medium">About Me</span> */}
//         </motion.button>
//       </SheetTrigger>
//       <SheetContent className="w-full sm:max-w-lg">
//         <SheetHeader>
//           <SheetTitle className="text-3xl font-bold text-primary mb-6">Beyond the Code</SheetTitle>
//         </SheetHeader>
//         <motion.div 
//           className="space-y-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {personalItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="flex items-start gap-4"
//             >
//               <span className="text-2xl">{item.icon}</span>
//               <div>
//                 <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
//                 <p className="text-primary-light text-sm">{item.description}</p>
//               </div>
//             </motion.div>
//           ))}
          
//           <motion.p 
//             className="text-primary-light text-sm mt-8 italic"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Bringing a holistic approach to development, where technical expertise meets mindful living.
//           </motion.p>
//         </motion.div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default AboutMe;

import React from 'react';
import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Sparkle } from 'lucide-react';

const AboutMe = () => {
  const personalItems = [
    {
      icon:"🎯 ", 
      title:"Future Self", 
      description:"Aiming to work in applied AI, developing agentic systems that will be the future of tech"
    },
    {
      icon: "🧘‍♀️",
      title: "Yoga",
      description: "Finding balance and functional strength through movement meditation"
    },
    {
      icon: "🌬️",
      title: "Breathwork",
      description: "Exploring the power of breath as a tool for clarity and grounding"
    },
    {
      icon: "💃",
      title: "Dance",
      description: "I grew up dancing salsa, ballet, modern and West African"
    },
    {
      icon: "🏃‍♀️",
      title: "Outdoor Adventures",
      description: "Visiting the forest and the beach and adventuring with my family brings me peace"
    },
    {
      icon: "📖 ",
      title: "Reading",
      description: "Spending hours exploring new ideas in cosmology, quantum, tech and snarky fiction"
    },
    // {
    //   icon: "🍳",
    //   title: "Culinary Explorer",
    //   description: "Finding joy in cooking and sharing good food"
    // }
  ];

 
  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 ml-4 mb-6"
        >
          <Sparkle className="h-5 w-5" />
          {/* <span className="text-sm font-medium">About Me</span> */}
        </motion.button>
      </SheetTrigger>
      <SheetContent className="!left-[10%] !w-[90%] sm:!left-auto sm:!w-full sm:max-w-lg overflow-y-auto">
        <div className="h-full flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-3xl font-bold text-primary mb-6">Beyond the Code</SheetTitle>
          </SheetHeader>
          <motion.div 
            className="space-y-8 flex-grow overflow-y-auto pr-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {personalItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1 pt-1">{item.title}</h3>
                  <p className="text-primary-light text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.p 
              className="text-primary-light text-sm mt-8 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >         Bringing a holistic approach to development, where technical expertise meets enjoying life to the fullest.
          </motion.p>
        </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AboutMe;