// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Smooth scroll function
  const smoothScroll = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track active section for highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'experience', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'profile', label: 'Profile' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button 
              onClick={() => smoothScroll('profile')}
              className="font-bold text-gray-800 dark:text-white text-lg"
            >
              My Dashboard
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScroll(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                } transition-colors font-medium`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                 <MoonIcon className="h-5 w-5 text-gray-700" />
              ) : (
               <SunIcon className="h-5 w-5 text-yellow-300" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-300" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Bars3Icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md"
        >
          <div className="px-4 py-2 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScroll(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  activeSection === item.id
                    ? 'bg-blue-50 dark:bg-gray-800 text-blue-500 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                } transition-colors font-medium`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;