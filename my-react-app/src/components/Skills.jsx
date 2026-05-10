import React from 'react';
import { Target, Server, Cloud, Brain, Wrench, Sparkles } from 'lucide-react';
import { cn } from '../utils';

const SkillCategory = ({ title, icon: Icon, iconColor, skills, borderColor }) => (
  <div className={cn("p-6 rounded-xl bg-zinc-900/40 border border-white/5 transition-all duration-500", borderColor)}>
    <div className="flex items-center gap-3 mb-5">
      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center border", iconColor)}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-medium text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="skill-node text-zinc-300">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

import { ScrollReveal } from './ui/ScrollReveal';

const Skills = () => {
  const categories = [
    {
      title: "Product Management",
      icon: Target,
      iconColor: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      borderColor: "hover:border-blue-500/20",
      skills: ["Product Strategy", "Roadmapping", "PRD Writing", "User Stories", "Stakeholder Mgmt", "Cross-functional Leadership", "RICE / ICE", "Metrics & Analytics"]
    },
    {
      title: "Backend & Infrastructure",
      icon: Server,
      iconColor: "bg-green-500/10 border-green-500/20 text-green-400",
      borderColor: "hover:border-green-500/20",
      skills: ["Python", "JavaScript", "SQL", "DynamoDB", "Redis", "PostgreSQL", "MySQL", "Microservices", "RESTful APIs", "DB Schema Design"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      iconColor: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      borderColor: "hover:border-purple-500/20",
      skills: ["AWS Bedrock", "S3 / Lambda", "CloudWatch / IAM", "ECS / EKS", "Docker", "GitHub Actions", "Prometheus / Grafana", "Terraform", "Multi-tenant Arch"]
    },
    {
      title: "AI/ML & Data",
      icon: Brain,
      iconColor: "bg-pink-500/10 border-pink-500/20 text-pink-400",
      borderColor: "hover:border-pink-500/20",
      skills: ["RAG", "LLMs", "AWS Bedrock", "Prompt Engineering", "AI System Design", "Data Pipelines", "Analytics & Metrics"]
    },
    {
      title: "Tools & Methods",
      icon: Wrench,
      iconColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
      borderColor: "hover:border-yellow-500/20",
      skills: ["Git / GitHub", "Jira", "Agile / Scrum", "Technical Docs", "Presentations", "Dashboard Design"]
    }
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-orange-500 to-transparent"></div>
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">04 / skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Technical Arsenal<span className="text-orange-400">.</span></h2>
          <p className="text-zinc-500 text-lg mb-16 max-w-2xl">Tools, technologies, and methodologies I use to turn product vision into shipped software.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <SkillCategory key={i} {...cat} />
            ))}

            <div className="p-6 rounded-xl border border-dashed border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col items-center justify-center text-center">
              <Sparkles className="w-8 h-8 text-zinc-600 mb-3" />
              <h3 className="font-medium text-zinc-400 mb-1">Always Exploring</h3>
              <p className="text-xs text-zinc-600">Agentic AI · Fine-tuning · Edge Deployment</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
