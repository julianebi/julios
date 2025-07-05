
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { ParallaxBackground } from "./ParallaxBackground";
import { Floating3DCards } from "./Floating3DCards";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    window.open("https://postimg.cc/rdbRVh5j", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1500">
      {/* Enhanced Background gradient with 3D perspective */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/30"></div>
      
      {/* 3D Parallax Background */}
      <ParallaxBackground intensity={1.2} />
      
      {/* Floating 3D Cards */}
      <Floating3DCards />
      
      {/* Enhanced animated background elements with 3D transforms */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse float-gentle" 
             style={{ transform: 'rotateX(45deg) rotateY(45deg)', transformStyle: 'preserve-3d' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000 pulse-3d"
             style={{ transform: 'rotateX(-30deg) rotateY(-30deg)', transformStyle: 'preserve-3d' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-500 rotate-y-slow"
             style={{ transform: 'translate(-50%, -50%) rotateX(15deg) rotateZ(15deg)', transformStyle: 'preserve-3d' }}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10 animate-fade-in">
          {/* Enhanced Profile Image with advanced 3D effect */}
          <div className="flex justify-center">
            <div className="relative group perspective-1500">
              <div className="w-52 h-52 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full p-1.5 shadow-2xl shadow-green-400/30 hover:shadow-green-400/60 transition-all duration-500 hover-lift transform-3d">
                <div className="w-full h-full rounded-full overflow-hidden hover-lift transition-transform duration-300"
                     style={{ transformStyle: 'preserve-3d' }}>
                  <img 
                    src="https://postimg.cc/svNkJqCs" 
                    alt="Julian Ebinesar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 pulse-3d"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce hover-lift transform-3d"
                   style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                <Sparkles className="w-4 h-4 text-gray-900" />
              </div>
            </div>
          </div>

          {/* Enhanced Title with advanced 3D text effect */}
          <div className="space-y-4 perspective-1200">
            <h1 className="text-6xl md:text-8xl font-black leading-tight hover-lift transform-3d"
                style={{ 
                  transform: 'rotateX(2deg)',
                  transformStyle: 'preserve-3d',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                }}>
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Julian </span>
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent pulse-3d">Ebinesar</span>
            </h1>
            
            <p className="text-2xl md:text-4xl font-light bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent hover-lift transform-3d"
               style={{ 
                 transform: 'rotateX(1deg)',
                 transformStyle: 'preserve-3d'
               }}>
              Transforming Data Into Decisions
            </p>
          </div>
          
          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed hover-lift">
              Driven Data Analyst with experience in BI tools, SQL, and Excel.
            </p>
            <p className="text-lg md:text-xl text-green-300 font-medium hover-lift pulse-3d">
              Delivered insights that improved KPIs by up to <span className="text-green-400 font-bold text-2xl">40%</span>
            </p>
          </div>

          {/* Enhanced Action Buttons with advanced 3D effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 perspective-1000">
            <button
              onClick={scrollToContact}
              className="group relative button-3d bg-gradient-to-r from-green-400 to-green-600 text-gray-900 px-10 py-4 rounded-2xl font-bold hover:from-green-300 hover:to-green-500 transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-green-400/30 hover:shadow-green-400/60"
            >
              Get In Touch 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-3d"></div>
            </button>
            
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative button-3d border-2 border-green-400 text-green-400 px-10 py-4 rounded-2xl font-bold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-green-400/20"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Learn More
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-3d"></div>
            </a>

            <button
              onClick={downloadResume}
              className="group relative button-3d bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-2 border-green-400/30 text-green-400 px-10 py-4 rounded-2xl font-bold hover:bg-green-400 hover:text-gray-900 hover:border-green-400 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-green-400/20"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Download Resume
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-3d"></div>
            </button>
          </div>

          {/* Enhanced Stats with advanced 3D cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto perspective-1200">
            {[
              { number: "40%+", label: "KPI Improvement" },
              { number: "30%", label: "Order Accuracy" },
              { number: "25%", label: "Stockout Reduction" },
              { number: "20+", label: "Vendor Relations" }
            ].map((stat, index) => (
              <div key={index} 
                   className="card-3d bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20 hover:border-green-400/50 shadow-lg hover:shadow-xl relative overflow-hidden">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2 pulse-3d">{stat.number}</div>
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-600/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 transform-3d"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator with advanced 3D effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-green-400 rounded-full flex justify-center bg-gradient-to-b from-transparent to-green-400/10 hover-lift transform-3d"
             style={{
               transform: 'rotateX(10deg)',
               transformStyle: 'preserve-3d'
             }}>
          <div className="w-1.5 h-6 bg-gradient-to-b from-green-400 to-green-600 rounded-full mt-3 animate-pulse pulse-3d"></div>
        </div>
      </div>
    </section>
  );
};
