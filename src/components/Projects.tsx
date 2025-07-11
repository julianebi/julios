import { ExternalLink, Github } from "lucide-react";
import { ParallaxBackground } from "./ParallaxBackground";

export const Projects = () => {
  const projects = [
    {
      title: "Power BI Sales Analysis - Amazon Products",
      description: "Comprehensive Amazon sales performance analysis using Power BI, focusing on sales trends, product categories, and customer reviews. Features interactive dashboards with KPIs and dynamic filters for data exploration.",
      technologies: ["Power BI", "DAX", "Power Query", "Excel/CSV", "Data Visualization"],
      highlights: [
        "Sales analysis by Month and Year with YoY comparison",
        "Product category-wise sales breakdown and insights",
        "Top 5 products ranked by YTD Reviews and Sales",
        "Interactive filters for Product Category and Year",
        "Key KPIs: QTD Sales, YTD Sales, YTD Reviews"
      ],
      githubLink: "https://github.com/julianebi/Power-Bi_Sales-Analysis_Amazon-Prducts"
    },
    {
      title: "Zomato Analysis Dashboard",
      description: "Comprehensive analysis of 9,551 restaurants across 15+ countries using Power BI, DAX, and SQL. Created geospatial insights and identified critical business gaps.",
      technologies: ["Power BI", "DAX", "SQL", "Geospatial Analysis"],
      highlights: [
        "Analyzed 9,551+ restaurant records",
        "Covered 15+ countries globally",
        "Created interactive geospatial visualizations",
        "Identified key business optimization opportunities"
      ],
      githubLink: "https://github.com/julianebi/Zomato-Analysis-Power-Bi-Excel-Tableau-SQL"
    },
    {
      title: "Crowdfunding Performance Analytics",
      description: "Built comprehensive KPI dashboards using Excel with star-schema data modeling. Normalized complex datasets and visualized trends that directly influenced campaign strategy.",
      technologies: ["Excel", "Data Modeling", "KPI Dashboards", "Trend Analysis"],
      highlights: [
        "Designed star-schema data model",
        "Normalized complex crowdfunding datasets",
        "Created performance tracking dashboards",
        "Influenced strategic campaign decisions"
      ],
      githubLink: "https://github.com/julianebi/Crowdfunding-Data-analysis?tab=readme-ov-file#crowdfunding-data-analysis"
    },
    {
      title: "Encryptix Virtual Internship",
      description: "Developed end-to-end ML pipelines and modeled classification datasets using advanced Python libraries. Focused on predictive analytics and model optimization.",
      technologies: ["Python", "Machine Learning", "Data Pipeline", "Classification"],
      highlights: [
        "Built automated ML pipelines",
        "Implemented classification algorithms",
        "Optimized model performance",
        "Deployed scalable analytics solutions"
      ],
      githubLink: "https://github.com/julianebi/ENCRYPTIX-"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden" style={{ perspective: '1200px' }}>
      {/* 3D Parallax Background */}
      <ParallaxBackground intensity={0.8} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300"
              style={{
                transform: 'rotateX(2deg)',
                transformStyle: 'preserve-3d',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }}>
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto" 
               style={{ transform: 'rotateX(45deg)', transformStyle: 'preserve-3d' }}></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-lg p-8 border border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl backdrop-blur-sm group"
              style={{
                transform: `rotateX(${2 + index * 0.5}deg) rotateY(${-1 + index * 0.3}deg)`,
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center'
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">{project.title}</h3>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors hover:scale-110 transform duration-200"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" 
                           style={{ transform: 'translateZ(5px)', transformStyle: 'preserve-3d' }}></div>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-400/30 transition-colors duration-200 hover:scale-105 transform"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium hover:scale-105 transform duration-200"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
