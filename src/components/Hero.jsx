import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Facebook } from "lucide-react";

const Hero = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-dark dark:to-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        
        {/* Left Side: Content */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left"
        >
          <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-2">
            Hello, I am
          </motion.h3>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Md. Shishir Kaysar <br className="md:hidden" />
            {/* Animated Gradient Name */}
            <span className="text-gradient-animate font-extrabold ml-2 md:ml-0 inline-block">
              Shuvon
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-8 flex flex-wrap justify-center md:justify-start gap-2">
            <span>I am a</span>
            {/* Animated Gradient Type Animation */}
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Open Source Contributor",
                2000,
                "GNOME Extension Developer",
                2000,
                "Linux Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient-animate font-bold"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-8 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            A passionate developer from <span className="font-semibold text-gray-800 dark:text-gray-200">MBSTU (ICT)</span> building scalable web applications and contributing to the open-source ecosystem. Specialized in MERN Stack and Linux environments.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-4 mb-8">
            <SocialLink href="https://github.com/shuv-on" icon={<Github />} delay={0} />
            <SocialLink href="https://linkedin.com/in/shishir-kaysar-shuvon" icon={<Linkedin />} delay={0.1} />
            <SocialLink href="mailto:mdshishirkaysarshuvon.ict.mbstu@gmail.com" icon={<Mail />} delay={0.2} />
            <SocialLink href="https://facebook.com/yourusername" icon={<Facebook />} delay={0.3} />
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="https://docs.google.com/document/d/12Gw0do2pUtKdyrWKvJ2GDbyMcw-pK2ntwmilGEwA6dA/export?format=pdf" 
              download 
              // 👇 Animated Gradient Button Class Added Here
              className="px-8 py-3 text-white btn-gradient-animate rounded-full font-medium shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <Download size={20} /> Download Resume
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <div className="flex-1 relative">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative w-64 h-64 md:w-96 md:h-96 mx-auto"
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Floating Image */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
            >
              <img 
                src="https://avatars.githubusercontent.com/u/148075201?s=400&u=7cd701c7daaed0b8d9610df6ec499c96e677d995&v=4" 
                alt="Shishir Kaysar Shuvon" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, delay }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 + delay }}
      className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
    >
      {icon}
    </motion.a>
  );
};

export default Hero;