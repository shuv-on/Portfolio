// src/components/About.jsx
import { motion } from "framer-motion";
import { Code2, Terminal, Cpu, Globe, BrainCircuit } from "lucide-react"; 
import Education from "./Education"; 

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About 
            {/* Header Animation */}
            <span className="text-gradient-animate font-extrabold ml-2">Me</span>
          </h2>
          {/* Underline Animation */}
          <div className="w-20 h-1 btn-gradient-animate mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 group">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coding Setup" 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sky-600/10 dark:bg-sky-600/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg">
                  <Terminal className="text-sky-600 dark:text-sky-400" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Focus</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Linux & Open Source</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Aspiring Software Engineer & <span className="text-gradient-animate">Linux Enthusiast</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-justify">
              I am currently pursuing a Bachelor's degree in 
              {/* Animation Added Here 👇 */}
              <span className="text-gradient-animate font-bold mx-1">ICT at Mawlana Bhashani Science and Technology University (MBSTU)</span>. 
              My passion lies in exploring the <strong>Linux ecosystem</strong>, contributing to open-source projects, and architecting efficient software solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-justify">
              With a strong foundation in 
              {/* Animation Added Here 👇 */}
              <span className="text-gradient-animate font-bold mx-1">C, C++, Java, Javascript and Python</span>, 
              I actively solve complex algorithmic problems on platforms like 
              {/* Animation Added Here 👇 */}
              <span className="text-gradient-animate font-bold mx-1">LeetCode and CodeForces</span>.
            </p>

            {/* --- Cards Section --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1: Full Stack */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-sky-500/50 transition-colors">
                <Code2 className="text-sky-600 dark:text-sky-400 mb-2" size={24} />
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">Full Stack</h4>
                <p className="text-xs text-gray-500 mt-1">MERN & Next.js</p>
              </div>

              {/* Card 2: Open Source */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-purple-500/50 transition-colors">
                <Globe className="text-purple-600 dark:text-purple-400 mb-2" size={24} />
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">Open Source</h4>
                <p className="text-xs text-gray-500 mt-1">Gnome Ext.</p>
              </div>

              {/* Card 3: Problem Solving */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-green-500/50 transition-colors">
                <BrainCircuit className="text-green-600 dark:text-green-400 mb-2" size={24} />
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">Problem Solving</h4>
                <p className="text-xs text-gray-500 mt-1">DSA & Logic</p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* --- Education Section --- */}
        <div className="mt-20">
            <div className="border-t border-gray-200 dark:border-gray-800 mb-16 relative">
                 <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white dark:bg-dark px-4 text-gray-400 text-sm font-medium">
                    Academic Journey
                 </div>
            </div>
            <Education />
        </div>

      </div>
    </section>
  );
};

export default About;