import React from 'react';
import { Brain, GraduationCap } from 'lucide-react';
import { Terminal } from './ui/Terminal';
import { ScrollReveal } from './ui/ScrollReveal';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-green-500 to-transparent"></div>
            <span className="text-xs font-mono text-green-400 uppercase tracking-widest">03 / experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-white">Where I've Worked<span className="text-green-400">.</span></h2>

          <div className="relative pl-10">
            <div className="timeline-line"></div>

            {/* Experience 1 */}
            <div className="relative mb-16">
              <div className="absolute left-[-34px] top-1">
                <div className="timeline-dot border-blue-400 pulse-glow"></div>
              </div>
              <Terminal title="experience.log" className="max-w-none">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-white flex items-center gap-3">
                      Technical Product Manager
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-blue-400 font-medium">VirtueCloud</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-500 text-sm">India</span>
                    </div>
                  </div>
                  <span className="tag bg-blue-500/10 text-blue-300 border-blue-500/20 self-start">June 2024 – Present</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Leading product development for two AI-powered SaaS platforms — an LLM-based hotel concierge and a career guidance platform — driving strategy, engineering specs, and cross-functional execution.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-sm font-medium text-white mb-1 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-purple-400" />
                      AI Concierge Platform
                    </div>
                    <p className="text-xs text-zinc-500">LLM-based, multi-tenant, 12+ languages, 64% automation, AWS-native</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-sm font-medium text-white mb-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-green-400" />
                      Career Guidance Platform
                    </div>
                    <p className="text-xs text-zinc-500">EdTech SaaS, low-bandwidth optimized, 0→1 in 5 months, CI/CD</p>
                  </div>
                </div>
              </Terminal>
            </div>

            {/* Experience 2 - Internship */}
            <div className="relative mb-16">
              <div className="absolute left-[-34px] top-1">
                <div className="timeline-dot border-purple-400"></div>
              </div>
              <Terminal title="internship.log" className="max-w-none">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-white flex items-center gap-3">
                      Product Management Intern
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono border border-purple-500/30 bg-purple-500/10 text-purple-300 uppercase tracking-widest">Internship</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-purple-400 font-medium">Previous Company</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-500 text-sm">Remote</span>
                    </div>
                  </div>
                  <span className="tag bg-white/5 text-zinc-300 border-white/10 self-start">Jan 2024 – May 2024</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Analyzed user engagement metrics and conducted A/B testing on core product features. Collaborated directly with engineering and design teams to ship a redesigned dashboard that increased user retention by 15%.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-mono px-2 py-1 rounded border border-white/10 bg-white/5 text-zinc-400">A/B Testing</span>
                  <span className="text-xs font-mono px-2 py-1 rounded border border-white/10 bg-white/5 text-zinc-400">Jira</span>
                  <span className="text-xs font-mono px-2 py-1 rounded border border-white/10 bg-white/5 text-zinc-400">Figma</span>
                </div>
              </Terminal>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
