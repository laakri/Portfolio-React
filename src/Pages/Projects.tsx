import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, List, ArrowRight, Github } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const t = [
    {
      id: "vorex",
      name: "Vorex",
      description:
        "A revolutionary logistics platform connecting sellers, drivers, and warehouses. AI-powered route optimization and real-time tracking for seamless deliveries.",
      techStack: "React, NestJS, PostgreSQL",
      status: "Live",
      year: "2024",
      category: "Logistics & E-commerce",
      star: true,
      github: "https://github.com/yourusername/vorex",
      details: [
        "Multi-platform ecosystem with AI integration",
        "Real-time tracking and analytics",
        "Automated route optimization",
        "Secure payment processing",
        "Scalable microservices architecture",
      ],
    },
    {
      id: "daycure",
      name: "Daycure",
      description:
        "A website where users can track their health, finances, and create futuristic tasks. It also provides easy access to desired information.",
      techStack: "MERN",
      status: "Live",
      year: "2024",
      category: "Health Tech",
      github: "https://github.com/yourusername/daycure",
      details: [
        "Developed health tracking features for monitoring fitness and nutrition.",
        "Implemented financial tracking tools for budgeting and expense management.",
        "Created task management system for planning and organizing tasks.",
        "Integrated data visualization for easy interpretation of information.",
        "Optimized website for fast loading and smooth user experience.",
      ],
    },
    {
      id: "echosoul",
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
      id: "galaxia-blog",
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
      id: "cryptoscope",
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
      id: "lexura",
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
      id: "codenest",
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
      id: "genefyt",
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
      id: "nextgen",
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
      id: "cavers",
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
      id: "nextmunch",
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
      id: "labocheba",
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
      id: "tunisaol",
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
    },]

const ProjectButton: React.FC<{ project: typeof t[0] }> = ({ project }) => {
    const navigate = useNavigate();
    
    if (project.star) {
        return (
            <Button 
                variant="ghost" 
                className="group p-2 rounded-md transition-all duration-300 ease-in-out relative"
                onClick={() => navigate(`/projects/${project.id}`)}
            >
                <AnimatePresence>
                    <motion.span 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-full mr-2 text-sm text-muted-foreground whitespace-nowrap"
                    >
                        View Project
                    </motion.span>
                </AnimatePresence>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowRight 
                        className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-500 ease-in-out" 
                    />
                </motion.div>
            </Button>
        );
    }
    
    return (
        <Button 
            variant="ghost" 
            size="sm"
            className="group p-2 rounded-md transition-all duration-300 ease-in-out relative"
            onClick={() => window.open(project.github, '_blank')}
        >
            <AnimatePresence>
                <motion.span 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full mr-2 text-sm text-muted-foreground whitespace-nowrap"
                >
                    Open GitHub
                </motion.span>
            </AnimatePresence>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-500 ease-in-out" />
            </motion.div>
        </Button>
    );
};

const Projects = () => {
    const [viewMode, setViewMode] = useState('list');

    return (
        <div className="w-full max-w-[66rem] mx-auto my-4 px-6">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between mb-8"
            >
                <h1 className="text-3xl font-bold text-foreground">
                    Projects
                </h1>
                <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant={viewMode === 'list' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('list')}
                            className="px-3"
                        >
                            <List className="w-4 h-4" />
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant={viewMode === 'grid' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('grid')}
                            className="px-3"
                        >
                            <Grid className="w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
            
            <motion.div 
                layout
                className={`${
                    viewMode === 'grid' 
                        ? 'grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr' 
                        : 'space-y-4'
                }`}
            >
                <AnimatePresence mode="popLayout">
                    {t.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="h-full"
                        >
                            <Card className={`w-full h-full hover:shadow-lg transition-all duration-300 ${
                                project.star 
                                    ? 'bg-gradient-to-br from-background to-muted/50 border-primary/20' 
                                    : 'bg-card border-border'
                            }`}>
                                <CardHeader className="flex flex-col h-full">
                                    <CardTitle>
                                        <motion.div 
                                            className="flex items-center justify-between"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <div className="flex items-center gap-2">
                                                <motion.span 
                                                    className={project.star ? 'text-primary' : 'text-foreground'}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {project.name}
                                                </motion.span>
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                                >
                                                    <Badge variant="secondary" className="text-xs">
                                                        {project.year}
                                                    </Badge>
                                                </motion.div>
                                                {project.star && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
                                                    >
                                                        <Badge className="bg-primary/10 text-primary border-primary/20">
                                                            Featured
                                                        </Badge>
                                                    </motion.div>
                                                )}
                                            </div>
                                            <ProjectButton project={project} />
                                        </motion.div>
                                    </CardTitle>
                                    <motion.div 
                                        className="flex items-center gap-2 mt-2"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <p className="text-sm text-muted-foreground">
                                            {project.techStack}
                                        </p>
                                        <Badge variant="outline" className="text-xs">
                                            {project.status}
                                        </Badge>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex-grow"
                                    >
                                        <CardDescription className="mt-2 text-muted-foreground line-clamp-2">
                                            {project.description}
                                        </CardDescription>
                                    </motion.div>
                                    <CardContent className="p-0 pt-4">
                                        <motion.ul 
                                            className="space-y-1"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {project.details.map((detail, idx) => (
                                                <motion.li 
                                                    key={idx} 
                                                    className="text-sm text-muted-foreground line-clamp-1"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                                >
                                                    • {detail}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </CardContent>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Projects;