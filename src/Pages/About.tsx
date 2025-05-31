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
import { SiLaragon, SiMongodb, SiMysql, SiTypescript, SiCaddy, SiNginx, SiGraphql } from "react-icons/si";
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

  

 

  return (
    <TracingBeam className="px-4 sm:px-6">
      <div className="w-full max-w-[66rem] mx-auto my-6 sm:my-12">
        
        {/* Enhanced Header with Live Stats */}
        <div className="px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 mb-8">
          <div className="max-w-[34rem] text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl mb-2">Seif Eddine Jelassi</h1>
            <div className="text-lg sm:text-xl mb-2 h-6">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base">
              Welcome! I'm Seif Eddine Jelassi, a web developer from Tunisia. I
              spent three years diving into multimedia and web development at
              ISET Nabeul, followed by a year of engineering informatics at
              ESPRIT Monastir. Let's embark on this digital adventure together!
            </p>
            <div className="flex items-center justify-center sm:justify-start space-x-4 mt-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
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
            <img src={image} alt="image" className="h-24 w-24 sm:h-28 sm:w-28 rounded-full" />
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
        <div className="space-y-4">
          <Card className="border-transparent w-full mx-2 my-6">
            <CardHeader >
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
            <CardFooter className=" text-gray-800 dark:text-gray-300">
              Juin 2024
            </CardFooter>
          </Card>
          <Card className="border-transparent w-full mx-2">
            <CardHeader className="">
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
            <CardFooter className=" text-gray-800 dark:text-gray-300">
              Juin 2022
            </CardFooter>
          </Card>
          <Card className="border-transparent w-full mx-2">
            <CardHeader >
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
            <CardFooter className=" text-gray-800 dark:text-gray-300">
              Juin 2019
            </CardFooter>
          </Card>
        </div>

        <h1 className="text-xl m-4">EXPERIENCE</h1>
        <div className="px-4 sm:px-16">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="h-full">
              <CarouselItem className="basis-full md:basis-1/2">
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
              <CarouselItem className="basis-full md:basis-1/2">
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
              <CarouselItem className="basis-full md:basis-1/2">
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
              <CarouselItem className="basis-full md:basis-1/2">
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
              <CarouselItem className="basis-full md:basis-1/2">
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
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        <h1 className="text-center text-xl my-4">SKILLS</h1>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <div className="flex flex-col gap-4 items-center p-4 border rounded-lg w-full sm:w-[calc(50%-1rem)]">
            <h1 className="text-xl">Programming Languages</h1>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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

          <div className="flex flex-col gap-4 items-center p-4 border rounded-lg w-full sm:w-[calc(50%-1rem)]">
            <h1 className="text-xl">Web Development</h1>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
              <div className="flex flex-col items-center">
                <SiGraphql className="text-4xl" />
                <p>GraphQL</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center p-4 border rounded-lg w-full sm:w-[calc(50%-1rem)]">
            <h1 className="text-xl">Database & Big Data</h1>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
          <div className="flex flex-col gap-4 items-center p-4 border rounded-lg w-full sm:w-[calc(50%-1rem)]">
            <h1 className="text-xl">Cloud & DevOps</h1>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
              <div className="flex flex-col items-center">
                <SiCaddy className="text-4xl" />
                <p>Caddy</p>
              </div>
              <div className="flex flex-col items-center">
                <SiNginx className="text-4xl" />
                <p>Nginx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};

export default About;
