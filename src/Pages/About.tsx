import { useState, useEffect, useRef } from "react";
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
  const glowRef = useRef<HTMLDivElement | null>(null);
  const tickingRef = useRef(false);

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

  // Minimal smooth parallax for background glow
  useEffect(() => {
    const updateGlow = () => {
      const scrolled = window.pageYOffset || 0;
      const glow = glowRef.current;
      if (glow) {
        glow.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.1}deg)`;
      }
      tickingRef.current = false;
    };

    const requestTick = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(updateGlow);
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => window.removeEventListener('scroll', requestTick);
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

  // Intersection Observer for experience card reveals (exp-item style)
  useEffect(() => {
    const items = document.querySelectorAll('.exp-reveal');
    items.forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(15px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-20px' });

    items.forEach((el) => observer.observe(el));
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
        { name: "Next.js", icon: FaReact, color: "bg-blue-50 dark:bg-red-800/20 text-blue-400" },
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
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Background Glow (parallax) */}
      <div
        ref={glowRef}
        className="fixed rounded-full pointer-events-none -z-10"
        style={{
          top: '20%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)'
        }}
      />

      {/* Animated Header */}
      <div
        id="header"
        data-animate
        className={`flex items-center gap-4 mb-6 transform transition-all duration-1000 ease-out ${
          isVisible && (isVisible as any).header ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="flex-shrink-0">
          <img
            src={profile_image}
            alt="Profile"
            className="w-16 h-16 rounded-xl object-cover border border-white/10 hover:border-white/20 transition-all"
            onLoad={handleImageLoaded}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-extralight tracking-tight text-gray-900 dark:text-gray-100">Seif Eddine Jelassi</h1>
          <p className="text-sm text-gray-500 mb-2">Full Stack Developer & Digital Creator</p>
          <div className="flex items-center flex-wrap gap-3 text-sm">
            <span className="text-gray-600 dark:text-gray-400">glassisaif@gmail.com</span>
            <span className="text-gray-500">Tunis, Tunisia</span>
            <span className="text-gray-500">
              <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {currentTime.toLocaleTimeString('en-US', { timeZone: 'Africa/Tunis', hour12: false })}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-gray-400">
            <FaGithub className="text-lg hover:text-blue-500 hover:scale-110 cursor-pointer transition-all" />
            <FaLinkedin className="text-lg hover:text-blue-600 hover:scale-110 cursor-pointer transition-all" />
            <FaDownload className="text-lg hover:text-green-500 hover:scale-110 cursor-pointer transition-all" />
          </div>
        </div>
      </div>

      {/* About Summary */}
      <div
        id="about-summary"
        data-animate
        className={`transform transition-all duration-1000 ease-out ${
          isVisible && (isVisible as any)['about-summary'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">BIO</h2>
        <div
          className="rounded-lg border"
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderColor: 'rgba(255,255,255,0.04)'
          }}
        >
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed p-4">
            3+ years building web applications with a focus on clean architecture, performance, and delightful UX. I enjoy
            crafting robust frontend experiences in React and strong backends with Node.js and Python, and I love mentoring and
            collaborating to ship impactful products.
          </p>
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
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
          Education
        </h2>
        <div className="space-y-2">
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
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
          Experience
        </h2>
        <div className="space-y-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-reveal rounded-lg transition-all"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.04)',
                padding: '14px'
              }}
            >
              <div className="flex justify-between items-baseline mb-1">
                <div>
                  <div className="text-base font-normal text-gray-900 dark:text-gray-100">{exp.title}</div>
                </div>
                <div className="text-xs text-gray-500">{exp.period}</div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies (compact pill list) */}
      <div
        id="technologies"
        data-animate
        className={`transform transition-all duration-1000 ease-out delay-400 ${
          isVisible && (isVisible as any).technologies ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'TypeScript','React','Node.js','Python','PostgreSQL','Redis','MongoDB','AWS','Docker','Kubernetes','GraphQL','Next.js',
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-[0.85rem] border transition-colors"
              style={{
                background: 'rgba(255,255,255,0.04)',
                color: '#ccc',
                borderColor: 'rgba(255,255,255,0.06)'
              }}
            >
              {tech}
            </span>
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
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
          Skills
        </h2>
        
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-5">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
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
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

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