
import { useState, useRef, useEffect } from 'react';
import { Database, BarChart3, Code2, Brain, FileSpreadsheet, TrendingUp, Settings, Calculator } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: any;
  description: string;
  color: string;
  marbleColor: string;
}

export const Interactive3DSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills: Skill[] = [
    { 
      name: "Power BI", 
      level: 90, 
      icon: BarChart3, 
      description: "Advanced data visualization and business intelligence reporting",
      color: "from-yellow-400 to-orange-500",
      marbleColor: "bg-gradient-to-br from-yellow-400/80 to-orange-500/80"
    },
    { 
      name: "SQL", 
      level: 90, 
      icon: Database, 
      description: "Complex database queries and data manipulation",
      color: "from-blue-400 to-blue-600",
      marbleColor: "bg-gradient-to-br from-blue-400/80 to-blue-600/80"
    },
    { 
      name: "Excel", 
      level: 95, 
      icon: FileSpreadsheet, 
      description: "Advanced formulas, pivot tables, and data analysis",
      color: "from-green-400 to-green-600",
      marbleColor: "bg-gradient-to-br from-green-400/80 to-green-600/80"
    },
    { 
      name: "Python", 
      level: 80, 
      icon: Code2, 
      description: "Data analysis, automation, and machine learning",
      color: "from-purple-400 to-purple-600",
      marbleColor: "bg-gradient-to-br from-purple-400/80 to-purple-600/80"
    },
    { 
      name: "Tableau", 
      level: 85, 
      icon: TrendingUp, 
      description: "Interactive dashboards and data storytelling",
      color: "from-cyan-400 to-cyan-600",
      marbleColor: "bg-gradient-to-br from-cyan-400/80 to-cyan-600/80"
    },
    { 
      name: "R", 
      level: 75, 
      icon: Calculator, 
      description: "Statistical analysis and data modeling",
      color: "from-red-400 to-red-600",
      marbleColor: "bg-gradient-to-br from-red-400/80 to-red-600/80"
    },
    { 
      name: "Data Modeling", 
      level: 85, 
      icon: Brain, 
      description: "Database design and data architecture",
      color: "from-pink-400 to-pink-600",
      marbleColor: "bg-gradient-to-br from-pink-400/80 to-pink-600/80"
    },
    { 
      name: "SAP", 
      level: 75, 
      icon: Settings, 
      description: "Enterprise resource planning and business processes",
      color: "from-indigo-400 to-indigo-600",
      marbleColor: "bg-gradient-to-br from-indigo-400/80 to-indigo-600/80"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" style={{ perspective: '1500px' }}>
      {/* Background 3D Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * 200}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 2}s`,
              transformStyle: 'preserve-3d'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-500"
              style={{
                transform: 'rotateX(5deg)',
                transformStyle: 'preserve-3d',
                textShadow: '0 8px 16px rgba(0,0,0,0.4)'
              }}>
            Interactive <span className="text-green-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Click on any skill marble to explore detailed information and watch them spin in 3D space
          </p>
        </div>

        {/* 3D Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isHovered = hoveredSkill === skill.name;
            const isSelected = selectedSkill?.name === skill.name;
            
            return (
              <div
                key={skill.name}
                className="relative group cursor-pointer"
                style={{ perspective: '800px' }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => handleSkillClick(skill)}
              >
                {/* 3D Marble */}
                <div
                  className={`w-32 h-32 mx-auto rounded-full ${skill.marbleColor} shadow-2xl relative overflow-hidden transition-all duration-700 border-4 border-white/20 hover:border-white/40`}
                  style={{
                    transform: `
                      rotateX(${isHovered ? 15 : 5}deg) 
                      rotateY(${isHovered ? 15 : -5}deg)
                      rotateZ(${isSelected ? 360 : 0}deg)
                      scale(${isHovered ? 1.1 : 1})
                      translateZ(${isHovered ? 20 : 0}px)
                    `,
                    transformStyle: 'preserve-3d',
                    animation: isSelected ? 'spin 2s linear infinite' : 'none'
                  }}
                >
                  {/* Marble shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full" />
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/40 rounded-full blur-md" />
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center h-full">
                    <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                  
                  {/* Skill level ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="4"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeDasharray={`${skill.level * 2.89} 289`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                  </div>
                </div>

                {/* Skill name and level */}
                <div className="text-center mt-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <div className="text-green-400 font-semibold text-lg">
                    {skill.level}%
                  </div>
                </div>

                {/* Floating info tooltip */}
                {isHovered && (
                  <div
                    className="absolute bg-gray-800/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl border border-green-400/30 z-50 w-64 pointer-events-none"
                    style={{
                      left: mousePosition.x > window.innerWidth / 2 ? -280 : 40,
                      top: -60,
                      transform: 'translateZ(50px)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <p className="text-sm">{skill.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed skill information panel */}
        {selectedSkill && (
          <div 
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-green-400/30 shadow-2xl transition-all duration-500"
            style={{
              transform: 'rotateX(2deg) translateZ(20px)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className={`w-20 h-20 rounded-full ${selectedSkill.marbleColor} flex items-center justify-center shadow-lg`}>
                <selectedSkill.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedSkill.name}</h3>
                <div className="text-green-400 text-xl font-semibold">Proficiency: {selectedSkill.level}%</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {selectedSkill.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                <div className="text-green-400 text-2xl font-bold">Expert</div>
                <div className="text-gray-300 text-sm">Level</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                <div className="text-green-400 text-2xl font-bold">5+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                <div className="text-green-400 text-2xl font-bold">20+</div>
                <div className="text-gray-300 text-sm">Projects</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(360deg); }
        }
      `}</style>
    </div>
  );
};
