import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Scene3D from './components/ui/Scene3D';

// Pages
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="bg-transparent text-white font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 min-h-screen flex flex-col">
      <ScrollToTop />
      <Scene3D />
      
      {/* Scanline overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
        <div className="scanline opacity-50"></div>
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-50"></div>

      {/* Glow blobs */}
      <div 
        className="fixed top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none float" 
        style={{ transformOrigin: 'center' }}
      ></div>
      <div 
        className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" 
        style={{ animation: 'float 8s ease-in-out infinite' }}
      ></div>

      <Navbar />
      
      <main className="relative z-10 flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

