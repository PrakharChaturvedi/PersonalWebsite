import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, MessageSquare, Mail, Phone, ChevronDown, Download } from 'lucide-react';
import { Linkedin, Github } from './ui/Icons';
import { Terminal } from './ui/Terminal';

const Hero = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(60);

  const phrases = [
    'technical_product_manager --init',
    'building AI platforms from 0→1',
    'shipped products · 200K+ users',
    'LLM concierge · 64% automation',
    'RAG pipelines · AWS-native infra',
    'open_to_opportunities --flag'
  ];

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(30);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(60);
      }

      if (!isDeleting && text === currentPhrase) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(400);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-xs font-mono text-blue-400">open to opportunities</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-white"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
            >
              Prakhar<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Chaturvedi</span>
            </motion.h1>

            <motion.div 
              className="mt-6 h-8 font-mono text-sm md:text-base"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              <span className="text-zinc-500">$</span>
              <span className="text-zinc-300 ml-2">{text}</span>
              <span className="cursor-blink text-blue-400">▊</span>
            </motion.div>

            <motion.p 
              className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
            >
              Building AI-powered platforms from <span className="text-white font-medium">0 → 1</span>. Shipped products serving <span className="text-white font-medium">200K+ users</span> with measurable, real-world impact.
            </motion.p>

            <motion.div 
              className="mt-10 flex flex-wrap items-center gap-4"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
            >
              <a href="#projects" className="inline-flex items-center gap-2 h-12 px-8 bg-white text-[#09090b] rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">
                <FolderOpen className="w-4 h-4" />
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 h-12 px-8 border border-white/10 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/5 hover:border-white/20 transition-all">
                <MessageSquare className="w-4 h-4" />
                Get in Touch
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 h-12 px-8 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg text-sm font-medium hover:bg-purple-500/20 transition-all">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>

            <motion.div 
              className="mt-10 flex items-center gap-5"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.5 }}
            >
              <a href="https://linkedin.com/in/prakharchaturvedi001/" target="_blank" className="text-zinc-500 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://github.com/PrakharChaturvedi" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="mailto:Prakharx45@gmail.com" className="text-zinc-500 hover:text-orange-400 transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="tel:+919630756442" className="text-zinc-500 hover:text-green-400 transition-colors"><Phone className="w-5 h-5" /></a>
            </motion.div>
          </div>

          {/* Right: Terminal Card */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            <Terminal title="prakhar@portfolio ~ % node intro.js">
              <div className="text-zinc-500 mb-3">// prakharchaturvedi.config.js</div>
              <div><span className="text-purple-400">const</span> <span className="text-blue-300">prakhar</span> = {'{' }</div>
              <div className="ml-4"><span className="text-green-400">role</span>: <span className="text-orange-300">"Technical Product Manager"</span>,</div>
              <div className="ml-4"><span className="text-green-400">location</span>: <span className="text-orange-300">"India"</span>,</div>
              <div className="ml-4"><span className="text-green-400">superpower</span>: <span className="text-orange-300">"0→1 product building"</span>,</div>
              <div className="ml-4"><span className="text-green-400">users_impacted</span>: <span className="text-blue-300">200_000</span>+,</div>
              <div className="ml-4"><span className="text-green-400">products_shipped</span>: <span className="text-blue-300">2</span>,</div>
              <div className="ml-4"><span className="text-green-400">automation_achieved</span>: <span className="text-blue-300">64</span>%,</div>
              <div className="ml-4"><span className="text-green-400">cost_saved_per_client</span>: <span className="text-orange-300">"₹15L+ annually"</span>,</div>
              <div className="ml-4"><span className="text-green-400">passions</span>: [</div>
              <div className="ml-8"><span className="text-orange-300">"AI/ML systems"</span>,</div>
              <div className="ml-8"><span className="text-orange-300">"distributed architecture"</span>,</div>
              <div className="ml-8"><span className="text-orange-300">"measurable impact"</span></div>
              <div className="ml-4">],</div>
              <div className="ml-4"><span className="text-green-400">currently</span>: <span className="text-orange-300">"Building the future @ VirtueCloud"</span></div>
              <div>{'}'};</div>
              <div className="mt-3"><span className="text-purple-400">export default</span> <span className="text-blue-300">prakhar</span>;</div>
              <div className="mt-2 flex items-center gap-1">
                <span className="text-green-400">➜</span>
                <span className="text-zinc-500">Ready to build.</span>
                <span className="cursor-blink text-green-400">▊</span>
              </div>
            </Terminal>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 float">
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">scroll</span>
        <ChevronDown className="w-4 h-4 text-zinc-600" />
      </div>
    </section>
  );
};

export default Hero;
