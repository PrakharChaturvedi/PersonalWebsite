import React from 'react';

import { ScrollReveal } from './ui/ScrollReveal';

const Metrics = () => {
  const metrics = [
    { label: 'Users Served', value: '200K', suffix: '+' },
    { label: 'Automation Rate', value: '64', suffix: '%' },
    { label: 'Saved/Client/Year', value: '₹15L', suffix: '+' },
    { label: 'Uptime SLA', value: '99', suffix: '%' },
  ];

  return (
    <section className="relative py-16 border-y border-white/5 bg-[#09090b]/50 backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card bg-[#18181b]/60 backdrop-blur-md">
                <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  {metric.value}<span className="text-blue-400">{metric.suffix}</span>
                </div>
                <div className="text-xs text-zinc-500 font-mono mt-2 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Metrics;
