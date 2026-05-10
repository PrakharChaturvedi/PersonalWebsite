import { MapPin, Briefcase, Brain, GraduationCap, Trophy, Activity, Zap } from 'lucide-react';
import { Terminal } from './ui/Terminal';
import { ScrollReveal } from './ui/ScrollReveal';

const About = () => {
  const quickFacts = [
    { icon: <MapPin className="w-3.5 h-3.5 text-blue-400" />, label: 'Based in', value: 'India', highlight: 'text-zinc-200' },
    { icon: <Briefcase className="w-3.5 h-3.5 text-purple-400" />, label: 'TPM @', value: 'VirtueCloud', highlight: 'text-zinc-200' },
    { icon: <Brain className="w-3.5 h-3.5 text-pink-400" />, label: 'Focus:', value: 'AI SaaS, EdTech', highlight: 'text-zinc-200' },
    { icon: <GraduationCap className="w-3.5 h-3.5 text-green-400" />, label: 'B.Tech CSE ·', value: '8.91 CGPA', highlight: 'text-zinc-200' },
    { icon: <Trophy className="w-3.5 h-3.5 text-yellow-400" />, label: 'President', value: 'CODEC', highlight: 'text-zinc-200' },
    { icon: <Activity className="w-3.5 h-3.5 text-orange-400" />, label: 'Basketball', value: 'Team Player', highlight: 'text-zinc-200' },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01 / about</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-white">Who I Am<span className="text-blue-400">.</span></h2>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                I'm a <span className="text-white font-medium">Technical Product Manager</span> with a track record of building AI-powered platforms from scratch. Over the past year, I've shipped two products serving <span className="text-white font-medium">200K+ users</span> — an LLM-based hotel concierge achieving <span className="text-white font-medium">64% automation</span> and <span className="text-white font-medium">₹15L+ savings per client</span>, and a career guidance platform deployed across schools in India.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                I'm excited about solving hard technical problems in roles where products create measurable impact. I sit at the intersection of <span className="text-zinc-200">product strategy</span>, <span className="text-zinc-200">AI/ML architecture</span>, and <span className="text-zinc-200">engineering execution</span> — translating complex stakeholder needs into systems that scale.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                When I'm not shipping products, I'm usually diving deep into system design, exploring new LLM capabilities, or playing basketball.
              </p>
            </div>

            <div className="lg:col-span-2">
              <Terminal title="quick_facts.sh">
                <div className="space-y-3">
                  {quickFacts.map((fact, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {fact.icon}
                      <span className="text-zinc-400 text-xs">
                        {fact.label} <span className={fact.highlight}>{fact.value}</span>
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-white/5 pt-3 flex items-center gap-3">
                    <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span className="text-green-400 text-xs">Available for opportunities</span>
                  </div>
                </div>
              </Terminal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
