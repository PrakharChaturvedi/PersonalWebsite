import React from 'react';
import { Brain, GraduationCap } from 'lucide-react';
import { Terminal } from './ui/Terminal';
import { ScrollReveal } from './ui/ScrollReveal';

const experiences = [
  {
    role: "Technical Product Manager",
    company: "VirtueCloud",
    type: "Full-time",
    location: "India",
    date: "June 2024 – Present",
    theme: { border: "border-blue-400", borderSub: "border-blue-500/30", bgSub: "bg-blue-500/10", textSub: "text-blue-300", textMain: "text-blue-400" },
    description: "Shipped a 0→1 EdTech platform in 5 months, scaling to thousands of students with 99%+ uptime. Built and deployed an LLM-based concierge serving ~200K users/year for luxury hotels. Managed cross-functional engineering teams, translated stakeholder needs into engineering specs, defined product roadmaps, and reduced operational costs by ₹15L+ per hotel annually.",
    skills: ["Product Strategy", "Node.js", "AWS", "Prompt Engineering", "CI/CD"]
  },
  {
    role: "SDE Team Lead",
    company: "ForginTech",
    type: "Internship",
    location: "Hybrid",
    date: "Mar 2024 – Oct 2024",
    theme: { border: "border-purple-400", borderSub: "border-purple-500/30", bgSub: "bg-purple-500/10", textSub: "text-purple-300", textMain: "text-purple-400" },
    description: "Led mobile app development projects, driving a 38% increase in client satisfaction and a 22% boost in team productivity. Managed a cross-functional team in an Agile environment to optimize delivery processes. Spearheaded API development, developed data management solutions reducing load times by 30%, and improved CI/CD pipelines with Docker and Kubernetes.",
    skills: ["Agile/Scrum", "Flutter", "Node.js", "Docker", "Kubernetes"]
  },
  {
    role: "Software Engineering Intern",
    company: "AdoLE",
    type: "Internship",
    location: "Remote",
    date: "Jun 2023 – Nov 2023",
    theme: { border: "border-orange-400", borderSub: "border-orange-500/30", bgSub: "bg-orange-500/10", textSub: "text-orange-300", textMain: "text-orange-400" },
    description: "Initiated and led a data extraction project for a classifier and developed a healthcare API that improved data integration efficiency by 30%. Built a Flutter app with a recommendation system that enhanced UX and suggested medicines, improving user QoL metrics by 8%. Developed scalable Node.js/Redis APIs and enhanced CI/CD efficiency by 28%.",
    skills: ["Product Strategy", "Node.js", "Redis", "AWS/GCP"]
  },
  {
    role: "Project Intern",
    company: "Tata Consultancy Services",
    type: "Internship",
    location: "On-site",
    date: "May 2022 – Jul 2022",
    theme: { border: "border-pink-400", borderSub: "border-pink-500/30", bgSub: "bg-pink-500/10", textSub: "text-pink-300", textMain: "text-pink-400" },
    description: "Selected for TCS's guided mentorship program. Prepared technical documentation and presentations for project reviews. Collaborated cross-functionally on a guided team project titled 'FymbiFit: Physical Monitoring System'.",
    skills: ["Technical Documentation", "Java", "Team Collaboration"]
  }
];

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

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16">
                <div className="absolute left-[-34px] top-1">
                  <div className={`timeline-dot ${exp.theme.border} ${index === 0 ? 'pulse-glow' : ''}`}></div>
                </div>
                <Terminal title={`experience_${index + 1}.log`} className="max-w-none">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-medium text-white flex items-center gap-3">
                        {exp.role}
                        {exp.type && (
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${exp.theme.borderSub} ${exp.theme.bgSub} ${exp.theme.textSub} uppercase tracking-widest`}>
                            {exp.type}
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`${exp.theme.textMain} font-medium`}>{exp.company}</span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-zinc-500 text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <span className="tag bg-white/5 text-zinc-300 border-white/10 self-start">{exp.date}</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  {exp.skills && (
                    <div className="flex gap-2 flex-wrap">
                      {exp.skills.map(skill => (
                        <span key={skill} className="text-xs font-mono px-2 py-1 rounded border border-white/10 bg-white/5 text-zinc-400">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </Terminal>
              </div>
            ))}

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
