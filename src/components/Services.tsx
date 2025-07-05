
import { BarChart3, Monitor, Database, Users } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis & Insights",
      description: "Transform raw data into actionable insights that drive business decisions and improve KPIs.",
      features: [
        "Statistical Analysis",
        "Data Mining",
        "Trend Analysis",
        "Performance Metrics"
      ]
    },
    {
      icon: Monitor,
      title: "Dashboard Creation",
      description: "Design and develop interactive dashboards using Power BI, Tableau, and advanced Excel.",
      features: [
        "Interactive Visualizations",
        "Real-time Reporting",
        "Custom KPI Tracking",
        "Mobile-Responsive Design"
      ]
    },
    {
      icon: Database,
      title: "Business Intelligence",
      description: "Comprehensive BI solutions including data modeling, ETL processes, and reporting systems.",
      features: [
        "Data Warehousing",
        "ETL Development",
        "Report Automation",
        "Performance Optimization"
      ]
    },
    {
      icon: Users,
      title: "Consulting & Strategy",
      description: "Strategic consulting to help businesses leverage data for competitive advantage.",
      features: [
        "Data Strategy Planning",
        "Process Optimization",
        "Tool Selection",
        "Team Training"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm relative overflow-hidden perspective-1500">
      {/* Enhanced background decorative elements with 3D effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-400/5 rounded-full blur-3xl float-gentle"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl pulse-3d"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent mb-6 hover-lift transform-3d">
            My <span className="text-green-400 pulse-3d">Services</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full mb-8 hover-lift transform-3d"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hover-lift">
            Comprehensive data analytics solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative perspective-1200"
              >
                <div className="card-3d bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-3xl p-10 border border-green-400/20 shadow-2xl hover:border-green-400/60 h-full relative overflow-hidden">
                  {/* Enhanced 3D Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform-3d"></div>
                  
                  {/* Enhanced Icon with 3D effects */}
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-500/30 rounded-2xl flex items-center justify-center mb-6 hover-lift transform-3d pulse-3d relative z-10">
                    <IconComponent className="w-8 h-8 text-green-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10 hover-lift">{service.title}</h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg relative z-10 hover-lift">
                    {service.description}
                  </p>

                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold text-green-400 mb-6 hover-lift">What's Included:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-gray-300 hover-lift">
                          <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-400/40 transition-colors duration-300 hover-lift transform-3d">
                            <div className="w-3 h-3 bg-green-400 rounded-full pulse-3d"></div>
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="card-3d bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-3xl p-12 border border-green-400/20 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-600/5 rounded-3xl opacity-50"></div>
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10 hover-lift">Ready to Transform Your Data?</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed relative z-10 hover-lift">
              Let's discuss your project requirements and unlock the power of your data together.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative button-3d bg-gradient-to-r from-green-400 to-green-600 text-gray-900 px-10 py-4 rounded-2xl font-bold hover:from-green-300 hover:to-green-500 transition-all duration-300 shadow-2xl shadow-green-400/30 z-10"
            >
              Get Started Today
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-3d"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
