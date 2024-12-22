import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800" />
      
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shreyansh Shubhankar Dash</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          ‣ Full Stack Developer
          <br/>
          ‣ AI Tools / Automations Expert
        </motion.p>
        
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="outline">Contact Me</Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Button = ({ 
  href, 
  children, 
  variant = 'solid' 
}: { 
  href: string; 
  children: React.ReactNode; 
  variant?: 'solid' | 'outline';
}) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`
      px-6 py-3 rounded-full font-medium transition-colors
      ${variant === 'solid' 
        ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' 
        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800'}
    `}
  >
    {children}
  </motion.a>
);

export default Hero;