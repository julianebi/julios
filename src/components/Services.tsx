
export const Services = () => {
  const services = [
    {
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
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-green-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive data analytics solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-lg p-8 border border-green-400/20 hover:border-green-400/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-8">
            Ready to unlock the power of your data? Let's discuss your project requirements.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-green-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-300 transition-all duration-200 hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};
