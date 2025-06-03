import mainPic from '@/assets/projects/vorex/main-pic.png';
import localFlow from '@/assets/projects/vorex/local-flow.png';
import intercityFlow from '@/assets/projects/vorex/intercity-flow.png';

// Features
import aiSupport from '@/assets/projects/vorex/features/ai-support.png';
import sellerApi from '@/assets/projects/vorex/features/seller-api.png';
import gpsTracking from '@/assets/projects/vorex/features/gps-tracking.png';
import vehicleMgmt from '@/assets/projects/vorex/features/vehicle-mgmt.png';
import analytics from '@/assets/projects/vorex/features/analytics.png';
import multiPlatform from '@/assets/projects/vorex/features/multi-platform.png';

// Platforms
import sellerPlatform from '@/assets/projects/vorex/platforms/seller-platform.png';
import driverApp from '@/assets/projects/vorex/platforms/driver-app.png';
import warehouseMgmt from '@/assets/projects/vorex/platforms/warehouse-mgmt.png';
import adminDashboard from '@/assets/projects/vorex/platforms/admin-dashboard.png';

// Screenshots
import sellerDashboard from '@/assets/projects/vorex/screenshots/seller-dashboard.png';
import driverInterface from '@/assets/projects/vorex/screenshots/driver-interface.png';
import trackingSystem from '@/assets/projects/vorex/screenshots/tracking-system.png';
import warehousePanel from '@/assets/projects/vorex/screenshots/warehouse-panel.png';
import chatbot from '@/assets/projects/vorex/screenshots/chatbot.png';
import routeOptimization from '@/assets/projects/vorex/screenshots/route-optimization.png';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  image: string;
  github: string;
  live?: string;
  techStack: string[];
  overview: {
    description: string;
    flows: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  features: {
    title: string;
    description: string;
    image: string;
  }[];
  platforms: {
    name: string;
    description: string;
    features: string[];
    image: string;
  }[];
  screenshots: {
    title: string;
    description: string;
    image: string;
    type: 'web' | 'mobile';
  }[];
  architecture: {
    title: string;
    description: string;
    components: string[];
  };
  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];
  quotes: {
    text: string;
    author: string;
    role: string;
  }[];
  devops: {
    title: string;
    description: string;
    architecture: {
      title: string;
      description: string;
      components: {
        name: string;
        description: string;
        features: string[];
      }[];
    };
    deployment: {
      title: string;
      description: string;
      features: string[];
    };
  };
}

