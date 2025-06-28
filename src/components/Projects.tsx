
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
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
      githubLink: null
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
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-lg p-8 border border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
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
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
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
                      className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium"
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
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
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
