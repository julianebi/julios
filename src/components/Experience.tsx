
import { Calendar, TrendingUp, Users, FileText } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent mb-6">
            Work <span className="text-green-400">Experience</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering data-driven solutions that impact business performance
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-green-500 to-green-400/30 rounded-full"></div>
            
            <div className="relative">
              {/* Enhanced Timeline dot */}
              <div className="absolute left-6 top-12 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-gray-900 shadow-lg shadow-green-400/50 animate-pulse"></div>
              
              <div className="ml-20">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-10 border border-green-400/20 shadow-2xl hover:border-green-400/50 transition-all duration-500 hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-white">Category Associate</h3>
                      <p className="text-green-400 text-xl font-semibold">DMart Avenue Ecommerce Ltd</p>
                      <p className="text-gray-400 text-lg">Mumbai, India</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-green-400/20 to-green-500/20 text-green-300 px-6 py-3 rounded-2xl border border-green-400/30">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">Aug 2024 – Present</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-green-400/10 to-green-500/10 rounded-2xl p-6 border border-green-400/20 text-center hover:scale-105 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-green-400 mb-1">30%</div>
                      <div className="text-gray-300 text-sm">Improved Purchase Order Accuracy</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-400/10 to-green-500/10 rounded-2xl p-6 border border-green-400/20 text-center hover:scale-105 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-green-400 mb-1">25%</div>
                      <div className="text-gray-300 text-sm">Reduced Stockouts</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-400/10 to-green-500/10 rounded-2xl p-6 border border-green-400/20 text-center hover:scale-105 transition-transform duration-300">
                      <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-green-400 mb-1">20+</div>
                      <div className="text-gray-300 text-sm">Vendor Coordination</div>
                    </div>
                  </div>

                  {/* Key Achievements & Responsibilities */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-green-400 flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        </div>
                        Key Achievements
                      </h4>
                      <div className="space-y-4">
                        {[
                          "Improved purchase order accuracy by 30%",
                          "Reduced stockouts by 25%", 
                          "Coordinated with 20+ vendors effectively"
                        ].map((achievement, index) => (
                          <div key={index} className="flex items-start gap-4 group">
                            <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                            <span className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-200">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-green-400 flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
                          <FileText className="w-4 h-4 text-green-400" />
                        </div>
                        Key Responsibilities
                      </h4>
                      <div className="space-y-4">
                        {[
                          "Delivered comprehensive weekly stock reports",
                          "Maintained master files and pricing trackers",
                          "Conducted inventory optimization and analysis"
                        ].map((responsibility, index) => (
                          <div key={index} className="flex items-start gap-4 group">
                            <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                            <span className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-200">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
