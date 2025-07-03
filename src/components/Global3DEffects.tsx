
import { useEffect, useState } from 'react';

export const Global3DEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Apply global 3D hover effects
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      const handleMouseEnter = () => {
        section.style.transform = `
          perspective(1200px) 
          rotateX(${mousePosition.y * 2}deg) 
          rotateY(${mousePosition.x * 2}deg)
          translateZ(10px)
          scale(1.02)
        `;
        section.style.transformStyle = 'preserve-3d';
        section.style.transition = 'transform 0.3s ease-out';
      };

      const handleMouseLeave = () => {
        section.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
      };

      const handleMouseMove = (e: MouseEvent) => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        
        section.style.transform = `
          perspective(1200px) 
          rotateX(${y * 3}deg) 
          rotateY(${x * 3}deg)
          translateZ(15px)
          scale(1.02)
        `;
      };

      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
      section.addEventListener('mousemove', handleMouseMove);

      return () => {
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
        section.removeEventListener('mousemove', handleMouseMove);
      };
    });

    // Add 3D effects to cards and buttons
    const cards = document.querySelectorAll('[class*="card"], [class*="project"], [class*="service"]');
    
    cards.forEach(card => {
      const handleCardHover = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        
        (card as HTMLElement).style.transform = `
          perspective(800px) 
          rotateX(${y * 10}deg) 
          rotateY(${x * 10}deg)
          translateZ(20px)
          scale(1.05)
        `;
        (card as HTMLElement).style.transformStyle = 'preserve-3d';
        (card as HTMLElement).style.transition = 'transform 0.2s ease-out';
      };

      const handleCardLeave = () => {
        (card as HTMLElement).style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
      };

      card.addEventListener('mouseenter', handleCardHover);
      card.addEventListener('mouseleave', handleCardLeave);
      card.addEventListener('mousemove', handleCardHover);
    });

    // Add 3D effects to buttons
    const buttons = document.querySelectorAll('button, a[class*="button"]');
    
    buttons.forEach(button => {
      const handleButtonHover = () => {
        (button as HTMLElement).style.transform = `
          perspective(600px) 
          rotateX(5deg) 
          rotateY(5deg)
          translateZ(15px)
          scale(1.1)
        `;
        (button as HTMLElement).style.transformStyle = 'preserve-3d';
        (button as HTMLElement).style.transition = 'transform 0.2s ease-out';
        (button as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
      };

      const handleButtonLeave = () => {
        (button as HTMLElement).style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
        (button as HTMLElement).style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      };

      button.addEventListener('mouseenter', handleButtonHover);
      button.addEventListener('mouseleave', handleButtonLeave);
    });

  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Global 3D background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `
                translateZ(${Math.random() * 300}px) 
                rotateX(${mousePosition.x * 20}deg) 
                rotateY(${mousePosition.y * 20}deg)
              `,
              animationDelay: `${Math.random() * 3}s`,
              transformStyle: 'preserve-3d'
            }}
          />
        ))}
      </div>

      {/* Floating 3D geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-green-400/5 to-blue-400/5 rounded-3xl blur-xl"
           style={{
             transform: `
               perspective(1000px) 
               rotateX(${mousePosition.y * 30}deg) 
               rotateY(${mousePosition.x * 30}deg)
               translateZ(100px)
             `,
             transformStyle: 'preserve-3d'
           }} />
      
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-xl"
           style={{
             transform: `
               perspective(1000px) 
               rotateX(${mousePosition.y * -25}deg) 
               rotateY(${mousePosition.x * -25}deg)
               translateZ(80px)
             `,
             transformStyle: 'preserve-3d'
           }} />
    </div>
  );
};
