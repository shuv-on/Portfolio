import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Copy, Check, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const myEmail = "mdshishirkaysarshuvon.ict.mbstu@gmail.com"; // আপনার ইমেইল এখানে দিন

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-gradient-animate font-extrabold">Touch</span>
          </h2>
          <div className="w-20 h-1 btn-gradient-animate mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Let's talk about everything!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Don't like forms? Send me an email directly. 👋
            </p>

            {/* Email Card with Copy Feature */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-purple-600">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mail me at</p>
                    <p className="text-gray-900 dark:text-white font-medium text-lg">{myEmail}</p>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 text-gray-400 hover:text-purple-600 transition-colors relative"
                    title="Copy Email"
                  >
                    {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                  </button>
               </div>
            </div>

            {/* Location & Socials */}
            <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                   <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-full text-blue-600">
                     <MapPin size={24} />
                   </div>
                   <span>Dhaka, Bangladesh</span>
                </div>

                <div className="flex gap-4 pt-4">
                  {[
                    { icon: Github, link: "https://github.com/shuv-on", color: "hover:text-gray-900 dark:hover:text-white" },
                    { icon: Linkedin, link: "https://linkedin.com/in/shishir-kaysar-shuvon", color: "hover:text-blue-600" },
                    { icon: Twitter, link: "https://x.com/_Shuvon", color: "hover:text-sky-500" }
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-50 dark:bg-gray-900 rounded-full text-gray-500 dark:text-gray-400 transition-all hover:scale-110 shadow-sm ${social.color}`}
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none dark:text-white"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSending || isSent}
                className="w-full py-4 rounded-xl text-white font-bold text-lg btn-gradient-animate shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSending ? (
                  "Sending..."
                ) : isSent ? (
                  <>Sent Successfully <Check size={20} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;