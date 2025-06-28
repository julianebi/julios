
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-full p-1">
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-6xl font-bold text-green-400">
                JE
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-white">Julian </span>
            <span className="text-green-400">Ebinesar</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-green-300 font-light">
            Transforming Data Into Decisions
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Driven Data Analyst with experience in BI tools, SQL, and Excel. 
            Delivered insights that improved KPIs by up to 40%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToContact}
              className="bg-green-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-300 transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              Get In Touch <ArrowRight size={20} />
            </button>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-200 hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
