import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import educationData from "../data/education.json"; // 👈 এখান থেকে ডাটা আসছে

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="text-purple-600" size={40} />
            My <span className="text-gradient-animate font-extrabold">Education</span>
          </h2>
          <div className="w-20 h-1 btn-gradient-animate mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-purple-200 dark:border-purple-900/30 ml-4 md:ml-6 space-y-12">
          
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-purple-600 border-4 border-white dark:border-dark shadow-lg"></span>

              {/* Content Card */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {item.duration}
                  </div>
                </div>

                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {item.institution}
                </h4>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <MapPin size={16} />
                  {item.location}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;