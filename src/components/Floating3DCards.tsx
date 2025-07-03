
import { useEffect, useState } from 'react';

export const Floating3DCards = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating card */}
      <div 
        className="absolute top-32 right-20 w-64 h-40 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-green-400/20 shadow-2xl"
        style={{
          transform: `
            translateY(${scrollY * 0.2}px) 
            rotateX(${15 + scrollY * 0.02}deg) 
            rotateY(${-10 + scrollY * 0.01}deg)
            perspective(1000px)
          `,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent rounded-3xl" />
      </div>

      {/* Medium floating card */}
      <div 
        className="absolute bottom-40 left-32 w-48 h-32 bg-gradient-to-br from-purple-800/30 to-blue-900/50 backdrop-blur-sm rounded-2xl border border-purple-400/20 shadow-xl"
        style={{
          transform: `
            translateY(${scrollY * -0.15}px) 
            rotateX(${-10 + scrollY * -0.015}deg) 
            rotateY(${20 + scrollY * -0.02}deg)
            perspective(1000px)
          `,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-2xl" />
      </div>

      {/* Small floating cards */}
      <div 
        className="absolute top-80 left-20 w-32 h-24 bg-gradient-to-br from-cyan-800/40 to-teal-900/60 backdrop-blur-sm rounded-xl border border-cyan-400/20 shadow-lg"
        style={{
          transform: `
            translateY(${scrollY * 0.3}px) 
            rotateX(${5 + scrollY * 0.03}deg) 
            rotateY(${-15 + scrollY * 0.025}deg)
            perspective(800px)
          `,
          transformStyle: 'preserve-3d',
        }}
      />

      <div 
        className="absolute bottom-60 right-40 w-40 h-28 bg-gradient-to-br from-orange-800/30 to-red-900/50 backdrop-blur-sm rounded-2xl border border-orange-400/20 shadow-lg"
        style={{
          transform: `
            translateY(${scrollY * -0.25}px) 
            rotateX(${-8 + scrollY * -0.02}deg) 
            rotateY(${12 + scrollY * 0.015}deg)
            perspective(800px)
          `,
          transformStyle: 'preserve-3d',
        }}
      />
    </div>
  );
};
