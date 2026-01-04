// src/components/About.jsx
import { motion } from "framer-motion";
import { Code2, Terminal, Cpu, Globe } from "lucide-react";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image / Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
             {/* এখানে আমরা কোডিং বা ওয়ার্কস্পেস রিলেটেড একটি ছবি দেব। আপনি চাইলে আপনার নিজের অন্য একটি ছবিও দিতে পারেন */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coding Setup" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium">Building scalable solutions & exploring Linux internals.</p>
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
              Aspiring Software Engineer & Linux Enthusiast
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am currently pursuing a Bachelor's degree in <span className="text-primary font-semibold">ICT at MBSTU</span>. My passion lies in exploring the Linux ecosystem, contributing to open-source projects, and architecting efficient software solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              With a strong foundation in <span className="text-primary">C, C++, Java, and Python</span>, I actively solve complex algorithmic problems on platforms like LeetCode and CodeForces. I am also the developer of the "QR Drop" Gnome Extension.
            </p>

            {/* Interest Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard 
                icon={<Code2 className="text-primary" />}
                title="Full Stack Dev"
                desc="MERN Stack & Next.js"
              />
              <FeatureCard 
                icon={<Terminal className="text-primary" />}
                title="Linux & Open Source"
                desc="Arch, Ubuntu Gnome Extensions"
              />
              <FeatureCard 
                icon={<Cpu className="text-primary" />}
                title="Problem Solving"
                desc="DSA & Algorithms"
              />
              <FeatureCard 
                icon={<Globe className="text-primary" />}
                title="Tech Enthusiast"
                desc="Always learning new tech"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Small Card Component for Clean Code
const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{title}</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
    </div>
  </div>
);

export default About;