import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "./ui/button";
import portfolio from "../../public/favicon.ico";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  liveDemo?: string;
  github: string;
  status: "Completed" | "In Development";
  image?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing my projects and skills with interactive elements and SEO optimization. Features smooth scrolling, project modals, and modern design principles.",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Responsive design across all devices",
        "Interactive elements and smooth scrolling",
        "SEO optimized for better visibility",
        "Project showcase with modal views",
      ],
      liveDemo: "https://portfolio-demo.netlify.app",
      github: "https://github.com/vaibhav-gupta/portfolio",
      status: "Completed",
      // image: my,
    },
    {
      title: "URL Shortener Web App",
      description:
        "A full-stack web application that allows users to generate short, shareable URLs. Built with modern web technologies and deployed on Render for reliable hosting.",
      techStack: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js"],
      features: [
        "Generate short URLs from long links",
        "Responsive frontend with user feedback",
        "Full-stack architecture",
        "Cloud deployment on Render",
      ],
      liveDemo: "https://url-shortner-22b4.onrender.com/",
      github: "https://github.com/vaibhav-gupta/url-shortener",
      status: "Completed",
      // image: portfolio,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Currently developing a modern e-commerce platform with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "User authentication and authorization",
        "Dynamic product catalog",
        "Shopping cart functionality",
        "Payment gateway integration",
      ],
      github: "https://github.com/vaibhav-gupta/ecommerce-platform",
      status: "In Development",
      // image: "/api/placeholder/400/300",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that demonstrate my skills and passion for
            web development
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-project group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <Globe className="h-16 w-16 text-primary/50" />
                  </div>
                )}

                {/* Status Badge */}
                <div
                  className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${project.status === "Completed"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs font-medium rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveDemo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-dark"
                      asChild
                    >
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className={`border-primary text-primary hover:bg-primary hover:text-primary-foreground ${!project.liveDemo ? "flex-1" : ""
                      }`}
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects and
            contributions.
          </p>
          <Button className="btn-outline-hero" asChild>
            <a
              href="https://github.com/vaibhav-gupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
