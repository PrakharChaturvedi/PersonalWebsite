import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'experience', href: '#experience' },
    { name: 'projects', href: '#projects' },
    { name: 'skills', href: '#skills' },
    { name: 'education', href: '#education' },
    { name: 'contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    // If not on home page, go to home page first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-6 inset-x-0 flex justify-center z-50 pointer-events-none px-4">
        <div className="flex items-center justify-between p-2 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto w-full md:w-auto max-w-4xl gap-4 md:gap-8 transition-all duration-300">
          
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-3 group pl-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold font-mono text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-500">
              P
            </div>
            <span className="font-semibold text-sm tracking-tight text-white hidden sm:block">
              prakhar<span className="text-purple-400">.</span>dev
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1 pr-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300",
                  activeSection === link.name.toLowerCase() 
                    ? "bg-white/10 text-white shadow-inner" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors pr-4"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-[#09090b]/95 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-zinc-400 hover:text-white"
          >
            <X className="w-8 h-8" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "text-2xl font-light hover:text-white transition-colors",
                activeSection === link.name.toLowerCase() ? "text-purple-400 font-medium" : "text-zinc-400"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

