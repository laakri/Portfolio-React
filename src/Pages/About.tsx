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
import {  SiMongodb, SiMysql, SiTypescript,SiNginx, SiGraphql } from "react-icons/si";
import {
  SiDotnet,
  SiFastify,
  SiPostgresql,
  SiBun,
  SiTailwindcss,
  SiChakraui,
} from "react-icons/si";
import profile_img from '../assets/saif.png'

const About = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer & Digital Creator";

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

  // Typewriter effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [typedText, fullText]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      
      {/* Compact Header */}
      <div className="flex items-center gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Seif Eddine Jelassi</h1>
          <div className="text-lg text-gray-600 dark:text-gray-400 h-6 mb-3">
            {typedText}<span className="animate-pulse">|</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Welcome! I'm Seif Eddine Jelassi, a web developer from Tunisia. I spent three years diving into multimedia and web development at ISET Nabeul, followed by a year of engineering informatics at ESPRIT Monastir. Let's embark on this digital adventure together!
          </p>
          <div className="flex items-center space-x-4 text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">glassisaif@gmail.com</span>
            <div className="flex space-x-2">
              <FaGithub className="text-lg hover:text-gray-600 cursor-pointer transition-colors" />
              <FaLinkedin className="text-lg hover:text-gray-600 cursor-pointer transition-colors" />
              <FaDownload className="text-lg hover:text-gray-600 cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {currentTime.toLocaleTimeString('en-US', { timeZone: 'Africa/Tunis', hour12: false })} • Tunis, Tunisia
          </div>
        </div>
        <div className="flex-shrink-0">
          <img src={profile_img} alt="Seif Eddine Jelassi" className="w-24 h-24 rounded-full object-cover" />
        </div>
      </div>

      {/* Minimal Education */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Education</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Engineering Informatique</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">ESPRIT Monastir</p>
            </div>
            <span className="text-xs text-gray-500">2024</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Web Development & Multimedia</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">ISET Nabeul</p>
            </div>
            <span className="text-xs text-gray-500">2022</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Baccalauréat Informatique</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tunisia</p>
            </div>
            <span className="text-xs text-gray-500">2019</span>
          </div>
        </div>
      </div>

      {/* Compact Experience */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 dark:border-gray-600 pl-4 hover:border-gray-400 transition-colors">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm leading-tight">{exp.title}</h3>
                <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Redesigned Skills */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Skills</h2>
        
        {/* Programming Languages */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Programming</h3>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center space-x-2 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
              <IoLogoJavascript className="text-yellow-600 text-sm" />
              <span className="text-xs font-medium">JavaScript</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              <SiTypescript className="text-blue-600 text-sm" />
              <span className="text-xs font-medium">TypeScript</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              <FaPython className="text-blue-600 text-sm" />
              <span className="text-xs font-medium">Python</span>
            </div>
            <div className="flex items-center space-x-2 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
              <FaJava className="text-red-600 text-sm" />
              <span className="text-xs font-medium">Java</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
              <SiBun className="text-gray-700 dark:text-gray-300 text-sm" />
              <span className="text-xs font-medium">Bun</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
              <SiDotnet className="text-purple-600 text-sm" />
              <span className="text-xs font-medium">.NET</span>
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full">
              <FaHtml5 className="text-orange-600 text-sm" />
              <span className="text-xs font-medium">HTML5</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              <FaCss3 className="text-blue-600 text-sm" />
              <span className="text-xs font-medium">CSS3</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              <FaReact className="text-blue-500 text-sm" />
              <span className="text-xs font-medium">React</span>
            </div>
            <div className="flex items-center space-x-2 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
              <FaAngular className="text-red-600 text-sm" />
              <span className="text-xs font-medium">Angular</span>
            </div>
            <div className="flex items-center space-x-2 bg-teal-50 dark:bg-teal-900/20 px-3 py-1 rounded-full">
              <SiTailwindcss className="text-teal-500 text-sm" />
              <span className="text-xs font-medium">Tailwind</span>
            </div>
            <div className="flex items-center space-x-2 bg-teal-50 dark:bg-teal-900/20 px-3 py-1 rounded-full">
              <SiChakraui className="text-teal-500 text-sm" />
              <span className="text-xs font-medium">Chakra UI</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Backend</h3>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
              <FaNodeJs className="text-green-600 text-sm" />
              <span className="text-xs font-medium">Node.js</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
              <SiFastify className="text-gray-700 dark:text-gray-300 text-sm" />
              <span className="text-xs font-medium">Fastify</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
              <FaSymfony className="text-gray-700 dark:text-gray-300 text-sm" />
              <span className="text-xs font-medium">Symfony</span>
            </div>
            <div className="flex items-center space-x-2 bg-pink-50 dark:bg-pink-900/20 px-3 py-1 rounded-full">
              <SiGraphql className="text-pink-600 text-sm" />
              <span className="text-xs font-medium">GraphQL</span>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Database</h3>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              <SiMysql className="text-blue-600 text-sm" />
              <span className="text-xs font-medium">MySQL</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
              <SiMongodb className="text-green-600 text-sm" />
              <span className="text-xs font-medium">MongoDB</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              <SiPostgresql className="text-blue-600 text-sm" />
              <span className="text-xs font-medium">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* DevOps */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">DevOps & Cloud</h3>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full">
              <FaAws className="text-orange-500 text-sm" />
              <span className="text-xs font-medium">AWS</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              <FaDocker className="text-blue-500 text-sm" />
              <span className="text-xs font-medium">Docker</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              <FaJenkins className="text-blue-600 text-sm" />
              <span className="text-xs font-medium">Jenkins</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
              <SiNginx className="text-green-600 text-sm" />
              <span className="text-xs font-medium">Nginx</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;