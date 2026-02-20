import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/logo-client.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Check if we are on the home page
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Samples', path: '/samples' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        {/* Logo - Increased Size */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-105">
            <img src={logo} alt="Z-AXIS" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-black tracking-tighter ${scrolled || !isHome ? 'text-black dark:text-white' : 'text-white'} group-hover:text-gold transition-colors duration-300`}>
              Z-AXIS
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${scrolled || !isHome ? 'text-zinc-600 dark:text-zinc-400' : 'text-zinc-400'} group-hover:text-gold/80 transition-colors duration-300`}>
              Precision Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-gray-300 hover:text-gold font-medium uppercase text-sm tracking-wider transition-colors relative group ${scrolled || !isHome ? 'text-zinc-800 dark:text-zinc-200' : 'text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact" className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded font-semibold uppercase text-sm tracking-wide">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled || !isHome ? 'text-zinc-800 dark:text-white' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800 py-8 flex flex-col items-center gap-6 animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <MobileNavLink key={link.name} to={link.path}>
              {link.name}
            </MobileNavLink>
          ))}
          <Link to="/contact" className="mt-4 px-8 py-3 bg-gold text-black font-bold rounded uppercase tracking-wide">
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="text-gray-300 hover:text-gold font-medium uppercase text-sm tracking-wider transition-colors relative group">
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ to, children }) => (
  <Link to={to} className="text-xl text-white hover:text-gold font-heading font-semibold uppercase tracking-widest">
    {children}
  </Link>
);

export default Navbar;
