
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Visualizer } from './components/Visualizer';
import { SetupGuide } from './components/SetupGuide';
import { DemoSection } from './components/DemoSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Stack', href: '#architecture' },
    { name: 'Guide', href: '#setup' },
    { name: 'Download', href: '#demo' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-n8n-DEFAULT selection:text-white font-sans overflow-x-hidden">
      <Background />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center glass-panel rounded-full px-6 py-3 max-w-5xl backdrop-blur-xl bg-black/40">
          
          {/* Logo */}
          <a 
            href="#" 
            className="font-display font-bold text-xl tracking-tighter flex items-center gap-1 z-50 relative" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              closeMenu();
            }}
          >
            <div className="w-2 h-2 rounded-full bg-n8n-DEFAULT animate-pulse" />
            RAG<span className="text-n8n-DEFAULT">.architect</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`hover:text-white transition-colors ${link.name === 'Download' ? 'text-white hover:text-n8n-DEFAULT' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1 hover:bg-white/10 rounded-full transition-colors z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-16 right-0 left-0 mx-4 p-4 glass-panel rounded-2xl bg-[#0a0f1e]/95 backdrop-blur-2xl border border-white/10 shadow-2xl md:hidden flex flex-col gap-4 text-center z-40"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <Visualizer />
        <DemoSection />
        <SetupGuide />
      </main>

      <Footer />
    </div>
  );
};

export default App;
