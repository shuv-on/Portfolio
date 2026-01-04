// src/components/Projects.jsx
import { motion } from "framer-motion";
import { Github, ExternalLink, Globe } from "lucide-react";
import projectsData from "../data/projects.json"; // <--- ডেটা ইম্পোর্ট করা হলো

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent works, ranging from open-source contributions to full-stack web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* JSON থেকে ডেটা ম্যাপ করা হচ্ছে */}
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Card Component 
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-2 right-2 z-20">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-primary/90 backdrop-blur-sm rounded-full shadow-lg">
            {project.category}
          </span>
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          {/* GitHub Link */}
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
          
          {/* Live Link */}
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors"
            title="Live Demo"
          >
            {project.category.includes("Extension") ? <Globe size={20}/> : <ExternalLink size={20} />}
          </motion.a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        {/* Mobile-only links */}
        <div className="md:hidden flex justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
             <a href={project.links.github} target="_blank" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                <Github size={16} /> Code
             </a>
             <a href={project.links.live} target="_blank" className="flex items-center gap-1 text-sm text-primary font-medium">
                {project.category.includes("Extension") ? "View Extension" : "Live Demo"} <ExternalLink size={16} />
             </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;