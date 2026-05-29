"use client";
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-primary font-serif mb-4">About</h2>
      <div className="max-w-3xl space-y-4 text-base text-gray-700 leading-relaxed">
        <p>
          I&apos;m a technical founder who builds platforms from scratch and leads the teams that scale them.
          At WhaleHawk, I designed and built the entire infrastructure — from async ingestion pipelines
          and AI-powered intelligence generation to vector search and production deployment on AWS. I also
          lead the engineering team, set technical direction, and work directly with my co-founder to
          translate business strategy into architecture.
        </p>
        <p>
          Before WhaleHawk, I spent years architecting enterprise platforms in insurance tech — full-stack
          systems with complex data flows, RBAC, automated compliance monitoring, and cloud infrastructure.
          I&apos;ve shipped production code across Python, TypeScript, React, Node.js, and AWS, and I care as
          much about operational discipline as I do about clean architecture.
        </p>
        <p className="text-sm text-gray-500">
          Outside of work, I grew up dancing salsa, ballet, and West African. I read cosmology and
          snarky fiction, practice yoga, and spend as much time as I can outdoors with my family.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
