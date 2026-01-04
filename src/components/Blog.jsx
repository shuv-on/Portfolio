import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Share2, ArrowRight, X } from "lucide-react";
import blogsData from "../data/blogs.json";

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest 
            {/* Animated Gradient Text */}
            <span className="text-gradient-animate font-extrabold ml-2">Articles</span>
          </h2>
          {/* Animated Gradient Underline */}
          <div className="w-20 h-1 btn-gradient-animate mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Thoughts, tutorials, and milestones from my developer journey.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogsData.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ blog, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: blog.link || window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(blog.link || window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <Calendar size={16} className="text-purple-500" />
          <span>{blog.date}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
          {blog.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between mt-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-1 font-bold transition-all"
          >
            {/* Animated Gradient on Read More */}
            <span className="text-gradient-animate">Read More</span>
            <ArrowRight size={16} className="text-purple-600 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleShare}
            className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-full transition-colors"
            title="Share"
          >
            <Share2 size={18} />
          </button>
        </div>
      </motion.div>

      {/* Modal for Full Post */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl p-6 relative custom-scrollbar border border-gray-100 dark:border-gray-800"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-red-500 bg-gray-100 dark:bg-gray-800 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                 {/* Gradient Label */}
                 <span className="text-gradient-animate text-sm font-extrabold tracking-wider uppercase">Blog Post</span>
                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">{blog.title}</h2>
                 <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 flex items-center gap-2">
                    <Calendar size={14} /> {blog.date}
                 </p>
              </div>

              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {blog.content}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
                 {blog.tags.map((tag, i) => (
                    // Gradient Text in Tags
                    <span key={i} className="px-3 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs rounded-full font-medium">
                      <span className="text-gradient-animate">#{tag}</span>
                    </span>
                 ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;