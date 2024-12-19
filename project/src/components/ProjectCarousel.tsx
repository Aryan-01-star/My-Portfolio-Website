import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Organic-Hub",
    description: "A web app for farmers to track real-time local environmental conditions",
    tags: ["Web-Dev", "Development", "Website"],
    image: "https://www.shutterstock.com/image-vector/farming-drone-farm-management-tablet-600nw-2103415382.jpg",
    demoUrl: "https://organichub-akp.netlify.app/",
    githubUrl: "https://github.com/Aryan-01-star/OrganicHub.git",
    techStack: ["JavaScript", "CSS", "RestAPI"]
  },  
  {
    id: 2,
    title: "Web Designing",
    description: "I conceptualized and designed the UI/UX for a modern E-Commerce website, focusing on creating an intuitive and visually appealing user experience",
    tags: ["UI/UX", "Figma", "Web Design"],
    image: "/ecommerce.png",
    demoUrl: "https://www.figma.com/proto/k2ltZi6GB8VBaZnYKDsAhE/Kirti2024?node-id=32-16&starting-point-node-id=32%3A16&t=GYpDwZf1DFuTstWP-1",
    githubUrl: "#",
    techStack: ["Figma", "Web Design", "UI/UX"]
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "Discover all about me—my skills, projects, and passions. Dive into my journey as I showcase my work, expertise, and what drives my creativity",
    tags: ["Development", "Website", "Portfolio"],
    image: "/portfolio.png",
    demoUrl: "#",
    githubUrl: "",
    techStack: ["React", "TypeScript", "GraphQL"]
  },
  {
    id: 4,
    title: "Study Platform UI",
    description: "In this I have generated the UI for a collaborative study platform where peoples can collaborate over video calls, and chat rooms over the globe",
    tags: ["UI/UX", "Figma", "Web Design"],
    image: "/studyplatform.png",
    demoUrl: "https://www.figma.com/design/zuawz1ZyQcdXMbgDLle942/Untitled?node-id=0-1&t=ZgwrMjuDUCxNZNwL-1",
    githubUrl: "",
    techStack: ["Figma", "Web Design", "UI/UX"]
  },
  {
    id: 5,
    title: "Travel-Star",
    description: "Website for finding locations to go on vacation with all your needs at one place",
    tags: ["Web-Dev", "Website", "Development"],
    image: "https://themewagon.com/wp-content/uploads/2020/02/direngine.jpg",
    demoUrl: "https://tripstar-byakp.netlify.app/",
    githubUrl: "https://github.com/Aryan-01-star/Travel-Website.git",
    techStack: ["HTML", "CSS", "JS", "API keys"]
  }
  // {
  //   id: 6,
  //   title: "",
  //   description: "",
  //   tags: ["", "", ""],
  //   image: "",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   techStack: ["", "", ""]
  // }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    let intervalId: number;
    if (isAutoPlaying) {
      intervalId = window.setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div
      className="relative px-[40px]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-4">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-white"
              >
                {projects[currentIndex].title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gray-400"
              >
                {projects[currentIndex].description}
              </motion.p>
              <div className="flex flex-wrap gap-2">
                {projects[currentIndex].tags.map((tag, idx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.1 }}
                    className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={projects[currentIndex].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-white hover:text-purple-500 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
                <motion.a
                  href={projects[currentIndex].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-white hover:text-purple-500 transition-colors"
                >
                  <Github size={20} />
                  <span>Source Code</span>
                </motion.a>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ scale: index === currentIndex ? 1.2 : 1 }}
            whileHover={{ scale: 1.3 }}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/95 transition-colors"
      >
        <ChevronLeft className="text-white" size={24} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/95 transition-colors"
      >
        <ChevronRight className="text-white" size={24} />
      </motion.button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ProjectCarousel />
    </div>
  );
};

export default App;
