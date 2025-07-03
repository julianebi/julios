
import { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  intensity?: number;
  className?: string;
}

export const ParallaxBackground = ({ intensity = 1, className = "" }: ParallaxBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shapes = [
    {
      id: 1,
      size: 'w-20 h-20',
      color: 'bg-gradient-to-br from-green-400/20 to-green-600/20',
      position: 'top-20 left-20',
      speed: 0.5,
      rotation: scrollY * 0.1,
      shape: 'rounded-3xl',
    },
    {
      id: 2,
      size: 'w-32 h-16',
      color: 'bg-gradient-to-br from-blue-400/15 to-purple-600/15',
      position: 'top-40 right-32',
      speed: 0.3,
      rotation: scrollY * -0.15,
      shape: 'rounded-2xl',
    },
    {
      id: 3,
      size: 'w-24 h-24',
      color: 'bg-gradient-to-br from-purple-400/20 to-pink-600/20',
      position: 'top-80 left-1/4',
      speed: 0.7,
      rotation: scrollY * 0.2,
      shape: 'rounded-full',
    },
    {
      id: 4,
      size: 'w-16 h-32',
      color: 'bg-gradient-to-br from-yellow-400/15 to-orange-600/15',
      position: 'bottom-40 right-20',
      speed: 0.4,
      rotation: scrollY * -0.1,
      shape: 'rounded-3xl',
    },
    {
      id: 5,
      size: 'w-40 h-20',
      color: 'bg-gradient-to-br from-cyan-400/10 to-blue-600/10',
      position: 'top-96 right-1/3',
      speed: 0.6,
      rotation: scrollY * 0.05,
      shape: 'rounded-2xl',
    },
    {
      id: 6,
      size: 'w-28 h-28',
      color: 'bg-gradient-to-br from-green-400/15 to-teal-600/15',
      position: 'bottom-20 left-1/3',
      speed: 0.8,
      rotation: scrollY * -0.08,
      shape: 'rounded-3xl',
    }
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} ${shape.shape} blur-sm`}
          style={{
            transform: `
              translateY(${scrollY * shape.speed * intensity}px) 
              rotateX(${shape.rotation}deg) 
              rotateY(${shape.rotation * 1.5}deg)
              rotateZ(${shape.rotation * 0.5}deg)
              scale(${1 + Math.sin(scrollY * 0.01) * 0.1})
            `,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}
      
      {/* Additional floating elements */}
      <div 
        className="absolute top-60 left-10 w-12 h-12 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-full blur-md"
        style={{
          transform: `translateY(${scrollY * 0.3}px) rotateZ(${scrollY * 0.05}deg)`,
        }}
      />
      <div 
        className="absolute bottom-80 right-40 w-8 h-8 bg-gradient-to-br from-purple-400/40 to-pink-600/40 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * -0.4}px) rotateZ(${scrollY * -0.1}deg)`,
        }}
      />
      <div 
        className="absolute top-1/3 right-10 w-6 h-6 bg-gradient-to-br from-blue-400/50 to-cyan-600/50 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotateZ(${scrollY * 0.15}deg)`,
        }}
      />
    </div>
  );
};
