import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  const ArrowButton = () => {
    return (
      <Button variant={"ghost"} className=" group p-2 rounded-md  transition-all duration-300 ease-in-out">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="transition-all duration-500 ease-in-out"
        >
          <path 
            d="M9 18l6-6-6-6" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-400 group-hover:text-gray-300 transition-all duration-500 ease-in-out"
          />
          <path 
            d="M5 12h9" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-200 opacity-0 group-hover:opacity-100 group-hover:text-gray-300 transition-all duration-500 ease-in-out"
          />
        </svg>
      </Button>
    );
  };

const Projects = () => {
    return (
        <div className="w-full max-w-[66rem] mx-auto my-12 px-6">
            <h1 className="text-xl m-4">PROJECTS</h1>
            <div className="flex flex-wrap gap-2">
                {t.map((project, index) => (
                    <Card key={index} className="w-full mx-2 hover:shadow-md transition-shadow duration-200 bg-transparent border border-gray-700">
                        <CardHeader className="-mb-4">
                            <CardTitle>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span>{project.name}</span>
                                        <p className="text-gray-300 text-sm">
                                            - {project.techStack}
                                        </p>
                                    </div>
                                    <ArrowButton />
                                </div>
                            </CardTitle>
                            <CardDescription className="text-gray-200">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-1">
                                {project.details.map((detail, idx) => (
                                    <li key={idx} className="text-sm text-gray-300">• {detail}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects; 