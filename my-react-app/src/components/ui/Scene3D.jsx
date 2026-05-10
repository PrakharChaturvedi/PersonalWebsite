  import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';
import { animate } from 'framer-motion';

const Particles = ({ count = 500, color = "#3b82f6" }) => {
  const mesh = useRef();
  const materialRef = useRef();
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useEffect(() => {
    if (materialRef.current) {
      animate(materialRef.current.color, new THREE.Color(color), { duration: 1.5 });
    }
  }, [color]);

  useFrame((state) => {
    const scrollY = window.scrollY;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.max(1.5, Math.cos(t) * 5);
      
      particle.mx += (state.pointer.x * 20 - particle.mx) * 0.01;
      particle.my += (state.pointer.y * 20 - particle.my) * 0.01;
      
      // Scroll effect for particles (fly towards camera)
      const scrollZ = (scrollY * 0.015) % 100;
      let finalZ = (particle.my / 10) + b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10 + scrollZ;
      if (finalZ > 10) finalZ -= 100; // Loop particles back
      
      dummy.position.set(
        (particle.mx / 10) + a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) + b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10 + (scrollY * 0.005), // Slight vertical parallax
        finalZ
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.02, 0]} />
      <meshBasicMaterial ref={materialRef} color={color} transparent opacity={0.6} />
    </instancedMesh>
  );
};

const AbstractShape = ({ pathname }) => {
  const meshRef = useRef();
  const materialRef = useRef();
  
  // Define route-specific configs
  const config = useMemo(() => {
    switch (pathname) {
      case '/products':
        return { color: '#8b5cf6', scale: 1.2, speed: 2 }; // Purple
      case '/blog':
        return { color: '#10b981', scale: 1.8, speed: 0.5 }; // Emerald
      case '/personal':
        return { color: '#f97316', scale: 1.5, speed: 1.5 }; // Orange
      default:
        return { color: '#3b82f6', scale: 1.5, speed: 1 }; // Blue (Home)
    }
  }, [pathname]);

  useEffect(() => {
    if (materialRef.current) {
      animate(materialRef.current.color, new THREE.Color(config.color), { duration: 1.5 });
      animate(materialRef.current.emissive, new THREE.Color(config.color), { duration: 1.5 });
    }
    if (meshRef.current) {
      animate(meshRef.current.scale.x, config.scale, { duration: 1 });
      animate(meshRef.current.scale.y, config.scale, { duration: 1 });
      animate(meshRef.current.scale.z, config.scale, { duration: 1 });
    }
  }, [config]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollY = window.scrollY;
    
    // Rotate shape intensely based on scroll
    meshRef.current.rotation.x = (Math.sin(t / 4) * config.speed) + (scrollY * 0.002);
    meshRef.current.rotation.y = (Math.sin(t / 2) * config.speed) + (scrollY * 0.003);
    meshRef.current.position.y = (Math.sin(t / 1.5) * 0.2) + (scrollY * 0.001); // Float up slightly on scroll
    
    meshRef.current.rotation.x += (state.pointer.y * 0.5 - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (state.pointer.x * 0.5 - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, -5]} scale={[1.5, 1.5, 1.5]}>
        {pathname === '/products' ? (
          <icosahedronGeometry args={[1.5, 0]} />
        ) : pathname === '/blog' ? (
          <octahedronGeometry args={[1.2, 0]} />
        ) : pathname === '/personal' ? (
          <sphereGeometry args={[1.2, 8, 8]} />
        ) : (
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        )}
        <meshStandardMaterial 
          ref={materialRef}
          color={config.color} 
          emissive={config.color}
          emissiveIntensity={0.2}
          wireframe={true}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  const { pathname } = useLocation();

  const particleColor = useMemo(() => {
    switch (pathname) {
      case '/products': return '#8b5cf6';
      case '/blog': return '#10b981';
      case '/personal': return '#f97316';
      default: return '#3b82f6';
    }
  }, [pathname]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#09090b] transition-colors duration-1000">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={['#09090b']} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <AbstractShape pathname={pathname} />
        <Particles count={300} color={particleColor} />
      </Canvas>
    </div>
  );
};

export default Scene3D;

