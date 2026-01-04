// src/components/Skills.jsx
import { motion } from "framer-motion";

const Skills = () => {
  // Skill Data categorized
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
      ],
    },
    {
      title: "Tools, OS & Open Source",
      skills: [
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
        { name: "Arch Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/Arch_Linux_%22Crystal%22_icon.svg" },
        { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "GNOME", icon: "data:image/png;base64,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" },
      ],
    },
  ];

  // Container Animation (Staggers children - আইকনগুলো একটার পর একটা আসবে)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 
      }
    }
  };

  // Card Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A showcase of my technical expertise and the technologies I work with.
          </p>
        </motion.div>

        {/* Skills Grid with Stagger Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-2">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.1 }} // Hover করলে বড় হবে
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-2 bg-gray-50 dark:bg-gray-800 rounded-xl group-hover:bg-sky-50 dark:group-hover:bg-sky-900/20 transition-colors duration-300 shadow-sm">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain filter dark:grayscale-[20%] group-hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;