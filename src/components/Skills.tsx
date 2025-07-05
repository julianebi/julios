
import { Database, BarChart3, Code2, Brain, FileSpreadsheet, TrendingUp, Settings, Calculator } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';

export const Skills = () => {
  const skillCategories = [
    {
      title: "BI Tools",
      skills: [
        { name: "Power BI", level: 90, icon: BarChart3 },
        { name: "Tableau", level: 85, icon: TrendingUp },
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "SQL", level: 90, icon: Database },
        { name: "Advanced Excel", level: 95, icon: FileSpreadsheet },
        { name: "Python", level: 80, icon: Code2 },
        { name: "R", level: 75, icon: Calculator },
        { name: "Data Modeling", level: 85, icon: Brain },
      ]
    },
    {
      title: "Analytics",
      skills: [
        { name: "Data Visualization", level: 92, icon: BarChart3 },
        { name: "Dashboarding", level: 88, icon: TrendingUp },
        { name: "Data Cleaning", level: 85, icon: Settings },
        { name: "KPI Analysis", level: 90, icon: BarChart3 },
      ]
    },
    {
      title: "Data Management & Statistical Analysis",
      skills: [
        { name: "SAP", level: 75, icon: Settings },
        { name: "SAS", level: 70, icon: Calculator },
        { name: "Statistical Modeling", level: 78, icon: Brain },
        { name: "Data Warehousing", level: 82, icon: Database },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm relative overflow-hidden perspective-1500">
      {/* 3D Parallax Background */}
      <ParallaxBackground intensity={0.8} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent mb-6 hover-lift transform-3d"
              style={{
                transform: 'rotateX(2deg)',
                transformStyle: 'preserve-3d',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }}>
            Technical <span className="text-green-400">Skills</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full mb-6 hover-lift"
               style={{ transform: 'rotateX(45deg)', transformStyle: 'preserve-3d' }}></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hover-lift">
            Comprehensive expertise across data analytics, visualization, and business intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group perspective-1200">
              <div className="skill-card-3d bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20 shadow-2xl hover:border-green-400/60 h-full relative overflow-hidden">
                {/* 3D Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform-3d"></div>
                
                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-lift transform-3d pulse-3d">
                    <div className="w-8 h-8 bg-green-400 rounded-lg transform-3d" 
                         style={{ transform: 'translateZ(4px)', transformStyle: 'preserve-3d' }}></div>
                  </div>
                  <h3 className="text-xl font-bold text-green-400 leading-tight transform-3d">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skillIndex} className="space-y-3 hover-lift">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-green-400/20 rounded-lg flex items-center justify-center hover:bg-green-400/40 transition-all duration-300 hover-lift transform-3d">
                              <IconComponent className="w-4 h-4 text-green-400" />
                            </div>
                            <span className="text-white font-medium text-sm">{skill.name}</span>
                          </div>
                          <span className="text-green-400 font-bold text-sm pulse-3d">{skill.level}%</span>
                        </div>
                        
                        <div className="relative perspective-1000">
                          <div className="w-full bg-gray-700/50 rounded-full h-2 transform-3d" 
                               style={{ transform: 'rotateX(5deg)', transformStyle: 'preserve-3d' }}>
                            <div 
                              className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out hover-lift relative overflow-hidden transform-3d"
                              style={{ 
                                width: `${skill.level}%`,
                                transformStyle: 'preserve-3d'
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-green-300/50 to-green-500/50 rounded-full transform-3d" 
                                   style={{ transform: 'translateZ(2px)' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Tool Icons with 3D effects */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12 hover-lift transform-3d"
              style={{ transform: 'rotateX(2deg)', transformStyle: 'preserve-3d' }}>Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {["Power BI", "Tableau", "SQL", "Python", "R", "Excel", "SAP", "SAS", "Statistical Analysis"].map((tool, index) => (
              <div 
                key={index}
                className="group relative perspective-1000"
              >
                <div className="card-3d bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-green-400/20 hover:border-green-400/60 shadow-lg relative overflow-hidden">
                  <span className="text-green-400 font-semibold relative z-10">{tool}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform-3d"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-3d" 
                       style={{ transform: 'translateZ(-1px)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
