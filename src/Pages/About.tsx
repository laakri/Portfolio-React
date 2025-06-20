import { useState, useEffect } from "react";
import {
  FaAngular,
  FaAws,
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSymfony,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiMysql, SiTypescript, SiNginx, SiGraphql, SiCaddy, SiPrisma, SiShadcnui } from "react-icons/si";
import {
  SiDotnet,
  SiFastify,
  SiPostgresql,
  SiBun,
  SiTailwindcss,
  SiChakraui,
} from "react-icons/si";
import profile_image from "../assets/saif.png"

const About = ({ handleImageLoaded }: { handleImageLoaded?: () => void }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState({});

  const experiences = [
    {
      title: "Web Developer - Analyst Laboratory Website",
      description: "Developed a website for an analyst laboratory. Created and maintained various personal websites.",
      period: "2023 - Present"
    },
    {
      title: "Freelance Web Developer - Galaxia.blog",
      description: "Worked on Galaxia.blog, a website that provides crypto blogs based on users' roles and payment.",
      period: "2022 - 2023"
    },
    {
      title: "Freelance Web Developer - CodeNest",
      description: "Created CodeNest, a website that provides an interface for users to do exercises online and track progress.",
      period: "2022 - 2023"
    },
    {
      title: "Freelance Web Developer - Crypto Scope",
      description: "Developed Crypto Scope, a website that provides live blockchain crypto prices with alerts.",
      period: "2022 - 2023"
    },
    {
      title: "Financial Analyst - Crypto Project (NFT)",
      description: "Worked on analyzing and understanding crypto projects related to NFTs.",
      period: "2021 - 2022"
    }
  ];

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

 

  // Intersection Observer for smooth reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "JavaScript", icon: IoLogoJavascript, color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600" },
        { name: "TypeScript", icon: SiTypescript, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
        { name: "Python", icon: FaPython, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
        { name: "Java", icon: FaJava, color: "bg-red-50 dark:bg-red-900/20 text-red-600" },
        { name: "Bun", icon: SiBun, color: "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300" },
        { name: ".NET", icon: SiDotnet, color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600" },
        { name: "CSS3", icon: FaCss3, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
        { name: "React", icon: FaReact, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-500" },
        { name: "Next", icon: FaReact, color: "bg-teal-50 dark:bg-teal-900/20 text-teal-500" },
        { name: "Angular", icon: FaAngular, color: "bg-red-50 dark:bg-red-900/20 text-red-600" },
        { name: "Tailwind", icon: SiTailwindcss, color: "bg-teal-50 dark:bg-teal-900/20 text-teal-500" },
        { name: "Chakra UI", icon: SiChakraui, color: "bg-teal-50 dark:bg-teal-900/20 text-teal-500" },
        { name: "Shadcn", icon: SiShadcnui, color: "bg-white-50 dark:bg-white-900/20 text-white-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "bg-green-50 dark:bg-green-900/20 text-green-600" },
        { name: "Fastify", icon: SiFastify, color: "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300" },
        { name: "Symfony", icon: FaSymfony, color: "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300" },
        { name: "GraphQL", icon: SiGraphql, color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600" },
        { name: "Prisma", icon: SiPrisma, color: "bg-red-50 dark:bg-red-900/20 text-red-600" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
        { name: "MongoDB", icon: SiMongodb, color: "bg-green-50 dark:bg-green-900/20 text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", icon: FaAws, color: "bg-orange-50 dark:bg-orange-900/20 text-orange-500" },
        { name: "Docker", icon: FaDocker, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-500" },
        { name: "Jenkins", icon: FaJenkins, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
        { name: "Nginx", icon: SiNginx, color: "bg-green-50 dark:bg-green-900/20 text-green-600" },
        { name: "Caddy", icon: SiCaddy, color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600" }
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-12">
      
      {/* Animated Header */}
      <div 
        id="header"
        data-animate
        className={`flex items-center gap-6 transform transition-all duration-1000 ease-out ${
          isVisible && (isVisible as any).header ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Seif Eddine Jelassi
          </h1>
            <span className="inline-block">Full Stack Developer & Digital Creator</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 transition-colors duration-300">
            Welcome! I'm Seif Eddine Jelassi, a web developer from Tunisia. I spent three years diving into multimedia and web development at ISET Nabeul, followed by a year of engineering informatics at ESPRIT Monastir. Let's embark on this digital adventure together!
          </p>
          <div className="flex items-center space-x-4 text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">glassisaif@gmail.com</span>
            <div className="flex space-x-2">
              <FaGithub className="text-lg hover:text-blue-500 hover:scale-110 cursor-pointer transition-all duration-300 transform" />
              <FaLinkedin className="text-lg hover:text-blue-600 hover:scale-110 cursor-pointer transition-all duration-300 transform" />
              <FaDownload className="text-lg hover:text-green-500 hover:scale-110 cursor-pointer transition-all duration-300 transform" />
            </div>
          </div>
          <div className="text-xs text-gray-500 transition-colors duration-300">
            <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded transition-colors duration-300">
              {currentTime.toLocaleTimeString('en-US', { timeZone: 'Africa/Tunis', hour12: false })}
            </span>
            <span className="mx-2">•</span>
            <span>Tunis, Tunisia</span>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-0.5 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden flex items-center justify-center">
                  <img
                    src={profile_image}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    onLoad={handleImageLoaded}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Education */}
      <div 
        id="education"
        data-animate
        className={`transform transition-all duration-1000 ease-out delay-200 ${
          isVisible && (isVisible as any).education ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
          Education
        </h2>
        <div className="space-y-3">
          {[
            { title: "Engineering Informatique", school: "ESPRIT Monastir", year: "2024" },
            { title: "Web Development & Multimedia", school: "ISET Nabeul", year: "2022" },
            { title: "Baccalauréat Informatique", school: "Tunisia", year: "2019" }
          ].map((edu, index) => (
            <div 
              key={index}
              className="flex justify-between items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
            >
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  {edu.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {edu.school}
                </p>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full transition-colors duration-300">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Experience */}
      <div 
        id="experience"
        data-animate
        className={`transform transition-all duration-1000 ease-out delay-300 ${
          isVisible && (isVisible as any).experience ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="border-l-2 border-gray-200 dark:border-gray-600 pl-4 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 transform hover:translate-x-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {exp.title}
                </h3>
                <span className="text-xs text-gray-500 ml-2 whitespace-nowrap bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full transition-colors duration-300">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Skills Section */}
      <div 
        id="skills"
        data-animate
        className={`transform transition-all duration-1000 ease-out delay-400 ${
          isVisible && (isVisible as any).skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
          Skills
        </h2>
        
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className={`flex items-center space-x-2 ${skill.color} px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform cursor-pointer group`}
                    style={{ 
                      animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms`,
                      animation: isVisible && (isVisible as any).skills ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    <IconComponent className="text-sm group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;