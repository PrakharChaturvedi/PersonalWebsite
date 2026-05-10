import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Github } from '../components/ui/Icons';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const ProjectDetail = () => {
  const { id } = useParams();

  // Placeholder data based on the ID
  const project = {
    title: id.replace('-', ' ').toUpperCase(),
    description: "An in-depth look at how this platform was architected, built, and deployed to serve thousands of users.",
    content: "Detailed case study content goes here. This would typically include architecture diagrams, problem statements, solutions, metrics, and technical challenges overcome.",
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <ScrollReveal>
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
          {project.title}
        </h1>
        
        <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
          {project.description}
        </p>

        {/* Content placeholder for the actual case study */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-zinc-300 leading-relaxed">
            {project.content}
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProjectDetail;
