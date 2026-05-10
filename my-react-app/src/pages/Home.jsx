import React from 'react';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="pb-16 flex flex-col gap-12 overflow-hidden">
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;

