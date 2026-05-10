import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Zap } from 'lucide-react';
import { cn } from '../utils';

import { ScrollReveal } from './ui/ScrollReveal';

const BentoGridItem = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-md group hover:bg-white/[0.04] transition-colors duration-500",
        className
      )}
    >
      {children}
    </div>
  );
};

const ProjectOne = ({ project }) => {
  const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-32">
        {/* Main Info Box */}
        <BentoGridItem className="md:col-span-2 md:row-span-2 p-8 md:p-10 flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div>
            <div className="flex gap-2 mb-6 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag.label} className={cn("text-xs font-mono px-3 py-1 rounded-full border", tag.className)}>
                  {tag.label}
                </span>
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4 leading-tight">{project.title}</h3>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">{project.description}</p>
          </div>
          
          <div className="mt-12 relative z-20">
            <Link to={`/project/${slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
              Read Case Study <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </BentoGridItem>

        {/* Primary Metric */}
        <BentoGridItem className="md:col-span-1 md:row-span-1 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20"><Zap className="w-12 h-12 text-blue-400" /></div>
          <div className="text-4xl md:text-5xl font-semibold text-white mb-2">{project.metrics[1].value}</div>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{project.metrics[1].label}</div>
        </BentoGridItem>

        {/* Secondary Metric */}
        <BentoGridItem className="md:col-span-1 md:row-span-1 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 p-4 opacity-20"><Globe className="w-12 h-12 text-purple-400" /></div>
          <div className="text-4xl md:text-5xl font-semibold text-white mb-2">{project.metrics[2].value}</div>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{project.metrics[2].label}</div>
        </BentoGridItem>

        {/* Visual / Tech Area */}
        <BentoGridItem className="md:col-span-2 md:row-span-1 p-0 relative min-h-[250px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-700" style={{ backgroundImage: `url(${project.image})` }}></div>
          <div className="relative z-20 h-full flex items-end p-6 md:p-8">
            <div className="flex items-center gap-6 md:gap-8 text-zinc-300 bg-black/70 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-white/10 shadow-2xl">
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">{project.metrics[0].value}</span>
                <span className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest">{project.metrics[0].label}</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-md">{project.metrics[3].value}</span>
                <span className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest">{project.metrics[3].label}</span>
              </div>
            </div>
          </div>
        </BentoGridItem>
      </div>
    </ScrollReveal>
  );
};

const ProjectTwo = ({ project }) => {
  const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-32">
        {/* Visual Area */}
        <BentoGridItem className="md:col-span-7 md:row-span-2 p-0 relative min-h-[400px]">
          <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" style={{ backgroundImage: `url(${project.image})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-tight">
              {project.title}
            </h3>
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag.label} className={cn("text-xs font-mono px-3 py-1 rounded-full border bg-black/80 backdrop-blur-md shadow-2xl", tag.className)}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </BentoGridItem>

        {/* Main Info */}
        <BentoGridItem className="md:col-span-5 md:row-span-1 p-8 flex flex-col justify-center relative z-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-green-500/50"></div>
            <span className="text-xs font-mono text-green-400 uppercase tracking-widest">Platform Overview</span>
          </div>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">{project.description}</p>
          <Link to={`/project/${slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-green-400 transition-colors w-fit relative z-30">
            Read Case Study <ArrowUpRight className="w-4 h-4" />
          </Link>
        </BentoGridItem>

        {/* Metrics Row */}
        <BentoGridItem className="md:col-span-5 md:row-span-1 p-6 md:p-8 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-semibold text-green-400 mb-1">{project.metrics[0].value}</span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{project.metrics[0].label}</span>
          </div>
          <div className="w-px h-12 bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-semibold text-blue-400 mb-1">{project.metrics[1].value}</span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{project.metrics[1].label}</span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col hidden md:flex">
            <span className="text-3xl md:text-4xl font-semibold text-white mb-1">{project.metrics[3].value}</span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{project.metrics[3].label}</span>
          </div>
        </BentoGridItem>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tech", "Product", "Growth"];

  const projects = [
    {
      title: "AI-Powered Hotel Concierge",
      category: "Tech",
      description: "LLM-based concierge serving luxury hotels — driving 64% automation across 12+ languages and saving ₹15L+ per hotel annually.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
      gradient: "from-[#09090b] to-blue-900/20",
      tags: [
        { label: "AI SaaS", className: "text-blue-300 border-blue-500/30 bg-blue-500/10" },
        { label: "LLM", className: "text-purple-300 border-purple-500/30 bg-purple-500/10" },
      ],
      metrics: [
        { label: "Users/Year", value: "200K", className: "text-blue-400" },
        { label: "Automation", value: "64%", className: "text-green-400" },
        { label: "Languages", value: "12+", className: "text-purple-400" },
        { label: "Saved/Year", value: "₹15L+", className: "text-orange-400" },
      ]
    },
    {
      title: "Career Guidance & College Application Platform",
      category: "Product",
      description: "EdTech SaaS platform shipped in 5 months — serving thousands of students with 99%+ uptime across government and private schools.",
      image: "https://picsum.photos/seed/edtech-platform/1200/800",
      gradient: "from-[#09090b]/90 via-[#09090b]/40 to-transparent",
      tags: [
        { label: "EdTech", className: "text-green-300 border-green-500/30 bg-green-500/10" },
        { label: "SaaS", className: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10" },
      ],
      metrics: [
        { label: "Shipped", value: "5mo", className: "text-green-400" },
        { label: "Uptime", value: "99%+", className: "text-blue-400" },
        { label: "Response", value: "<2s", className: "text-purple-400" },
        { label: "Velocity", value: "+40%", className: "text-orange-400" },
      ]
    }
  ];

  const filteredProjects = projects.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-zinc-700"></div>
            <span className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Selected Works</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
              Products I've built<br />from <span className="text-purple-400 italic">zero to one.</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-sm">
              Real users, real metrics, and real impact. Here's a deep dive into my favorite architectures.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 mb-20 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-mono tracking-widest uppercase transition-all duration-300 border",
                  activeCategory === cat 
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => {
            // Dynamically alternate between layout styles
            if (index % 2 === 0) return <ProjectOne key={project.title} project={project} />;
            return <ProjectTwo key={project.title} project={project} />;
          })
        ) : (
          <div className="py-32 text-center">
            <div className="text-zinc-500 font-mono mb-2">// No projects found in this category</div>
            <p className="text-zinc-400">Try selecting a different filter.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
