
export const Skills = () => {
  const skillCategories = [
    {
      title: "BI Tools",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "SAP", level: 75 },
        { name: "SAS", level: 70 },
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "SQL", level: 90 },
        { name: "Advanced Excel", level: 95 },
        { name: "Python", level: 80 },
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
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-green-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900/50 rounded-lg p-8 border border-green-400/20">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-green-400 font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Power BI", "Tableau", "SQL", "Python", "Excel", "SAP", "SAS"].map((tool, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 px-6 py-3 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-200 hover:scale-105"
              >
                <span className="text-green-400 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
