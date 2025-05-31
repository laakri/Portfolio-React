
const ProjectPage = () => {

  const projectData = {
    title: "AI Task Management Platform",
    date: "March 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format",
    github: "https://github.com/yourusername/ai-task-manager",
    live: "https://ai-taskmanager.vercel.app",
    techStack: ["React", "TypeScript", "Node.js", "OpenAI API", "PostgreSQL", "Redis"],
    overview: `Building an AI-powered task management platform taught me more about scalable architecture and user experience than any tutorial ever could. What started as a simple to-do app evolved into a sophisticated system handling thousands of users with real-time collaboration.

    The core challenge was integrating AI capabilities without sacrificing performance. I implemented smart caching strategies and optimized API calls to reduce costs by 60% while maintaining sub-100ms response times.

    This project pushed me to think beyond basic CRUD operations and consider how modern applications should handle complex state management, real-time updates, and intelligent automation.`,
    
    features: [
      "AI-powered task categorization and prioritization",
      "Real-time collaboration with WebSocket integration", 
      "Smart scheduling with calendar conflict detection",
      "Advanced analytics and productivity insights",
      "Custom workflow automation rules",
      "Mobile-responsive design with offline support"
    ],

    metrics: {
      "Active Users": "2,400+",
      "Uptime": "99.9%",
      "Response Time": "<100ms",
      "User Satisfaction": "4.8/5"
    },

    challenges: [
      {
        title: "Real-time Scalability",
        problem: "Initial WebSocket implementation couldn't handle more than 500 concurrent users without significant lag.",
        solution: "Implemented Redis pub/sub with horizontal scaling. Created connection pooling and smart batching for updates."
      },
      {
        title: "AI Cost Optimization", 
        problem: "OpenAI API costs were spiraling with increased usage, threatening project sustainability.",
        solution: "Built intelligent caching layer and request batching. Added local ML models for basic categorization."
      },
      {
        title: "Complex State Management",
        problem: "Managing real-time updates while maintaining data consistency across multiple components.",
        solution: "Designed custom state management with optimistic updates and conflict resolution strategies."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{projectData.date}</span>
              <span>•</span>
              <span>{projectData.readTime}</span>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href={projectData.github}
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {projectData.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {projectData.techStack.map((tech) => (
              <span 
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <img 
          src={projectData.image} 
          alt="Project showcase"
          className="w-full h-96 object-cover rounded-lg border"
        />
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16 space-y-16">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>
          <article className="prose prose-neutral max-w-none">
            {projectData.overview.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground leading-7 mb-6">
                {paragraph.trim()}
              </p>
            ))}
          </article>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-3">
            {projectData.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground">
                <div className="w-2 h-2 bg-foreground rounded-full mt-3 flex-shrink-0"></div>
                <span className="leading-7">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Metrics */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Project Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(projectData.metrics).map(([key, value]) => (
              <div key={key} className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
                <div className="text-sm text-muted-foreground">{key}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Technical Challenges</h2>
          <div className="space-y-8">
            {projectData.challenges.map((challenge, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{challenge.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Problem
                    </h4>
                    <p className="text-foreground leading-7">{challenge.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Solution
                    </h4>
                    <p className="text-foreground leading-7">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in the technical details or want to collaborate?
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href={projectData.github}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              View Source Code
            </a>
            <a 
              href={projectData.live}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Try Live Demo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPage;