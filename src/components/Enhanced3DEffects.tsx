
import { useEffect, useState } from 'react';

export const Enhanced3DEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const floatingElements = [
    {
      id: 1,
      size: 'w-32 h-32',
      color: 'bg-gradient-to-br from-green-400/20 to-green-600/30',
      position: 'top-20 right-20',
      speed: 0.3,
      shape: 'rounded-3xl',
    },
    {
      id: 2,
      size: 'w-24 h-24',
      color: 'bg-gradient-to-br from-blue-400/15 to-purple-600/25',
      position: 'top-1/3 left-20',
      speed: 0.5,
      shape: 'rounded-full',
    },
    {
      id: 3,
      size: 'w-40 h-20',
      color: 'bg-gradient-to-br from-purple-400/20 to-pink-600/30',
      position: 'bottom-1/3 right-32',
      speed: 0.4,
      shape: 'rounded-2xl',
    },
    {
      id: 4,
      size: 'w-20 h-40',
      color: 'bg-gradient-to-br from-cyan-400/15 to-teal-600/25',
      position: 'bottom-40 left-1/4',
      speed: 0.6,
      shape: 'rounded-3xl',
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Mouse-following gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-br from-green-400/10 to-green-600/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 100}px, ${mousePosition.y * 100}px) scale(${1 + Math.abs(mousePosition.x) * 0.2})`,
          left: '50%',
          top: '50%',
          marginLeft: '-12rem',
          marginTop: '-12rem',
        }}
      />

      {/* Enhanced floating elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.size} ${element.color} ${element.position} ${element.shape} blur-sm opacity-60`}
          style={{
            transform: `
              translateY(${scrollY * element.speed}px) 
              rotateX(${mousePosition.y * 10 + scrollY * 0.02}deg) 
              rotateY(${mousePosition.x * 10 + scrollY * 0.03}deg)
              rotateZ(${Math.sin(scrollY * 0.01) * 5}deg)
              scale(${1 + Math.sin(Date.now() * 0.001 + element.id) * 0.1})
            `,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}

      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 left-1/3">
        <div
          className="w-16 h-16 bg-gradient-to-br from-green-400/30 to-green-600/20 rounded-lg rotate-y-slow"
          style={{
            transform: `rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg)`,
            transformStyle: 'preserve-3d',
          }}
        />
      </div>

      <div className="absolute bottom-1/4 right-1/3">
        <div
          className="w-12 h-12 bg-gradient-to-br from-purple-400/40 to-blue-600/30 rounded-full float-gentle"
          style={{
            transform: `rotateX(${-mousePosition.y * 10}deg) rotateZ(${mousePosition.x * 10}deg)`,
            transformStyle: 'preserve-3d',
          }}
        />
      </div>
    </div>
  );
};
