export interface Project {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  github: string;
  live?: string;
  techStack: string[];
  overview: string;
  features: string[];
  metrics: {
    [key: string]: string;
  };
  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "vorex",
    title: "Vorex",
    date: "March 2024",
    readTime: "10 min read",
    image: "https://i.ibb.co/TMbtfFxn/Screenshot-2025-05-30-110220.png",
    github: "https://github.com/yourusername/vorex",
    live: "https://vorex.vercel.app",
    techStack: ["React", "NestJS", "PostgreSQL", "Redis", "Socket.IO", "Docker"],
    overview: `Vorex is a revolutionary logistics platform that connects sellers, drivers, and warehouses in a seamless ecosystem. Built with modern technologies and a focus on scalability, it provides real-time tracking, AI-powered route optimization, and automated warehouse management.

    The platform handles complex logistics operations with ease, from order management to delivery tracking. The AI integration helps optimize routes, reduce delivery times, and minimize operational costs.

    What started as a simple delivery tracking system evolved into a comprehensive logistics solution that's helping businesses streamline their operations and improve customer satisfaction.`,
    
    features: [
      "Real-time tracking and analytics dashboard",
      "AI-powered route optimization",
      "Multi-platform ecosystem integration",
      "Automated warehouse management",
      "Secure payment processing",
      "Scalable microservices architecture"
    ],

    metrics: {
      "Active Users": "1,200+",
      "Delivery Success Rate": "99.8%",
      "Average Response Time": "<50ms",
      "Cost Reduction": "40%"
    },

    challenges: [
      {
        title: "Real-time Data Synchronization",
        problem: "Managing real-time updates across multiple platforms while maintaining data consistency and low latency.",
        solution: "Implemented WebSocket connections with Redis pub/sub for real-time updates. Created a robust caching layer and optimized database queries for faster response times."
      },
      {
        title: "Route Optimization at Scale",
        problem: "Processing thousands of delivery routes simultaneously while considering multiple variables like traffic, weather, and delivery windows.",
        solution: "Developed a custom algorithm that combines machine learning with traditional optimization techniques. Implemented parallel processing and caching for frequently used routes."
      },
      {
        title: "System Scalability",
        problem: "Handling peak loads during high-traffic periods while maintaining system performance and reliability.",
        solution: "Designed a microservices architecture with horizontal scaling capabilities. Implemented load balancing and auto-scaling features using Docker and Kubernetes."
      }
    ]
  }
]; 