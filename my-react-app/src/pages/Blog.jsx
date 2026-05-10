import React from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const Blog = () => {
  const articles = [
    {
      title: "Building LLM Concierges: Lessons from 200K+ Requests",
      date: "May 2024",
      readTime: "8 min read",
      category: "AI/ML",
      excerpt: "How we implemented a custom RAG pipeline to drastically reduce hallucinations and automate 64% of luxury hotel guest interactions.",
      link: "#"
    },
    {
      title: "Zero to One in EdTech: Designing for Low-Bandwidth",
      date: "February 2024",
      readTime: "6 min read",
      category: "Product Strategy",
      excerpt: "Why typical SaaS architectures fail in government schools, and how we optimized S3 content delivery to achieve sub-2s response times.",
      link: "#"
    },
    {
      title: "The Product Manager's Guide to AWS Bedrock",
      date: "December 2023",
      readTime: "10 min read",
      category: "Engineering",
      excerpt: "A practical framework for evaluating foundation models, estimating costs, and planning your first enterprise LLM deployment.",
      link: "#"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
              Writing & <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Thoughts</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
              I occasionally write about AI architecture, product strategy, and lessons learned from scaling zero-to-one SaaS platforms.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {articles.map((article, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <article className="group cursor-pointer p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all duration-500">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-mono text-zinc-500">
                  <span className="text-emerald-400 uppercase tracking-wider">{article.category}</span>
                  <span>—</span>
                  <span>{article.date}</span>
                  <span>—</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <a href={article.link} className="text-sm text-white font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <span className="text-emerald-400">→</span>
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
