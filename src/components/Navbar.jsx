'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for glass styling and spy navigation
  useEffect(() => {
    const handleScroll = () => {
      // Background styling
      setScrolled(window.scrollY > 20);

      // Active section spy
      const sections = navItems.map(item => {
        const el = document.getElementById(item.href.replace('#', ''));
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            name: item.name,
            top: rect.top + window.scrollY - 100,
            bottom: rect.bottom + window.scrollY - 100,
          };
        }
        return null;
      }).filter(Boolean);

      const currentScroll = window.scrollY;
      const active = sections.find(
        section => currentScroll >= section.top && currentScroll < section.bottom
      );

      if (active) {
        setActiveItem(active.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, name, href) => {
    e.preventDefault();
    setActiveItem(name);
    setMobileMenuOpen(false);
    
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-4 glass-navbar shadow-lg' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, 'Home', '#home')}
            className="flex items-center gap-2 group text-xl font-heading font-bold text-text-primary tracking-wider"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 group-hover:border-accent-cyan/40 transition-colors">
              <Cpu className="w-4.5 h-4.5 text-accent-blue group-hover:text-accent-cyan transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-accent-blue/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span>
              YP<span className="text-accent-blue">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1.5 bg-bg-card/40 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.name, item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium tracking-wide rounded-full transition-colors duration-200 ${
                    activeItem === item.name
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent-blue/10 border border-accent-blue/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, 'Resume', '#resume')}
              className="flex items-center gap-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-gradient-to-r from-accent-blue to-accent-cyan text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all hover:scale-[1.02]"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-bg-card/60 border border-white/5 text-text-primary hover:text-accent-cyan transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[73px] z-40 md:hidden glass-navbar border-b border-white/5 py-6 px-6 flex flex-col gap-4 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.name, item.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeItem === item.name
                      ? 'bg-accent-blue/10 border border-accent-blue/20 text-accent-cyan'
                      : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, 'Resume', '#resume')}
              className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-center font-semibold text-sm"
            >
              Download Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
