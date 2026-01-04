// src/components/Hero.jsx
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Facebook } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-dark dark:to-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-2">
            Hello, I am
          </h3>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Md. Shishir Kaysar <span className="text-primary">Shuvon</span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-8">
            I am a{" "}
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Open Source Contributor",
                2000,
                "GNOME Developer",
                2000,
                "Linux Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-8 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            A passionate developer from <span className="font-semibold text-gray-800 dark:text-gray-200">MBSTU (ICT)</span> building scalable web applications and contributing to the open-source ecosystem. Specialized in MERN Stack and Linux environments.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <SocialLink href="https://github.com/shuv-on" icon={<Github />} />
            <SocialLink href="https://linkedin.com/in/shishir-kaysar-shuvon" icon={<Linkedin />} />
            <SocialLink href="mailto:mdshishirkaysarshuvon.ict.mbstu@gmail.com" icon={<Mail />} />
            <SocialLink href="https://facebook.com/yourusername" icon={<Facebook />} />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="/resume.pdf" 
              download 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <Download size={20} /> Download Resume
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image with Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
            {/* Background Blob Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              
              <img 
                src="https://avatars.githubusercontent.com/u/148075201?s=400&u=7cd701c7daaed0b8d9610df6ec499c96e677d995&v=4" 
                alt="Shishir Kaysar Shuvon" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Social Link Component
const SocialLink = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
    >
      {icon}
    </a>
  );
};

export default Hero;