import { useParams, Navigate, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Smartphone, Monitor, Quote } from "lucide-react";
import { ImageDialog } from "@/components/ui/image-dialog";
import { useState } from "react";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title?: string;
    description?: string;
  } | null>(null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Image Dialog */}
      <ImageDialog
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage?.image || ""}
        title={selectedImage?.title}
        description={selectedImage?.description}
      />

      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/projects')}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
            
            <div className="flex items-center gap-3">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{project.date}</span>
              <span>•</span>
              <span>{project.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="relative cursor-pointer" onClick={() => setSelectedImage({ image: project.image, title: project.title })}>
          <img 
            src={project.image} 
            alt={`${project.title} showcase`}
            className="w-full h-[330px] object-cover rounded-2xl shadow-2xl border"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 pb-16 space-y-20">
        {/* Overview */}
        <section className="bg-card rounded-2xl p-8 border">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
          <div className="max-w-4xl mx-auto">
            {project.overview.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-8 mb-6 text-muted-foreground">
                {paragraph.trim()}
              </p>
            ))}

            {/* Flow Diagrams */}
            <div className="mt-12 space-y-12">
              {project.overview.flows.map((flow, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-2xl font-bold text-center">{flow.title}</h3>
                  <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                    {flow.description}
                  </p>
                  <div 
                    className="relative rounded-xl overflow-hidden border shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage({ 
                      image: flow.image, 
                      title: flow.title,
                      description: flow.description 
                    })}
                  >
                    <img 
                      src={flow.image} 
                      alt={flow.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features & Innovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 border shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage({ 
                  image: feature.image, 
                  title: feature.title,
                  description: feature.description 
                })}
              >
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Showcase */}
        <section className="bg-card rounded-2xl p-8 border">
          <h2 className="text-3xl font-bold mb-12 text-center">Multi-Platform Ecosystem</h2>
          <div className="space-y-12">
            {project.platforms.map((platform, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => setSelectedImage({ 
                    image: platform.image, 
                    title: platform.name,
                    description: platform.description 
                  })}
                >
                  <img 
                    src={platform.image} 
                    alt={platform.name}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {platform.name}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {platform.description}
                  </p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Application Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage({ 
                  image: screenshot.image, 
                  title: screenshot.title,
                  description: screenshot.description 
                })}
              >
                <div className="relative">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    {screenshot.type === 'mobile' ? (
                      <Smartphone className="w-5 h-5 text-white bg-black/50 rounded p-1" />
                    ) : (
                      <Monitor className="w-5 h-5 text-white bg-black/50 rounded p-1" />
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="bg-card rounded-2xl p-8 border">
          <h2 className="text-3xl font-bold mb-8 text-center">{project.architecture.title}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-8 mb-8 text-gray-700 dark:text-gray-300 text-center">
              {project.architecture.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architecture.components.map((component, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg border">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Infrastructure */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">{project.devops.title}</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-4xl mx-auto">
            {project.devops.description}
          </p>

          {/* Architecture */}
          <div className="space-y-12">
            <div className="bg-card rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold mb-6">{project.devops.architecture.title}</h3>
              <p className="text-lg text-muted-foreground mb-8">
                {project.devops.architecture.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.devops.architecture.components.map((component, index) => (
                  <div key={index} className="bg-muted rounded-xl p-6 border">
                    <h4 className="text-xl font-semibold mb-3">{component.name}</h4>
                    <p className="text-muted-foreground mb-4">{component.description}</p>
                    <ul className="space-y-2">
                      {component.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Deployment Pipeline */}
            <div className="bg-card rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold mb-6">{project.devops.deployment.title}</h3>
              <p className="text-lg text-muted-foreground mb-8">
                {project.devops.deployment.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.devops.deployment.features.map((feature, index) => (
                  <div key={index} className="bg-muted rounded-lg p-4 border">
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.quotes.map((quote, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border shadow-lg">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{quote.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">{quote.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{quote.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="bg-muted rounded-2xl p-8 border">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Challenges & Solutions</h2>
          <div className="space-y-8">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {challenge.title}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      Challenge
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      {challenge.problem}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Solution
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Learning More?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore the technical implementation, dive into the codebase, or get in touch to discuss potential collaborations and technical insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-6 py-2"
            >
              <Github className="w-4 h-4" />
              View Source Code
            </a>
            {project.live && (
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-2"
              >
                <ExternalLink className="w-4 h-4" />
                Try Live Demo
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPage;