import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' }
    // { name: 'Templates', path: '/templates' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-aura-dark/95 backdrop-blur-xl border-b border-aura-light/5 py-4' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <div onClick={() => navigate('/')} className="flex items-center space-x-3 cursor-pointer group">
          <Hexagon className="text-aura-gold h-8 w-8 transition-transform group-hover:rotate-180 duration-700" strokeWidth={1.5} />
          <span className="font-serif text-2xl tracking-[0.2em] text-aura-light font-bold">DevMorphix</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 relative group py-2 ${isActive(link.path) ? 'text-aura-gold' : 'text-aura-light/70 hover:text-aura-gold'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-aura-gold transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-aura-glass hover:bg-aura-gold hover:text-aura-dark transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <Link to="/contact" className="ml-4 px-6 py-2 border border-aura-gold/50 text-aura-gold hover:bg-aura-gold hover:text-aura-dark transition-all duration-300 text-xs uppercase tracking-[0.2em] font-bold">
            Hire Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-aura-glass hover:bg-aura-gold hover:text-aura-dark transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-aura-light p-2 hover:text-aura-gold transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-[70px] bg-aura-dark z-40 flex flex-col items-center justify-start pt-16 space-y-8 h-[calc(100vh-70px)] border-t border-aura-light/5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-serif text-3xl tracking-widest uppercase transition-colors ${isActive(link.path) ? 'text-aura-gold' : 'text-aura-light hover:text-aura-gold'}`}
              >
                {link.name}
              </Link>
            ))}
             <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-8 px-10 py-4 bg-aura-gold text-aura-dark text-sm uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(191,161,129,0.3)]">
              Start Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;