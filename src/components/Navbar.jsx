import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Target, Home, User, Award, Camera, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#Home', icon: Home },
    { name: 'About', href: '#About', icon: User },
    { name: 'Achievements', href: '#Achievements', icon: Award },
    { name: 'Gallery', href: '#Gallery', icon: Camera },
    { name: 'Contact', href: '#Contact', icon: Mail },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.name));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };


  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('#Home')}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-grey-500 to-white-600 rounded-lg flex items-center justify-center">
                <img src={"logo.png"} alt="Logo" className="w-10 h-10" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">Archery Club</h1>
                <p className="text-xs text-gray-400 -mt-1">of Uva</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 group ${
                      activeSection === item.name
                        ? 'text-white bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                    {activeSection === item.name && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Outside of main nav to avoid transparency inheritance */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/80 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-gray-900 border-l border-white/10 z-50"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h1 className="font-bold text-white">Archery Club</h1>
                      <p className="text-xs text-gray-400 -mt-1">of Uva</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          activeSection === item.name
                            ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{item.name}</span>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Mobile Footer */}
                <div className="mt-12 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm text-center">
                    © 2024 Archery Club of Uva
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;