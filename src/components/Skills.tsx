export const Skills = () => {
  const skillCategories = [
    {
      title: "BI Tools",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "SQL", level: 90 },
        { name: "Advanced Excel", level: 95 },
        { name: "Python", level: 80 },
        { name: "R", level: 75 },
        { name: "Data Modeling", level: 85 },
      ]
    },
    {
      title: "Analytics",
      skills: [
        { name: "Data Visualization", level: 92 },
        { name: "Dashboarding", level: 88 },
        { name: "Data Cleaning", level: 85 },
        { name: "KPI Analysis", level: 90 },
      ]
    },
    {
      title: "Data Management & Statistical Analysis",
      skills: [
        { name: "SAP", level: 75 },
        { name: "SAS", level: 70 },
        { name: "Statistical Modeling", level: 78 },
        { name: "Data Warehousing", level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent mb-6">
            Technical <span className="text-green-400">Skills</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across data analytics, visualization, and business intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20 shadow-2xl hover:border-green-400/50 transition-all duration-500 hover:scale-105 h-full">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-green-400 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-green-400 leading-tight">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                        <span className="text-green-400 font-bold text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-700/50 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tool Icons */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {["Power BI", "Tableau", "SQL", "Python", "R", "Excel", "SAP", "SAS", "Statistical Analysis"].map((tool, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-green-400/20 hover:border-green-400/60 transition-all duration-300 hover:scale-110 shadow-lg">
                  <span className="text-green-400 font-semibold">{tool}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
