import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Globe, X, AlertTriangle, Rocket, ArrowRight } from "lucide-react";
import projectsData from "../data/projects.json";
import QRDropAnimation from "./QRDropAnimation"; // 👈 অ্যানিমেশন কম্পোনেন্ট ইমপোর্ট করা হলো

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-gradient-animate font-extrabold">Projects</span>
          </h2>
          <div className="w-20 h-1 btn-gradient-animate mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent works, ranging from open-source contributions to full-stack web applications.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onOpenModal={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* DETAILED MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative border border-gray-200 dark:border-gray-700 custom-scrollbar"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col md:flex-row">
                
                {/* 🛠️ Dynamic Media Section: Image OR Live Code Animation */}
                <div className="w-full md:w-2/5 p-4 md:p-6 bg-gray-100 dark:bg-gray-950 flex items-center justify-center min-h-[260px] md:min-h-auto relative">
                  {selectedProject.hasAnimation ? (
                    // যদি জেসন ফাইলে true থাকে, তবে লাইভ অ্যানিমেশন দেখাবে
                    <div className="w-full">
                      <QRDropAnimation />
                    </div>
                  ) : (
                    // অন্যথায় সাধারণ ইমেজ দেখাবে
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  )}
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 text-xs font-bold text-white btn-gradient-animate rounded-full shadow-lg">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-3/5 p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-700">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Challenges & Future Plans */}
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/20">
                      <h4 className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-500 mb-1">
                        <AlertTriangle size={18} /> Challenges Faced
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-100 dark:border-purple-900/20">
                      <h4 className="flex items-center gap-2 font-bold text-purple-700 dark:text-purple-400 mb-1">
                        <Rocket size={18} /> Future Plans
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {selectedProject.futurePlans}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <a 
                      href={selectedProject.links.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 py-3 rounded-xl btn-gradient-animate text-white font-bold text-center hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
                    >
                      {selectedProject.category.includes("Extension") ? <Globe size={18}/> : <ExternalLink size={18} />}
                      Live Demo
                    </a>
                    <a 
                      href={selectedProject.links.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 py-3 rounded-xl bg-gray-900 dark:bg-gray-700 text-white font-bold text-center hover:bg-gray-800 dark:hover:bg-gray-600 transition flex items-center justify-center gap-2"
                    >
                      <Github size={18} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Card Component
const ProjectCard = ({ project, index, onOpenModal }) => {
  const arrowVariants = {
    idle: {
      x: [0, 5, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    },
    hover: {
      x: 8,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={onOpenModal}>
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
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
           <span className="text-white font-semibold border border-white/50 px-4 py-2 rounded-full">View Details</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 
          className="text-xl font-bold mb-2 cursor-pointer transition-all duration-300
                     text-gray-900 dark:text-white 
                     group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600"
          onClick={onOpenModal}
        >
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="px-2 py-1 text-xs bg-gray-50 dark:bg-gray-800 rounded-md text-gray-500 dark:text-gray-400">
                #{tag}
              </span>
            ))}
          </div>
          
          <motion.button 
            onClick={onOpenModal}
            initial="idle"
            whileHover="hover"
            className="w-full py-2.5 rounded-xl border-2 border-purple-600/20 text-purple-600 dark:text-purple-400 font-bold text-sm 
                       hover:border-none hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white
                       transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
            animate={{ 
                borderColor: ["rgba(147, 51, 234, 0.2)", "rgba(147, 51, 234, 0.6)", "rgba(147, 51, 234, 0.2)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="relative z-10">View Details</span>
            <motion.span variants={arrowVariants} className="relative z-10">
                <ArrowRight size={18} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;