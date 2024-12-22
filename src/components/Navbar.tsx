import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <motion.img
              src="https://files.oaiusercontent.com/file-LaphHvdsgmdyXLSEwp8g6T?se=2024-12-22T15%3A33%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd81e6f2c-bb80-43b2-89c1-ef9a5dc00dc1.webp&sig=Eqs/6QPcy9p9Akav005Q7yPzZWTDw9HfQcEbCgRldBw%3D"
              alt="Portfolio Logo"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          
          <div className="flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    {children}
  </motion.a>
);

export default Navbar;