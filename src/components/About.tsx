
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export const About = () => {
  const certifications = [
    {
      name: "Data Analyst Certification",
      provider: "Excel R",
      image: "https://i.postimg.cc/jjrs7r5h/Data-Analyst-certification.png",
      featured: true
    },
    {
      name: "AI Variant Data Analyst Internship", 
      provider: "Excel R",
      image: "https://i.postimg.cc/MZsKr4PW/Data-Analyst-internship-certificate.png",
      featured: true
    },
    {
      name: "Data Visualization: Empowering Business with Insights",
      provider: "Tata (Forage)"
    },
    {
      name: "Power BI Virtual Internship",
      provider: "PwC (Forage)"
    },
    {
      name: "Data Analytics & Visualization Simulation",
      provider: "Accenture (Forage)"
    },
    {
      name: "Excel Skills Job Simulation",
      provider: "JPMorgan Chase (Forage)"
    },
    {
      name: "What is Generative AI",
      provider: "LinkedIn Learning"
    },
    {
      name: "Data Science Virtual Internship",
      provider: "ENCRYPTIX"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent mb-6">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20 shadow-2xl">
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Driven Data Analyst with hands-on experience in BI tools (Power BI, Tableau), SQL, and Excel. 
                I specialize in transforming complex datasets into actionable insights that drive business decisions.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                My expertise lies in delivering comprehensive analytics solutions for inventory management, 
                procurement optimization, and campaign performance analysis, consistently impacting business 
                KPIs by up to <span className="text-green-400 font-semibold">40%+</span>.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                I'm skilled in transforming raw data into compelling visual narratives that empower 
                stakeholders to make informed strategic decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Data Visualization", "Business Intelligence", "KPI Optimization", "Analytics Strategy"].map((tag, index) => (
                <span key={index} className="bg-gradient-to-r from-green-400/20 to-green-500/20 text-green-300 px-6 py-3 rounded-full text-sm font-medium border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-400/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl border border-green-400/10 hover:border-green-400/30 transition-all duration-300">
                <h4 className="text-xl font-semibold text-green-400 mb-2">Bachelor of Commerce</h4>
                <p className="text-gray-300 text-lg">NES Ratnam College, Mumbai</p>
                <p className="text-green-300 font-medium mt-1">2024</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-400/20 rounded-lg">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-green-400/30 scrollbar-track-gray-800/50">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      cert.featured 
                        ? 'bg-gradient-to-r from-green-400/10 to-green-500/10 border-green-400/40 hover:border-green-400/60' 
                        : 'bg-gradient-to-r from-gray-800/40 to-gray-700/40 border-green-400/10 hover:border-green-400/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className={`font-semibold ${cert.featured ? 'text-green-300' : 'text-green-400'} mb-1`}>
                          {cert.name}
                        </h4>
                        <p className="text-gray-300 text-sm">{cert.provider}</p>
                      </div>
                      {cert.image && (
                        <a 
                          href={cert.image} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-green-400/20 rounded-lg hover:bg-green-400/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4 text-green-400" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
