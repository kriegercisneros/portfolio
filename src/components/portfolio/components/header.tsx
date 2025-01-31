"use client"
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h1 className="text-4xl font-bold mb-2 text-primary">Jacqueline (Jackie) Krieger</h1>
      <p className="text-xl text-primary-light">
        Full-Stack Software Engineer specializing in enterprise solutions
      </p>
    </motion.div>
  );
};