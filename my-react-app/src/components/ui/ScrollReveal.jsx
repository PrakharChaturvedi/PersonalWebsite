import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"] // Start when top enters bottom, end when bottom is a bit below bottom
  });

  // Transform values based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const z = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity, 
        y, 
        rotateX, 
        scale,
        z,
        perspective: 1200,
        transformStyle: "preserve-3d"
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export const CardTilt = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 50 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

