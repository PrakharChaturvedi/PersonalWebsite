import React from 'react';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Products = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
          Products & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Deep dives into the systems I've architected, the products I've shipped, and the technical teams I've worked with.
        </p>
      </div>
      
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default Products;