export const projects: Project[] = [
  {
    id: "vorex",
    title: "Vorex",
    subtitle: "Comprehensive Multi-Platform Logistics Ecosystem",
    date: "March 2024",
    readTime: "12 min read",
    image: mainPic,
    github: "https://github.com/yourusername/vorex",
    techStack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "JWT", "OAuth2", "Docker", "React Native", "Tailwind CSS"],
    
    overview: {
      description: `Vorex revolutionizes logistics and e-commerce operations by creating a unified ecosystem that seamlessly connects sellers, drivers, and warehouse managers. This comprehensive platform addresses the fragmented nature of traditional logistics systems through innovative technology and intelligent automation.

      The platform transforms how businesses handle their entire supply chain, from initial order placement to final delivery. By integrating artificial intelligence, real-time tracking, and comprehensive analytics, Vorex enables organizations to optimize their operations while providing exceptional customer experiences.

      What began as a solution to address logistics inefficiencies in the Tunisian market has evolved into a scalable platform that demonstrates the power of modern web technologies in transforming traditional industries. The system's modular architecture and comprehensive feature set make it adaptable to various market conditions and business requirements.`,
      flows: [
        {
          title: "Local Delivery Flow",
          description: "Optimized delivery process for same-city orders, ensuring quick and efficient local deliveries with real-time tracking and automated route optimization.",
          image: localFlow
        },
        {
          title: "Intercity Delivery Flow",
          description: "Comprehensive logistics network for cross-city deliveries, featuring warehouse integration, multi-leg transportation, and advanced tracking capabilities.",
          image: intercityFlow
        }
      ]
    },
    
    features: [
      {
        title: "AI-Powered Customer Support",
        description: "Intelligent chatbot system that provides 24/7 customer assistance, answers complex queries about orders and deliveries, and offers personalized recommendations based on user behavior patterns.",
        image: aiSupport
      },
      {
        title: "Seller API Integration",
        description: "Comprehensive REST API that allows sellers to integrate Vorex delivery services directly into their existing websites and systems using secure token-based authentication.",
        image: sellerApi
      },
      {
        title: "Real-Time GPS Tracking",
        description: "Advanced mapping system with live location tracking for drivers, optimized route suggestions, and real-time delivery status updates for all stakeholders.",
        image: gpsTracking
      },
      {
        title: "Smart Vehicle Management",
        description: "Comprehensive vehicle tracking system that monitors maintenance schedules, tracks performance metrics, and manages insurance information to ensure optimal fleet operations.",
        image: vehicleMgmt
      },
      {
        title: "Advanced Analytics Dashboard",
        description: "Sophisticated data visualization and reporting system that provides actionable insights into delivery performance, customer satisfaction, and operational efficiency.",
        image: analytics
      },
      {
        title: "Multi-Platform Architecture",
        description: "Seamlessly integrated web and mobile applications that provide role-specific interfaces for sellers, drivers, warehouse managers, and administrators.",
        image: multiPlatform
      }
    ],

    platforms: [
      {
        name: "Seller Platform",
        description: "Comprehensive e-commerce management system that empowers sellers with powerful tools for managing their online business operations.",
        features: [
          "Real-time sales analytics and performance metrics",
          "Advanced product management with inventory tracking",
          "Automated order processing and status updates",
          "Financial reporting and earnings management",
          "AI-powered business insights and recommendations",
          "API integration for external website connectivity"
        ],
        image: sellerPlatform
      },
      {
        name: "Driver Mobile App",
        description: "Native mobile application designed specifically for delivery drivers, optimizing their daily operations and earnings potential.",
        features: [
          "GPS navigation with optimized route planning",
          "Real-time delivery tracking and status updates",
          "Earnings management and payment history",
          "Vehicle maintenance tracking and reminders",
          "Performance analytics and customer ratings",
          "Offline capability for remote areas"
        ],
        image: driverApp
      },
      {
        name: "Warehouse Management System",
        description: "Sophisticated inventory and operations management platform that streamlines warehouse operations and staff coordination.",
        features: [
          "Advanced inventory tracking and management",
          "Automated order processing workflows",
          "Staff scheduling and performance monitoring",
          "Warehouse section and layout optimization",
          "Inter-warehouse transfer coordination",
          "Maintenance and equipment tracking"
        ],
        image: warehouseMgmt
      },
      {
        name: "Admin Dashboard",
        description: "Comprehensive administrative interface providing complete oversight and control over all platform operations and users.",
        features: [
          "Multi-role user management and authentication",
          "Platform-wide monitoring and analytics",
          "Financial oversight and payment processing",
          "Content management and system configuration",
          "Support tools and dispute resolution",
          "Security monitoring and audit logging"
        ],
        image: adminDashboard
      }
    ],

    screenshots: [
      {
        title: "Seller Dashboard Overview",
        description: "Comprehensive analytics dashboard showing sales performance, order status, and key business metrics in an intuitive interface.",
        image: sellerDashboard,
        type: "web"
      },
      {
        title: "Driver Mobile Interface",
        description: "Native mobile application interface optimized for drivers, featuring GPS navigation, delivery tracking, and earnings management.",
        image: driverInterface,
        type: "mobile"
      },
      {
        title: "Real-Time Tracking System",
        description: "Advanced mapping interface showing live delivery locations, optimized routes, and real-time status updates for all stakeholders.",
        image: trackingSystem,
        type: "web"
      },
      {
        title: "Warehouse Operations Panel",
        description: "Comprehensive warehouse management interface displaying inventory levels, order processing status, and staff coordination tools.",
        image: warehousePanel,
        type: "web"
      },
      {
        title: "AI Chatbot Integration",
        description: "Intelligent customer support system providing 24/7 assistance with natural language processing capabilities.",
        image: chatbot,
        type: "web"
      },
      {
        title: "Mobile Route Optimization",
        description: "Advanced GPS navigation system with real-time route optimization and turn-by-turn directions for delivery drivers.",
        image: routeOptimization,
        type: "mobile"
      }
    ],

    architecture: {
      title: "Scalable System Architecture",
      description: "Vorex employs a modern, microservices-based architecture designed for scalability, reliability, and maintainability. The system separates concerns effectively while maintaining seamless integration between components.",
      components: [
        "React-based frontend with TypeScript for type safety",
        "NestJS backend with modular architecture",
        "PostgreSQL database with Prisma ORM",
        "JWT and OAuth2 authentication systems",
        "Real-time WebSocket connections for live updates",
        "RESTful API design with comprehensive documentation",
        "Docker containerization for consistent deployment",
        "Responsive design optimized for all devices"
      ]
    },

    challenges: [
      {
        title: "Multi-Platform Data Synchronization",
        problem: "Ensuring real-time data consistency across web platforms, mobile applications, and multiple user roles while maintaining optimal performance and preventing data conflicts.",
        solution: "Implemented a sophisticated event-driven architecture with WebSocket connections and optimized database queries. Created a centralized state management system that efficiently handles concurrent updates across all platforms while maintaining data integrity through transactional operations."
      },
      {
        title: "Complex Role-Based Access Control",
        problem: "Managing granular permissions across four distinct user types (sellers, drivers, warehouse managers, administrators) with different security clearance levels and operational requirements.",
        solution: "Developed a flexible JWT-based authentication system combined with OAuth2 integration. Created a hierarchical permission structure that dynamically adjusts interface elements and API access based on user roles and security clearance levels."
      },
      {
        title: "Real-Time GPS Integration",
        problem: "Implementing accurate real-time location tracking for drivers while optimizing battery usage, handling network connectivity issues, and providing reliable navigation in various geographic conditions.",
        solution: "Built a robust GPS tracking system with intelligent location caching, offline capability, and optimized update intervals. Integrated with mapping services to provide turn-by-turn navigation while implementing fallback mechanisms for poor connectivity areas."
      },
      {
        title: "Scalable API Architecture",
        problem: "Creating a comprehensive API system that allows sellers to integrate delivery services into their existing websites while maintaining security, rate limiting, and comprehensive documentation.",
        solution: "Designed a RESTful API with token-based authentication, comprehensive rate limiting, and detailed documentation. Implemented API key management with usage analytics and created SDK libraries to simplify integration for third-party developers."
      }
    ],

    quotes: [
      {
        text: "Vorex has transformed our logistics operations completely. The AI-powered insights help us make better decisions, and the real-time tracking gives our customers the transparency they demand.",
        author: "Sarah Chen",
        role: "Operations Manager"
      },
      {
        text: "The seller API integration was seamless. We were able to connect our existing e-commerce platform to Vorex's delivery network in just a few hours.",
        author: "Ahmed Hassan",
        role: "Technical Lead"
      },
      {
        text: "As a driver, the mobile app makes my job so much easier. The route optimization saves me hours every day, and the maintenance tracking helps me keep my vehicle in perfect condition.",
        author: "Maria Rodriguez",
        role: "Delivery Driver"
      }
    ],

    devops: {
      title: "Enterprise-Grade DevOps Infrastructure",
      description: "A robust, scalable deployment architecture leveraging Docker, GitHub Actions, and Caddy for seamless CI/CD and production-grade hosting.",
      architecture: {
        title: "Microservices Architecture",
        description: "The system is built on a modern microservices architecture with containerized services, automated deployments, and intelligent load balancing.",
        components: [
          {
            name: "Frontend Service",
            description: "React-based web application served through Nginx",
            features: [
              "Nginx server running on port 8080",
              "Optimized static asset delivery",
              "Built-in caching mechanisms",
              "Compression and security headers"
            ]
          },
          {
            name: "Backend Service",
            description: "NestJS API with PostgreSQL database",
            features: [
              "Containerized Node.js application",
              "PostgreSQL with persistent storage",
              "Health checks and auto-recovery",
              "Environment-based configuration"
            ]
          },
          {
            name: "Reverse Proxy",
            description: "Caddy server for intelligent routing and SSL",
            features: [
              "Automatic SSL certificate management",
              "Subdomain-based routing",
              "HTTP/2 and HTTP/3 support",
              "Zero-downtime deployments"
            ]
          }
        ]
      },
      deployment: {
        title: "Automated Deployment Pipeline",
        description: "GitHub Actions-powered CI/CD pipeline ensuring reliable and consistent deployments.",
        features: [
          "Self-hosted runner on Azure VM",
          "Automated Docker image builds",
          "Zero-downtime deployments",
          "Environment variable management",
          "Database migration handling",
          "Health check verification",
          "Automatic rollback on failure",
          "Resource cleanup and optimization"
        ]
      }
    }
  }
];