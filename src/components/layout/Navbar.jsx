import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo-client.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Samples', path: '/samples' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled
          ? 'py-3 bg-obsidian/90 backdrop-blur-xl'
          : 'py-6 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group relative z-50">
            <div className="w-12 h-12 lg:w-14 lg:h-14 relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/40 transition-colors duration-500"></div>
              <img src={logo} alt="Z-AXIS" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white group-hover:text-gold transition-colors duration-500">
                Z-AXIS
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 group-hover:text-white transition-colors duration-500">
                Precision Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="glass-panel px-6 py-2 rounded-full flex gap-8 items-center border border-glass-border">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 py-2 group ${isActive ? 'text-gold' : 'text-slate-300 hover:text-white'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gold"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="absolute -bottom-[1px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full opacity-50"></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact" className="btn btn-outline border-gold text-gold hover:bg-gold hover:text-obsidian px-6 py-2.5 rounded text-xs">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col justify-center items-center"
          >
            {/* Background decors */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="text-3xl font-heading font-black uppercase tracking-wider text-slate-300 hover:text-gold transition-colors block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8"
              >
                <Link to="/contact" className="btn btn-primary px-10 py-4 text-base" onClick={() => setIsOpen(false)}>
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
