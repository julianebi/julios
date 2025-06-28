
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Driven Data Analyst with hands-on experience in BI tools (Power BI, Tableau), SQL, and Excel. 
              I specialize in transforming complex datasets into actionable insights that drive business decisions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise lies in delivering comprehensive analytics solutions for inventory management, 
              procurement optimization, and campaign performance analysis, consistently impacting business 
              KPIs by up to 40%+.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm skilled in transforming raw data into compelling visual narratives that empower 
              stakeholders to make informed strategic decisions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                Data Visualization
              </span>
              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                Business Intelligence
              </span>
              <span className="bg-green-400/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                KPI Optimization
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-green-400/20">
                <h4 className="text-lg font-semibold text-green-400">MCA (Pursuing)</h4>
                <p className="text-gray-300">IDOL, University of Mumbai</p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-green-400/20">
                <h4 className="text-lg font-semibold text-green-400">Bachelor of Commerce (2024)</h4>
                <p className="text-gray-300">NES Ratnam College, Mumbai</p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-green-400/20">
                <h4 className="text-lg font-semibold text-green-400">12th & 10th</h4>
                <p className="text-gray-300">Maharashtra State Board</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
