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
  FaEye,
  FaCalendarAlt,
} from "react-icons/fa";
import image from "../assets/saif.png";
import { IoLogoJavascript } from "react-icons/io";
import { SiLaragon, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  SiDotnet,
  SiFastify,
  SiPostgresql,
  SiBun,
  SiTailwindcss,
  SiChakraui,
} from "react-icons/si";

const About = () => {
 

  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer & Digital Creator";

  

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

  const t = [
    {
      name: "Daycure",
      description:
        "A website where users can track their health, finances, and create futuristic tasks. It also provides easy access to desired information.",
      techStack: "MERN",
      status: "Live",
      year: "2024",
      category: "Health Tech",
      details: [
        "Developed health tracking features for monitoring fitness and nutrition.",
        "Implemented financial tracking tools for budgeting and expense management.",
        "Created task management system for planning and organizing tasks.",
        "Integrated data visualization for easy interpretation of information.",
        "Optimized website for fast loading and smooth user experience.",
      ],
    },
    {
      name: "EchoSoul - Introspective Poetry Therapy Chatbot",
      description:
        "EchoSoul is an innovative chatbot that combines elements of poetry therapy, mindfulness, and emotional introspection. It engages users in a poetic dialogue to help them explore their feelings, gain new perspectives, and find emotional release through creative expression.",
      techStack: "Flask Python , React JS , firebase , Tensorflow , NLTK ",
      status: "Beta",
      year: "2024",
      category: "AI & Therapy",
      details: [
        "frontend : Contains the HTML, CSS, and JavaScript for the user interface.",
        "backend : Contains the Python files for the chatbot's logic and NLP processing.",
        "data : Stores the chatbot's knowledge base and emotion history.",
        "models : Contains the pre-trained emotion classification model.",
      ],
    },
    {
      name: "Galaxia Blog",
      description:
        "A website that provides crypto blogs based on users' roles and payment.",
      techStack: "MEAN",
      status: "Live",
      year: "2023",
      category: "Crypto Media",
      details: [
        "Developed user authentication and role-based access control.",
        "Implemented payment gateway for accessing premium content.",
        "Curated and published crypto blogs for user engagement.",
        "Integrated social sharing features for content distribution.",
        "Optimized website for search engine visibility.",
      ],
    },
    {
      name: "CryptoScope",
      description:
        "Provides live blockchain crypto prices. Users can create their crypto target list, save favorites, and track favorite coins with alerts.",
      techStack: "MERN",
      status: "Live",
      year: "2023",
      category: "FinTech",
      details: [
        "Implemented live data feed for real-time crypto prices.",
        "Developed user interface for creating and managing crypto target lists.",
        "Integrated alert system for price change notifications.",
        "Provided support for saving favorite coins and portfolios.",
        "Optimized website performance for fast data updates.",
      ],
    },
    {
      name: "Lexura",
      description: "live 3d auction online with socket io and three js",
      techStack: "Node JS , Node Fastify ,mongodb , Socket IO , Three JS",
      status: "Live",
      year: "2024",
      category: "3D Web App",
      details: [
        "Developed a real-time 3D auction platform using Node.js, Fastify, MongoDB, Socket.IO, and Three.js.",
        "Implemented a 3D auction interface with interactive elements for users to bid on items.",
        "Integrated Socket.IO for real-time communication between the server and clients.",
        "Utilized Three.js for rendering 3D objects and animations.",
        "Optimized server performance for smooth and responsive user interactions.",
      ],
    },
    {
      name: "CodeNest",
      description:
        "A website that provides an interface for users to do exercises online and track progress. Users can earn badges as rewards.",
      techStack: "MERN",
      status: "Live",
      year: "2023",
      category: "EdTech",
      details: [
        "Developed interactive exercises for various programming languages.",
        "Implemented user authentication and profile management.",
        "Integrated badge system for rewarding user progress.",
        "Provided analytics for tracking user performance.",
        "Optimized website for mobile and desktop devices.",
      ],
    },

    {
      name: "Genefyt",
      description:
        "A marketplace for NFT designers to sell their NFT collections.",
      techStack: "MongoDB , Node JS , Angular JS , Express JS ",
      status: "Live",
      year: "2022",
      category: "NFT Marketplace",
      details: [
        "Formulated an automated system for reporting bugs resulting in bug resolution time reduction by 30%.",
        "Re-engineered software applications to accommodate scalable features resulting in an increase in users by 25%.",
        "Integrated machine learning models in the software's recommendation system that improved user interaction by 18%.",
        "Implemented micro-services architecture that enhanced the software's fault isolation and resilience.",
        "Led a successful agile team delivering 97% of product backlog items (PBIs) with minimal bug rollbacks.",
      ],
    },
    {
      name: "NextGen",
      description:
        "An education website offering online courses and learning materials.",
      techStack: "MongoDB , Node JS , Angular JS , Express JS",
      status: "Live",
      year: "2022",
      category: "EdTech",
      details: [
        "Developed engaging online courses and learning materials for diverse subjects.",
        "Implemented user-friendly interface design to enhance user experience.",
        "Integrated payment gateways for seamless transactions.",
        "Utilized advanced analytics to track user progress and optimize learning outcomes.",
        "Collaborated with educators to develop interactive course content.",
      ],
    },
    {
      name: "Cavers",
      description:
        "A crypto blogs website that provides valuable insights and information about cryptocurrency for financial success. Users can explore a variety of crypto blogs and stay updated on the latest trends.",
      techStack: "MongoDB , Node JS , Angular JS , Express JS",
      status: "Live",
      year: "2022",
      category: "Crypto Media",
      details: [
        "Researched and curated informative crypto blogs for user engagement.",
        "Implemented SEO strategies to increase website visibility and traffic.",
        "Developed user authentication and authorization systems for personalized user experience.",
        "Integrated social sharing features to facilitate content sharing and user engagement.",
        "Monitored website analytics to identify trends and optimize content strategy.",
      ],
    },
    {
      name: "NextMunch",
      description:
        "A website that revolutionizes food services. Every restaurant can create a dedicated page on the website, allowing users to easily order food and stay updated on upcoming events.",
      techStack: "MongoDB , Node JS , Angular JS , Express JS",
      status: "Live",
      year: "2021",
      category: "Food Delivery",
      details: [
        "Developed a user-friendly platform for restaurants to create dedicated pages.",
        "Implemented ordering system with real-time updates on food availability.",
        "Integrated event management features to keep users informed about upcoming events.",
        "Optimized website performance for seamless user experience.",
        "Provided customer support for both restaurants and users.",
      ],
    },

    {
      name: "Labocheba",
      description:
        "Provides an online platform for accessing and viewing your medical analysis results.",
      techStack: "MongoDB , Node JS , Angular JS , Express JS",
      status: "Live",
      year: "2021",
      category: "HealthTech",
      details: [
        "Developed secure data storage for medical analysis results.",
        "Implemented user-friendly interface for easy access to medical reports.",
        "Integrated data visualization tools for better understanding of medical data.",
        "Ensured compliance with healthcare data regulations.",
        "Provided support for users to interpret medical analysis results.",
      ],
    },
    {
      name: "Tunisaol",
      description:
        "A tourism website that allows you to book hotels and accommodations in Tunisia.",
      techStack: "ANGULAR-PHP-MYSQL",
      status: "Live",
      year: "2020",
      category: "Travel",
      details: [
        "Developed hotel booking system with real-time availability updates.",
        "Implemented user authentication and authorization for secure bookings.",
        "Integrated payment gateway for secure transactions.",
        "Provided detailed information about hotels and accommodations.",
        "Offered customer support for booking inquiries and issues.",
      ],
    },
  ];

 

  return (
    <TracingBeam className="px-6">
      <div className="w-full max-w-[66rem] mx-auto my-12">
        
        {/* Enhanced Header with Live Stats */}
        <div className="px-4 flex justify-between items-center mb-8">
          <div className="max-w-[34rem]">
            <h1 className="text-3xl mb-2">Seif Eddine Jelassi</h1>
            <div className="text-xl  mb-2 h-6">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-gray-800 dark:text-gray-300">
              Welcome! I'm Seif Eddine Jelassi, a web developer from Tunisia. I
              spent three years diving into multimedia and web development at
              ISET Nabeul, followed by a year of engineering informatics at
              ESPRIT Monastir. Let's embark on this digital adventure together!
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                glassisaif@gmail.com
              </p>
              <div className="flex space-x-2">
                <FaGithub className="text-xl hover:text-blue-600 cursor-pointer transition-colors" />
                <FaLinkedin className="text-xl hover:text-blue-600 cursor-pointer transition-colors" />
                <FaDownload className="text-xl hover:text-blue-600 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="text-center">
          <img src={image} alt="image" className="h-28 w-28 rounded-full" />
            <div className="text-sm text-gray-500">
              {currentTime.toLocaleTimeString('en-US', { 
                timeZone: 'Africa/Tunis',
                hour12: false 
              })}
              <br />
              <span className="text-xs">Tunis, Tunisia</span>
            </div>
          </div>
        </div>

       

        

        <h1 className="text-xl m-4">EDUCATION</h1>
        <Card className="border-transparent w-full mx-2 -my-6">
          <CardHeader className="-mb-4">
            <CardTitle>
              <div className="flex items-center gap-1">
                Engineering Informatique
                <p className="text-gray-400 text-sm ">
                  - ESPRIT Monastir , 3 years
                </p>
              </div>
            </CardTitle>
            <CardDescription>Engineering Informatique Degree</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Specialized in Computer Engineering</li>
              <li>Completed a thesis on Advanced Algorithms</li>
            </ul>
          </CardContent>
          <CardFooter className="-mt-6 text-gray-800 dark:text-gray-300">
            Juin 2024
          </CardFooter>
        </Card>
        <Card className="border-transparent w-full mx-2">
          <CardHeader className="-mb-4">
            <CardTitle>
              <div className="flex items-center gap-1">
                Web Development and Multimedia
                <p className="text-gray-400 text-sm ">
                  - ISET Nabeul , 3 years
                </p>
              </div>
            </CardTitle>
            <CardDescription>
              Web Development and Multimedia Degree
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Recipient of Resume Worded Academic Excellence Scholarship</p>
            <p>Focused on Software Development and Design,</p>
          </CardContent>
          <CardFooter className="-mt-6 text-gray-800 dark:text-gray-300">
            Juin 2022
          </CardFooter>
        </Card>
        <Card className="border-transparent w-full mx-2">
          <CardHeader className="-mb-4">
            <CardTitle>
              <div className="flex items-center gap-1">
                Baccalauréat
                <p className="text-gray-400 text-sm ">
                  - Informatique - TUNISIA
                </p>
              </div>
            </CardTitle>
            <CardDescription>
              Baccalauréat Degree in Informatique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Specialized in Database Systems and Web Technologies</p>
          </CardContent>
          <CardFooter className="-mt-6 text-gray-800 dark:text-gray-300">
            Juin 2019
          </CardFooter>
        </Card>

        <h1 className="text-xl m-4">EXPERIENCE</h1>
        <div className="px-16">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent className="h-full">
              <CarouselItem className="md:basis-1/2  ">
                <div className="p-1 h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold">
                          Web Developer - Analyst Laboratory Website
                        </h2>
                        <FaEye className="text-blue-500" />
                      </div>
                      <p className="text-gray-800 dark:text-gray-300">
                        Developed a website for an analyst laboratory. Created
                        and maintained various personal websites.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        2023 - Present
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2  ">
                <div className="p-1 h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold">
                          Freelance Web Developer - Galaxia.blog
                        </h2>
                        <FaEye className="text-green-500" />
                      </div>
                      <p className="text-gray-800 dark:text-gray-300">
                        Worked on Galaxia.blog, a website that provides crypto
                        blogs based on users' roles and payment.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        2022 - 2023
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2  ">
                <div className="p-1 h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold">
                          Freelance Web Developer - CodeNest
                        </h2>
                        <FaEye className="text-purple-500" />
                      </div>
                      <p className="text-gray-800 dark:text-gray-300">
                        Created CodeNest, a website that provides an interface
                        for users to do exercises online and track progress.
                        Users can earn rewards.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        2022 - 2023
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2  ">
                <div className="p-1 h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold">
                          Freelance Web Developer - Crypto Scope
                        </h2>
                        <FaEye className="text-orange-500" />
                      </div>
                      <p className="text-gray-800 dark:text-gray-300">
                        Developed Crypto Scope, a website that provides live
                        blockchain crypto prices. Users can create their crypto
                        target list, save favorites, and track favorite coins
                        with alerts.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        2022 - 2023
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2  ">
                <div className="p-1 h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold">
                          Financial Analyst - Crypto Project (NFT)
                        </h2>
                        <FaEye className="text-red-500" />
                      </div>
                      <p className="text-gray-800 dark:text-gray-300">
                        Worked on analyzing and understanding crypto projects
                        related to NFTs.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        2021 - 2022
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <h1 className="text-xl m-4">PROJECTS</h1>

        <div className="flex flex-wrap gap-2 ">
          {t.map((project, index) => (
            <Card key={index} className="w-full mx-2">
              <CardHeader className="-mb-4">
                <CardTitle>
                  <div className="flex items-center gap-1">
                    {project.name}
                    <p className="text-gray-400 text-sm">
                      - {project.techStack}
                    </p>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <h1 className="text-center text-xl my-4">SKILLS</h1>
        <div className="flex flex-wrap  justify-center ">
          <div className="flex flex-col gap-4 items-center p-4 border m-1 rounded-lg w-full max-w-1/2">
            <h1 className="text-xl">Programming Languages</h1>
            <div className="flex flex-wrap gap-6 ">
              <div className="flex flex-col items-center">
                <IoLogoJavascript className="text-4xl" />
                <p>JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-4xl" />
                <p>Typecript</p>
              </div>
              <div className="flex flex-col items-center">
                <FaPython className="text-4xl" />
                <p>Python</p>
              </div>
              <div className="flex flex-col items-center">
                <TbBrandMysql className="text-4xl" />
                <p>SQL</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="text-4xl" />
                <p>Java</p>
              </div>
              <div className="flex flex-col items-center">
                <SiBun className="text-4xl" />
                <p>Bun</p>
              </div>
              <div className="flex flex-col items-center">
                <SiDotnet className="text-4xl" />
                <p>.NET</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center p-4 border m-1 rounded-lg w-full max-w-1/2">
            <h1 className="text-xl">Web Development</h1>
            <div className="flex flex-wrap gap-6 ">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-4xl" />
                <p>HTML</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3 className="text-4xl" />
                <p>CSS3</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl" />
                <p>React</p>
              </div>
              <div className="flex flex-col items-center">
                <FaAngular className="text-4xl" />
                <p>Angular</p>
              </div>
              <div className="flex flex-col items-center">
                <FaSymfony className="text-4xl" />
                <p>Symfony</p>
              </div>

              <div className="flex flex-col items-center">
                <FaNodeJs className="text-4xl" />
                <p>Node JS</p>
              </div>
              <div className="flex flex-col items-center">
                <SiFastify className="text-4xl" />
                <p>Fastify</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-4xl" />
                <p>Tailwind</p>
              </div>
              <div className="flex flex-col items-center">
                <SiChakraui className="text-4xl" />
                <p>Chakra UI</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center p-4 border m-1 rounded-lg w-full max-w-1/2">
            <h1 className="text-xl">Database & Big Data</h1>
            <div className="flex flex-wrap gap-6 ">
              <div className="flex flex-col items-center">
                <SiMysql className="text-4xl" />
                <p>MySQL</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-4xl" />
                <p>MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <SiLaragon className="text-4xl" />
                <p>Laragon</p>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql className="text-4xl" />
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center p-4 border m-1 rounded-lg w-full max-w-1/2">
            <h1 className="text-xl">Cloud & DevOps</h1>
            <div className="flex flex-wrap gap-6 ">
              <div className="flex flex-col items-center">
                <FaAws className="text-4xl" />
                <p>AWS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaDocker className="text-4xl" />
                <p>Docker</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJenkins className="text-4xl" />
                <p>Jenkins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};

export default About;
