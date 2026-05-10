import { GraduationCap, Crown, Calendar, Activity } from 'lucide-react';
import { Terminal } from './ui/Terminal';

import { ScrollReveal } from './ui/ScrollReveal';

const Education = () => {
  const modules = ["Machine Learning", "Cloud Technologies", "Mobile Applications", "Agile Technologies", "DBMS", "Java / JavaScript", "UI/UX", "Data Analytics"];

  return (
    <section id="education" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">05 / education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-white">Education & More<span className="text-cyan-400">.</span></h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Terminal title="education.json">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">B.Tech in Computer Science & IT</h3>
                  <p className="text-zinc-400 text-sm mt-1">Symbiosis University of Applied Sciences</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="tag bg-cyan-500/10 text-cyan-300 border-cyan-500/20">CGPA: 8.91/10</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6">
                <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">Key Modules</h4>
                <div className="flex flex-wrap gap-2">
                  {modules.map(mod => (
                    <span key={mod} className="skill-node text-cyan-300">
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </Terminal>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-yellow-500/20 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                    <Crown className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">President — CODEC</h3>
                    <p className="text-sm text-zinc-400 mt-1">University Coding Club</p>
                    <p className="text-sm text-zinc-500 mt-2">Led the university's coding community — organizing hackathons, workshops, and coding competitions to foster a strong engineering culture on campus.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-orange-500/20 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Event Manager</h3>
                    <p className="text-sm text-zinc-400 mt-1">University Events & Activities</p>
                    <p className="text-sm text-zinc-500 mt-2">Coordinated and managed technical and cultural events — building organizational and leadership skills that translate directly into cross-functional product management.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-red-500/20 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Basketball Team</h3>
                    <p className="text-sm text-zinc-400 mt-1">Active Team Member</p>
                    <p className="text-sm text-zinc-500 mt-2">Competitive basketball taught me teamwork, discipline, and performing under pressure — skills I carry into every product sprint and stakeholder review.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;
