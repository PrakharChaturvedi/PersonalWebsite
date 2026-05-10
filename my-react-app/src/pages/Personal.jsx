import React from 'react';
import Education from '../components/Education';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const Personal = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
            Beyond the <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Product</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A glimpse into my life off-screen. I believe the best products are built by people with diverse interests and experiences.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Photo Grid Placeholders */}
            <div className="col-span-1 md:col-span-2 aspect-[16/9] rounded-2xl bg-zinc-800/50 border border-white/10 overflow-hidden relative group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
               <img src="https://picsum.photos/seed/basketball-court/800/600" alt="Basketball" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-6 left-6 z-20">
                 <h3 className="text-xl text-white font-medium">Basketball</h3>
                 <p className="text-zinc-300 text-sm">Team dynamics on the court translate directly to product teams.</p>
               </div>
            </div>
            <div className="col-span-1 aspect-square md:aspect-auto rounded-2xl bg-zinc-800/50 border border-white/10 overflow-hidden relative group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
               <img src="https://picsum.photos/seed/hackathon/400/600" alt="Hackathon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-6 left-6 z-20">
                 <h3 className="text-xl text-white font-medium">CODEC</h3>
                 <p className="text-zinc-300 text-sm">Building communities.</p>
               </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Education />
    </div>
  );
};

export default Personal;
