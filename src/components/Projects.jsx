// src/components/Projects.jsx
import { motion } from "framer-motion";
import { Github, ExternalLink, Globe } from "lucide-react";
import projectsData from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured 
            {/* Animated Gradient on "Projects" */}
            <span className="text-gradient-animate font-extrabold ml-2">Projects</span>
          </h2>
          {/* Animated Gradient Background on Underline */}
          <div className="w-20 h-1 btn-gradient-animate mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent works, ranging from open-source contributions to full-stack web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {/* Category Badge with Animated Gradient */}
        <div className="absolute top-2 right-2 z-20">
          <span className="px-3 py-1 text-xs font-bold text-white btn-gradient-animate rounded-full shadow-lg">
            {project.category}
          </span>
        </div>
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
            title="View Code"
          >
            <Github size={20} />
          </motion.a>
          
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            // Live Link Button with Gradient
            className="p-3 text-white rounded-full btn-gradient-animate shadow-lg"
            title="Live Demo"
          >
            {project.category.includes("Extension") ? <Globe size={20}/> : <ExternalLink size={20} />}
          </motion.a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Clickable Title with Gradient Hover Effect */}
        <a href={project.links.live} target="_blank" rel="noreferrer" className="block w-fit">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-all cursor-pointer group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
            {project.title}
          </h3>
        </a>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            // Tags with Animated Gradient Text
            <span 
              key={idx} 
              className="px-3 py-1 text-xs font-semibold bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full"
            >
              <span className="text-gradient-animate">#{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;