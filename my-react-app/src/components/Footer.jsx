import React from 'react';
import { Mail } from 'lucide-react';
import { Linkedin, Github } from './ui/Icons';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold font-mono text-white">P</div>
            <span className="text-sm text-zinc-500">© 2025 Prakhar Chaturvedi. Built with intent.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/prakharchaturvedi001/" target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-blue-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com/PrakharChaturvedi" target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
            <a href="mailto:Prakharx45@gmail.com" className="text-zinc-600 hover:text-orange-400 transition-colors"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
            console.log("Thanks for scrolling this far 🚀")
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
